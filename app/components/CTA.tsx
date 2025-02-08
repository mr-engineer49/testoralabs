import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Ad Tech?</h2>
        <p className="text-xl mb-8 opacity-90">
          Get started with our expert testing and QA services today and take your ad technology to the next level.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary">
            Schedule a Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

