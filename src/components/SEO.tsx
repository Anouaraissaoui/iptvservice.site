import { Helmet } from "react-helmet-async";
import { SEOData } from "@/types/seo";
import { generateMetaInfo, generateStructuredData } from "@/utils/metaGenerator";

export const SEO = ({
  title,
  description,
  canonical = "/",
  ogImage,
  noindex = false,
  keywords,
  author = "IPTV Service",
  publishedTime,
  modifiedTime = new Date().toISOString(),
  type = "website",
  structuredData,
  alternates,
  breadcrumbs,
  locale = "en_US",
  imageAlt,
  articleSection,
  wordCount
}: SEOData) => {
  const baseUrl = "https://www.iptvservice.site";
  const canonicalUrl = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`;
  
  const metaInfo = generateMetaInfo({
    title,
    description,
    canonical: canonicalUrl,
    ogImage,
    keywords,
    author,
    publishedTime,
    modifiedTime,
    type,
    locale
  });

  const schema = structuredData || generateStructuredData({
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

  return (
    <Helmet prioritizeSeoTags={true}>
      <html lang={locale.split('_')[0]} />
      <title>{metaInfo.title}</title>
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Core Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV"} />
      <meta name="author" content={author} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="IPTV Service" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {articleSection && <meta property="article:section" content={articleSection} />}
      
      {/* Canonical & Alternate Links */}
      {alternates && Object.entries(alternates).map(([lang, url]) => (
        <link 
          key={lang} 
          rel="alternate" 
          href={url.startsWith('http') ? url : `${baseUrl}${url}`}
          hrefLang={lang} 
        />
      ))}
      
      {/* No Index Directive */}
      {noindex && <meta name="robots" content="noindex,follow" />}
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};