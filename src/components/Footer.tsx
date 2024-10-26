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
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container mx-auto py-16 relative">
        <div className="space-y-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-2xl tracking-tight">
                IPTV Service
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Experience premium IPTV streaming with our reliable and high-quality service. 
              Watch your favorite content anytime, anywhere.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-gray-400 transition-all duration-300"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 IPTV Service. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                  Privacy Policy
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