import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl">IPTV Service</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <LanguageSwitcher />
            <Link to="/pricing">
              <Button variant="ghost" className="text-white hover:text-primary">
                Pricing
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="ghost" className="text-white hover:text-primary">
                Features
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="default" className="bg-primary text-navy hover:bg-primary/90">
                Contact
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <LanguageSwitcher />
            <Link to="/pricing" className="block text-white hover:text-primary">
              Pricing
            </Link>
            <Link to="/features" className="block text-white hover:text-primary">
              Features
            </Link>
            <Link to="/contact" className="block text-white hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;