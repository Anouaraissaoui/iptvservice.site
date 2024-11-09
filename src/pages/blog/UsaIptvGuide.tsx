import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ProvidersTable } from "@/components/blog/usa-iptv-guide/ProvidersTable";
import { FaqSection } from "@/components/blog/usa-iptv-guide/FaqSection";

const UsaIptvGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iptvservice.site/blog/usa-iptv-guide/"
    },
    "headline": "Complete USA IPTV Guide 2025: Everything You Need to Know",
    "description": "Comprehensive guide to IPTV services in the USA. Learn about features, pricing, and how to choose the best IPTV provider for your needs.",
    "image": "https://www.iptvservice.site/images/IPTV-Service.webp",
    "datePublished": "2024-02-26T12:00:00+00:00",
    "dateModified": "2024-02-26T12:00:00+00:00",
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
      name: "IFLEX IPTV",
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
      <Helmet>
        <title>Complete USA IPTV Guide 2025: Everything You Need to Know</title>
        <meta name="description" content="Comprehensive guide to IPTV services in the USA. Learn about features, pricing, and how to choose the best IPTV provider for your needs." />
        <meta name="keywords" content="USA IPTV, IPTV guide, IPTV services, streaming guide, IPTV providers, USA streaming" />
        <link rel="canonical" href="https://www.iptvservice.site/blog/usa-iptv-guide/" />
        <meta property="og:title" content="Complete USA IPTV Guide 2024: Everything You Need to Know" />
        <meta property="og:description" content="Comprehensive guide to IPTV services in the USA. Learn about features, pricing, and how to choose the best IPTV provider for your needs." />
        <meta property="og:url" content="https://www.iptvservice.site/blog/usa-iptv-guide/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.iptvservice.site/images/IPTV-Service.webp" />
        <meta property="article:published_time" content="2024-02-26T12:00:00+00:00" />
        <meta property="article:modified_time" content="2024-02-26T12:00:00+00:00" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-navy">
        <Navbar />
        <main className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container mx-auto px-4 py-24 relative">
            <article className="prose prose-invert max-w-none">
              <div className="text-center mb-16 space-y-4">
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-xl text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-white">USA IPTV Guide 2025</span>
                </span>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Best USA{" "}
                  <span className="text-primary relative inline-block">
                    IPTV Service
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                  </span>{" "}
                  Providers
                </h1>
                
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Comprehensive guide to the best IPTV service providers in the USA for 2025. 
                  Compare features, pricing, and find the perfect streaming solution.
                </p>
              </div>

              <section className="mb-16">
                <Card className="bg-navy-light/50 border border-white/10 p-8 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-4">What is IPTV?</h2>
                  <p className="text-gray-400">
                    IPTV delivers television content over the internet, unlike traditional broadcast or cable 
                    TV services. Through IPTV, viewers can access live TV, on-demand content, and time-shifted 
                    media, often with more flexibility and at a lower cost than conventional options.
                  </p>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Top IPTV Service Providers</h2>
                <ProvidersTable providers={providers} />
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <FaqSection faqs={faqs} />
              </section>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UsaIptvGuide;
