import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-navy-light py-12 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <span className="text-primary font-bold text-3xl tracking-tight">IPTV Service</span>
          
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
          
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} IPTV Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;