import { SEO } from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountrySection from "@/components/countries/CountrySection";
import { Tv, Globe2 } from "lucide-react";

const Countries = () => {
  const countries = [
    {
      name: "France",
      channels: "2,500+",
      languages: ["French", "English"],
      popular: ["TF1", "France 2", "Canal+", "M6"],
      icon: "🇫🇷"
    },
    {
      name: "España",
      channels: "1,800+",
      languages: ["Spanish", "English"],
      popular: ["La 1", "Antena 3", "Telecinco", "La Sexta"],
      icon: "🇪🇸"
    },
    {
      name: "Germany",
      channels: "2,000+",
      languages: ["German", "English"],
      popular: ["ARD", "ZDF", "RTL", "ProSieben"],
      icon: "🇩🇪"
    },
    {
      name: "United Kingdom",
      channels: "3,000+",
      languages: ["English"],
      popular: ["BBC", "ITV", "Channel 4", "Sky"],
      icon: "🇬🇧"
    }
  ];

  return (
    <div className="min-h-screen bg-navy">
      <SEO 
        title="IPTV Channels by Country | European TV Channels"
        description="Access premium IPTV channels from France, Spain, Germany, and the UK. Watch your favorite European TV channels in HD quality."
        keywords="IPTV France, IPTV Spain, IPTV Germany, IPTV UK, European IPTV channels"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            European IPTV Channels
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Access thousands of channels from major European countries with our premium IPTV service
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {countries.map((country) => (
            <CountrySection 
              key={country.name}
              {...country}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Countries;