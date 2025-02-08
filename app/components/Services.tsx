import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, BadgePercent, BarChart, Image, Server } from "lucide-react"

const services = [
  {
    icon: <BadgePercent  className="h-8 w-8 text-primary" />,
    title: "Social Media Managment",
    description: "Social Media Management to ensure quality and provide the business with online presence",
    tags: ["SMM", "Content Creation", "Social Media Management"],
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Ad Server Testing",
    description: "Comprehensive testing for ad servers to ensure optimal performance and accuracy.",
    tags: ["Load Testing", "Integration", "Functionality"],
  },
  {
    icon: <Activity className="h-8 w-8 text-primary" />,
    title: "DSP & SSP QA",
    description: "Quality assurance for demand-side and supply-side platforms.",
    tags: ["Real-time Bidding", "Data Validation", "Performance"],
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Analytics Verification",
    description: "Verify the accuracy and reliability of your ad analytics systems.",
    tags: ["Data Accuracy", "Reporting", "Dashboard Testing"],
  },
  {
    icon: <Image className="h-8 w-8 text-primary" />,
    title: "Ad Creative Testing",
    description: "Ensure your ad creatives display correctly across all platforms and devices.",
    tags: ["Responsive Design", "Cross-browser", "Rich Media"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
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

