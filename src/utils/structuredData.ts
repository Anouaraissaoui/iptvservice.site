export const generateBreadcrumbData = (items: Array<{ name: string; path: string; position: number; item: string }>) => ({
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item) => ({
    "@type": "ListItem",
    "position": item.position,
    "name": item.name,
    "item": item.item
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
  "image": {
    "@type": "ImageObject",
    "url": "https://www.iptvservice.site/images/IPTV-Service.webp",
    "width": "1200",
    "height": "630"
  },
  "sameAs": [
    "https://facebook.com/iptvservice",
    "https://twitter.com/iptvservice",
    "https://instagram.com/iptvservice",
    "https://linkedin.com/company/iptvservice"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+1-234-567-8900",
    "contactType": "customer service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Spanish", "French", "German"]
  }]
});

export const generateWebsiteData = () => ({
  "@type": "WebSite",
  "@id": "https://www.iptvservice.site/#website",
  "url": "https://www.iptvservice.site",
  "name": "IPTV Service",
  "description": "Premium IPTV Streaming Service",
  "inLanguage": ["en-US", "es", "fr", "de"],
  "publisher": {
    "@id": "https://www.iptvservice.site/#organization"
  }
});

export const generateProductData = (price: number, title: string, description: string) => ({
  "@type": "Product",
  "name": title,
  "description": description,
  "brand": {
    "@type": "Brand",
    "name": "IPTV Service"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": price.toString(),
    "highPrice": "90.00",
    "offerCount": "4",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250"
  }
});