import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$450",
    description: "Perfect for small ad tech projects",
    features: ["Ad server basic testing", "Social Media Management 3x24/7", "Basic analytics verification", "Email support"],
  },
  {
    name: "Pro",
    price: "$1,209",
    description: "Ideal for growing ad tech companies",
    features: [
      "Full ad server testing suite",
      "Comprehensive DSP/SSP QA",
      "Advanced analytics verification",
      "Ad creative testing",
      "Social Media Management (Full support)",
      "Priority email & phone support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale operations",
    features: [
      "Custom testing solutions",
      "Dedicated QA team",
      "24/7 support",
      "Quarterly performance reviews",
      "API integration assistance",
      "Custom ad creative testing",
      "Social Media Management (Full support)",
      "Priority email & phone support",
      "Annual performance reviews",
      "24/7 support",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 1 ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{index === 2 ? "Contact Sales" : "Get Started"}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

