import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3 transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-medium gradient-text">Log Vikas</h3>
            <p className="text-sm text-muted-foreground">
              Empowering people through technology, news, and insights to help them grow and develop.
            </p>
          </div>
          <div className="space-y-3 transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/readers-corner"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Readers&apos; Corner
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-medium">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/readers-corner?category=technology"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/readers-corner?category=world-news"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  World News
                </Link>
              </li>
              <li>
                <Link
                  href="/readers-corner?category=jobs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Jobs & Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/readers-corner?category=entertainment"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  href="/readers-corner?category=success-stories"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-lg font-medium">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:contact@logvikas.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Log Vikas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
