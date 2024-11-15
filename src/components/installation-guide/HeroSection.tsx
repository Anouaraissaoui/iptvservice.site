import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <header className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        How to Install IPTV on{" "}
        <span className="text-primary">Different Devices</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Complete guide for setting up IPTV on Firestick, Android, and Apple TV. Need help? Check our{" "}
        <Link to="/troubleshooting" className="text-primary hover:underline">troubleshooting guide</Link> or{" "}
        <Link to="/contact" className="text-primary hover:underline">contact our support team</Link>.
      </p>
    </header>
  );
};