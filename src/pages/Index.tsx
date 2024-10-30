import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@type": "WebPage",
    "@id": "https://www.iptvservice.site/#webpage",
    "url": "https://www.iptvservice.site",
    "name": "Buy IPTV Subscription | Best IPTV Service USA 2024",
    "description": "Premium IPTV subscription with 18,000+ HD & 4K channels. Best IPTV service in USA with instant activation and 24/7 support.",
    "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
    "about": { "@id": "https://www.iptvservice.site/#organization" },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.iptvservice.site/og-image.jpg"
    },
    "datePublished": "2024-01-01T08:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.iptvservice.site"
      }]
    }
  };

  return (
    <>
      <SEO
        title="Buy IPTV Subscription | Best IPTV Service USA 2024"
        description="Buy Premium IPTV subscription with 18,000+ HD & 4K channels. Best IPTV service in USA with instant activation and 24/7 support."
        keywords="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA"
        structuredData={structuredData}
        type="website"
        breadcrumbs={[{ name: "Home", path: "/" }]}
      />
      <div className="min-h-screen bg-navy">
        <Navbar />
        <Hero />
        <Stats />
        <PricingCards />
        <Benefits />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;