"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`py-4 px-4 md:px-6 lg:px-8 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          DigiSync Solutions
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-muted-foreground hover:text-primary">
            Services
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-primary">
            Process
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary">
            Pricing
          </Link>
          <Link href="#case-studies" className="text-muted-foreground hover:text-primary">
            Case Studies
          </Link>
          <Link href="#faq" className="text-muted-foreground hover:text-primary">
            FAQ
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button>Free Consultation</Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-background p-4 rounded-md shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link href="#services" className="text-muted-foreground hover:text-primary">
              Services
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-primary">
              Process
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary">
              Pricing
            </Link>
            <Link href="#case-studies" className="text-muted-foreground hover:text-primary">
              Case Studies
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-primary">
              FAQ
            </Link>
            <Button className="w-full">Free Consultation</Button>
          </nav>
        </div>
      )}
    </header>
  )
}