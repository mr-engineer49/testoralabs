import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart2, Gauge, Users, TrendingUp, Cpu, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Data-Driven Approach",
    description: "All campaigns and development decisions backed by comprehensive data analysis and metrics.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Channel Integration",
    description: "Seamless integration between advertising channels, affiliate networks, and technology platforms.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Tech-Powered Marketing",
    description: "Custom technology solutions that amplify your marketing efficiency and performance.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Specialized Experts",
    description: "Team of specialists in both marketing and technology for truly integrated solutions.",
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary" />,
    title: "Rapid Implementation",
    description: "Agile processes that get your campaigns and software to market quickly without sacrificing quality.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Transparent Reporting",
    description: "Clear, actionable reporting that tracks your ROI and campaign performance metrics.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Our unique approach combines marketing strategy and technical expertise
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="h-full">
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