import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, E-Commerce Solutions",
    content:
      "DigiSync's native advertising strategy increased our click-through rates by 87% and conversion rates by 34%. Their technical team also improved our landing page load times, creating a seamless customer journey.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Michael Chen",
    role: "CEO, SaaS Platform",
    content:
      "The affiliate program DigiSync built for us has become our primary growth channel. Their technical implementation was flawless, and the QA process they established ensures we never have tracking issues.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager, Retail Brand",
    content:
      "We've worked with many agencies, but DigiSync is the first that truly understands both marketing strategy and technical implementation. Their holistic approach delivered a 3x ROI on our ad spend.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "David Thompson",
    role: "Founder, Financial Services Startup",
    content:
      "DigiSync's custom ad technology platform automated what used to take our team days to accomplish. Their development and QA processes are rigorous, and the results speak for themselves.",
    avatar: "/api/placeholder/40/40",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Client Success Stories</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See how our integrated approach to digital marketing and technology has transformed businesses
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative h-full">
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