import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "For small businesses starting their digital journey",
    features: [
      "Single platform ad management",
      "Basic affiliate setup",
      "Standard website QA testing",
      "Monthly performance report",
      "Email support",
      "2 ad creative revisions",
    ],
  },
  {
    name: "Growth",
    price: "$1,199",
    description: "For growing businesses seeking more channels",
    features: [
      "Multi-platform ad management",
      "Affiliate program setup & management",
      "Native ad campaign setup",
      "Full website QA testing",
      "Bi-weekly performance reports",
      "Email & phone support",
      "5 ad creative revisions",
      "Basic landing page development",
    ],
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "For established businesses looking to scale",
    features: [
      "Comprehensive ad management (all channels)",
      "Advanced affiliate program optimization",
      "Custom native ad strategy",
      "Complete software QA testing",
      "A/B testing implementation",
      "Weekly performance reports",
      "Priority support",
      "Unlimited ad creative revisions",
      "Advanced landing page development",
      "Basic custom software development",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale operations",
    features: [
      "Full-service digital marketing management",
      "Enterprise affiliate network development",
      "Custom adtech development",
      "End-to-end software development",
      "Automated QA testing implementation",
      "Real-time performance dashboard",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom reporting & analytics",
      "White-label solutions",
      "API integrations",
      "Strategic consulting",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pricing Plans</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Flexible solutions to match your business needs and growth stage
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 2 ? "border-primary relative" : "relative"}>
              {index === 2 && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="text-sm text-muted-foreground mb-4">per month</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{index === 3 ? "Contact Sales" : "Get Started"}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}