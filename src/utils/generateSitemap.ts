import { writeFileSync } from 'fs';
import { resolve } from 'path';

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const generateSitemapXML = (urls: SitemapURL[]): string => {
  const xmlUrls = urls
    .map(
      ({ loc, lastmod, changefreq, priority }) => `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority ? `<priority>${priority}</priority>` : ''}
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
};

export const generateSitemap = (domain: string, urls: SitemapURL[]) => {
  const sitemap = generateSitemapXML(
    urls.map((url) => ({
      ...url,
      loc: `${domain}${url.loc}`,
    }))
  );

  writeFileSync(resolve(process.cwd(), 'public', 'sitemap.xml'), sitemap);
};