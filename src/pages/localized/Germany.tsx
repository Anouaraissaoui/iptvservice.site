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
          <div className="max-w-4xl mx-auto space-y-12">
            <h1 className="text-4xl font-bold mb-8 text-white">Premium IPTV-Service in Deutschland</h1>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Entdecken Sie Unseren Premium IPTV-Service</h2>
              <p className="text-gray-300">
                Erleben Sie erstklassiges Fernsehen mit unserem hochwertigen IPTV-Service. 
                Genießen Sie Zugriff auf über 18.000 Live-Kanäle, Filme und Serien in HD- und 4K-Qualität.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Hauptmerkmale</h2>
              <ul className="space-y-4 text-gray-300">
                <li>✓ Über 18.000 deutsche und internationale Kanäle</li>
                <li>✓ Garantierte HD/4K-Qualität</li>
                <li>✓ Mit allen Geräten kompatibel</li>
                <li>✓ 24/7 technischer Support auf Deutsch</li>
                <li>✓ Schnelle und einfache Installation</li>
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default Germany;