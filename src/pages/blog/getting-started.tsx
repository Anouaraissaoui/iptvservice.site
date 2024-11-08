import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import ReactMarkdown from 'react-markdown';

const blogContent = `
# Getting Started with IPTV - Complete Guide 2024

IPTV (Internet Protocol Television) is a modern way to receive television content over the internet rather than through traditional terrestrial, satellite, or cable formats. This technology allows you to stream your favorite channels and content directly to various devices.

## Key Benefits of IPTV

* **Extensive Content Library:** Access thousands of channels worldwide
* **High Quality:** Stream in HD and 4K resolution
* **On-Demand Content:** Enjoy VOD (Video on Demand) services
* **Device Flexibility:** Watch on multiple devices
* **Cost-Effective:** Save money compared to traditional cable

## Essential Requirements

Three key components are needed for optimal IPTV streaming:

1. **Internet Connection**
   * Minimum 10Mbps broadband connection recommended for smooth streaming

2. **IPTV Subscription**
   * Choose a reliable provider with good reviews and customer support

3. **Compatible Device**
   * Smart TV, Android Box, or Mobile Device

## Supported Devices

### Smart TVs
* Samsung Smart TV
* LG WebOS TV
* Android TV

### Streaming Devices
* Amazon Fire TV Stick
* Android TV Box
* Apple TV

## Quick Setup Guide

1. Download your preferred IPTV player app
2. Enter your subscription credentials
3. Configure video quality settings
4. Start enjoying your content

## Pro Tips

* **Use Ethernet When Possible**
  * Wired connections provide more stable streaming

* **Keep Software Updated**
  * Regular updates ensure optimal performance

* **Optimize Quality Settings**
  * Match video quality to your internet speed

* **Consider Using a VPN**
  * Enhanced privacy and security while streaming
`;

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
              
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold mb-6">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="mb-4">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
                  li: ({ children }) => <li className="mb-2">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                }}
              >
                {blogContent}
              </ReactMarkdown>
            </div>
          </div>
        </article>
        
        <Footer />
      </main>
    </>
  );
};

export default GettingStartedWithIPTV;