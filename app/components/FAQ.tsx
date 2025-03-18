import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do you integrate native advertising with affiliate marketing?",
    answer:
      "We create a seamless funnel by using native ads to drive high-quality traffic to content that naturally incorporates affiliate offers. This approach yields higher conversion rates as users are engaged with valuable content before encountering affiliate promotions. Our technical team ensures proper tracking and attribution across the entire journey.",
  },
  {
    question: "What makes your QA testing process different for marketing technology?",
    answer:
      "Our QA process is specifically designed for marketing technology, focusing on tracking accuracy, conversion path integrity, cross-device functionality, and load performance under traffic spikes. We use both automated and manual testing methods that simulate real user journeys through your marketing funnel to ensure nothing breaks when real users arrive.",
  },
  {
    question: "How long does it typically take to see results from your services?",
    answer:
      "Initial results can be seen within 2-4 weeks as we implement quick wins and establish baseline performance. Significant improvements typically occur within 2-3 months as we optimize campaigns, refine targeting, and implement technical improvements. Long-term strategic growth continues to build over 6-12 months as we scale successful channels and introduce new opportunities.",
  },
  {
    question: "Can you work with our existing marketing team or technology vendors?",
    answer:
      "Absolutely. We're designed to complement your existing resources, not replace them. We can collaborate with your in-house marketing team, providing specialized expertise in areas like native advertising and affiliate marketing. Similarly, we integrate with your current technology vendors, filling gaps and enhancing capabilities rather than requiring you to switch platforms.",
  },
  {
    question: "How do you handle data privacy regulations in advertising campaigns?",
    answer:
      "We implement a privacy-first approach in all our campaigns and development work. This includes ensuring GDPR, CCPA, and other regional compliance, implementing proper consent management, using privacy-friendly tracking alternatives, and building systems that respect user preferences. Our QA process includes specific tests for privacy compliance across all platforms.",
  },
  {
    question: "What metrics do you use to measure success?",
    answer: 
      "We establish clear KPIs at the beginning of each engagement based on your business objectives. These typically include ROI, ROAS, CPA, conversion rates, and revenue attribution. For technical implementations, we track load times, error rates, cross-browser compatibility, and user experience metrics. We provide transparent reporting on all metrics through custom dashboards.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-12">
          Common questions about our integrated marketing and technology services
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}