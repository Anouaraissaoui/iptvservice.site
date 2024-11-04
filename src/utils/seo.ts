import { SEOData } from "@/types/seo";

export const getMetaTags = ({
  title,
  description,
  ogImage = "https://www.iptvservice.site/og-image.jpg",
  canonical,
  noindex,
  keywords,
  author = "IPTV Service",
  publishedTime,
  modifiedTime = new Date().toISOString(),
  type = "website",
}: SEOData): Array<Record<string, string>> => [
  { name: "description", content: description },
  { name: "keywords", content: keywords || "" },
  { name: "robots", content: noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
  { name: "author", content: author },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: type },
  { property: "og:image", content: ogImage },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:site_name", content: "IPTV Service" },
  { property: "article:published_time", content: publishedTime || "" },
  { property: "article:modified_time", content: modifiedTime },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: ogImage },
  ...(canonical ? [{ rel: "canonical", href: canonical }] : []),
];

export const generateBreadcrumbData = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.iptvservice.site${item.path}`
  }))
});

export const generateStructuredData = (data: {
  type: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
}) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": data.type,
    "name": data.title,
    "description": data.description,
    "url": "https://www.iptvservice.site",
    ...(data.image && {
      "image": {
        "@type": "ImageObject",
        "url": data.image,
        "width": "1200",
        "height": "630"
      }
    }),
    ...(data.datePublished && { "datePublished": data.datePublished }),
    ...(data.dateModified && { "dateModified": data.dateModified }),
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iptvservice.site/logo.svg"
      }
    }
  };

  if (data.breadcrumbs) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        baseStructuredData,
        generateBreadcrumbData(data.breadcrumbs)
      ]
    };
  }

  return baseStructuredData;
};