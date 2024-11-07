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
          <div className="max-w-4xl mx-auto space-y-12">
            <h1 className="text-4xl font-bold mb-8 text-white">Premium IPTV Service in the UK</h1>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Discover Our Premium IPTV Service</h2>
              <p className="text-gray-300">
                Experience unmatched television with our premium IPTV service. 
                Access over 18,000 live channels, films, and series in HD and 4K quality.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Key Features</h2>
              <ul className="space-y-4 text-gray-300">
                <li>✓ Over 18,000 UK and international channels</li>
                <li>✓ Guaranteed HD/4K quality</li>
                <li>✓ Compatible with all devices</li>
                <li>✓ 24/7 technical support</li>
                <li>✓ Quick and easy setup</li>
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </LocalizedPage>
  );
};

export default UK;