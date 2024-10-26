import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <div className="pt-20">
        <PricingCards />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;