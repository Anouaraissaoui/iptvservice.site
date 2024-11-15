import { MessageCircle, Mail, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick response via WhatsApp",
      delay: 0.1
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "support@iptvservice.site",
      delay: 0.2
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "24/7 Support Line",
      delay: 0.3
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      description: "Average: 5-10 minutes",
      delay: 0.4
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Have questions about our IPTV service? Our dedicated support team is here to help you 24/7.
        </p>
      </div>
      
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: method.delay }}
            className="flex items-center gap-4 text-gray-300 p-4 rounded-lg bg-navy-light/50 border border-white/10 hover:border-primary/50 transition-colors"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              {method.icon}
            </div>
            <div>
              <h3 className="font-medium text-white">{method.title}</h3>
              <p className="text-gray-400">{method.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;