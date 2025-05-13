"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { useEffect } from "react"
import Script from "next/script"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [emailJSLoaded, setEmailJSLoaded] = useState(false)

  useEffect(() => {
    // Check if EmailJS is already loaded
    if (typeof window !== "undefined" && window.emailjs) {
      window.emailjs.init("GCqWR_iPIjGj8IZfy")
      setEmailJSLoaded(true)
    }
  }, [])

  const handleScriptLoad = () => {
    if (typeof window !== "undefined" && window.emailjs) {
      window.emailjs.init("GCqWR_iPIjGj8IZfy")
      setEmailJSLoaded(true)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailJSLoaded) {
      setFormStatus({
        type: "error",
        message: "Email service is still loading. Please try again in a moment.",
      })
      return
    }

    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    const form = e.target as HTMLFormElement
    const userEmail = (form.elements.namedItem("reply_to") as HTMLInputElement)?.value
    const userName = (form.elements.namedItem("from_name") as HTMLInputElement)?.value

    if (!userEmail) {
      setFormStatus({
        type: "error",
        message: "Please provide a valid email address.",
      })
      setIsSubmitting(false)
      return
    }

    try {
      // 1. Send message to admin
      await window.emailjs.sendForm(
        "service_hrbf3gf", // Service ID
        "template_60sh00g", // Admin Notification Template ID
        form,
      )

      // 2. Send auto-reply to user
      await window.emailjs.send(
        "service_hrbf3gf", // Same service as above
        "template_2b3j2xd", // Auto-Reply Template ID
        {
          to_email: userEmail, // Must match {{to_email}} in your EmailJS template
          from_name: "PharmaSJUT Team", // Static sender name
          user_name: userName, // Optional: Include user's name in the auto-reply
        },
      )

      setFormStatus({
        type: "success",
        message: "Message sent! Check your email for confirmation.",
      })
      form.reset()
    } catch (error) {
      console.error("EmailJS Error:", error)
      setFormStatus({
        type: "error",
        message: "Message failed to send. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />

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
              <a href="mailto:lazaromtaju12@gmail.com" className="text-primary hover:underline">
                lazaromtaju12@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat With Us</h3>
              <p className="text-muted-foreground mb-4">Connect with us on WhatsApp for quick responses.</p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/255734980103" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://whatsapp.com/channel/your-channel-id" target="_blank" rel="noopener noreferrer">
                    Join Channel
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
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Have a quick question? Give us a call.</p>
              <a href="tel:+255734980103" className="text-primary hover:underline">
                +255 734 980 103
              </a>
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
              {formStatus.type && (
                <Alert variant={formStatus.type === "success" ? "default" : "destructive"} className="mb-6">
                  {formStatus.type === "success" ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <AlertTitle>{formStatus.type === "success" ? "Success" : "Error"}</AlertTitle>
                  <AlertDescription>{formStatus.message}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} id="contact-form" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from_name">First name</Label>
                    <Input id="from_name" name="from_name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" name="last_name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reply_to">Email</Label>
                  <Input id="reply_to" name="reply_to" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center">
            <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5754088089!2d35.7444!3d-6.1731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMjMuMiJTIDM1wrA0NCczOS44IkU!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. John's University of Tanzania Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
