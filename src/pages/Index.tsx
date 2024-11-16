import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { 
  generateBreadcrumbSchema, 
  generateFAQSchema, 
  generateReviewSchema,
  generateSitelinksSearchboxSchema 
} from "@/utils/schema";

const Index = () => {
  const breadcrumbItems = [
    { name: "Home", path: "/" }
  ];

  const faqs = [
    {
      question: "What devices are compatible with your IPTV service?",
      answer: "Our IPTV service is compatible with Smart TVs (Samsung, LG, Android TV), mobile devices (iOS/Android), streaming devices (Amazon Fire Stick, Roku, Apple TV), and MAG boxes."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we provide 24/7 customer support via live chat, WhatsApp, and email. Our technical team is always ready to help."
    },
    {
      question: "What channels are included in the subscription?",
      answer: "Our service includes 18,000+ channels worldwide, featuring sports, movies, news, entertainment, and children's programming."
    }
  ];

  const schemas = [
    generateBreadcrumbSchema(breadcrumbItems),
    generateFAQSchema(faqs),
    generateReviewSchema(),
    generateSitelinksSearchboxSchema()
  ];

  return (
    <>
      <Helmet>
        <title>Buy IPTV Subscription | Best IPTV Service Provider 2025</title>
        <meta name="description" content="Buy IPTV subscription with 18000+ HD & 4K channels. Best IPTV service in USA with instant activation. Top-rated IPTV provider with 24/7 support." />
        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <Hero />
        <Stats />
        <PricingCards />
        <Benefits />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;