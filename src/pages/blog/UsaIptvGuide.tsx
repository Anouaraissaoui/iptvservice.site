import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProvidersTable } from "@/components/blog/usa-iptv-guide/ProvidersTable";
import { FaqSection } from "@/components/blog/usa-iptv-guide/FaqSection";
import { HeroSection } from "@/components/blog/usa-iptv-guide/HeroSection";
import { IntroSection } from "@/components/blog/usa-iptv-guide/IntroSection";
import { SupportSection } from "@/components/blog/usa-iptv-guide/SupportSection";

const UsaIptvGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iptvservice.site/blog/usa-iptv-guide/"
    },
    "headline": "Best USA IPTV Service Providers Guide (2025)",
    "description": "Comprehensive guide to IPTV services in the USA. Compare features, pricing, and learn how to choose the best IPTV provider for your streaming needs.",
    "image": "https://www.iptvservice.site/images/IPTV-Service.webp",
    "datePublished": "2024-02-26T12:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "IPTV Service",
      "url": "https://www.iptvservice.site"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iptvservice.site/logo.svg"
      }
    }
  };

  const providers = [
    {
      name: "IPTV Service",
      channels: "28,000+",
      devices: "Android, iOS, Firestick, Smart TVs",
      features: "4K quality, VOD, Multi-device",
      pricing: "Starts at $34.99/3 months"
    },
    {
      name: "CalmaHUB",
      channels: "20,000+",
      devices: "Fire TV, Apple TV, Android, Windows",
      features: "Multi-screen, on-demand",
      pricing: "Starts at £24.99/3 months"
    },
    {
      name: "FLOKI TV",
      channels: "65,000+",
      devices: "Android, Firestick, Windows, iOS",
      features: "VOD in 4K, HD quality",
      pricing: "$38.13/3 months"
    },
    {
      name: "Fubo IPTV",
      channels: "22,000+",
      devices: "TV box, smartphone, tablet",
      features: "Variety of live content",
      pricing: "$10.99/month"
    },
    {
      name: "Sync IPTV",
      channels: "32,000+",
      devices: "Smart TVs, Firestick, Android",
      features: "150,000 VOD, HD & 4K quality",
      pricing: "$34.99/3 months"
    }
  ];

  const faqs = [
    {
      question: "Which IPTV services are legal in the USA?",
      answer: "IPTV itself is not illegal. The legality depends on whether the IPTV service has proper licensing agreements. Services with apps in major app stores are generally considered legal."
    },
    {
      question: "Do I need a VPN for IPTV in the USA?",
      answer: "A VPN isn't required if you're using a legitimate IPTV provider. However, it may add a layer of privacy or help access geo-restricted content."
    },
    {
      question: "How can I watch Indian TV channels legally in the USA?",
      answer: "Services like IFLEX and CalmaHUB offer Indian content. You can also explore apps from Indian broadcasters or services like Sling TV."
    }
  ];

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Best USA IPTV Service Providers Guide (2025) | Complete Comparison</title>
        <meta name="description" content="Comprehensive guide to IPTV services in the USA. Compare features, pricing, and learn how to choose the best IPTV provider for your streaming needs." />
        <meta name="keywords" content="USA IPTV, IPTV guide, IPTV services, streaming guide, IPTV providers, iptv usa, best iptv service 2025" />
        <link rel="canonical" href="https://www.iptvservice.site/blog/usa-iptv-guide/" />
        <meta property="og:title" content="Complete USA IPTV Guide 2025: Everything You Need to Know" />
        <meta property="og:description" content="Comprehensive guide to IPTV services in the USA. Compare features, pricing, and learn how to choose the best IPTV provider for your streaming needs." />
        <meta property="og:url" content="https://www.iptvservice.site/blog/usa-iptv-guide/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.iptvservice.site/images/IPTV-Service.webp" />
        <meta property="article:published_time" content="2024-02-26T12:00:00+00:00" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-navy">
        <Navbar />
        <main className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container mx-auto px-4 py-24 relative">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-invert max-w-none"
            >
              <HeroSection />
              <IntroSection />
              
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Top IPTV Service Providers</h2>
                <p className="text-gray-400 mb-6">
                  We've compiled a list of the best IPTV providers based on reliability, features, and value.
                </p>
                <ProvidersTable providers={providers} />
              </motion.section>

              <SupportSection />

              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <FaqSection faqs={faqs} />
              </motion.section>
            </motion.article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UsaIptvGuide;
