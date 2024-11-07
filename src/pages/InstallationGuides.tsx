import { Tv, Smartphone, Computer, Tv as TvIcon, Phone, Laptop, Cast } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InstallationGuides = () => {
  const guides = [
    {
      icon: <Tv className="w-8 h-8 text-primary" />,
      title: "Fire TV Devices",
      description: "Firestick/Firebox/FireTV",
      link: "/guides/firetv"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Android Devices",
      description: "Android (Phones, Boxes, TVs)",
      link: "/guides/android"
    },
    {
      icon: <Computer className="w-8 h-8 text-primary" />,
      title: "Windows Devices",
      description: "Windows PCs",
      link: "/guides/windows"
    },
    {
      icon: <TvIcon className="w-8 h-8 text-primary" />,
      title: "Smart TVs",
      description: "Smart TVs (ALL)",
      link: "/guides/smarttv"
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "iOS Devices",
      description: "iPhones/iPads",
      link: "/guides/ios"
    },
    {
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: "Mac Devices",
      description: "MACs Laptops",
      link: "/guides/mac"
    },
    {
      icon: <TvIcon className="w-8 h-8 text-primary" />,
      title: "MAG Devices",
      description: "MAG Devices (STB, TVIP, Formular..)",
      link: "/guides/mag"
    },
    {
      icon: <TvIcon className="w-8 h-8 text-primary" />,
      title: "ENIGMA2/ZGEMMA",
      description: "Setup guide for ENIGMA2/ZGEMMA",
      link: "/guides/enigma2"
    },
    {
      icon: <Cast className="w-8 h-8 text-primary" />,
      title: "Google Chromecast",
      description: "ChromeCast/Google TV",
      link: "/guides/chromecast"
    }
  ];

  return (
    <>
      <SEO 
        title="IPTV Installation Guides - Setup Instructions for All Devices"
        description="Step-by-step IPTV setup guides for FireTV, Android, iOS, Smart TVs, Windows, Mac, MAG devices and more. Easy installation instructions with 24/7 support."
        canonical="https://www.iptvservice.site/guides"
      />

      <main className="min-h-screen bg-navy">
        <Navbar />
        
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Installation{" "}
              <span className="text-primary relative inline-block">
                Guides
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Below, you'll find all the guides on how to set up IPTV on your specific device! 
              If you ever encounter any difficulties, just shoot us a message, and we will help you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Card 
                key={index}
                className="bg-navy-light/50 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      {guide.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{guide.title}</h3>
                    <p className="text-gray-400">{guide.description}</p>
                    <Button asChild className="w-full mt-4">
                      <Link to={guide.link}>View Guide</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-navy-light/50 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Tv className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">7-Day Money-Back Guarantee</h3>
                  <p className="text-gray-400">
                    If you are not happy with our services for whatever reason, we'll refund your payment. No hassle, no risk.
                  </p>
                </div>
              </div>
              <Button asChild size="lg">
                <Link to="/contact">Get Support</Link>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default InstallationGuides;