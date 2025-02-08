import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, AdTech Innovators",
    content:
      "AdTechQA's testing services have significantly improved the reliability of our ad serving platform. Their attention to detail is unmatched.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, Digital Ads Co",
    content:
      "The QA team at AdTechQA caught critical issues that would have impacted our campaign performance. They're an essential part of our development process now.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Ad Ops, Global Media Group",
    content:
      "Their support team is responsive and knowledgeable. They've helped us optimize our ad operations and improve our overall efficiency.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground opacity-20" />
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

