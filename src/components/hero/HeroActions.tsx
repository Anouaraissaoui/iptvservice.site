import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroActions = () => (
  <nav className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" aria-label="Primary CTA">
    <a 
      href="https://wa.me/message/R5IYJF3GG635D1" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button 
        className="bg-primary text-navy hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 h-12 md:h-14 group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,133,0.4)] w-full sm:w-auto"
        aria-label="Get Started via WhatsApp"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </Button>
    </a>
    <Link to="/contact">
      <Button 
        variant="outline" 
        className="text-white border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-base md:text-lg px-6 md:px-8 h-12 md:h-14 group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] w-full sm:w-auto"
        aria-label="Contact Support"
      >
        <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
        Contact Support
      </Button>
    </Link>
  </nav>
);

export default HeroActions;