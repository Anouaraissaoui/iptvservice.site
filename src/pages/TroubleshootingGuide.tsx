import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image } from "@/components/ui/image";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TroubleshootingGuide = () => {
  return (
    <>
      <SEO
        title="IPTV Troubleshooting Guide | Comprehensive Streaming Solutions"
        description="Complete guide to troubleshooting common IPTV streaming issues. Learn how to fix buffering, connection problems, and optimize your streaming experience."
        canonical="https://www.iptvservice.site/troubleshooting"
        keywords="IPTV troubleshooting, streaming issues, IPTV buffering, IPTV connection problems, IPTV guide"
      />

      <main className="min-h-screen bg-navy">
        <Navbar />
        
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
              Your comprehensive resource for resolving common IPTV streaming issues
            </p>
          </div>

          <div className="mb-16">
            <Card className="bg-navy-light border-white/10 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Technical troubleshooting setup showing a laptop and monitoring equipment"
                className="w-full h-[400px] object-cover"
                width={1200}
                height={400}
              />
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6">
                  Welcome to our comprehensive IPTV troubleshooting guide. Here you'll find solutions to common streaming issues and tips for optimizing your viewing experience.
                </p>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="connection" className="bg-navy-light border-white/10 rounded-lg">
              <AccordionTrigger className="px-6 text-white hover:text-primary">
                Connection Issues
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-300">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Check your internet connection speed (minimum 10Mbps recommended)</li>
                  <li>Verify your VPN connection if you're using one</li>
                  <li>Try switching between Wi-Fi and ethernet connection</li>
                  <li>Restart your modem and router</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="buffering" className="bg-navy-light border-white/10 rounded-lg">
              <AccordionTrigger className="px-6 text-white hover:text-primary">
                Buffering Problems
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-300">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lower the stream quality if experiencing frequent buffering</li>
                  <li>Clear your device's cache and cookies</li>
                  <li>Close other applications using bandwidth</li>
                  <li>Try using a different media player</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="playback" className="bg-navy-light border-white/10 rounded-lg">
              <AccordionTrigger className="px-6 text-white hover:text-primary">
                Playback Issues
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-300">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Update your media player to the latest version</li>
                  <li>Check if your device meets minimum system requirements</li>
                  <li>Try different video output settings</li>
                  <li>Verify stream URL and authentication details</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default TroubleshootingGuide;