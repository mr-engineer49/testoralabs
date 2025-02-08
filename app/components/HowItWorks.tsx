import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ClipboardCheck, Search, Zap } from "lucide-react"

const steps = [
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "1. Analyze",
    description: "We thoroughly analyze your ad tech stack and identify potential issues.",
  },
  {
    icon: <ClipboardCheck className="h-12 w-12 text-primary" />,
    title: "2. Test & QA",
    description: "Our experts conduct comprehensive testing and quality assurance processes.",
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "3. Optimize",
    description: "We provide actionable insights to optimize your ad tech performance.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">{step.icon}</div>
                <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

