import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">PharmaSJUT</h3>
            <p className="text-muted-foreground mb-4">Your comprehensive resource for pharmacy education at SJUT.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/type/notes"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/type/past-papers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Past Papers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <p className="text-muted-foreground mb-4">Join our newsletter for updates</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 flex space-x-4">
              <Button variant="outline" size="sm" className="text-xs">
                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                <Link href="https://t.me/pharmasjut" target="_blank" rel="noopener noreferrer">
                  Telegram
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PharmaSJUT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
