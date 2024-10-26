import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingCards = () => {
  const plans = [
    {
      duration: "1 Month",
      price: 11,
      period: "/ Month",
      features: [
        "1 Device Connection",
        "16000+ TV Channels",
        "Supports All Devices",
        "24/7 Instant Support",
      ],
    },
    {
      duration: "3 Months",
      price: 30,
      period: "/ 3 Months",
      features: [
        "1 Device Connection",
        "18000+ TV Channels",
        "Supports All Devices",
        "24/7 Instant Support",
      ],
    },
    {
      duration: "6 Months",
      price: 55,
      period: "/ 6 Months",
      features: [
        "1 Device Connection",
        "18000+ TV Channels",
        "Supports All Devices",
        "24/7 Instant Support",
      ],
    },
    {
      duration: "1 Year",
      price: 90,
      period: "/ Year",
      features: [
        "1 Device Connection",
        "18000+ TV Channels",
        "Supports All Devices",
        "24/7 Instant Support",
      ],
    },
  ];

  return (
    <div className="py-20 bg-navy">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Explore Our <span className="text-primary">IPTV Subscription</span> Plans
        </h2>
        <p className="text-gray-400 text-center mb-12">
          We Offer Flexible IPTV Subscription Packages Designed to Cater To Your Entertainment Needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-navy-light p-8 rounded-xl border border-white/10 hover:border-primary/50 transition duration-300">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-4">{plan.duration}</h3>
                <div className="flex items-start justify-center">
                  <span className="text-2xl text-primary">$</span>
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                </div>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-primary text-navy hover:bg-primary/90">
                ORDER NOW
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;