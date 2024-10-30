export interface BreadcrumbItem {
  name: string;
  path: string;
  position?: number;
}

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  type?: 'website' | 'article' | 'product' | 'blog';
  structuredData?: StructuredData;
  breadcrumbs?: BreadcrumbItem[];
  alternateLanguages?: Record<string, string>;
}