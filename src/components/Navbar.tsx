import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-2xl tracking-tight hover:text-primary/90 transition-colors cursor-pointer">
            IPTV Service
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Blog", "IPTV Subscription", "IPTV Services"].map((item) => (
            <a 
              key={item}
              href="#" 
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary/90 hover:bg-primary/10"
          >
            Login
          </Button>
          <Button 
            className="bg-primary text-navy hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
          >
            Get Started
          </Button>
          <Button 
            variant="ghost" 
            className="md:hidden text-gray-300 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;