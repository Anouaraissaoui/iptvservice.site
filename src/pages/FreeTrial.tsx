import { Button } from "@/components/ui/button";
import { MessageSquare, Check, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const FreeTrial = () => {
  const whatsappNumber = "https://wa.me/message/R5IYJF3GG635D1";

  const features = [
    "18,000+ Live Channels",
    "HD & 4K Quality",
    "Sports & PPV Events",
    "Movies & TV Shows",
    "24/7 Support",
    "Easy Setup",
    "No Credit Card Required",
    "Instant Activation"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Free IPTV Trial - Premium Streaming Service",
    "description": "Try our premium IPTV service free for 24 hours. Access 18,000+ channels in HD & 4K quality with instant activation through WhatsApp.",
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
        title="Get Your Free IPTV Trial | Premium Streaming Service"
        description="Try our premium IPTV service free for 24 hours. Access 18,000+ channels in HD & 4K quality. Contact us on WhatsApp for instant activation. Best IPTV free trial with no commitment required."
        canonical="/free-trial"
        type="website"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
        keywords="iptv free trial, iptv free trials, free iptv trial, free trial iptv, free iptv trials, premium IPTV service, HD channels, 4K streaming, IPTV subscription"
        structuredData={structuredData}
        publishedTime="2024-02-26T12:00:00+00:00"
        modifiedTime={new Date().toISOString()}
        imageAlt="Free IPTV Trial Service Preview"
      />
      
      <main className="min-h-screen bg-navy">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="relative overflow-hidden rounded-3xl bg-navy-light/50 border border-white/10 p-8 md:p-12 backdrop-blur-xl">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              
              <div className="relative space-y-8">
                <motion.div 
                  className="space-y-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Try Our Premium IPTV Service{" "}
                    <span className="text-primary">Free</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Experience 18,000+ channels in HD & 4K quality with our 24-hour free trial
                  </p>
                </motion.div>

                <motion.div 
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-colors duration-300"
                    >
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-white">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-600/20 transition-all hover:scale-105 group"
                  >
                    <a 
                      href={whatsappNumber}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="w-6 h-6" />
                      Contact Us on WhatsApp
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <p className="text-sm text-gray-400">
                    Get instant activation through WhatsApp
                  </p>
                </motion.div>

                <motion.div 
                  className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Our Free Trial?</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>No credit card or payment information required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Full access to all premium features and channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>24/7 technical support during your trial period</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default FreeTrial;