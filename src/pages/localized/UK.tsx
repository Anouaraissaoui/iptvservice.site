import { LocalizedPage } from "@/components/LocalizedPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UK = () => {
  return (
    <LocalizedPage
      country="United Kingdom"
      languageCode="en-GB"
      title="Premium IPTV Service | UK TV Channels Live"
      description="Access over 18,000 UK TV channels live. Premium IPTV service with HD/4K quality, instant activation, and 24/7 support."
    >
      <div className="min-h-screen bg-navy">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-white">IPTV Service UK</h1>
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default UK;