import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactSEO } from "@/components/seo/ContactSEO";

const Contact = () => {
  return (
    <>
      <ContactSEO />
      <main className="min-h-screen bg-navy">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <div className="bg-navy-light/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              {/* Hidden form for Netlify form detection */}
              <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
              </form>
              
              <ContactForm />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;