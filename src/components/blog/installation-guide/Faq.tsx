import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const Faq = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-16 space-y-8"
    >
      <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
      <div className="grid gap-6">
        <Card className="bg-navy-light border-white/10">
          <Card.Content className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">What devices are compatible with your IPTV service?</h3>
            <p className="text-gray-300">
              Our IPTV service is compatible with Smart TVs (Samsung, LG, Android TV), mobile devices (iOS/Android), streaming devices (Amazon Fire Stick, Roku, Apple TV), and MAG boxes. You can watch on any device with an internet connection.
            </p>
          </Card.Content>
        </Card>
        <Card className="bg-navy-light border-white/10">
          <Card.Content className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Do you offer customer support?</h3>
            <p className="text-gray-300">
              Yes, we provide 24/7 customer support via live chat, WhatsApp, and email. Our technical team is always ready to help with setup, troubleshooting, or any questions you may have.
            </p>
          </Card.Content>
        </Card>
        <Card className="bg-navy-light border-white/10">
          <Card.Content className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">What channels are included in the subscription?</h3>
            <p className="text-gray-300">
              Our service includes 18,000+ channels from around the world, including sports, movies, news, entertainment, and children's programming. We regularly update our channel list to ensure the best content.
            </p>
          </Card.Content>
        </Card>
        <Card className="bg-navy-light border-white/10">
          <Card.Content className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Is there a money-back guarantee?</h3>
            <p className="text-gray-300">
              Yes, we offer a 100% satisfaction guarantee. If you're not completely satisfied with our service within the first 24 hours, we'll provide a full refund.
            </p>
          </Card.Content>
        </Card>
      </div>
    </motion.section>
  );
};
