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

            <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300">
              <img
                src="https://www.iptvservice.site/Buy-IPTV.jpg"
                alt="Getting Started with IPTV"
                className="w-full rounded-lg mb-8"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6">What is IPTV?</h2>
              <p>
                IPTV (Internet Protocol Television) is a modern way to receive television content over the internet rather than through traditional terrestrial, satellite, or cable formats. This technology allows you to stream your favorite channels and content directly to various devices.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Key Benefits of IPTV</h2>
              <ul className="space-y-2 list-disc pl-6">
                <li><strong>Extensive Content Library:</strong> Access thousands of channels worldwide</li>
                <li><strong>High Quality:</strong> Stream in HD and 4K resolution</li>
                <li><strong>On-Demand Content:</strong> Enjoy VOD (Video on Demand) services</li>
                <li><strong>Device Flexibility:</strong> Watch on multiple devices</li>
                <li><strong>Cost-Effective:</strong> Save money compared to traditional cable</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Essential Requirements</h2>
              <div className="bg-white/5 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Three Key Components:</h3>
                <ol className="space-y-4 list-decimal pl-6">
                  <li>
                    <strong>Internet Connection</strong>
                    <p className="mt-2">Minimum 10Mbps broadband connection recommended for smooth streaming</p>
                  </li>
                  <li>
                    <strong>IPTV Subscription</strong>
                    <p className="mt-2">Choose a reliable provider with good reviews and customer support</p>
                  </li>
                  <li>
                    <strong>Compatible Device</strong>
                    <p className="mt-2">Smart TV, Android Box, or Mobile Device</p>
                  </li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Supported Devices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Smart TVs</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Samsung Smart TV</li>
                    <li>LG WebOS TV</li>
                    <li>Android TV</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Streaming Devices</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Amazon Fire TV Stick</li>
                    <li>Android TV Box</li>
                    <li>Apple TV</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Quick Setup Guide</h2>
              <div className="bg-white/5 p-6 rounded-lg mb-8">
                <ol className="space-y-4 list-decimal pl-6">
                  <li>Download your preferred IPTV player app</li>
                  <li>Enter your subscription credentials</li>
                  <li>Configure video quality settings</li>
                  <li>Start enjoying your content</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Pro Tips</h2>
              <div className="bg-white/5 p-6 rounded-lg">
                <ul className="space-y-4 list-disc pl-6">
                  <li>
                    <strong>Use Ethernet When Possible</strong>
                    <p className="mt-2">Wired connections provide more stable streaming</p>
                  </li>
                  <li>
                    <strong>Keep Software Updated</strong>
                    <p className="mt-2">Regular updates ensure optimal performance</p>
                  </li>
                  <li>
                    <strong>Optimize Quality Settings</strong>
                    <p className="mt-2">Match video quality to your internet speed</p>
                  </li>
                  <li>
                    <strong>Consider Using a VPN</strong>
                    <p className="mt-2">Enhanced privacy and security while streaming</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
};

export default GettingStartedWithIPTV;