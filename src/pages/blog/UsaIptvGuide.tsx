import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProvidersTable } from "@/components/blog/usa-iptv-guide/ProvidersTable";
import { FaqSection } from "@/components/blog/usa-iptv-guide/FaqSection";
import { HeroSection } from "@/components/blog/usa-iptv-guide/HeroSection";
import { WhatIsIptv } from "@/components/blog/usa-iptv-guide/WhatIsIptv";
import { SEO } from "@/components/SEO";
import { Image } from "@/components/ui/image";

const UsaIptvGuide = () => {
  useEffect(() => {
    const img = new Image();
    img.src = "https://www.iptvservice.site/images/IPTV-Service.webp";
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iptvservice.site/blog/usa-iptv-guide/"
    },
    "headline": "Best USA IPTV Service Providers Guide (2025)",
    "description": "Comprehensive guide to IPTV services in the USA. Compare features, pricing, and learn how to choose the best IPTV provider for your streaming needs.",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.iptvservice.site/images/IPTV-Service.webp",
      "width": "1200",
      "height": "630"
    },
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
        "url": "https://www.iptvservice.site/logo.svg",
        "width": "180",
        "height": "60"
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
      <SEO
        title="Best USA IPTV Service Providers Guide (2025) | Complete Comparison"
        description="Comprehensive guide to IPTV services in the USA. Compare features, pricing, and learn how to choose the best IPTV provider for your streaming needs. Updated for 2025."
        keywords="USA IPTV, IPTV guide, IPTV services, streaming guide, IPTV providers, iptv usa, best iptv service 2025"
        canonical="https://www.iptvservice.site/blog/usa-iptv-guide/"
        structuredData={structuredData}
        type="article"
        modifiedTime={new Date().toISOString()}
        publishedTime="2024-02-26T12:00:00+00:00"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
        imageAlt="USA IPTV Service Guide - Compare Top Providers"
        articleSection="IPTV Guides"
        wordCount={2500}
      />

      <div className="min-h-screen bg-navy">
        <Navbar />
        <main className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container mx-auto px-4 py-24 relative">
            <article className="prose prose-invert max-w-none">
              <HeroSection />
              <WhatIsIptv />
              <section className="mb-16 animate-fade-in">
                <h2 className="text-2xl font-bold text-white mb-6">Top IPTV Service Providers</h2>
                <p className="text-gray-400 mb-6">
                  We've compiled a comprehensive comparison of the best IPTV providers based on:
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                  <li>Service reliability and uptime</li>
                  <li>Channel quality and variety</li>
                  <li>Streaming features and capabilities</li>
                  <li>Value for money and pricing plans</li>
                </ul>
                <ProvidersTable providers={providers} />
              </section>
              <FaqSection faqs={faqs} />
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UsaIptvGuide;
