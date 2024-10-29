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

export const getStructuredData = (data: object): { __html: string } => ({
  __html: JSON.stringify(data),
});