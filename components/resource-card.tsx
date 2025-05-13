import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Heart, Calendar } from "lucide-react"
import Link from "next/link"

interface ResourceCardProps {
  title: string
  type: string
  year: number
  semester: number
  fileSize: string
  fileType: string
  downloads: number
  date: string
  isFavorite?: boolean
}

export function ResourceCard({
  title,
  type,
  year,
  semester,
  fileSize,
  fileType,
  downloads,
  date,
  isFavorite = false,
}: ResourceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge variant={type === "Past Paper" ? "destructive" : "default"}>{type}</Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8" title="Save to favorites (coming soon)">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="font-medium">Year:</span> {year}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Semester:</span> {semester}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Size:</span> {fileSize}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Format:</span> {fileType}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {date}
        </div>
        <div className="flex items-center gap-1">
          <Download className="h-3 w-3" />
          {downloads}
        </div>
        <Button size="sm" asChild>
          <Link href={`/resources/${encodeURIComponent(title.toLowerCase().replace(/ /g, "-"))}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
