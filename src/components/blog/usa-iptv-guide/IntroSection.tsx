import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";

export const IntroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mb-16"
    >
      <Card className="bg-navy-light/50 border border-white/10 p-8 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">What is IPTV?</h2>
            <p className="text-gray-400">
              IPTV delivers television content over the internet, unlike traditional broadcast or cable 
              TV services. Through IPTV, viewers can access live TV, on-demand content, and time-shifted 
              media, often with more flexibility and at a lower cost than conventional options. Check out our{" "}
              <Link to="/features" className="text-primary hover:text-primary/80 underline">
                features page
              </Link>{" "}
              to learn more about IPTV capabilities.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
            <Image
              src="/images/IPTV-Service.webp"
              alt="IPTV Streaming Service"
              className="relative rounded-xl shadow-2xl border border-white/10"
              width={600}
              height={400}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};