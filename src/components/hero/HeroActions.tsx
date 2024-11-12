import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const HeroActions = () => {
  const { t } = useTranslation();
  
  return (
    <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto" aria-label="Primary CTA">
      <Link to="/pricing" className="w-full sm:w-auto">
        <Button 
          className="w-full sm:w-auto bg-primary text-navy hover:bg-primary/90 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-10 sm:h-12 md:h-14 group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,133,0.4)]"
          aria-label={t('hero.cta.primary')}
        >
          {t('hero.cta.primary')}
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Button>
      </Link>
      <Link to="/contact" className="w-full sm:w-auto">
        <Button 
          variant="outline" 
          className="w-full sm:w-auto text-white border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-10 sm:h-12 md:h-14 group transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)]"
          aria-label={t('hero.cta.support')}
        >
          <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
          {t('hero.cta.support')}
        </Button>
      </Link>
    </nav>
  );
};

export default HeroActions;