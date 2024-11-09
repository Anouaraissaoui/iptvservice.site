import { HelpCircle } from "lucide-react";

export const GuideHeader = () => {
  return (
    <div className="text-center mb-16 space-y-4">
      <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-xl text-sm">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-white">USA IPTV Guide 2024</span>
      </span>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        Best USA{" "}
        <span className="text-primary relative inline-block">
          IPTV Service
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
        </span>{" "}
        Providers
      </h1>
      
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Comprehensive guide to the best IPTV service providers in the USA for 2024. 
        Compare features, pricing, and find the perfect streaming solution.
      </p>
    </div>
  );
};