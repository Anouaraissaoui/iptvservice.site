import { LocalizedPage } from "@/components/LocalizedPage";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Benefits from "@/components/Benefits";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const UK = () => {
  const translations = {
    hero: {
      title: "Experience the Best IPTV Service",
      subtitle: "Enjoy unmatched streaming experience with over 18,000 live channels",
      cta: "View Plans",
      contactUs: "Contact Us",
      newFeature: "New",
      experienceText: "Experience the future of TV →"
    },
    benefits: {
      title: "Benefits of IPTV",
      items: [
        {
          title: "Cost-Effective",
          description: "More affordable than traditional cable or satellite TV packages."
        },
        {
          title: "High-Quality Streaming",
          description: "Enjoy crisp, high-definition video and audio quality."
        },
        {
          title: "Flexible Viewing",
          description: "Watch your favourite content anytime, anywhere with an internet connection."
        },
        {
          title: "Global Reach",
          description: "Access a wide range of international channels and content."
        }
      ]
    }
  };

  return (
    <LocalizedPage
      country="United Kingdom"
      languageCode="en-GB"
      title="Premium IPTV Service | UK TV Channels Live"
      description="Access over 18,000 UK TV channels live. Premium IPTV service with HD/4K quality, instant activation, and 24/7 support."
    >
      <div className="min-h-screen bg-navy">
        <Navbar />
        <main>
          <Hero translations={translations.hero} />
          <Stats />
          <PricingCards />
          <Benefits translations={translations.benefits} />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default UK;