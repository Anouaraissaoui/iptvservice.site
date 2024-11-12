import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import { QueryClient } from '@tanstack/react-query';
import { render } from './entry-server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const resolve = (p: string) => path.resolve(__dirname, p);

async function createServer() {
  const app = express();
  
  // Enable compression for all responses
  app.use(compression());

  // Cache static assets in production
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

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      const template = fs.readFileSync(
        resolve('index.html'),
        'utf-8'
      );

      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            cacheTime: 5 * 60 * 1000,
            retry: 1
          }
        }
      });

      const { html: appHtml, helmetContext } = await render(url, queryClient);
      const { helmet } = helmetContext as any;

      // Implement streaming for large HTML content
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
      
      const html = template
        .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
        .replace(
          '</head>',
          `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}</head>`
        )
        .replace(
          '</body>',
          `<script>window.__INITIAL_DATA__ = ${JSON.stringify(
            queryClient.getQueryData([])
          )}</script></body>`
        );

      res.status(200).end(html);
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