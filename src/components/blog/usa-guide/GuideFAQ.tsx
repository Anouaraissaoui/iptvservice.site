import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which IPTV services are legal in the USA?",
    answer: "IPTV itself is not illegal. The legality depends on whether the IPTV service has proper licensing agreements. Services with apps in major app stores are generally considered legal."
  },
  {
    question: "Do I need a VPN for IPTV in the USA?",
    answer: "A VPN isn't required if you're using a legitimate IPTV provider. However, it may add a layer of privacy or help access geo-restricted content."
  },
  {
    question: "How can I watch Indian TV channels legally in the USA?",
    answer: "Services like IFLEX and CalmaHUB offer Indian content. You can also explore apps from Indian broadcasters or services like Sling TV."
  }
];

export const GuideFAQ = () => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="group bg-navy-light/50 border border-white/10 rounded-xl px-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
        >
          <AccordionTrigger className="py-6 text-white group-hover:text-primary transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-data-[state=open]:bg-primary/20 transition-colors">
                <HelpCircle className="w-4 h-4" />
              </div>
              <span className="text-left">{faq.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 pb-6 pt-2 pl-14">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};