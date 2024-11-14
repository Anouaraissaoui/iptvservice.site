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
  modifiedTime = lastModified,
  locale = 'en_US',
  imageAlt,
  articleSection,
  wordCount
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
      <title>{title}</title>
      <html lang={locale.split('_')[0]} itemScope itemType="https://schema.org/WebPage" />
      
      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
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
        if (tag.rel === 'canonical') {
          return <link key={index} rel="canonical" href={canonicalUrl} />;
        }
        if (tag.rel) {
          return <link key={index} rel={tag.rel} href={tag.href} />;
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
      
      {/* Preload Critical Resources */}
      <link 
        rel="preload" 
        href="/fonts/inter-var.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      <link 
        rel="preload" 
        href="/images/IPTV-Service.webp" 
        as="image" 
        type="image/webp" 
        fetchPriority="high" 
      />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {schemaString}
      </script>
    </Helmet>
  );
};