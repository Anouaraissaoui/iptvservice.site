import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import { QueryClient } from '@tanstack/react-query';
import { render } from './entry-server';
import { generateMetaTags, generatePreloadTags } from './utils/ssr';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const resolve = (p: string) => path.resolve(__dirname, p);

// Simple in-memory cache implementation
const cache = new Map<string, { html: string; timestamp: number, etag: string }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

const isCacheValid = (timestamp: number) => {
  return Date.now() - timestamp < CACHE_TTL;
};

const configureServer = (app: express.Application) => {
  app.use(compression());
  
  if (isProduction) {
    app.use(sirv('dist/client', { 
      maxAge: 31536000,
      immutable: true,
      gzip: true,
      brotli: true,
      dev: false
    }));
    return app;
  }
  
  return configureDevServer(app);
};

const configureDevServer = async (app: express.Application) => {
  const vite = await import('vite');
  const viteDevMiddleware = (
    await vite.createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom']
      }
    })
  ).middlewares;
  app.use(viteDevMiddleware);
  return app;
};

const handleRender = async (req: express.Request, res: express.Response) => {
  try {
    const url = req.originalUrl;
    
    // Check cache first with ETag support
    const cachedResponse = cache.get(url);
    if (cachedResponse && isCacheValid(cachedResponse.timestamp)) {
      const clientETag = req.headers['if-none-match'];
      if (clientETag === cachedResponse.etag) {
        res.status(304).end();
        return;
      }
      
      res.setHeader('X-Cache', 'HIT');
      res.setHeader('ETag', cachedResponse.etag);
      res.setHeader('Content-Type', 'text/html');
      res.send(cachedResponse.html);
      return;
    }
    
    const template = fs.readFileSync(resolve('index.html'), 'utf-8');
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
          gcTime: 5 * 60 * 1000,
          retry: 1,
          refetchOnWindowFocus: false
        }
      }
    });

    const { html: appHtml, helmetContext } = await render(url, queryClient);
    const { helmet } = helmetContext as any;
    
    const etag = crypto.createHash('md5').update(appHtml).digest('hex');
    
    const preloadResources = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: true },
      { href: '/images/IPTV-Service.webp', as: 'image', type: 'image/webp' }
    ];

    const html = template
      .replace('</head>', `${generatePreloadTags(preloadResources)}${generateMetaTags(url, helmet.title || '', helmet.description || '', new Date().toISOString())}</head>`)
      .replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div><script>window.__INITIAL_DATA__ = ${JSON.stringify(
          queryClient.getQueryData([])
        )}</script>`
      );

    // Cache the response with ETag
    cache.set(url, {
      html,
      etag,
      timestamp: Date.now()
    });

    res.setHeader('X-Cache', 'MISS');
    res.setHeader('ETag', etag);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(html);
    
  } catch (e) {
    console.error(e);
    res.status(500).end((e as Error).stack);
  }
};

const createServer = async () => {
  const app = express();
  await configureServer(app);
  app.use('*', handleRender);
  return app;
};

createServer().then(app => {
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
});
