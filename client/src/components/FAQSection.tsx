import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you integrate advertising with technology solutions?",
    answer: "I take a holistic approach by combining marketing strategy with technical implementation. I include both marketing experts and software developers who work together to ensure your campaigns are not only well-targeted but also supported by robust technical infrastructure, landing pages, and tracking systems."
  },
  {
    question: "What makes your QA testing process different for marketing technology?",
    answer: "I QA process is specifically designed for marketing technology stacks. I test not just for functionality, but also for conversion optimization, tracking accuracy, page load speeds, and cross-platform compatibility. This ensures your marketing campaigns perform flawlessly across all devices and platforms."
  },
  {
    question: "How long does it typically take to see results from your services?",
    answer: " Most clients see initial improvements within the first 30-60 days. However, significant ROI improvements typically occur after 3-6 months as we gather data, optimize campaigns, and scale what works. Our process is designed for sustainable, long-term growth rather than quick wins."
  },
  {
    question: "Can you work with our existing marketing team or technology vendors?",
    answer: "Absolutely! I'm designed to complement your existing team. I can integrate with your current tools, work alongside your internal marketers, and collaborate with your existing technology vendors to enhance your overall digital marketing ecosystem."
  },
  {
    question: "How do you handle data privacy regulations in advertising campaigns?",
    answer: "I strictly adhere to GDPR, CCPA, and other relevant data privacy regulations. All our campaigns are designed with privacy-first principles, including proper consent management, data anonymization, and compliance tracking. I regularly audit our processes to ensure ongoing compliance."
  },
  {
    question: "What metrics do you use to measure success?",
    answer: "I focus on business outcomes, not just vanity metrics. While we track standard metrics like click-through rates and impressions, our primary focus is on ROI, cost per acquisition, conversion rates, customer lifetime value, and overall revenue impact. I provide transparent reporting on all key performance indicators."
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Common questions about our integrated marketing and technology services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
