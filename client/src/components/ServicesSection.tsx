import { Code, Megaphone, Share2, CheckCircle, Cpu, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web & Landing Page Development",
    features: [
      "Custom website development",
      "Conversion-focused landing pages",
      "E-commerce solutions",
      "CMS integration"
    ]
  },
  {
    icon: Megaphone,
    title: "Google Ads & Facebook Management",
    features: [
      "PPC campaign optimization",
      "Social media advertising",
      "Remarketing strategies",
      "A/B testing & analytics"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Management",
    features: [
      "Content strategy & creation",
      "Community engagement",
      "Multi-platform management",
      "Performance reporting"
    ]
  },
  {
    icon: CheckCircle,
    title: "Software Testing & QA",
    features: [
      "Functional testing",
      "Performance testing",
      "Cross-platform QA",
      "Test automation"
    ]
  },
  {
    icon: Cpu,
    title: "RPA Automation Solutions",
    features: [
      "Process automation",
      "Workflow optimization",
      "Data integration",
      "Efficiency improvement"
    ]
  },
  {
    icon: Brain,
    title: "AI Integration Services",
    features: [
      "AI-powered chatbots",
      "Predictive analytics",
      "Machine learning models",
      "Natural language processing"
    ]
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing and technology solutions to power your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all"
              data-testid={`card-service-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
