import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative py-20 px-4 md:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-foreground/90" />
        <Image
          src="/images/background.jpg?height=1080&width=1920"
          alt="Ad Tech Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Elevate Your Ad Tech with Testora Labs Expert QA 
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Comprehensive software testing, QA services, and support solutions for your online advertising technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

