import { LocalizedPage } from "@/components/LocalizedPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Germany = () => {
  return (
    <LocalizedPage
      country="Germany"
      languageCode="de"
      title="Premium IPTV Service | Deutsche TV-Kanäle Live"
      description="Zugriff auf über 18.000 deutsche TV-Kanäle live. Premium IPTV-Service mit HD/4K-Qualität, sofortiger Aktivierung und 24/7-Support."
    >
      <div className="min-h-screen bg-navy">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-white">IPTV Service Deutschland</h1>
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default Germany;