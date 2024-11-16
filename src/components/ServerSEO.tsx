import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData } from '@/types/seo';
import { getMetaTags, generateDynamicSchema } from '@/utils/seo';

export const ServerSEO = ({ 
  title, 
  description, 
  canonical = "https://www.iptvservice.site/",
  ogImage = "https://www.iptvservice.site/Buy-IPTV.jpg",
  structuredData,
  lastModified = new Date().toISOString(),
  type = 'website',
  keywords = "buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV",
  author = "IPTV Service",
  alternates,
  publishedTime,
  modifiedTime = lastModified,
  locale = 'en_US',
  imageAlt,
  articleSection,
  wordCount
}: SEOData) => {
  const [isServer, setIsServer] = useState(true);
  const baseUrl = "https://www.iptvservice.site";
  const canonicalUrl = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical.endsWith('/') ? canonical : `${canonical}/`}`;

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
    type,
    imageAlt,
    articleSection,
    wordCount,
    locale
  });

  const dynamicSchema = generateDynamicSchema({
    title,
    description,
    canonical: canonicalUrl,
    ogImage,
    type,
    publishedTime,
    modifiedTime,
    imageAlt,
    articleSection,
    wordCount
  });

  const schemaString = typeof structuredData === 'string' 
    ? structuredData 
    : JSON.stringify(structuredData || dynamicSchema);

  return (
    <Helmet prioritizeSeoTags={true}>
      <html lang={locale.split('_')[0]} itemScope itemType="https://schema.org/WebPage" />
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Meta Tags */}
      {metaTags.map((tag, index) => {
        if (tag.rel === 'preload') {
          return (
            <link 
              key={index}
              rel={tag.rel}
              href={tag.href}
              as={tag.as}
              type={tag.type}
              crossOrigin={tag.crossOrigin as 'anonymous' | 'use-credentials' | '' | undefined}
            />
          );
        }
        return <meta key={index} {...tag} />;
      })}
      
      {/* Language Alternates */}
      {alternates && Object.entries(alternates).map(([lang, url]) => (
        <link 
          key={lang} 
          rel="alternate" 
          href={url.startsWith('http') ? url : `${baseUrl}${url}`}
          hrefLang={lang} 
        />
      ))}
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {schemaString}
      </script>
    </Helmet>
  );
};