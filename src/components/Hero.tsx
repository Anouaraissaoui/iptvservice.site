import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen pt-32 pb-20 bg-navy overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span className="text-primary animate-pulse font-semibold">New</span>
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Premium IPTV Experience</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">Experience The #1 </span>
            <span className="text-primary relative inline-block">
              IPTV Service
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-primary/30 blur-sm"></span>
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl leading-relaxed">
            Unleash unmatched entertainment with our premium IPTV subscription. Enjoy seamless streaming of 18,000+ channels in crystal-clear HD quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              className="bg-primary text-navy hover:bg-primary/90 text-lg px-8 h-14 group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,133,0.4)]"
              aria-label="Start Free Trial"
            >
              <span className="group-hover:translate-x-1 transition-transform">Start Free Trial</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-lg px-8 h-14 group transition-all duration-300 transform hover:scale-105"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span className="group-hover:translate-x-1 transition-transform">Contact on WhatsApp</span>
            </Button>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          <div className="relative bg-navy-light rounded-3xl border border-white/10 p-4 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:border-primary/50">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
              alt="Premium IPTV streaming experience showcased on a modern display"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              loading="eager"
              width="800"
              height="450"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-navy-light/90 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-xl w-max">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-white font-medium whitespace-nowrap">Live Streaming Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;