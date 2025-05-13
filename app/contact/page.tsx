"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Show success message or redirect
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions or feedback? We're here to help. Reach out to us using any of the methods below.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">Send us an email and we'll get back to you within 24 hours.</p>
            <a href="mailto:contact@pharmasjut.xyz" className="text-primary hover:underline">
              contact@pharmasjut.xyz
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Chat With Us</h3>
            <p className="text-muted-foreground mb-4">Connect with us on WhatsApp or Telegram for quick responses.</p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://t.me/pharmasjut" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-muted-foreground mb-4">Find us at the School of Pharmacy, SJUT Campus.</p>
            <address className="not-italic">
              School of Pharmacy
              <br />
              St. John's University of Tanzania
              <br />
              Dodoma, Tanzania
            </address>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="resources">Resource Request</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center">
          <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Would Be Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
