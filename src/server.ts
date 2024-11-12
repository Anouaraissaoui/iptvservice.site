import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import { QueryClient } from '@tanstack/react-query';
import { render } from './entry-server';
import { generateMetaTags, generatePreloadTags } from './utils/ssr';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const resolve = (p: string) => path.resolve(__dirname, p);

async function createServer() {
  const app = express();
  
  // Enable Brotli/Gzip compression
  app.use(compression());

  // Serve static assets with aggressive caching
  if (isProduction) {
    app.use(sirv('dist/client', { 
      maxAge: 31536000, // 1 year
      immutable: true,
      gzip: true,
      brotli: true,
      dev: false
    }));
  } else {
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
  }

  // Handle all routes
  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      const template = fs.readFileSync(
        resolve('index.html'),
        'utf-8'
      );

      // Initialize QueryClient with optimized settings
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

      // Generate critical resources preload tags
      const preloadTags = generatePreloadTags([
        { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: true },
        { href: '/images/IPTV-Service.webp', as: 'image', type: 'image/webp' }
      ]);

      // Render the app
      const { html: appHtml, helmetContext } = await render(url, queryClient);
      const { helmet } = helmetContext as any;

      // Set appropriate headers
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
      
      // Generate meta tags for SEO
      const metaTags = generateMetaTags(
        `https://www.iptvservice.site${url}`,
        helmet.title.toString(),
        helmet.meta.toString(),
        new Date().toISOString()
      );

      // Stream the response for better TTFB
      const stream = new ReadableStream({
        start(controller) {
          const chunks = template
            .replace('</head>', `${preloadTags}${metaTags}</head>`)
            .replace(
              '<div id="root"></div>',
              `<div id="root">${appHtml}</div><script>window.__INITIAL_DATA__ = ${JSON.stringify(
                queryClient.getQueryData([])
              )}</script>`
            )
            .split('\n');

          chunks.forEach(chunk => {
            controller.enqueue(new TextEncoder().encode(chunk + '\n'));
          });
          controller.close();
        }
      });

      const readable = new Response(stream).body;
      readable?.pipeTo(new WritableStream({
        write(chunk) {
          res.write(chunk);
        },
        close() {
          res.end();
        }
      }));
    } catch (e) {
      console.error(e);
      res.status(500).end((e as Error).stack);
    }
  });

  return app;
}

createServer().then(app => {
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
});