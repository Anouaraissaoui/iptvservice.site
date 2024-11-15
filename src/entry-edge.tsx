import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { generateMetaTags, generatePreloadTags } from './utils/ssr';

export const config = {
  runtime: 'edge'
};

export default async function handler(req: Request) {
  try {
    const url = new URL(req.url);
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

    const helmetContext = {};
    const html = renderToString(
      <HelmetProvider context={helmetContext}>
        <QueryClientProvider client={queryClient}>
          <StaticRouter location={url.pathname}>
            <App dehydratedState={queryClient.getQueryData([])} />
          </StaticRouter>
        </QueryClientProvider>
      </HelmetProvider>
    );

    const { helmet } = helmetContext as any;

    const preloadTags = generatePreloadTags([
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: true },
      { href: '/images/IPTV-Service.webp', as: 'image', type: 'image/webp' }
    ]);

    const metaTags = generateMetaTags(
      url.href,
      helmet.title.toString(),
      helmet.meta.toString(),
      new Date().toISOString()
    );

    const template = `<!DOCTYPE html>
<html lang="en">
<head>
  ${preloadTags}
  ${metaTags}
  <link rel="stylesheet" href="/src/index.css">
</head>
<body>
  <div id="root">${html}</div>
  <script>window.__INITIAL_DATA__ = ${JSON.stringify(queryClient.getQueryData([]))}</script>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;

    return new Response(template, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
      }
    });
  } catch (error) {
    console.error('Edge function error:', error);
    return new Response('Server Error', { status: 500 });
  }
}