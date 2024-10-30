import { SEOConfig, MetaTag, StructuredData, BreadcrumbItem } from '@/types/seo';

export class SEOGenerator {
  private config: SEOConfig;
  private baseUrl: string = 'https://www.iptvservice.site';

  constructor(config: SEOConfig) {
    this.config = config;
  }

  private generateMetaTags(): MetaTag[] {
    const tags: MetaTag[] = [
      { name: 'description', content: this.config.description },
      { name: 'robots', content: this.config.noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large' },
      { property: 'og:title', content: this.config.title },
      { property: 'og:description', content: this.config.description },
      { property: 'og:type', content: this.config.type || 'website' },
      { property: 'og:url', content: `${this.baseUrl}${this.config.canonical || ''}` },
      { property: 'og:image', content: this.config.ogImage || `${this.baseUrl}/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: this.config.title },
      { name: 'twitter:description', content: this.config.description }
    ];

    if (this.config.keywords) {
      tags.push({ name: 'keywords', content: this.config.keywords });
    }

    if (this.config.author) {
      tags.push({ name: 'author', content: this.config.author });
    }

    return tags;
  }

  private generateBreadcrumbData(): StructuredData {
    if (!this.config.breadcrumbs?.length) return {} as StructuredData;

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': this.config.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        'position': item.position || index + 1,
        'name': item.name,
        'item': `${this.baseUrl}${item.path}`
      }))
    };
  }

  private generateWebsiteData(): StructuredData {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'url': this.baseUrl,
      'name': 'IPTV Service',
      'description': this.config.description,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${this.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  public generate() {
    return {
      title: this.config.title,
      metaTags: this.generateMetaTags(),
      structuredData: {
        website: this.generateWebsiteData(),
        breadcrumbs: this.generateBreadcrumbData(),
        custom: this.config.structuredData
      },
      canonical: this.config.canonical ? `${this.baseUrl}${this.config.canonical}` : this.baseUrl,
      alternateLanguages: this.config.alternateLanguages
    };
  }
}

export const createSEO = (config: SEOConfig) => new SEOGenerator(config).generate();