import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function NewsletterSignup() {
  return (
    <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-0 shadow-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl">Stay Updated</CardTitle>
        <CardDescription className="text-base md:text-lg">
          Subscribe to our newsletter for the latest resources and updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-1" required />
          <Button type="submit">Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  )
}
