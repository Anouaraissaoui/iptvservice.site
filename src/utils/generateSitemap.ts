import { writeFileSync } from 'fs';
import { resolve } from 'path';

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: Array<{
    loc: string;
    title: string;
    caption?: string;
  }>;
}

const generateSitemapXML = (urls: SitemapURL[]): string => {
  const xmlUrls = urls
    .map(
      ({ loc, lastmod, changefreq, priority, images }) => `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority ? `<priority>${priority}</priority>` : ''}
    ${images?.map(image => `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      ${image.caption ? `<image:caption>${image.caption}</image:caption>` : ''}
    </image:image>`).join('') || ''}
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${xmlUrls}
</urlset>`;
};

export const generateSitemap = async (domain: string, urls: SitemapURL[]) => {
  try {
    // Enhanced validation for dynamic URLs
    const validUrls = await Promise.all(
      urls.map(async (url) => {
        try {
          const fullUrl = `${domain}${url.loc}`;
          const response = await fetch(fullUrl);
          
          // Only include URLs that return successful status codes
          if (response.ok) {
            return {
              ...url,
              lastmod: url.lastmod || new Date().toISOString(),
              changefreq: url.changefreq || 'weekly',
              priority: url.priority || 0.8
            };
          }
          console.warn(`URL validation failed for: ${fullUrl}`);
          return null;
        } catch (error) {
          console.warn(`Error validating URL: ${url.loc}`, error);
          return null;
        }
      })
    );

    const filteredUrls = validUrls.filter((url): url is SitemapURL => url !== null);
    const sitemap = generateSitemapXML(
      filteredUrls.map((url) => ({
        ...url,
        loc: `${domain}${url.loc}`,
      }))
    );

    writeFileSync(resolve(process.cwd(), 'public', 'sitemap.xml'), sitemap);
    console.log(`Sitemap generated successfully with ${filteredUrls.length} valid URLs`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
};