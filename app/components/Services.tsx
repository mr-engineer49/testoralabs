import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Cpu, Code, BarChart3, Layout, Globe, ShoppingBag, CheckSquare } from "lucide-react"

const services = [
  {
    icon: <Layout className="h-8 w-8 text-primary" />,
    title: "Native Advertising",
    description: "Strategic native ad campaigns that blend seamlessly with content platforms for higher engagement and ROI.",
    tags: ["Content Discovery", "In-feed Ads", "Promoted Listings", "Campaign Optimization"],
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "Affiliate Marketing",
    description: "End-to-end affiliate program management to expand your reach and drive scalable revenue growth.",
    tags: ["Program Setup", "Partner Acquisition", "Commission Structure", "Performance Analytics"],
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Online Ad Management",
    description: "Comprehensive digital advertising solutions across search, social, display, and video platforms.",
    tags: ["PPC", "Social Media Ads", "Remarketing", "A/B Testing"],
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "AdTech Development",
    description: "Custom adtech software solutions that automate and optimize your advertising operations.",
    tags: ["Ad Servers", "DSP/SSP Integration", "Data Management", "Analytics Systems"],
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-primary" />,
    title: "QA & Software Testing",
    description: "Rigorous quality assurance for your marketing technology stack and digital properties.",
    tags: ["Functional Testing", "Performance Testing", "Cross-platform QA", "Automation"],
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Conversion-focused websites and landing pages built for optimal ad performance and user experience.",
    tags: ["Custom Development", "Landing Pages", "E-commerce", "CMS Solutions"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive digital advertising and technology solutions to power your marketing ecosystem
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}