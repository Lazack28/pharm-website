import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, FlaskRoundIcon as Flask, Pill, Stethoscope, FileText, BookOpen } from "lucide-react"

interface CategoryCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "graduation-cap":
        return <GraduationCap className="h-8 w-8 text-primary" />
      case "flask":
        return <Flask className="h-8 w-8 text-primary" />
      case "pill":
        return <Pill className="h-8 w-8 text-primary" />
      case "stethoscope":
        return <Stethoscope className="h-8 w-8 text-primary" />
      case "file-text":
        return <FileText className="h-8 w-8 text-primary" />
      case "book-open":
        return <BookOpen className="h-8 w-8 text-primary" />
      default:
        return <BookOpen className="h-8 w-8 text-primary" />
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <div className="mb-2">{getIcon()}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href={href}>Browse</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
