import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url: string, queryClient: QueryClient) {
  const helmetContext = {};
  
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <App dehydratedState={queryClient.getQueryData([])} />
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return { html, helmetContext };
}