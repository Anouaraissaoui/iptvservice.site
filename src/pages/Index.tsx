import { Toaster } from "@/components/ui/toaster";
import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  const currentYear = new Date().getFullYear();
  const baseUrl = "https://www.iptvservice.site";

  return (
    <>
      <SEO 
        title={`Buy IPTV Subscription | Best IPTV Service Provider ${currentYear}`}
        description="Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support."
        canonical={baseUrl}
        alternates={{
          "en": "/",
          "es": "/es",
          "fr": "/fr"
        }}
        type="website"
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
      <Toaster />
    </>
  );
};

export default Index;