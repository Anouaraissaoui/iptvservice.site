import { LocalizedPage } from "@/components/LocalizedPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const France = () => {
  return (
    <LocalizedPage
      country="France"
      languageCode="fr"
      title="Service IPTV Premium | Chaînes TV Françaises en Direct"
      description="Accédez à plus de 18 000 chaînes TV françaises en direct. Service IPTV premium avec qualité HD/4K, activation instantanée et support 24/7."
    >
      <div className="min-h-screen bg-navy">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <h1 className="text-4xl font-bold mb-8 text-white">Service IPTV Premium en France</h1>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Découvrez Notre Service IPTV Premium</h2>
              <p className="text-gray-300">
                Profitez d'une expérience télévisuelle incomparable avec notre service IPTV haut de gamme. 
                Accédez à plus de 18 000 chaînes en direct, films et séries en qualité HD et 4K.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Caractéristiques Principales</h2>
              <ul className="space-y-4 text-gray-300">
                <li>✓ Plus de 18 000 chaînes françaises et internationales</li>
                <li>✓ Qualité HD/4K garantie</li>
                <li>✓ Compatible avec tous les appareils</li>
                <li>✓ Support technique 24/7 en français</li>
                <li>✓ Installation facile et rapide</li>
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default France;