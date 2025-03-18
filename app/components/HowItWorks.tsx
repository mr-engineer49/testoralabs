import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Search, ClipboardCheck, BarChart2, Code, Zap } from "lucide-react"

const steps = [
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "1. Discovery",
    description: "We analyze your business goals, target audience, and current marketing performance to identify opportunities.",
  },
  {
    icon: <ClipboardCheck className="h-12 w-12 text-primary" />,
    title: "2. Strategy",
    description: "Our team develops a tailored advertising and technology strategy aligned with your business objectives.",
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "3. Implementation",
    description: "We execute the strategy through precise campaign setup, development, and rigorous QA processes.",
  },
  {
    icon: <BarChart2 className="h-12 w-12 text-primary" />,
    title: "4. Optimization",
    description: "Continuous data analysis and iterative improvements to maximize ROI and campaign effectiveness.",
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "5. Scale",
    description: "Once we've established what works, we scale successful campaigns and strategies for maximum growth.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Process</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A systematic approach to delivering measurable results for your digital marketing initiatives
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center h-full">
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