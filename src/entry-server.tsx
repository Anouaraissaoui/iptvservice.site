import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export async function render(url: string, queryClient: QueryClient) {
  const helmetContext = {};
  
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

export async function preload(url: string) {
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
  
  // Add data prefetching logic here based on route
  // Example:
  // if (url.startsWith('/blog')) {
  //   await queryClient.prefetchQuery(['posts'], fetchPosts);
  // }
  
  return queryClient;
}