import { Button } from "@/components/ui/button"
import Image from 'next/image';
import BackImage from "@/app/components/images/background.jpg"

export default function Hero() {
  return (
    <section className="relative py-20 px-4 md:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-foreground/90" />
        <Image
          src={BackImage}
          alt="Digital Marketing Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-75"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Maximize Your Digital Advertising ROI
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Full-spectrum digital marketing solutions: Native Ads, Affiliate Marketing, Software Development & QA Testing under one roof.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" variant="secondary">
            Free Strategy Session
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}