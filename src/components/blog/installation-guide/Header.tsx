import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="text-center mb-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        How to Install IPTV on{" "}
        <span className="text-primary relative inline-block">
          Different Devices
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
        </span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        Complete guide for setting up IPTV on Firestick, Android, and Apple TV. Need help? Check our{" "}
        <Link to="/troubleshooting" className="text-primary hover:underline">troubleshooting guide</Link> or{" "}
        <Link to="/contact" className="text-primary hover:underline">contact our support team</Link>.
      </motion.p>
    </header>
  );
};