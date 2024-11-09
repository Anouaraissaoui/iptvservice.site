import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Faq {
  question: string;
  answer: string;
}

export const FaqSection = ({ faqs }: { faqs: Faq[] }) => (
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