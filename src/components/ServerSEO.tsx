import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData } from '@/types/seo';
import { getMetaTags, generateDynamicSchema } from '@/utils/seo';

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
  alternates,
  publishedTime,
  modifiedTime = lastModified
}: SEOData) => {
  const [isServer, setIsServer] = useState(true);
  const baseUrl = "https://www.iptvservice.site";
  const canonicalUrl = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;

  useEffect(() => {
    setIsServer(false);
  }, []);

  const metaTags = getMetaTags({
    title,
    description,
    canonical: canonicalUrl,
    ogImage,
    keywords,
    author,
    publishedTime,
    modifiedTime,
    type
  });

  const dynamicSchema = generateDynamicSchema({
    title,
    description,
    canonical: canonicalUrl,
    ogImage,
    type,
    publishedTime,
    modifiedTime
  });

  const schemaString = typeof structuredData === 'string' 
    ? structuredData 
    : JSON.stringify(structuredData || dynamicSchema);

  return (
    <Helmet prioritizeSeoTags={true}>
      <title>{title}</title>
      {metaTags.map((tag, index) => {
        if (tag.rel) {
          return <link key={index} {...tag} />;
        }
        return <meta key={index} {...tag} />;
      })}
      
      {/* Language Alternates */}
      {alternates && Object.entries(alternates).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/IPTV-Service.webp" as="image" type="image/webp" fetchPriority="high" />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {schemaString}
      </script>
    </Helmet>
  );
};