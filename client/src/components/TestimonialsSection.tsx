import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "E-Commerce Solutions",
    quote: "DigiSync's advertising strategy increased our click-through rates by 87% and conversion rates by 34%. Their technical team also improved our landing page load times, creating a seamless customer journey.",
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    initials: "MC",
    name: "Michael Chen",
    role: "CEO",
    company: "SaaS Platform",
    quote: "The automation solutions DigiSync built for us has become our primary growth channel. Their technical implementation was flawless, and the QA process they established ensures we never have tracking issues.",
    gradient: "from-secondary/20 to-accent/20"
  },
  {
    initials: "ER",
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "Retail Brand",
    quote: "We've worked with many agencies, but DigiSync is the first that truly understands both marketing strategy and technical implementation. Their holistic approach delivered a 3x ROI on our ad spend.",
    gradient: "from-accent/20 to-primary/20"
  },
  {
    initials: "DT",
    name: "David Thompson",
    role: "Founder",
    company: "Financial Services Startup",
    quote: "DigiSync's custom technology platform automated what used to take our team days to accomplish. Their development and QA processes are rigorous, and the results speak for themselves.",
    gradient: "from-primary/20 to-accent/20"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how our integrated approach to digital marketing and technology has transformed businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`p-8 bg-gradient-to-br ${testimonial.gradient}`}
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <Avatar className="mr-4">
                  <AvatarFallback className="bg-primary text-primary-foreground font-heading font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
