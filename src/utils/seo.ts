export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string;
  structuredData?: object;
}

export const getMetaTags = ({
  title,
  description,
  ogImage = "https://www.iptvservice.site/og-image.jpg",
  canonical,
  noindex,
  keywords,
}: SEOProps) => [
  { name: "description", content: description },
  { name: "keywords", content: keywords },
  { name: "robots", content: noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { property: "og:image", content: ogImage },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:site_name", content: "IPTV Service" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: ogImage },
  ...(canonical ? [{ rel: "canonical", href: canonical }] : []),
];

export const getStructuredData = (data: object) => ({
  __html: JSON.stringify(data),
});