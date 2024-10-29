import { SEOData } from "@/types/seo";

export const getMetaTags = ({
  title,
  description,
  ogImage = "https://www.iptvservice.site/og-image.jpg",
  canonical,
  noindex,
  keywords,
}: SEOData): Array<Record<string, string>> => [
  { name: "description", content: description },
  { name: "keywords", content: keywords || "" },
  { name: "robots", content: noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { property: "og:image", content: ogImage },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:site_name", content: "IPTV Service" },
  ...(canonical ? [{ rel: "canonical", href: canonical }] : []),
];

export const generateBreadcrumbData = (items: Array<{ name: string; path: string }>) => ({
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.iptvservice.site${item.path}`
  }))
});

export const generateProductStructuredData = (price: number, title: string, description: string) => ({
  "@type": "Product",
  "name": title,
  "description": description,
  "offers": {
    "@type": "Offer",
    "price": price.toString(),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
});

export const generateArticleStructuredData = (title: string, description: string, publishedTime: string, modifiedTime: string) => ({
  "@type": "Article",
  "headline": title,
  "description": description,
  "datePublished": publishedTime,
  "dateModified": modifiedTime,
  "publisher": {
    "@type": "Organization",
    "name": "IPTV Service",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.iptvservice.site/logo.svg"
    }
  }
});