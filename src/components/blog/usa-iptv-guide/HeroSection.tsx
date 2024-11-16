import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="text-center mb-16 space-y-4">
      <motion.span 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-xl text-sm"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-white">Updated for 2025</span>
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-white leading-tight"
      >
        Best USA{" "}
        <span className="text-primary relative inline-block">
          IPTV Service
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
        </span>{" "}
        Providers
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 max-w-2xl mx-auto text-lg"
      >
        Compare features, pricing, and find the perfect streaming solution for your needs
      </motion.p>
    </div>
  );
};