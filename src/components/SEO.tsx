import { Helmet } from "react-helmet-async";
import { SEOData } from "@/types/seo";
import { generateBreadcrumbData, generateOrganizationData, generateWebsiteData } from "@/utils/structuredData";

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
  const canonicalUrl = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationData(),
      generateWebsiteData(),
      structuredData,
      breadcrumbs ? generateBreadcrumbData(breadcrumbs) : null,
      {
        "@type": type === "article" ? "Article" : type === "product" ? "Product" : "WebPage",
        "@id": `${canonicalUrl}#content`,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "datePublished": publishedTime,
        "dateModified": modifiedTime,
        "author": {
          "@type": "Organization",
          "name": author
        },
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "publisher": {
          "@type": "Organization",
          "name": "IPTV Service",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.svg`
          }
        }
      }
    ].filter(Boolean)
  };

  return (
    <Helmet prioritizeSeoTags={true}>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex,follow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
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
      
      {/* Language Alternates with absolute URLs */}
      <link rel="alternate" href={baseUrl} />
      {alternates && Object.entries(alternates).map(([lang, url]) => (
        <link key={lang} rel="alternate" href={`${baseUrl}${url}`} />
      ))}

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
    </Helmet>
  );
};