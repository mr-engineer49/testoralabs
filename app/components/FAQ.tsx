import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of ad tech platforms do you test?",
    answer:
      "We test a wide range of ad tech platforms, including ad servers, DSPs, SSPs, DMPs, and analytics tools. Our expertise covers both web and mobile advertising technologies.",
  },
  {
    question: "How long does a typical QA process take?",
    answer:
      "The duration of our QA process varies depending on the complexity and scale of your ad tech platform. Typically, a comprehensive QA cycle can take anywhere from 2-6 weeks, but we also offer expedited services for urgent needs.",
  },
  {
    question: "Do you offer continuous testing services?",
    answer:
      "Yes, we provide continuous testing services to ensure your ad tech platform remains optimized as you roll out new features or updates. This includes automated regression testing and periodic manual checks.",
  },
  {
    question: "Can you help with compliance testing (e.g., GDPR, CCPA)?",
    answer:
      "Absolutely. We offer specialized testing services to ensure your ad tech platform complies with various data protection and privacy regulations, including GDPR, CCPA, and other relevant standards.",
  },
  {
    question: "What sets your QA services apart from others?",
    answer:
      "Our team consists of ad tech industry veterans who understand the nuances of programmatic advertising. We use a combination of automated and manual testing methods, and our process is tailored specifically for ad tech platforms, ensuring comprehensive coverage of critical functionalities.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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

