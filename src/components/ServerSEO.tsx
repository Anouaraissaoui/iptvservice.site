import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface ServerSEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  lastModified?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string;
  author?: string;
  alternateUrls?: Record<string, string>;
}

export const ServerSEO = ({ 
  title, 
  description, 
  canonical = "https://www.iptvservice.site",
  ogImage = "https://www.iptvservice.site/Buy-IPTV.jpg",
  structuredData,
  lastModified = new Date().toISOString(),
  type = 'website',
  keywords,
  author = "IPTV Service",
  alternateUrls
}: ServerSEOProps) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  const fullStructuredData = {
    ...structuredData,
    "@context": "https://schema.org",
    "dateModified": lastModified,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.iptvservice.site/#website"
    }
  };

  return (
    <Helmet prioritizeSeoTags={true}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="IPTV Service" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Technical */}
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta property="article:modified_time" content={lastModified} />
      <meta httpEquiv="last-modified" content={lastModified} />
      
      {/* Language Alternates */}
      {alternateUrls && Object.entries(alternateUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      <script type="application/ld+json">
        {JSON.stringify(fullStructuredData)}
      </script>
    </Helmet>
  );
};