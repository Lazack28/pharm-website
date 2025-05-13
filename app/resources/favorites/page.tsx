import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function FavoritesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Favorites</h1>
          <p className="text-muted-foreground">Your saved resources</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Favorites Feature</CardTitle>
          <CardDescription>
            This feature will be enhanced in a future update to allow saving resources without requiring login
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <Heart className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">Favorites Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mb-6">
            We're working on implementing a way to save your favorite resources using local storage, so you won't need
            to create an account.
          </p>
          <Button asChild>
            <Link href="/resources">Browse Resources</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
