import { Search, Lightbulb, Rocket, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description: "I analyze your business goals, target audience, and current marketing performance to identify opportunities.",
    icon: Search,
  },
  {
    number: 2,
    title: "Strategy",
    description: "I develop a tailored advertising and technology strategy aligned with your business objectives.",
    icon: Lightbulb,
  },
  {
    number: 3,
    title: "Implementation",
    description: "I execute the strategy through precise campaign setup, development, and rigorous QA processes.",
    icon: Rocket,
  },
  {
    number: 4,
    title: "Optimization",
    description: "I perform Continuous data analysis and iterative improvements to maximize ROI and campaign effectiveness.",
    icon: TrendingUp,
  },
  {
    number: 5,
    title: "Scale",
    description: "I perform Once we've established what works, we scale successful campaigns and strategies for maximum growth.",
    icon: Zap,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">The Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to delivering measurable results for your digital marketing initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={step.number} 
              className="p-6 hover-elevate transition-shadow"
              data-testid={`card-process-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3 font-heading font-bold">
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
