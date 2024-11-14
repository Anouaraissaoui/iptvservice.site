import { SEOData, MetaTag } from '@/types/seo';

export const getMetaTags = ({
  title,
  description,
  canonical,
  ogImage,
  keywords,
  author,
  publishedTime,
  modifiedTime,
  type = 'website',
  imageAlt,
  locale = 'en_US',
  articleSection,
  wordCount
}: SEOData): MetaTag[] => [
  // Core Meta Tags
  { name: "description", content: description },
  { name: "keywords", content: keywords || "buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA" },
  { name: "author", content: author },
  
  // Search Engine Directives
  { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, noodp, noydir" },
  { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
  { name: "bingbot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
  { name: "revisit-after", content: "1 days" },
  { name: "rating", content: "general" },
  
  // Open Graph Tags
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: type },
  { property: "og:image", content: ogImage },
  { property: "og:image:alt", content: imageAlt || title },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:site_name", content: "Premium IPTV Service Provider | Buy IPTV USA" },
  { property: "og:locale", content: locale },
  { property: "article:publisher", content: "https://www.iptvservice.site" },
  { property: "article:section", content: articleSection },
  { property: "article:word_count", content: wordCount?.toString() },
  
  // Twitter Card Tags
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: ogImage },
  { name: "twitter:image:alt", content: imageAlt || title },
  { name: "twitter:creator", content: "@iptvservice" },
  { name: "twitter:site", content: "@iptvservice" },
  
  // Article Metadata
  ...(publishedTime ? [{ property: "article:published_time", content: publishedTime }] : []),
  ...(modifiedTime ? [{ property: "article:modified_time", content: modifiedTime }] : []),
  
  // Technical & Mobile Meta Tags
  { rel: "canonical", href: canonical },
  { name: "format-detection", content: "telephone=no" },
  { httpEquiv: "x-ua-compatible", content: "IE=edge" },
  { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },
  { name: "theme-color", content: "#0F172A" },
  { name: "mobile-web-app-capable", content: "yes" },
  { name: "apple-mobile-web-app-capable", content: "yes" },
  { name: "apple-mobile-web-app-status-bar-style", content: "default" },
  
  // Security Headers
  { httpEquiv: "Content-Security-Policy", content: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;" },
  { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
  { httpEquiv: "X-Frame-Options", content: "SAMEORIGIN" },
  { httpEquiv: "Referrer-Policy", content: "strict-origin-when-cross-origin" },
  { httpEquiv: "Permissions-Policy", content: "camera=(), microphone=(), geolocation=()" }
];

export const generateDynamicSchema = ({
  title,
  description,
  canonical,
  ogImage,
  type,
  publishedTime,
  modifiedTime,
  imageAlt,
  articleSection,
  wordCount
}: SEOData) => ({
  "@context": "https://schema.org",
  "@type": type === "article" ? "Article" : type === "product" ? "Product" : "WebPage",
  "@id": `${canonical}#content`,
  "url": canonical,
  "name": title,
  "description": description,
  "keywords": "buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA",
  "image": {
    "@type": "ImageObject",
    "url": ogImage,
    "width": "1200",
    "height": "630",
    "caption": imageAlt || title
  },
  "datePublished": publishedTime || new Date().toISOString(),
  "dateModified": modifiedTime || new Date().toISOString(),
  "author": {
    "@type": "Organization",
    "name": "IPTV Service",
    "@id": "https://www.iptvservice.site/#organization"
  },
  "publisher": {
    "@type": "Organization",
    "name": "IPTV Service",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.iptvservice.site/logo.svg",
      "width": "180",
      "height": "60"
    },
    "@id": "https://www.iptvservice.site/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": canonical
  },
  ...(type === "article" && {
    "articleSection": articleSection,
    "wordCount": wordCount,
    "articleBody": description
  }),
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["article", "h1", ".description"]
  },
  "isAccessibleForFree": "False",
  "potentialAction": {
    "@type": "ReadAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": canonical
    }
  }
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});