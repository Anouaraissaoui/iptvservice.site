import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url: string, queryClient: QueryClient) {
  const helmetContext = {};
  
  // Use renderToString for initial fast page load
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <QueryClientProvider client={queryClient}>
          <StaticRouter location={url}>
            <App dehydratedState={queryClient.getQueryData([])} />
          </StaticRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );

  return { html, helmetContext };
}

// Preload critical data
export async function preload(url: string) {
  const queryClient = new QueryClient();
  
  // Add your data prefetching logic here
  // Example:
  // if (url.startsWith('/blog')) {
  //   await queryClient.prefetchQuery(['posts'], fetchPosts);
  // }
  
  return queryClient;
}