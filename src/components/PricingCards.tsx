import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

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
      popular: false
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
      popular: true
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
      popular: false
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
      popular: false
    },
  ];

  return (
    <div className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="container mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Explore Our <span className="text-primary">IPTV Subscription</span> Plans
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          We Offer Flexible IPTV Subscription Packages Designed to Cater To Your Entertainment Needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative group">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-navy px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" /> Most Popular
                </div>
              )}
              <div className="bg-navy-light p-8 rounded-xl border border-white/10 hover:border-primary/50 transition duration-300 transform hover:scale-[1.02] relative">
                <div className="absolute inset-0 bg-primary/5 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="text-center mb-8 relative">
                  <h3 className="text-xl font-bold text-white mb-4">{plan.duration}</h3>
                  <div className="flex items-start justify-center">
                    <span className="text-2xl text-primary">$</span>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                  </div>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 relative">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-primary text-navy hover:bg-primary/90 group relative">
                  ORDER NOW
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;