import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import { renderPage } from 'vite-plugin-ssr/server';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// Enable compression
app.use(compression());

// Serve static files
if (isProduction) {
  app.use(sirv('dist/client', { 
    maxAge: 31536000,
    immutable: true,
    gzip: true,
    brotli: true,
    dev: false
  }));
}

// Handle all requests
app.get('*', async (req, res) => {
  try {
    const pageContextInit = {
      urlOriginal: req.originalUrl
    };
    
    const pageContext = await renderPage(pageContextInit);
    
    if (!pageContext.httpResponse) {
      res.status(404).send('Not Found');
      return;
    }
    
    const { body, statusCode, contentType, headers } = pageContext.httpResponse;
    
    // Set SEO-related headers
    res.setHeader('X-Robots-Tag', 'index, follow');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Set response headers
    headers?.forEach(([name, value]) => res.setHeader(name, value));
    
    res.status(statusCode).type(contentType).send(body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;