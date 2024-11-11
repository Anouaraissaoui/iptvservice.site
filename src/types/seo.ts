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
}

export interface PreloadResource {
  href: string;
  as: 'script' | 'style' | 'font' | 'image';
  type?: string;
  crossOrigin?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}