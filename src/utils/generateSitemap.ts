import { writeFileSync } from 'fs';
import { resolve } from 'path';

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
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
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
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

export const generateSitemap = async (domain: string) => {
  try {
    const defaultUrls: SitemapURL[] = [
      {
        loc: '/',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0,
        images: [{
          loc: `${domain}/images/IPTV-Service.webp`,
          title: 'Premium IPTV Service'
        }]
      },
      {
        loc: '/pricing',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9,
        images: [{
          loc: `${domain}/images/Buy-IPTV.jpg`,
          title: 'IPTV Subscription Plans'
        }]
      },
      {
        loc: '/features',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
        images: [{
          loc: `${domain}/images/IPTV-Subscription.webp`,
          title: 'IPTV Features'
        }]
      },
      {
        loc: '/blog',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.8
      },
      {
        loc: '/contact',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7
      }
    ];

    const sitemap = generateSitemapXML(defaultUrls.map(url => ({
      ...url,
      loc: `${domain}${url.loc}`
    })));

    writeFileSync(resolve(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};