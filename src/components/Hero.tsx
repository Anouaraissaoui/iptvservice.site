import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 bg-navy overflow-hidden">
      {/* Add decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <span className="text-primary">New</span>
            <span className="text-white/80">Experience the future of TV</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Experience The #1{" "}
            <span className="text-primary relative">
              IPTV Subscription Service
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm"></span>
            </span>{" "}
            Today!
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Unleash unmatched entertainment with our leading IPTV subscription service. Buy IPTV from the best in the industry and enjoy a seamless, high-quality viewing experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary text-navy hover:bg-primary/90 text-lg px-8 h-14">
              Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-lg px-8 h-14"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="relative bg-navy-light rounded-3xl border border-white/10 p-2 shadow-2xl">
            <img 
              src="https://ideogram.ai/assets/progressive-image/balanced/response/T-JUnqqgRsmp3yYR7L_s0g" 
              alt="Person watching TV" 
              className="relative rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-navy-light border border-white/10 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <span className="text-white">Live Streaming Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;