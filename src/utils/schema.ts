export const generateBreadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.iptvservice.site${item.path}`
  }))
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateReviewSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "Product",
    "name": "IPTV Service",
    "description": "Premium IPTV streaming service with 18,000+ channels"
  },
  "ratingValue": "4.8",
  "reviewCount": "1250",
  "bestRating": "5",
  "worstRating": "1"
});

export const generateSitelinksSearchboxSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.iptvservice.site",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.iptvservice.site/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});