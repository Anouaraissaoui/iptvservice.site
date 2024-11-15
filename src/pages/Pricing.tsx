import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";
import { ServerSEO } from "@/components/ServerSEO";
import { useEffect } from "react";
import { preloadCriticalAssets } from "@/utils/performance";

const Pricing = () => {
  useEffect(() => {
    preloadCriticalAssets();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/pricing/#webpage",
        "url": "https://www.iptvservice.site/pricing",
        "name": "IPTV Subscription Plans & Pricing 2025 | Best Value IPTV Service",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Choose from our flexible IPTV subscription plans starting at $11/month. All plans include 18,000+ HD & 4K channels, VOD content, and 24/7 support.",
        "breadcrumb": { "@id": "https://www.iptvservice.site/pricing/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.iptvservice.site/pricing/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "https://www.iptvservice.site",
              "url": "https://www.iptvservice.site",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebPage",
              "@id": "https://www.iptvservice.site/pricing",
              "url": "https://www.iptvservice.site/pricing",
              "name": "Pricing"
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.iptvservice.site/pricing/#product",
        "name": "IPTV Subscription Plans",
        "description": "Premium IPTV subscription plans with 18,000+ channels, VOD content, and live sports.",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "11",
          "highPrice": "90",
          "offerCount": "4",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title="IPTV Subscription Plans & Pricing 2025 | Best Value IPTV Service"
        description="Choose from our flexible IPTV subscription plans starting at $11/month. All plans include 18,000+ HD & 4K channels, VOD content, and 24/7 support."
        canonical="https://www.iptvservice.site/pricing"
        ogImage="https://www.iptvservice.site/images/Buy-IPTV.jpg"
        structuredData={structuredData}
        keywords="IPTV subscription plans, IPTV pricing, buy IPTV subscription, IPTV packages, cheap IPTV service, IPTV deals 2025, best IPTV service USA"
        type="product"
        publishedTime="2024-01-01T08:00:00+00:00"
        modifiedTime={new Date().toISOString()}
        imageAlt="IPTV Subscription Plans and Pricing"
      />
      <main 
        className="min-h-screen bg-navy"
        itemScope 
        itemType="https://schema.org/WebPage"
      >
        <Navbar />
        <section 
          aria-label="Pricing Plans" 
          className="pt-20 animate-fade-in"
          itemProp="mainContentOfPage"
        >
          <h1 className="sr-only">IPTV Subscription Plans and Pricing</h1>
          <PricingCards />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Pricing;