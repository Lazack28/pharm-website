import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ResourceCard } from "@/components/resource-card"
import { CategoryCard } from "@/components/category-card"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { VercelDeployButton } from "@/components/vercel-deploy-button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
          Welcome to PharmaSJUT
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
          Your comprehensive resource for pharmacy education at SJUT. Access notes, past papers, and study materials all
          in one place.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Input
            type="search"
            placeholder="Search for notes, past papers, or topics..."
            className="pl-10 py-6 text-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">Search</Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/resources">Browse Resources</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard
            title="Year 1"
            description="Foundation courses and introductory pharmacy subjects"
            icon="graduation-cap"
            href="/resources/year/1"
          />
          <CategoryCard
            title="Year 2"
            description="Intermediate pharmaceutical sciences and practices"
            icon="flask"
            href="/resources/year/2"
          />
          <CategoryCard
            title="Year 3"
            description="Advanced clinical pharmacy and specialized topics"
            icon="pill"
            href="/resources/year/3"
          />
          <CategoryCard
            title="Year 4"
            description="Professional practice and research methodology"
            icon="stethoscope"
            href="/resources/year/4"
          />
          <CategoryCard
            title="Past Papers"
            description="Previous examination papers with model answers"
            icon="file-text"
            href="/resources/type/past-papers"
          />
          <CategoryCard
            title="Lecture Notes"
            description="Comprehensive notes from lectures and seminars"
            icon="book-open"
            href="/resources/type/notes"
          />
        </div>
      </section>

      {/* Recent Resources */}
      <section className="py-12 bg-muted/50 rounded-xl p-8 my-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Recently Added</h2>
          <Button variant="link" asChild>
            <Link href="/resources">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="Pharmacology Exam 2024"
            type="Past Paper"
            year={3}
            semester={1}
            fileSize="2.4 MB"
            fileType="PDF"
            downloads={124}
            date="May 1, 2024"
          />
          <ResourceCard
            title="Medicinal Chemistry Notes"
            type="Lecture Notes"
            year={2}
            semester={2}
            fileSize="5.1 MB"
            fileType="PDF"
            downloads={87}
            date="April 28, 2024"
          />
          <ResourceCard
            title="Pharmaceutical Calculations"
            type="Study Guide"
            year={1}
            semester={1}
            fileSize="3.7 MB"
            fileType="PDF"
            downloads={156}
            date="April 25, 2024"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Use PharmaSJUT?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
            <p className="text-muted-foreground">
              Find exactly what you need with our advanced search and filtering system.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Organization icon"
                width={24}
                height={24}
                className="h-6 w-6 text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Well Organized</h3>
            <p className="text-muted-foreground">
              Content categorized by year, semester, and module for easy navigation.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Download icon"
                width={24}
                height={24}
                className="h-6 w-6 text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Downloads</h3>
            <p className="text-muted-foreground">Secure and fast downloads for all resources in various formats.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12">
        <NewsletterSignup />
      </section>

      {/* Vercel Deployment */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Deploy Your Own Instance</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Want to customize this site for your own institution? Deploy your own version to Vercel with one click.
        </p>
        <VercelDeployButton />
      </section>
    </div>
  )
}
