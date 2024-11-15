import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroActions = () => (
  <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start w-full sm:w-auto" aria-label="Primary CTA">
    <Link to="/pricing" className="w-full sm:w-auto">
      <Button 
        className="w-full sm:w-auto bg-primary text-navy hover:bg-primary/90 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 h-12 sm:h-14 md:h-16 group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,133,0.4)] font-semibold"
        aria-label="Browse IPTV Subscription Plans and Pricing"
      >
        Browse IPTV Plans & Pricing
        <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </Button>
    </Link>
    <Link to="/contact" className="w-full sm:w-auto">
      <Button 
        variant="outline" 
        className="w-full sm:w-auto text-white border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 h-12 sm:h-14 md:h-16 group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] font-semibold"
        aria-label="Get 24/7 IPTV Support"
      >
        <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform" aria-hidden="true" />
        24/7 IPTV Support
      </Button>
    </Link>
  </nav>
);

export default HeroActions;