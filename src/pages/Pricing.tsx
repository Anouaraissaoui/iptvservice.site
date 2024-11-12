import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";

const Pricing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/pricing/#webpage",
        "url": "https://www.iptvservice.site/pricing",
        "name": "IPTV Subscription Plans & Pricing 2024",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Choose from our flexible IPTV subscription plans. All plans include 18,000+ channels, HD/4K quality, and 24/7 support.",
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
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>IPTV Subscription Plans & Pricing 2025 | Starting at $11/month</title>
        <meta name="description" content="Choose from our flexible IPTV subscription plans starting at $11/month. All plans include 18,000+ channels, HD/4K quality, VOD content, and 24/7 support." />
        <meta name="keywords" content="IPTV subscription plans, IPTV pricing, buy IPTV subscription, IPTV packages, cheap IPTV service, IPTV deals 2024" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.iptvservice.site/pricing" />
        
        <meta property="og:type" content="product" />
        <meta property="og:title" content="IPTV Subscription Plans & Pricing 2025 | From $11/month" />
        <meta property="og:description" content="Premium IPTV plans with 18,000+ channels, HD/4K quality, VOD content. 24/7 support included!" />
        <meta property="og:url" content="https://www.iptvservice.site/pricing" />
        <meta property="og:image" content="https://www.iptvservice.site/pricing-plans.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Subscription Plans & Pricing 2025" />
        <meta name="twitter:description" content="Get premium IPTV access from $11/month. 18,000+ channels, HD/4K quality!" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <section aria-labelledby="pricing-heading" className="pt-20">
          <h1 id="pricing-heading" className="sr-only">IPTV Subscription Plans and Pricing</h1>
          <PricingCards />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Pricing;
