import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Sparkles } from "lucide-react";

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
      popular: false,
      gradient: "from-blue-500/20 to-purple-500/20"
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
      popular: true,
      gradient: "from-primary/20 to-emerald-500/20"
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
      popular: false,
      gradient: "from-orange-500/20 to-red-500/20"
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
      popular: false,
      gradient: "from-pink-500/20 to-purple-500/20"
    },
  ];

  return (
    <div className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="container mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-xl">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore Our{" "}
            <span className="text-primary relative inline-block">
              IPTV Subscription
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm"></span>
            </span>{" "}
            Plans
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We Offer Flexible IPTV Subscription Packages Designed to Cater To Your Entertainment Needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative group">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-navy px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/20">
                  <Star className="w-4 h-4" fill="currentColor" /> Most Popular
                </div>
              )}
              <div className="bg-navy-light p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 transform hover:scale-[1.02] relative group-hover:shadow-2xl group-hover:shadow-primary/10">
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-2xl`} />
                <div className="relative space-y-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {plan.duration}
                    </h3>
                    <div className="flex items-start justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl text-primary mt-1">$</span>
                      <span className="text-6xl font-bold text-white">{plan.price}</span>
                    </div>
                    <span className="text-gray-400 block">{plan.period}</span>
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                        <div className="p-1 rounded-full bg-primary/10 mr-3">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-primary text-navy hover:bg-primary/90 group relative h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                    ORDER NOW
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;