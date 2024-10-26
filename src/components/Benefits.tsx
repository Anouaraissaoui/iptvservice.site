import { Shield, Tv, Globe, CreditCard } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Cost-Effective",
      description: "More affordable than traditional cable or satellite TV packages.",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: "High-Quality Streaming",
      description: "Enjoy crisp, high-definition video and audio quality.",
      icon: <Tv className="w-6 h-6" />
    },
    {
      title: "Flexible Viewing",
      description: "Watch your favorite content anytime, anywhere with an internet connection.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Global Reach",
      description: "Access a wide range of international channels and content.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-navy-light relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-2xl" />
              <img 
                src="https://ideogram.ai/assets/progressive-image/balanced/response/rjBDn08hT6OtKawxA6EQPg" 
                alt="Family watching TV" 
                className="relative rounded-3xl shadow-2xl border border-white/10 group-hover:border-primary/50 transition-colors duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-navy-light/90 border border-white/10 rounded-2xl px-6 py-3 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-white font-medium">Premium Quality</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
            <div className="space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-2 backdrop-blur-xl text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-white">Why Choose Us?</span>
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Benefits of{" "}
                <span className="text-primary relative inline-block">
                  IPTV
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                </span>
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="group bg-navy/50 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:bg-navy-light/50 hover:scale-105 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
