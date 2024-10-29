import { BreadcrumbItem } from "@/types/seo";

export const generateBreadcrumbData = (items: BreadcrumbItem[]) => ({
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": item.position || index + 1,
    "name": item.name,
    "item": item.item || `https://www.iptvservice.site${item.path}`
  }))
});

export const generateOrganizationData = () => ({
  "@type": "Organization",
  "@id": "https://www.iptvservice.site/#organization",
  "name": "IPTV Service",
  "url": "https://www.iptvservice.site",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.iptvservice.site/logo.svg",
    "width": "180",
    "height": "60"
  },
  "sameAs": [
    "https://facebook.com/iptvservice",
    "https://twitter.com/iptvservice",
    "https://instagram.com/iptvservice",
    "https://linkedin.com/company/iptvservice"
  ]
});

export const generateWebsiteData = () => ({
  "@type": "WebSite",
  "@id": "https://www.iptvservice.site/#website",
  "url": "https://www.iptvservice.site",
  "name": "IPTV Service",
  "description": "Premium IPTV Streaming Service",
  "publisher": {
    "@id": "https://www.iptvservice.site/#organization"
  }
});

export const generateProductData = (price: number) => ({
  "@type": "Product",
  "name": "IPTV Subscription",
  "description": "Premium IPTV subscription with 18,000+ channels, VOD content, and live sports.",
  "brand": {
    "@type": "Brand",
    "name": "IPTV Service"
  },
  "offers": {
    "@type": "Offer",
    "price": price.toString(),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://www.iptvservice.site/#organization"
    }
  }
});