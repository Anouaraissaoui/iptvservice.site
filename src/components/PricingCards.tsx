import { Smartphone, Tv, HeadphonesIcon, MessageCircle } from "lucide-react";
import PricingCard from "./pricing/PricingCard";

const PricingCards = () => {
  const plans = [
    {
      duration: "1 Month",
      price: 11,
      period: "/ Month",
      features: [
        { text: "1 Device Connection", icon: <Smartphone className="h-4 w-4" /> },
        { text: "16000+ TV Channels", icon: <Tv className="h-4 w-4" /> },
        { text: "Supports All Devices", icon: <HeadphonesIcon className="h-4 w-4" /> },
        { text: "24/7 Instant Support", icon: <MessageCircle className="h-4 w-4" /> },
      ],
    },
    {
      duration: "3 Months",
      price: 30,
      period: "/ 3 Months",
      features: [
        { text: "1 Device Connection", icon: <Smartphone className="h-4 w-4" /> },
        { text: "18000+ TV Channels", icon: <Tv className="h-4 w-4" /> },
        { text: "Supports All Devices", icon: <HeadphonesIcon className="h-4 w-4" /> },
        { text: "24/7 Instant Support", icon: <MessageCircle className="h-4 w-4" /> },
      ],
    },
    {
      duration: "6 Months",
      price: 55,
      period: "/ 6 Months",
      features: [
        { text: "1 Device Connection", icon: <Smartphone className="h-4 w-4" /> },
        { text: "18000+ TV Channels", icon: <Tv className="h-4 w-4" /> },
        { text: "Supports All Devices", icon: <HeadphonesIcon className="h-4 w-4" /> },
        { text: "24/7 Instant Support", icon: <MessageCircle className="h-4 w-4" /> },
      ],
    },
    {
      duration: "1 Year",
      price: 90,
      period: "/ Year",
      features: [
        { text: "1 Device Connection", icon: <Smartphone className="h-4 w-4" /> },
        { text: "18000+ TV Channels", icon: <Tv className="h-4 w-4" /> },
        { text: "Supports All Devices", icon: <HeadphonesIcon className="h-4 w-4" /> },
        { text: "24/7 Instant Support", icon: <MessageCircle className="h-4 w-4" /> },
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-grid" />
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Explore Our <span className="text-primary">IPTV Subscription</span> Plans
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your entertainment needs with our flexible IPTV subscription packages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;