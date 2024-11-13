import { Shield, Zap, Globe2, DevicePhoneMobile } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Premium IPTV Service",
      description: "Experience reliable IPTV streaming with HD & 4K quality channels, backed by our professional service standards."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Fast & Stable Streaming",
      description: "Enjoy uninterrupted IPTV service with our high-performance servers and optimized streaming technology."
    },
    {
      icon: <Globe2 className="w-12 h-12" />,
      title: "Global Channel Selection",
      description: "Access 18,000+ international channels through our comprehensive IPTV subscription service."
    },
    {
      icon: <DevicePhoneMobile className="w-12 h-12" />,
      title: "Multi-Device Support",
      description: "Use our IPTV service on any device with our flexible streaming solution and 24/7 customer support."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Why Choose Our{" "}
            <span className="text-primary relative inline-block">
              IPTV Service
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the best IPTV streaming service with premium features and unmatched reliability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 blur-xl rounded-3xl group-hover:bg-primary/10 transition-all duration-300" />
              
              <div className="relative bg-navy-light/80 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm h-full">
                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;