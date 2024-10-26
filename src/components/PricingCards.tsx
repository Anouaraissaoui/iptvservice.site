import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

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
    },
  ];

  return (
    <div className="py-24 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Explore Our <span className="text-primary relative inline-block">IPTV Plans
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm"></span></span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-primary/80 to-primary/50 mx-auto rounded-full mb-8 animate-pulse"></div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Choose the perfect plan for your entertainment needs with our flexible subscription options
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative group transform hover:scale-105 transition-all duration-500 ${
                plan.popular ? 'lg:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-navy px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/20 animate-bounce">
                  Most Popular
                </div>
              )}
              <div className="absolute inset-0 bg-primary/5 blur-xl rounded-3xl group-hover:bg-primary/10 transition-all duration-300"></div>
              <div className="relative bg-navy-light/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{plan.duration}</h3>
                  <div className="flex items-start justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-primary mt-2">$</span>
                    <span className="text-6xl font-bold text-white group-hover:text-primary transition-colors">{plan.price}</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-primary text-navy hover:bg-primary/90 h-12 text-lg font-semibold group shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">ORDER NOW</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
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