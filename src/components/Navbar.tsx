import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "@/types/components";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const navItems: NavItem[] = [
    { name: "Premium IPTV Service", path: "/", ariaLabel: "Premium IPTV Service Home" },
    { name: "IPTV Features & Channels", path: "/features", ariaLabel: "IPTV Features & Channels" },
    { name: "IPTV Subscription Plans", path: "/pricing", ariaLabel: "IPTV Subscription Plans" },
    { name: "IPTV Guides & Updates", path: "/blog", ariaLabel: "IPTV Guides & Updates" },
    { name: "IPTV Setup & Support", path: "/troubleshooting", ariaLabel: "IPTV Setup & Support Guide" },
    { name: "24/7 IPTV Support", path: "/contact", ariaLabel: "24/7 IPTV Support" }
  ];

  return (
    <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link 
            to="/" 
            className="flex items-center gap-2"
            aria-label="Premium IPTV Service Home"
          >
            <span className="text-primary font-bold text-xl md:text-2xl tracking-tight hover:text-primary/90 transition-colors">
              IPTV Service
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`text-gray-300 hover:text-white transition-colors relative group ${
                  location.pathname === item.path ? "text-white" : ""
                }`}
                aria-label={item.ariaLabel}
                aria-current={location.pathname === item.path ? "page" : undefined}
              >
                {item.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
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
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-300 hover:text-white transition-colors text-lg font-medium py-2 border-b border-white/10 ${
                  location.pathname === item.path ? "text-white" : ""
                }`}
                onClick={toggleMenu}
                aria-label={item.ariaLabel}
                aria-current={location.pathname === item.path ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;