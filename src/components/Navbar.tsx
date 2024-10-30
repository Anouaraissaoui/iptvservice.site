import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "@/types/components";
import AuthButtons from "./auth/AuthButtons";
import { useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const { loaded } = useClerk();

  const toggleMenu = useCallback((): void => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" }
  ];

  if (!loaded) {
    return (
      <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 md:py-6">
            <div className="h-8 w-32 bg-gray-200 animate-pulse rounded" />
            <div className="h-8 w-8 bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link to="/" className="flex items-center gap-2">
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
              >
                {item.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <AuthButtons />
          </div>

          <Button 
            variant="ghost" 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-navy/95 backdrop-blur-lg z-40">
          <div className="container px-4 py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-300 hover:text-white transition-colors text-lg font-medium py-2 border-b border-white/10 ${
                  location.pathname === item.path ? "text-white" : ""
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center mt-4">
              <AuthButtons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;