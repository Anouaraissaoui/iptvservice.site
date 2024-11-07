import { LocalizedPage } from "@/components/LocalizedPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Spain = () => {
  return (
    <LocalizedPage
      country="Spain"
      languageCode="es"
      title="Servicio IPTV Premium | Canales de TV Españoles en Directo"
      description="Accede a más de 18.000 canales de TV españoles en directo. Servicio IPTV premium con calidad HD/4K, activación instantánea y soporte 24/7."
    >
      <div className="min-h-screen bg-navy">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <h1 className="text-4xl font-bold mb-8 text-white">Servicio IPTV Premium en España</h1>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Descubre Nuestro Servicio IPTV Premium</h2>
              <p className="text-gray-300">
                Disfruta de una experiencia televisiva incomparable con nuestro servicio IPTV de alta calidad. 
                Accede a más de 18.000 canales en directo, películas y series en calidad HD y 4K.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Características Principales</h2>
              <ul className="space-y-4 text-gray-300">
                <li>✓ Más de 18.000 canales españoles e internacionales</li>
                <li>✓ Calidad HD/4K garantizada</li>
                <li>✓ Compatible con todos los dispositivos</li>
                <li>✓ Soporte técnico 24/7 en español</li>
                <li>✓ Instalación rápida y sencilla</li>
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default Spain;