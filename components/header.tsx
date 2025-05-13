"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Search, Menu, X, Star } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const isLoggedIn = false // This would be determined by your auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center gap-2 py-4">
                <span className="text-xl font-bold">PharmaSJUT</span>
              </Link>
              <div className="grid gap-2 py-4">
                <Link href="/" className="flex w-full items-center py-2 text-lg font-medium">
                  Home
                </Link>
                <Link href="/resources" className="flex w-full items-center py-2 text-lg font-medium">
                  Resources
                </Link>
                <Link href="/resources/type/notes" className="flex w-full items-center py-2 text-lg font-medium">
                  Notes
                </Link>
                <Link href="/resources/type/past-papers" className="flex w-full items-center py-2 text-lg font-medium">
                  Past Papers
                </Link>
                <Link href="/contact" className="flex w-full items-center py-2 text-lg font-medium">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="hidden font-bold sm:inline-block">PharmaSJUT</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500 to-amber-500 p-6 no-underline outline-none focus:shadow-md"
                          href="/resources"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">All Resources</div>
                          <p className="text-sm leading-tight text-white/90">
                            Browse our complete collection of pharmacy educational materials
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/resources/type/notes" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Notes</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Lecture notes and study materials
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/type/past-papers" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Past Papers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Previous exams and model answers
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/favorites" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Favorites</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Your saved resources
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          {showSearch ? (
            <div className="relative hidden md:block">
              <Input type="search" placeholder="Search resources..." className="w-[200px] lg:w-[300px] pl-8" />
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)} className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <ModeToggle />
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="/resources/favorites">
              <Star className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
