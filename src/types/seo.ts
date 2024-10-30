export interface StructuredData {
  '@context': 'https://schema.org';
  '@type': string;
  '@id'?: string;
  name?: string;
  description?: string;
  url?: string;
  [key: string]: any;
}

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
  type?: 'website' | 'article' | 'product' | 'blog';
  structuredData?: StructuredData;
  alternates?: {
    [key: string]: string;
  };
  breadcrumbs?: Array<{
    name: string;
    path: string;
  }>;
}