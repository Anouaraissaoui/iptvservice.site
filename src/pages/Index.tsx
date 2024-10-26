import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <Stats />
      <PricingCards />
      <Benefits />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;