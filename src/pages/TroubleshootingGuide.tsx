import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image } from "@/components/ui/image";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { memo } from "react";

// Memoize the TroubleshootingContent component for better performance
const TroubleshootingContent = memo(() => (
  <div className="container mx-auto px-4 py-24">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        IPTV Troubleshooting{" "}
        <span className="text-primary relative inline-block">
          Guide
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Your comprehensive resource for resolving common IPTV streaming issues. Need immediate assistance?{" "}
        <Link to="/contact" className="text-primary hover:underline">
          Contact our support team
        </Link>
        .
      </p>
    </div>

    <div className="mb-16">
      <Card className="bg-navy-light/50 border border-white/10 overflow-hidden">
        <Image
          src="/images/IPTV-troubleshooting.webp"
          alt="Comprehensive IPTV troubleshooting guide showing technical setup solutions, connection optimization tips, and streaming quality improvements for better viewing experience"
          className="w-full h-[300px] md:h-[400px] object-cover"
          width={1200}
          height={400}
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <CardContent className="p-6 md:p-8">
          <p className="text-gray-300">
            Welcome to our comprehensive IPTV troubleshooting guide. Here you'll find solutions to common streaming issues and tips for optimizing your viewing experience. Check our{" "}
            <Link to="/features" className="text-primary hover:underline">
              features page
            </Link>{" "}
            to learn more about our service capabilities.
          </p>
        </CardContent>
      </Card>
    </div>

    <Accordion type="single" collapsible className="space-y-4 max-w-3xl mx-auto">
      <AccordionItem value="connection" className="bg-navy-light/80 border-white/10 rounded-lg data-[state=open]:bg-navy-light">
        <AccordionTrigger className="px-6 text-white hover:text-primary">
          Connection Issues
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>Check your internet connection speed (minimum 10Mbps recommended)</li>
            <li>Verify your VPN connection if you're using one</li>
            <li>Try switching between Wi-Fi and ethernet connection</li>
            <li>Restart your modem and router</li>
            <li>
              For more network tips, visit our{" "}
              <Link to="/blog" className="text-primary hover:underline">
                blog
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="buffering" className="bg-navy-light/80 border-white/10 rounded-lg data-[state=open]:bg-navy-light">
        <AccordionTrigger className="px-6 text-white hover:text-primary">
          Buffering Problems
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>Lower the stream quality if experiencing frequent buffering</li>
            <li>Clear your device's cache and cookies</li>
            <li>Close other applications using bandwidth</li>
            <li>Try using a different media player</li>
            <li>
              Check our{" "}
              <Link to="/pricing" className="text-primary hover:underline">
                premium plans
              </Link>{" "}
              for better streaming quality
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="playback" className="bg-navy-light/80 border-white/10 rounded-lg data-[state=open]:bg-navy-light">
        <AccordionTrigger className="px-6 text-white hover:text-primary">
          Playback Issues
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>Update your media player to the latest version</li>
            <li>Check if your device meets minimum system requirements</li>
            <li>Try different video output settings</li>
            <li>Verify stream URL and authentication details</li>
            <li>
              Need help? Visit our{" "}
              <Link to="/contact" className="text-primary hover:underline">
                support page
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
));

TroubleshootingContent.displayName = "TroubleshootingContent";

const TroubleshootingGuide = () => {
  const baseUrl = "https://www.iptvservice.site";
  
  const structuredData = {
    "@type": "FAQPage",
    "@id": `${baseUrl}/troubleshooting/#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I fix connection issues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check your internet connection speed (minimum 10Mbps recommended), verify VPN connection, try switching between Wi-Fi and ethernet, restart modem and router."
        }
      },
      {
        "@type": "Question",
        "name": "How do I resolve buffering problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lower stream quality, clear device cache and cookies, close bandwidth-heavy applications, try a different media player."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do for playback issues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Update media player, check system requirements, adjust video output settings, verify stream URL and authentication details."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="IPTV Troubleshooting Guide | Fix Common Streaming Issues 2025"
        description="Comprehensive guide to fix IPTV streaming issues. Learn how to resolve buffering, connection problems, and playback errors. Expert solutions for better streaming."
        keywords="IPTV troubleshooting, streaming issues, IPTV buffering fix, connection problems, playback issues, IPTV guide 2025"
        canonical={`${baseUrl}/troubleshooting`}
        structuredData={JSON.stringify(structuredData)}
        breadcrumbs={[
          { 
            name: "Home", 
            path: "/", 
            position: 1,
            item: `${baseUrl}/`
          },
          { 
            name: "Troubleshooting", 
            path: "/troubleshooting",
            position: 2,
            item: `${baseUrl}/troubleshooting`
          }
        ]}
      />
      <main className="min-h-screen bg-navy">
        <Navbar />
        <TroubleshootingContent />
        <Footer />
      </main>
    </>
  );
};

export default TroubleshootingGuide;