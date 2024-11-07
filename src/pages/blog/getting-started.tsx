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
          <div className="relative max-w-3xl mx-auto">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" aria-hidden="true" />
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
            
            <header className="relative mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
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

            <div className="relative prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-primary prose-li:text-gray-300">
              <img
                src="https://www.iptvservice.site/Buy-IPTV.jpg"
                alt="Getting Started with IPTV"
                className="w-full rounded-lg mb-8 border border-white/10 shadow-xl"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">What is IPTV?</h2>
              <div className="bg-navy-light border border-white/10 rounded-lg p-6 mb-8">
                <p>
                  IPTV (Internet Protocol Television) is a modern way to receive television content over the internet rather than through traditional terrestrial, satellite, or cable formats. This technology allows you to stream your favorite channels and content directly to various devices.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Key Benefits of IPTV</h2>
              <ul className="space-y-2 list-none pl-0">
                {[
                  { title: "Extensive Content Library", desc: "Access thousands of channels worldwide" },
                  { title: "High Quality", desc: "Stream in HD and 4K resolution" },
                  { title: "On-Demand Content", desc: "Enjoy VOD (Video on Demand) services" },
                  { title: "Device Flexibility", desc: "Watch on multiple devices" },
                  { title: "Cost-Effective", desc: "Save money compared to traditional cable" }
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 bg-navy-light border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <span className="text-primary">•</span>
                    <div>
                      <strong className="text-primary">{benefit.title}:</strong>
                      <span className="ml-2">{benefit.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Essential Requirements</h2>
              <div className="bg-navy-light border border-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Three Key Components:</h3>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-navy-light border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Smart TVs</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Samsung Smart TV</li>
                    <li>LG WebOS TV</li>
                    <li>Android TV</li>
                  </ul>
                </div>
                <div className="bg-navy-light border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Streaming Devices</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Amazon Fire TV Stick</li>
                    <li>Android TV Box</li>
                    <li>Apple TV</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Quick Setup Guide</h2>
              <div className="bg-navy-light border border-white/10 rounded-lg p-6 mb-8">
                <ol className="space-y-4 list-decimal pl-6">
                  <li>Download your preferred IPTV player app</li>
                  <li>Enter your subscription credentials</li>
                  <li>Configure video quality settings</li>
                  <li>Start enjoying your content</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Pro Tips</h2>
              <div className="bg-navy-light border border-white/10 rounded-lg p-6">
                <ul className="space-y-4 list-none pl-0">
                  {[
                    { title: "Use Ethernet When Possible", desc: "Wired connections provide more stable streaming" },
                    { title: "Keep Software Updated", desc: "Regular updates ensure optimal performance" },
                    { title: "Optimize Quality Settings", desc: "Match video quality to your internet speed" },
                    { title: "Consider Using a VPN", desc: "Enhanced privacy and security while streaming" }
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 border-b border-white/10 last:border-0 pb-4 last:pb-0">
                      <span className="text-primary">•</span>
                      <div>
                        <strong className="text-primary">{tip.title}</strong>
                        <p className="mt-2">{tip.desc}</p>
                      </div>
                    </li>
                  ))}
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