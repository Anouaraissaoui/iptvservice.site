import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-navy-light relative overflow-hidden border-t border-white/10">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
      
      <div className="container mx-auto py-20 relative">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Brand Section with Enhanced Design */}
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
              <span className="text-primary font-bold text-2xl tracking-tight">
                IPTV Service
              </span>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Experience premium IPTV streaming with our reliable and high-quality service. 
              Watch your favorite content anytime, anywhere.
            </p>
            {/* Enhanced Social Links */}
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-gray-400 transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                    className="group"
                  >
                    <div className="relative">
                      {social.icon}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {social.label}
                      </span>
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Bottom Section */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-400 text-sm bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm">
                © 2024 IPTV Service. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-primary text-sm transition-all duration-300 hover:scale-105 relative group"
                >
                  Terms of Service
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-primary text-sm transition-all duration-300 hover:scale-105 relative group"
                >
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;