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
  structuredData?: object;
  alternates?: {
    [key: string]: string;
  };
  breadcrumbs?: Array<{
    name: string;
    path: string;
  }>;
}