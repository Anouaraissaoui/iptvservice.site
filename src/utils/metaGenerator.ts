interface MetaConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  locale?: string;
  imageAlt?: string;
}

const DEFAULT_META = {
  title: 'Buy IPTV Subscription | Best IPTV Service Provider 2025',
  description: 'Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support.',
  keywords: 'buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA',
  ogImage: 'https://www.iptvservice.site/Buy-IPTV.jpg',
  canonical: 'https://www.iptvservice.site',
  type: 'website' as const,
  author: 'IPTV Service',
  locale: 'en_US',
  imageAlt: 'IPTV Service - Premium Streaming Solution'
};

export const generateMetaInfo = (config: MetaConfig = {}) => {
  const meta = { ...DEFAULT_META, ...config };
  const baseUrl = 'https://www.iptvservice.site';
  const canonicalUrl = meta.canonical?.startsWith('http') ? meta.canonical : `${baseUrl}${meta.canonical}`;

  return {
    title: meta.title,
    meta: [
      { name: 'description', content: meta.description },
      { name: 'keywords', content: meta.keywords },
      { name: 'author', content: meta.author },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:image', content: meta.ogImage },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: meta.type },
      { property: 'og:locale', content: meta.locale },
      { property: 'og:image:alt', content: meta.imageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: meta.ogImage },
      ...(meta.publishedTime ? [{ property: 'article:published_time', content: meta.publishedTime }] : []),
      ...(meta.modifiedTime ? [{ property: 'article:modified_time', content: meta.modifiedTime }] : []),
      ...(meta.section ? [{ property: 'article:section', content: meta.section }] : [])
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  };
};

export const generateStructuredData = (config: MetaConfig = {}) => {
  const meta = { ...DEFAULT_META, ...config };
  const baseUrl = 'https://www.iptvservice.site';

  return {
    '@context': 'https://schema.org',
    '@type': meta.type === 'article' ? 'Article' : meta.type === 'product' ? 'Product' : 'WebPage',
    headline: meta.title,
    description: meta.description,
    image: meta.ogImage,
    url: `${baseUrl}${meta.canonical}`,
    datePublished: meta.publishedTime || new Date().toISOString(),
    dateModified: meta.modifiedTime || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: meta.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'IPTV Service',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.svg`
      }
    }
  };
};