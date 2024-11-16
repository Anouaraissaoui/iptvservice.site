import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { Request, Response } from 'express';
import compression from 'compression';
import sirv from 'sirv';
import { QueryClient } from '@tanstack/react-query';
import { render, preload } from './entry-server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const resolve = (p: string) => path.resolve(__dirname, p);

// Simple in-memory cache implementation
const cache = new Map<string, { html: string; timestamp: number, etag: string }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

const isCacheValid = (timestamp: number) => {
  return Date.now() - timestamp < CACHE_TTL;
};

async function createServer() {
  const app = express();
  
  // Enable gzip compression
  app.use(compression());

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
        appType: 'custom'
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  // Handle all routes
  const handleRequest = async (req: Request, res: Response) => {
    try {
      const url = req.originalUrl;
      
      // Check cache first
      const cached = cache.get(url);
      if (cached && isCacheValid(cached.timestamp)) {
        res.setHeader('ETag', cached.etag);
        return res.send(cached.html);
      }

      // Create a new query client for each request
      const queryClient = await preload(url);
      
      // Render the app
      const { html: appHtml, helmetContext } = await render(url, queryClient);
      
      // Get head tags from Helmet
      const { helmet } = helmetContext as any;
      
      // Read the index.html template
      let template = fs.readFileSync(
        isProduction ? 'dist/client/index.html' : 'index.html',
        'utf-8'
      );

      // Inject the rendered app and meta tags
      const html = template
        .replace('<!--app-html-->', appHtml)
        .replace(
          '<!--head-tags-->',
          `${helmet.title.toString()}
           ${helmet.meta.toString()}
           ${helmet.link.toString()}`
        );

      // Cache the result
      const etag = Math.random().toString(36).substring(2);
      cache.set(url, {
        html,
        timestamp: Date.now(),
        etag
      });

      // Send the response
      res.setHeader('ETag', etag);
      res.setHeader('Cache-Control', 'no-cache');
      res.send(html);
    } catch (e) {
      console.error(e);
      res.status(500).send((e as Error).stack);
    }
  };

  app.get('*', handleRequest);

  return app;
}

createServer().then(app => {
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
});