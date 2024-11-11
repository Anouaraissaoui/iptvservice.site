import { SEOData } from "@/types/seo";

export const getMetaTags = ({
  title,
  description,
  ogImage = "https://www.iptvservice.site/Buy-IPTV.jpg",
  canonical,
  noindex,
  keywords,
  author = "IPTV Service",
  publishedTime,
  modifiedTime,
  type = "website"
}: SEOData): Array<Record<string, string>> => [
  { name: "description", content: description },
  { name: "keywords", content: keywords || "" },
  { name: "author", content: author },
  { name: "robots", content: noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: type },
  { property: "og:image", content: ogImage },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:site_name", content: "IPTV Service" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: ogImage },
  ...(publishedTime ? [{ property: "article:published_time", content: publishedTime }] : []),
  ...(modifiedTime ? [{ property: "article:modified_time", content: modifiedTime }] : []),
  ...(canonical ? [{ rel: "canonical", href: canonical }] : []),
];

export const generateDynamicSchema = (data: SEOData) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": data.type || "WebPage",
    "name": data.title,
    "description": data.description,
    "image": data.ogImage,
    "url": data.canonical,
    "dateModified": data.modifiedTime,
    "datePublished": data.publishedTime,
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iptvservice.site/logo.svg"
      }
    }
  };

  return JSON.stringify(baseSchema);
};