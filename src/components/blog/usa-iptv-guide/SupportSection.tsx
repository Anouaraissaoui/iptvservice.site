import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const SupportSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mb-16"
    >
      <Card className="bg-navy-light/50 border border-white/10 p-8 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-white mb-6">Need Help?</h2>
        <p className="text-gray-400 mb-6">
          If you're experiencing any issues with your IPTV service, check out our{" "}
          <Link to="/troubleshooting" className="text-primary hover:text-primary/80 underline">
            troubleshooting guide
          </Link>{" "}
          for quick solutions. For personalized assistance, visit our{" "}
          <Link to="/contact" className="text-primary hover:text-primary/80 underline">
            contact page
          </Link>.
        </p>
      </Card>
    </motion.section>
  );
};