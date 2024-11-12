import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Features = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.iptvservice.site/features/#webpage",
        "url": "https://www.iptvservice.site/features",
        "name": "IPTV Features & Benefits | HD/4K Streaming with 18,000+ Channels",
        "isPartOf": { "@id": "https://www.iptvservice.site/#website" },
        "datePublished": "2024-01-01T08:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Explore our premium IPTV features: 18,000+ channels worldwide, HD/4K streaming, catch-up TV, multi-device support, EPG guide, and extensive VOD library.",
        "breadcrumb": { "@id": "https://www.iptvservice.site/features/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.iptvservice.site/features/#breadcrumb",
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
              "@id": "https://www.iptvservice.site/features",
              "url": "https://www.iptvservice.site/features",
              "name": "Features"
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>IPTV Features & Benefits | HD/4K Streaming with 18,000+ Channels</title>
        <meta name="description" content="Explore our premium IPTV features: 18,000+ channels worldwide, HD/4K streaming, catch-up TV, multi-device support, EPG guide, and extensive VOD library." />
        <meta name="keywords" content="IPTV features, IPTV benefits, streaming quality, VOD content, live TV channels, HD IPTV, 4K streaming, EPG guide" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.iptvservice.site/features" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium IPTV Features & Benefits 2025" />
        <meta property="og:description" content="Discover our advanced IPTV features: 18,000+ channels, HD/4K quality, catch-up TV, EPG, VOD library, and more!" />
        <meta property="og:url" content="https://www.iptvservice.site/features" />
        <meta property="og:image" content="https://www.iptvservice.site/features-overview.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium IPTV Features & Benefits 2025" />
        <meta name="twitter:description" content="Experience next-level streaming with our premium IPTV features. HD/4K quality, 18,000+ channels!" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="min-h-screen bg-navy">
        <Navbar />
        <section aria-labelledby="features-heading" className="pt-20">
          <h1 id="features-heading" className="sr-only">IPTV Features and Benefits</h1>
          <Benefits />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Features;
