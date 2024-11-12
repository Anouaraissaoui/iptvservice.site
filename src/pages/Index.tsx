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
  const currentYear = new Date().getFullYear();
  const baseUrl = "https://www.iptvservice.site";
  
  const pricingSchema = {
    "@type": "Product",
    "name": "IPTV Subscription Plans",
    "description": "Premium IPTV subscription plans with 18,000+ channels, VOD content, and live sports",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "11.00",
      "highPrice": "90.00",
      "offerCount": "4"
    }
  };

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What devices are compatible with your IPTV service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our IPTV service works with Smart TVs, mobile devices, streaming devices, and MAG boxes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer customer support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 customer support via live chat, WhatsApp, and email. Our technical team is always ready to help."
        }
      },
      {
        "@type": "Question",
        "name": "What channels are included in the subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our service includes 18,000+ channels from around the world, covering various genres including sports, movies, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a money-back guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a 100% satisfaction guarantee within the first 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What video quality do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both HD and 4K video quality where available."
        }
      },
      {
        "@type": "Question",
        "name": "How many devices can I use simultaneously?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Different subscription plans allow for different numbers of simultaneous connections, ranging from 1 to 4 devices."
        }
      }
    ]
  };

  return (
    <>
      <ServerSEO 
        title={`Buy IPTV Subscription | Best IPTV Service Provider ${currentYear}`}
        description="Premium IPTV subscription with 18,000+ HD & 4K channels. Instant activation, 24/7 support, and money-back guarantee. Stream live sports, movies, and shows worldwide."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": `Buy IPTV Subscription | Best IPTV Service Provider ${currentYear}`,
          "description": "Premium IPTV subscription with 18,000+ channels",
          "offers": pricingSchema,
          "faq": faqSchema
        }}
        keywords="buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, premium IPTV, HD IPTV, 4K streaming"
        type="website"
        ogImage={`${baseUrl}/images/IPTV-Service.webp`}
        canonical={baseUrl}
        alternates={{
          "en": "/",
          "es": "/es",
          "fr": "/fr"
        }}
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
