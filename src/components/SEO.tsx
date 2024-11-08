import { Helmet } from "react-helmet-async";
import { SEOData } from "@/types/seo";

export const SEO = ({
  title,
  description,
  canonical = "https://www.iptvservice.site",
  ogImage = "https://www.iptvservice.site/Buy-IPTV.jpg",
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
        "description": description,
        "publisher": {
          "@type": "Organization",
          "name": "IPTV Service",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.svg`,
            "width": 180,
            "height": 60
          }
        },
        "potentialAction": [{
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }]
      }
    ].filter(Boolean)
  };

  return (
    <Helmet prioritizeSeoTags={true}>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <link rel="canonical" href={canonical} />
      
      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify(fullStructuredData)}
      </script>
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={`IPTV Service ${currentYear}`} />
      
      {/* Article Metadata */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta */}
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Language Alternates */}
      {alternates && Object.entries(alternates).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={`${baseUrl}${url}`} />
      ))}
    </Helmet>
  );
};