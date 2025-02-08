import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Comprehensive Testing",
    description: "End-to-end testing for all your ad tech software needs.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Quality Assurance",
    description: "Rigorous QA processes to ensure flawless performance.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Rapid Support",
    description: "24/7 support to keep your ad operations running smoothly.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

