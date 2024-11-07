import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface ServerSEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  lastModified?: string;
}

export const ServerSEO = ({ 
  title, 
  description, 
  canonical = "https://www.iptvservice.site",
  ogImage = "https://www.iptvservice.site/Buy-IPTV.jpg",
  structuredData,
  lastModified = new Date().toISOString()
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
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta property="article:modified_time" content={lastModified} />
      <meta httpEquiv="last-modified" content={lastModified} />
      <script type="application/ld+json">
        {JSON.stringify(fullStructuredData)}
      </script>
    </Helmet>
  );
};