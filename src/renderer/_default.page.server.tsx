import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { QueryClient } from '@tanstack/react-query';
import App from '../App';
import { generateMetaTags, generatePreloadTags } from '../utils/ssr';
import { generateStructuredData } from '../utils/structuredData';

export { render };
export { prerender };

// Enable static site generation
export const passToClient = ['pageProps', 'dehydratedState'];

// Define which routes to prerender
export async function prerender() {
  return [
    '/',
    '/features',
    '/pricing',
    '/blog',
    '/contact',
    '/free-trial',
    '/troubleshooting',
    '/blog/usa-iptv-guide',
    '/blog/installation-guide'
  ];
}

async function render(pageContext: any) {
  const { url, routeParams } = pageContext;
  const queryClient = new QueryClient();

  // Pre-fetch any data needed for SEO
  await queryClient.prefetchQuery({
    queryKey: ['seoData', url],
    queryFn: async () => {
      // Add your data fetching logic here
      return {};
    }
  });

  const app = renderToString(
    <App dehydratedState={queryClient.getQueryData([])} />
  );

  // Generate structured data based on the route
  const structuredData = generateStructuredData({
    title: 'IPTV Service',
    description: 'Premium IPTV streaming service with 18,000+ channels',
    canonical: `https://www.iptvservice.site${url}`,
    type: 'website'
  });

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
        ${dangerouslySkipEscape(generateMetaTags(
          url,
          'IPTV Service - Premium Streaming Experience',
          'Access 18,000+ live channels in HD & 4K quality with our premium IPTV service.',
          new Date().toISOString()
        ))}
        <script type="application/ld+json">
          ${dangerouslySkipEscape(JSON.stringify(structuredData))}
        </script>
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