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
          <h1 className="text-4xl font-bold mb-8 text-white">Servicio IPTV España</h1>
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default Spain;