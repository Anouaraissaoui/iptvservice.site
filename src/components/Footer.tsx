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

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const legalLinks = [
    { name: "Terms", path: "/terms" },
    { name: "Privacy", path: "/privacy" }
  ];

  const supportLinks = [
    { name: "24/7 Support", path: "/contact" },
    { name: "FAQs", path: "/features#faq" }
  ];

  const resourceLinks = [
    {
      name: "Learn more about IPTV",
      href: "https://en.wikipedia.org/wiki/Internet_Protocol_television",
      description: "Discover the technology behind IPTV on Wikipedia"
    }
  ];

  return (
    <footer className="bg-navy-light relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
      
      <div className="container mx-auto py-20 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Brand Section */}
          <div className="space-y-8 text-center">
            <a href="/" className="inline-flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Main Pages</h3>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.path}>
                    <a 
                      href={link.path}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <a 
                      href={link.path}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.path}>
                    <a 
                      href={link.path}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Resources</h3>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                      rel="dofollow"
                      target="_blank"
                      title={link.description}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Connect</h3>
              {/* Social Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} IPTV Service. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a 
                  href="/terms" 
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  Terms of Service
                </a>
                <a 
                  href="/privacy" 
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
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