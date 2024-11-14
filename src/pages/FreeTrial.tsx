import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FreeTrial = () => {
  const whatsappNumber = "https://wa.me/message/R5IYJF3GG635D1"; // Updated WhatsApp link
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in getting a free IPTV trial.");
  const whatsappUrl = whatsappNumber; // Directly use the full URL

  return (
    <>
      <SEO
        title="Get Your Free IPTV Trial | Premium Streaming Service"
        description="Try our premium IPTV service free for 24 hours. Access 18,000+ channels in HD & 4K quality. Contact us on WhatsApp for instant activation."
        canonical="/free-trial"
        type="website"
        ogImage="https://www.iptvservice.site/images/IPTV-Service.webp"
      />
      
      <main className="min-h-screen bg-navy">
        <Navbar />
        
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-navy-light/50 border border-white/10 p-8 md:p-12 backdrop-blur-xl">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              
              <div className="relative space-y-8">
                <div className="space-y-4 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Try Our Premium IPTV Service{" "}
                    <span className="text-primary">Free</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Experience 18,000+ channels in HD & 4K quality with our 24-hour free trial
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "18,000+ Live Channels",
                    "HD & 4K Quality",
                    "Sports & PPV Events",
                    "Movies & TV Shows",
                    "24/7 Support",
                    "Easy Setup"
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-600/20 transition-all hover:scale-105"
                  >
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="w-6 h-6" />
                      Contact Us on WhatsApp
                    </a>
                  </Button>
                  <p className="text-sm text-gray-400">
                    Get instant activation through WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default FreeTrial;