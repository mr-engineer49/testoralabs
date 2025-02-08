import Header from "./components/Header"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

