import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const GettingStartedWithIPTV = () => {
  const publishDate = new Date().toISOString();
  
  const structuredData = {
    "@type": "BlogPosting",
    "@id": "https://www.iptvservice.site/blog/getting-started/#article",
    "headline": "Getting Started with IPTV - Complete Guide 2024",
    "description": "Learn everything you need to know about setting up and using IPTV services effectively.",
    "image": "https://www.iptvservice.site/Buy-IPTV.jpg",
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Organization",
      "name": "IPTV Service"
    }
  };

  return (
    <>
      <SEO
        title="Getting Started with IPTV - Complete Guide 2024"
        description="Learn everything you need to know about setting up and using IPTV services effectively. Comprehensive guide for beginners to start streaming."
        canonical="https://www.iptvservice.site/blog/getting-started"
        ogImage="https://www.iptvservice.site/Buy-IPTV.jpg"
        type="article"
        publishedTime={publishDate}
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-navy">
        <Navbar />
        
        <article className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Getting Started with IPTV
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  <time dateTime={publishDate}>
                    {formatDistanceToNow(new Date(publishDate), { addSuffix: true })}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <img
                src="https://www.iptvservice.site/Buy-IPTV.jpg"
                alt="Getting Started with IPTV"
                className="w-full rounded-lg mb-8"
              />

              <h2>What is IPTV?</h2>
              <p>
                IPTV (Internet Protocol Television) is a modern way to receive television content over the internet rather than through traditional terrestrial, satellite, or cable formats. This technology allows you to stream your favorite channels and content directly to various devices.
              </p>

              <h2>Benefits of IPTV</h2>
              <ul>
                <li>Access to thousands of channels worldwide</li>
                <li>High-quality streaming in HD and 4K</li>
                <li>Video on Demand (VOD) content</li>
                <li>Multi-device compatibility</li>
                <li>Cost-effective entertainment solution</li>
              </ul>

              <h2>Getting Started</h2>
              <p>
                To start enjoying IPTV services, you'll need three main components:
              </p>
              <ol>
                <li>A reliable internet connection (minimum 10Mbps recommended)</li>
                <li>An IPTV subscription from a trusted provider</li>
                <li>A compatible device (Smart TV, Android Box, or Mobile Device)</li>
              </ol>

              <h2>Compatible Devices</h2>
              <p>
                IPTV can be accessed on various devices including:
              </p>
              <ul>
                <li>Smart TVs (Samsung, LG, etc.)</li>
                <li>Android TV Boxes</li>
                <li>Amazon Fire TV Stick</li>
                <li>Mobile devices (iOS and Android)</li>
                <li>Computers and laptops</li>
              </ul>

              <h2>Setting Up Your IPTV Service</h2>
              <p>
                Once you have your subscription and device ready:
              </p>
              <ol>
                <li>Download and install a recommended IPTV player app</li>
                <li>Enter your subscription credentials</li>
                <li>Configure your preferred settings</li>
                <li>Start enjoying your favorite content</li>
              </ol>

              <h2>Tips for Optimal Streaming</h2>
              <ul>
                <li>Use a wired internet connection when possible</li>
                <li>Keep your IPTV app and device updated</li>
                <li>Choose appropriate video quality based on your internet speed</li>
                <li>Use VPN for enhanced privacy and security</li>
              </ul>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
};

export default GettingStartedWithIPTV;