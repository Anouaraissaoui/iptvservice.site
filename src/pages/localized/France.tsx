import { LocalizedPage } from "@/components/LocalizedPage";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const France = () => {
  return (
    <LocalizedPage
      country="France"
      languageCode="fr"
      title="Service IPTV Premium | Chaînes TV Françaises en Direct"
      description="Accédez à plus de 18 000 chaînes TV françaises en direct. Service IPTV premium avec qualité HD/4K, activation instantanée et support 24/7."
    >
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Service IPTV France</h1>
          {/* Add French content here */}
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default France;