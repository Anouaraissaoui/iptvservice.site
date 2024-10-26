import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <div className="pt-20">
        <Benefits />
      </div>
      <Footer />
    </div>
  );
};

export default Features;