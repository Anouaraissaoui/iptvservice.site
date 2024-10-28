import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/fr", label: "Accueil" },
    { href: "/fr/features", label: "Fonctionnalités" },
    { href: "/fr/pricing", label: "Tarifs" },
    { href: "/fr/blog", label: "Blog" },
    { href: "/fr/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/fr"
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
          >
            IPTV
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link to="/fr/pricing">
                Commencer
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-primary transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-gray-300 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full" asChild>
              <Link to="/fr/pricing" onClick={toggleMenu}>
                Commencer
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;