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
}

export interface BreadcrumbItem {
  name: string;
  item: string;
  position: number;
}