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
        
        <div className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" aria-hidden="true" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
          
          <article className="container relative mx-auto px-4 py-24">
            <div className="max-w-3xl mx-auto">
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                  Getting Started with IPTV
                </h1>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    <time dateTime={publishDate}>
                      {formatDistanceToNow(new Date(publishDate), { addSuffix: true })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>5 min read</span>
                  </div>
                </div>
              </header>

              <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-primary prose-li:text-gray-300">
                <img
                  src="https://www.iptvservice.site/Buy-IPTV.jpg"
                  alt="Getting Started with IPTV"
                  className="w-full rounded-lg mb-8 border border-white/10"
                />

                <h2 className="text-3xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">What is IPTV?</h2>
                <p className="text-gray-300">
                  IPTV (Internet Protocol Television) is a modern way to receive television content over the internet rather than through traditional terrestrial, satellite, or cable formats. This technology allows you to stream your favorite channels and content directly to various devices.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Key Benefits of IPTV</h2>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong className="text-primary">Extensive Content Library:</strong> Access thousands of channels worldwide</li>
                  <li><strong className="text-primary">High Quality:</strong> Stream in HD and 4K resolution</li>
                  <li><strong className="text-primary">On-Demand Content:</strong> Enjoy VOD (Video on Demand) services</li>
                  <li><strong className="text-primary">Device Flexibility:</strong> Watch on multiple devices</li>
                  <li><strong className="text-primary">Cost-Effective:</strong> Save money compared to traditional cable</li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Essential Requirements</h2>
                <div className="bg-navy-light p-6 rounded-lg mb-8 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Three Key Components:</h3>
                  <ol className="space-y-4 list-decimal pl-6">
                    <li>
                      <strong className="text-primary">Internet Connection</strong>
                      <p className="mt-2">Minimum 10Mbps broadband connection recommended for smooth streaming</p>
                    </li>
                    <li>
                      <strong className="text-primary">IPTV Subscription</strong>
                      <p className="mt-2">Choose a reliable provider with good reviews and customer support</p>
                    </li>
                    <li>
                      <strong className="text-primary">Compatible Device</strong>
                      <p className="mt-2">Smart TV, Android Box, or Mobile Device</p>
                    </li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Supported Devices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-navy-light p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-4 text-white">Smart TVs</h3>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Samsung Smart TV</li>
                      <li>LG WebOS TV</li>
                      <li>Android TV</li>
                    </ul>
                  </div>
                  <div className="bg-navy-light p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-4 text-white">Streaming Devices</h3>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Amazon Fire TV Stick</li>
                      <li>Android TV Box</li>
                      <li>Apple TV</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Quick Setup Guide</h2>
                <div className="bg-navy-light p-6 rounded-lg mb-8 border border-white/10">
                  <ol className="space-y-4 list-decimal pl-6">
                    <li>Download your preferred IPTV player app</li>
                    <li>Enter your subscription credentials</li>
                    <li>Configure video quality settings</li>
                    <li>Start enjoying your content</li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Pro Tips</h2>
                <div className="bg-navy-light p-6 rounded-lg border border-white/10">
                  <ul className="space-y-4 list-disc pl-6">
                    <li>
                      <strong className="text-primary">Use Ethernet When Possible</strong>
                      <p className="mt-2">Wired connections provide more stable streaming</p>
                    </li>
                    <li>
                      <strong className="text-primary">Keep Software Updated</strong>
                      <p className="mt-2">Regular updates ensure optimal performance</p>
                    </li>
                    <li>
                      <strong className="text-primary">Optimize Quality Settings</strong>
                      <p className="mt-2">Match video quality to your internet speed</p>
                    </li>
                    <li>
                      <strong className="text-primary">Consider Using a VPN</strong>
                      <p className="mt-2">Enhanced privacy and security while streaming</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default GettingStartedWithIPTV;