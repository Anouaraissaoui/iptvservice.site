import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-32 pb-20 bg-navy">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Experience The #1{" "}
            <span className="text-primary">IPTV Subscription Service</span> Today!
          </h1>
          <p className="text-gray-400 text-lg">
            Unleash unmatched entertainment with our leading IPTV subscription service. Buy IPTV from the best in the industry and enjoy a seamless, high-quality viewing experience.
          </p>
          <div className="flex gap-4">
            <Button className="bg-primary text-navy hover:bg-primary/90 text-lg px-8">
              Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 text-lg px-8">
              WhatsApp
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <img 
            src="/watching-tv.jpg" 
            alt="Person watching TV" 
            className="relative rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;