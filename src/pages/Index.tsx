import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { generateOrganizationData, generateWebsiteData, generateProductData } from "@/utils/structuredData";

const Index = () => {
  const currentYear = new Date().getFullYear();
  const baseUrl = "https://www.iptvservice.site";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationData(),
      generateWebsiteData(),
      generateProductData(
        11,
        "IPTV Subscription Service",
        "Premium IPTV subscription service with 18000+ HD & 4K channels"
      ),
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        "url": baseUrl,
        "name": `Buy IPTV Subscription | Best IPTV Service Provider ${currentYear}`,
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "about": { "@id": `${baseUrl}/#organization` },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/IPTV-Service.webp`,
          "width": "1200",
          "height": "630"
        },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support.",
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <>
      <SEO
        title={`Buy IPTV Subscription | Best IPTV Service Provider ${currentYear}`}
        description="Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."
        keywords="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA"
        structuredData={structuredData}
        type="website"
        ogImage={`${baseUrl}/images/IPTV-Service.webp`}
        alternates={{
          "en": "/",
          "es": "/es",
          "fr": "/fr",
          "de": "/de"
        }}
        locale="en_US"
        rating={{ value: 4.8, count: 1250 }}
        breadcrumbs={[
          {
            name: "Home",
            path: "/",
            position: 1,
            item: baseUrl
          }
        ]}
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