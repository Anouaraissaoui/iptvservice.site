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

  // Enhanced structured data with more technical details
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
        },
        "mainEntity": {
          "@type": "Service",
          "name": "Premium IPTV Streaming Service",
          "serviceType": "Internet Protocol Television",
          "provider": {
            "@type": "Organization",
            "name": "IPTV Service"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IPTV Subscription Plans",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Premium IPTV Subscription"
                }
              }
            ]
          }
        }
      }
    ].filter(Boolean)
  };

  return (
    <Helmet prioritizeSeoTags={true}>
      {/* Technical Meta Tags */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta httpEquiv="x-content-type-options" content="nosniff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#0F172A" />
      
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex,follow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <meta name="keywords" content={keywords || "premium IPTV service, buy IPTV subscription, best IPTV provider USA, HD IPTV channels, 4K streaming service, live TV streaming, IPTV solutions"} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={`IPTV Service ${currentYear}`} />
      
      {/* Article Metadata */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Language Alternates */}
      {alternates && Object.entries(alternates).map(([lang, url]) => (
        <link key={lang} rel="alternate" href={`${baseUrl}${url}`} hrefLang={lang} />
      ))}

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
    </Helmet>
  );
};