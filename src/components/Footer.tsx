import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Troubleshooting", path: "/troubleshooting" }
  ];

  const resourceLinks = [
    { name: "Setup Guide", path: "/troubleshooting" },
    { name: "Channel List", path: "/features#channels" },
    { name: "USA IPTV Guide", path: "/blog/usa-iptv-guide" },
    { name: "FAQs", path: "/features#faq" }
  ];

  const supportLinks = [
    { name: "24/7 Support", path: "/contact" },
    { name: "Technical Help", path: "/troubleshooting" },
    { name: "Subscription Help", path: "/pricing" }
  ];

  return (
    <footer 
      className="bg-navy-light relative overflow-hidden border-t border-white/10"
      role="contentinfo"
      aria-label="Site Footer"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" aria-hidden="true" />
      
      <div className="container max-w-[1200px] mx-auto py-24 px-6 relative">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Brand Section */}
          <div className="space-y-8 text-center">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10"
              aria-label="Return to Homepage"
            >
              <span className="text-primary font-bold text-2xl tracking-tight">
                IPTV Service
              </span>
            </a>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Experience premium IPTV streaming with our reliable and high-quality service. 
              Watch your favorite content anytime, anywhere.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left" aria-label="Footer Navigation">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Main Pages</h3>
              <ul className="space-y-2" role="list">
                {mainLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`Navigate to ${link.name}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Resources</h3>
              <ul className="space-y-2" role="list">
                {resourceLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`Access ${link.name}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Support</h3>
              <ul className="space-y-2" role="list">
                {supportLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`Get ${link.name}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Connect</h3>
              {/* Social Links */}
              <div 
                className="flex flex-wrap justify-center md:justify-start gap-4"
                role="list"
                aria-label="Social Media Links"
              >
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-gray-400 transition-all duration-300"
                    asChild
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </nav>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} IPTV Service. All rights reserved.
              </p>
              <nav className="flex items-center gap-6" aria-label="Legal">
                <Link 
                  to="/terms" 
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/privacy" 
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
