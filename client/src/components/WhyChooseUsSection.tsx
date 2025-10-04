import { Shield, Zap, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "End-to-End Solutions",
    description: "From strategy to execution, we handle every aspect of your digital marketing and technology needs under one roof.",
    stat: "100%",
    statLabel: "Full-Service"
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Our streamlined processes and experienced team get your campaigns live faster without compromising quality.",
    stat: "30 Days",
    statLabel: "Avg. Launch Time"
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    description: "Every decision backed by analytics and continuous optimization to maximize your ROI and business growth.",
    stat: "3x",
    statLabel: "Avg. ROI Increase"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Your success is our priority. Get direct access to our experts who understand your business inside out.",
    stat: "24/7",
    statLabel: "Expert Support"
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Why Choose DigiSync</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine marketing expertise with technical excellence to deliver measurable business results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover-elevate transition-all"
              data-testid={`card-benefit-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="mb-4">
                <div className="font-heading font-bold text-3xl text-primary mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {benefit.statLabel}
                </div>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
