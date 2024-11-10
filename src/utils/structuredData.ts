export const generateBreadcrumbData = (items: BreadcrumbItem[]) => ({
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
    "availableLanguage": ["English"]
  }]
});

export const generateWebsiteData = () => ({
  "@type": "WebSite",
  "@id": "https://www.iptvservice.site/#website",
  "url": "https://www.iptvservice.site",
  "name": "IPTV Service",
  "description": "Premium IPTV Streaming Service",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.iptvservice.site/images/IPTV-Service.webp",
    "width": "1200",
    "height": "630"
  },
  "publisher": {
    "@id": "https://www.iptvservice.site/#organization"
  },
  "potentialAction": [{
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.iptvservice.site/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }]
});

export const generateProductData = (price: number, title: string, description: string) => ({
  "@type": "Product",
  "name": title,
  "description": description,
  "image": {
    "@type": "ImageObject",
    "url": "https://www.iptvservice.site/images/IPTV-Service.webp",
    "width": "1200",
    "height": "630"
  },
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
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250"
  }
});

export const generateArticleData = (title: string, description: string, publishedTime: string, modifiedTime: string, image: string) => ({
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": {
    "@type": "ImageObject",
    "url": image,
    "width": "1200",
    "height": "630"
  },
  "datePublished": publishedTime,
  "dateModified": modifiedTime,
  "author": {
    "@type": "Organization",
    "name": "IPTV Service"
  },
  "publisher": {
    "@type": "Organization",
    "name": "IPTV Service",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.iptvservice.site/logo.svg"
    }
  }
});