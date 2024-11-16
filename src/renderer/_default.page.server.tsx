import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { QueryClient } from '@tanstack/react-query';
import App from '../App';
import { generateMetaTags, generatePreloadTags } from '../utils/ssr';

export { render };

async function render(pageContext: any) {
  const queryClient = new QueryClient();
  const { url } = pageContext;

  const app = renderToString(
    <App dehydratedState={queryClient.getQueryData([])} />
  );

  const preloadResources = [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: true },
    { href: '/images/IPTV-Service.webp', as: 'image', type: 'image/webp' }
  ];

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(generatePreloadTags(preloadResources))}
        ${dangerouslySkipEscape(generateMetaTags(url, 'IPTV Service', 'Description', new Date().toISOString()))}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(app)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      dehydratedState: queryClient.getQueryData([])
    }
  };
}