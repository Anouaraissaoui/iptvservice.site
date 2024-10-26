import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-2xl">IPTV Service</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Blog</a>
          <a href="#" className="text-gray-300 hover:text-white transition">IPTV Subscription</a>
          <a href="#" className="text-gray-300 hover:text-white transition">IPTV Services</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-primary hover:text-primary/90">
            Login
          </Button>
          <Button className="bg-primary text-navy hover:bg-primary/90">
            Get Started
          </Button>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;