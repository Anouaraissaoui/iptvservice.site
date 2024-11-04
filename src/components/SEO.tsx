import { Helmet } from "react-helmet-async";
import { SEOData } from "@/types/seo";

export const SEO = ({
  title,
  description,
  canonical = "https://www.iptvservice.site",
  ogImage = "https://www.iptvservice.site/og-image.jpg",
  noindex = false,
  keywords,
  author = "IPTV Service",
  publishedTime,
  modifiedTime = new Date().toISOString(),
  type = "website",
  structuredData,
  alternates,
  breadcrumbs,
}: SEOData) => {
  const baseUrl = "https://www.iptvservice.site";
  const currentYear = new Date().getFullYear();
  
  const breadcrumbData = breadcrumbs ? {
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path}`
    }))
  } : null;

  const fullStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      structuredData,
      breadcrumbData,
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": `IPTV Service - Premium Streaming ${currentYear}`,
        "description": "Premium IPTV Streaming Service",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ].filter(Boolean)
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={`IPTV Service ${currentYear}`} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@iptvservice" />
      <meta name="twitter:creator" content="@iptvservice" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Language Alternates */}
      {alternates && Object.entries(alternates).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={`${baseUrl}${url}`} />
      ))}

      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#0F172A" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(fullStructuredData)}
      </script>
    </Helmet>
  );
};