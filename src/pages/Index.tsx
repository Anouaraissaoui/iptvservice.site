import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ServerSEO } from "@/components/ServerSEO";

const Index = () => {
  const currentDate = new Date().getFullYear();
  const baseUrl = "https://www.iptvservice.site";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    "url": baseUrl,
    "name": `Buy IPTV Subscription | Best IPTV Service Provider ${currentDate}`,
    "description": "Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "name": "IPTV Service",
      "description": "Premium IPTV Streaming Service",
      "publisher": {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "IPTV Service",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.svg`,
          "width": "180",
          "height": "60"
        }
      }
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${baseUrl}/images/IPTV-Service.webp`
    },
    "datePublished": "2024-01-01T08:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": baseUrl,
            "name": "Home"
          }
        }
      ]
    }
  };

  return (
    <>
      <ServerSEO 
        title={`Buy IPTV Subscription | Best IPTV Service Provider ${currentDate}`}
        description="Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."
        structuredData={structuredData}
        keywords="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, IPTV buy, best buy IPTV, IPTV channels, HD IPTV, 4K IPTV, premium IPTV service, IPTV provider USA"
        type="website"
        ogImage={`${baseUrl}/images/IPTV-Service.webp`}
        canonical={baseUrl}
        alternates={{
          "en": "/",
          "es": "/es",
          "fr": "/fr"
        }}
      />
      <SEO
        title={`Buy IPTV Subscription | Best IPTV Service Provider ${currentDate}`}
        description="Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."
        structuredData={structuredData}
        type="website"
        ogImage={`${baseUrl}/images/IPTV-Service.webp`}
        canonical={baseUrl}
        alternates={{
          "en": "/",
          "es": "/es",
          "fr": "/fr"
        }}
        breadcrumbs={[
          {
            name: "Home",
            path: "/",
            position: 1,
            item: baseUrl
          }
        ]}
      />
      <main className="min-h-screen bg-navy" itemScope itemType="https://schema.org/WebPage">
        <Navbar />
        <Hero />
        <article itemScope itemType="https://schema.org/Article">
          <Stats />
          <PricingCards />
          <Benefits />
          <FaqSection />
        </article>
        <Footer />
      </main>
    </>
  );
};

export default Index;