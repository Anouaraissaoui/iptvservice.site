export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  type?: 'website' | 'article' | 'product' | 'video' | 'blog' | 'organization';
  structuredData?: string | Record<string, any>;
  alternates?: {
    [key: string]: string;
  };
  breadcrumbs?: Array<BreadcrumbItem>;
  lastModified?: string;
  isAmp?: boolean;
  ampUrl?: string;
  nofollow?: boolean;
  locale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  fbAppId?: string;
  section?: string;
  published?: boolean;
  tags?: string[];
  category?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
  position: number;
  item: string;
}

export interface MetaTag {
  name?: string;
  property?: string;
  content?: string;
  rel?: string;
  href?: string;
  httpEquiv?: string;
}

export interface PreloadResource {
  href: string;
  as: 'script' | 'style' | 'font' | 'image';
  type?: string;
  crossOrigin?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}