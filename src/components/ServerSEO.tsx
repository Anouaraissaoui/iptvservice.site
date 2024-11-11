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
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Core Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#0F172A" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* SEO Meta Tags */}
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

      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
    </Helmet>
  );
};