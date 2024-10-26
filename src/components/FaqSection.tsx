import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="py-20 bg-navy">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-navy-light border border-white/10 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
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