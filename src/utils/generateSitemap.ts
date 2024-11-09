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
    // Verify all URLs return 200 status before including them
    const validUrls = await Promise.all(
      urls.map(async (url) => {
        try {
          const response = await fetch(`${domain}${url.loc}`);
          return response.status === 200 ? url : null;
        } catch {
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
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};