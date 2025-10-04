import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "For small businesses starting their digital journey",
    features: [
      "Single platform ad management",
      "Basic website QA testing",
      "Monthly performance report",
      "Email support",
      "2 ad creative revisions"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "$1,199",
    description: "For growing businesses seeking more channels",
    features: [
      "Multi-platform ad management",
      "Full website QA testing",
      "Bi-weekly performance reports",
      "Email & phone support",
      "5 ad creative revisions",
      "Basic landing page development"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "For established businesses looking to scale",
    features: [
      "Comprehensive ad management (all channels)",
      "Complete software QA testing",
      "A/B testing implementation",
      "Weekly performance reports",
      "Priority support",
      "Unlimited ad creative revisions",
      "Advanced landing page development",
      "Basic custom software development"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale operations",
    features: [
      "Full-service digital marketing management",
      "End-to-end software development",
      "Automated QA testing implementation",
      "Real-time performance dashboard",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom reporting & analytics",
      "White-label solutions",
      "API integrations"
    ],
    cta: "Contact Sales",
    popular: false
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible solutions to match your business needs and growth stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
              data-testid={`card-pricing-${index}`}
            >
              {plan.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground"
                  data-testid="badge-most-popular"
                >
                  Most Popular
                </Badge>
              )}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-xl mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-1">
                  <span className="font-heading font-bold text-4xl">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                data-testid={`button-pricing-${index}`}
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                onClick={() => console.log(`Selected plan: ${plan.name}`)}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
