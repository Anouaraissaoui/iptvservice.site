import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FaqSection = () => {
  const faqs = [
    {
      question: "What devices are compatible with your IPTV service?",
      answer: "Our IPTV service is compatible with a wide range of devices, including Smart TVs, Android and iOS devices, as well as streaming devices like Amazon Fire Stick and Roku."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support to help with any issues or questions you may have."
    },
    {
      question: "Is there a trial period available?",
      answer: "Yes, we offer a free trial so you can test our IPTV service before purchasing a subscription."
    },
    {
      question: "Can I become a reseller of your IPTV services?",
      answer: "Absolutely! Join our IPTV reseller program and start earning profits by selling subscriptions to others."
    }
  ];

  return (
    <div className="py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] animate-[grid_20s_linear_infinite]" />
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our IPTV service
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-navy-light border border-white/10 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
            >
              <AccordionTrigger className="text-white hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;