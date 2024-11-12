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
  app.use(compression());

  if (isProduction) {
    app.use(sirv('dist/client', { extensions: [] }));
  } else {
    const vite = await import('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        server: { middlewareMode: true },
        appType: 'custom',
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

      const queryClient = new QueryClient();
      const { html: appHtml, helmetContext } = await render(url, queryClient);
      const { helmet } = helmetContext as any;

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

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
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