import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface ServerSEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export const ServerSEO = ({ 
  title, 
  description, 
  canonical = "https://www.iptvservice.site",
  ogImage = "https://www.iptvservice.site/Buy-IPTV.jpg",
  structuredData 
}: ServerSEOProps) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  // Early return with critical SEO tags for server-side rendering
  if (isServer) {
    return (
      <Helmet prioritizeSeoTags={true}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    );
  }

  // Client-side will use the full SEO component
  return null;
}