import { Facebook, Instagram, LinkedinIcon as LinkedIn, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="text-2xl font-bold text-primary">
            Testora Labs
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">Elevating Ad Tech with Expert QA</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Ad Server Testing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                DSP & SSP QA
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Analytics Verification
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Ad Creative Testing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61572848949971" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <LinkedIn className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/testoralabs" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-muted-foreground/10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AdTechQA. All rights reserved.
      </div>
    </footer>
  )
}

