import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import { renderPage } from 'vite-plugin-ssr/server';
import { QueryClient } from '@tanstack/react-query';
import { generateMetaTags, generatePreloadTags } from './utils/ssr';

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
    const pageContextInit = { 
      url,
      urlOriginal: url
    };
    
    // Check cache in production
    if (isProduction) {
      const cached = cache.get(url);
      if (cached && isCacheValid(cached.timestamp)) {
        res.setHeader('ETag', cached.etag);
        res.setHeader('Cache-Control', 'public, max-age=300');
        return res.send(cached.html);
      }
    }

    const pageContext = await renderPage(pageContextInit);
    
    if (!pageContext.httpResponse) {
      return res.status(404).send('Not Found');
    }
    
    const { body, statusCode, contentType } = pageContext.httpResponse;

    // Cache the response in production
    if (isProduction) {
      const etag = Math.random().toString(36).substring(7);
      cache.set(url, {
        html: body,
        timestamp: Date.now(),
        etag
      });
      res.setHeader('ETag', etag);
      res.setHeader('Cache-Control', 'public, max-age=300');
    }

    return res.status(statusCode).type(contentType).send(body);
    
  } catch (e) {
    console.error(e);
    return res.status(500).send((e as Error).stack);
  }
};

const createServer = async () => {
  const app = express();
  await configureServer(app);
  app.get('*', handleRender);
  return app;
};

createServer().then(app => {
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
});
