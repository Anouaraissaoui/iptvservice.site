import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PricingFeature } from "@/types/components";
import { useNavigate } from "react-router-dom";

interface PricingCardProps {
  duration: string;
  price: number;
  period: string;
  features: PricingFeature[];
}

const PricingCard = ({ duration, price, period, features }: PricingCardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/checkout", {
      state: {
        plan: {
          name: duration,
          price: price
        }
      }
    });
  };

  return (
    <div className="relative group transform hover:scale-105 transition-all duration-500">
      <div className="absolute inset-0 bg-primary/5 blur-xl rounded-3xl group-hover:bg-primary/10 transition-all duration-300" />
      
      <div className="relative backdrop-blur-sm rounded-2xl p-8 border border-white/10 bg-navy-light/80 group-hover:border-primary/50 transition-all duration-300">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-4">{duration}</h3>
          <div className="flex items-start justify-center gap-1">
            <span className="text-2xl text-primary">$</span>
            <span className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
              {price}
            </span>
          </div>
          <span className="text-gray-400">{period}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
              <span className="p-1.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </span>
              {feature.text}
            </li>
          ))}
        </ul>

        <Button 
          className="w-full h-12 group-hover:scale-105 transition-all duration-300 bg-white/10 text-white hover:bg-white/20"
          onClick={handleGetStarted}
        >
          Get Started
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;