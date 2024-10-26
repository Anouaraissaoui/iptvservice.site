import { DollarSign, Tv2, DevicesIcon, Globe } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Cost-Effective",
      description: "More affordable than traditional cable or satellite TV packages.",
      icon: DollarSign
    },
    {
      title: "High-Quality Streaming",
      description: "Enjoy crisp, high-definition video and audio quality.",
      icon: Tv2
    },
    {
      title: "Flexible Viewing",
      description: "Watch your favorite content anytime, anywhere with an internet connection.",
      icon: DevicesIcon
    },
    {
      title: "Global Reach",
      description: "Access a wide range of international channels and content.",
      icon: Globe
    }
  ];

  return (
    <div className="py-24 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-2xl"></div>
              <img 
                src="https://ideogram.ai/assets/progressive-image/balanced/response/rjBDn08hT6OtKawxA6EQPg" 
                alt="Family watching TV" 
                className="relative rounded-3xl shadow-2xl border border-white/10 group-hover:border-primary/50 transition-colors duration-300"
              />
              <div className="absolute -bottom-6 right-6 bg-navy-light/90 border border-white/10 rounded-2xl px-6 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-white font-medium">Premium Quality</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Benefits of <span className="text-primary relative inline-block">IPTV
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm"></span></span>
            </h2>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-navy/50 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:bg-navy-light/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{benefit.description}</p>
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