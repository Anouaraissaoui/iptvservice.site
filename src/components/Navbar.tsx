import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "@/types/components";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems: NavItem[] = [
    { name: "Home", path: "hero", ariaLabel: "IPTV Service Home" },
    { name: "Features", path: "benefits", ariaLabel: "IPTV Features & Channels" },
    { name: "Pricing", path: "pricing", ariaLabel: "IPTV Subscription Plans" },
    { name: "FAQ", path: "faq-section", ariaLabel: "Frequently Asked Questions" },
    { name: "Blog", path: "/blog", ariaLabel: "IPTV Guides & Updates" },
    { name: "Contact", path: "/contact", ariaLabel: "24/7 IPTV Support" }
  ];

  return (
    <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2"
            aria-label="Premium IPTV Service Home"
          >
            <span className="text-primary font-bold text-xl md:text-2xl tracking-tight hover:text-primary/90 transition-colors">
              IPTV Service
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.path.startsWith('/') ? (
                <Link 
                  key={item.path}
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full" />
                </Link>
              ) : (
                <button
                  key={item.path}
                  onClick={() => scrollToSection(item.path)}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full" />
                </button>
              )
            ))}
          </div>

          <Button 
            variant="ghost" 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[73px] bg-navy/95 backdrop-blur-lg z-40"
        >
          <div className="px-4 py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              item.path.startsWith('/') ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors text-lg font-medium py-2 border-b border-white/10"
                  onClick={toggleMenu}
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.path}
                  onClick={() => scrollToSection(item.path)}
                  className="text-gray-300 hover:text-white transition-colors text-lg font-medium py-2 border-b border-white/10 text-left"
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;