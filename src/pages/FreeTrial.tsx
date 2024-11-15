import { Button } from "@/components/ui/button";
import { MessageSquare, Check, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const FreeTrial = () => {
  const whatsappNumber = "https://wa.me/message/R5IYJF3GG635D1";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in getting a free IPTV trial.");
  const whatsappUrl = whatsappNumber;

  const features = [
    "18,000+ Live Channels in HD & 4K",
    "Premium Sports & PPV Events",
    "Movies & TV Shows On-Demand",
    "24/7 Technical Support",
    "Easy Setup on All Devices",
    "No Contract Required"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Free IPTV Trial - Premium Streaming Service",
    "description": "Experience our premium IPTV service free for 24 hours. Access 18,000+ channels in HD & 4K quality with instant activation through WhatsApp.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  };

  return (
    <>
      <SEO
        title="Get Your Free IPTV Trial | 24-Hour Premium Access"
        description="Start your free 24-hour IPTV trial today! Experience 18,000+ channels in HD & 4K quality. Instant activation via WhatsApp. No credit card required. Try our premium IPTV service risk-free."
        canonical="/free-trial"
        type="product"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
        keywords="free iptv trial, iptv free trial, 24 hour iptv trial, premium iptv service, hd channels, 4k streaming, iptv subscription trial"
        structuredData={structuredData}
        publishedTime="2024-02-26T12:00:00+00:00"
        modifiedTime={new Date().toISOString()}
        imageAlt="IPTV Free Trial Service Preview"
      />
      
      <main className="min-h-screen bg-gradient-to-b from-navy via-navy-light to-navy">
        <Navbar />
        
        <section className="container mx-auto px-4 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-3xl bg-navy-light/50 border border-white/10 p-8 md:p-12 backdrop-blur-xl">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-grid" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              
              <div className="relative space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4 text-center"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Start Your Free IPTV Trial{" "}
                    <span className="text-primary">Today</span>
                  </h1>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Experience premium streaming with our 24-hour free trial. No credit card required.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-colors duration-300"
                    >
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col items-center space-y-4 pt-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-navy font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="w-6 h-6" />
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <p className="text-sm text-gray-400">
                    Instant activation through WhatsApp
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default FreeTrial;