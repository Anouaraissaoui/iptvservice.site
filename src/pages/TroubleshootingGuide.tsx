import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image } from "@/components/ui/image";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

const TroubleshootingGuide = () => {
  const baseUrl = "https://www.iptvservice.site";
  
  const structuredData = {
    "@context": "https://schema.org",
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
        title="IPTV Troubleshooting Guide 2024 | Fix Common Streaming Issues"
        description="Expert guide to fix IPTV streaming issues. Learn how to resolve buffering, connection problems, and playback errors. Step-by-step solutions for better streaming."
        keywords="IPTV troubleshooting, streaming issues, IPTV buffering fix, connection problems, playback issues, IPTV guide 2024, IPTV setup help"
        canonical={`${baseUrl}/troubleshooting`}
        structuredData={JSON.stringify(structuredData)}
        type="article"
        articleSection="Support"
        wordCount={1200}
      />

      <main className="min-h-screen bg-navy relative overflow-hidden">
        <Navbar />
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />

        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              IPTV Troubleshooting{" "}
              <span className="text-primary relative inline-block">
                Guide
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
              Your comprehensive resource for resolving common IPTV streaming issues. Need immediate assistance?{" "}
              <Link to="/contact" className="text-primary hover:underline transition-colors">
                Contact our support team
              </Link>
              .
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <Card className="bg-navy-light border-white/10 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
              <Image
                src="/images/IPTV-troubleshooting.webp"
                alt="Comprehensive IPTV troubleshooting guide showing technical setup solutions"
                className="w-full h-[400px] object-cover"
                width={1200}
                height={400}
                loading="eager"
                priority
              />
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Welcome to our comprehensive IPTV troubleshooting guide. Here you'll find solutions to common streaming issues and tips for optimizing your viewing experience. Check our{" "}
                  <Link to="/features" className="text-primary hover:underline transition-colors">
                    features page
                  </Link>
                  {" "}to learn more about our service capabilities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="connection" className="bg-navy-light border-white/10 rounded-lg data-[state=open]:ring-1 data-[state=open]:ring-primary/50">
                <AccordionTrigger className="px-6 text-white hover:text-primary transition-colors">
                  Connection Issues
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-300">
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Check your internet connection speed (minimum 10Mbps recommended)</li>
                    <li>Verify your VPN connection if you're using one</li>
                    <li>Try switching between Wi-Fi and ethernet connection</li>
                    <li>Restart your modem and router</li>
                    <li>For more network tips, visit our{" "}
                      <Link to="/blog" className="text-primary hover:underline transition-colors">
                        blog
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="buffering" className="bg-navy-light border-white/10 rounded-lg data-[state=open]:ring-1 data-[state=open]:ring-primary/50">
                <AccordionTrigger className="px-6 text-white hover:text-primary transition-colors">
                  Buffering Problems
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-300">
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Lower the stream quality if experiencing frequent buffering</li>
                    <li>Clear your device's cache and cookies</li>
                    <li>Close other applications using bandwidth</li>
                    <li>Try using a different media player</li>
                    <li>Check our{" "}
                      <Link to="/pricing" className="text-primary hover:underline transition-colors">
                        premium plans
                      </Link>
                      {" "}for better streaming quality
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="playback" className="bg-navy-light border-white/10 rounded-lg data-[state=open]:ring-1 data-[state=open]:ring-primary/50">
                <AccordionTrigger className="px-6 text-white hover:text-primary transition-colors">
                  Playback Issues
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-300">
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Update your media player to the latest version</li>
                    <li>Check if your device meets minimum system requirements</li>
                    <li>Try different video output settings</li>
                    <li>Verify stream URL and authentication details</li>
                    <li>Need help? Visit our{" "}
                      <Link to="/contact" className="text-primary hover:underline transition-colors">
                        support page
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default TroubleshootingGuide;