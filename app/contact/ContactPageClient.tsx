"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import AnimatedSection from "@/components/animated-section"

export default function ContactPageClient() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Removed header text */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-3xl animate-float"></div>
          <div
            className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container relative px-4 md:px-6 z-10">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                <span className="gradient-text">Contact</span> Us
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with us for inquiries, feedback, or collaboration opportunities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <a href="mailto:contact@logvikas.com" className="hover:underline">
                        contact@logvikas.com
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-primary" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <a href="tel:+919876543210" className="hover:underline">
                        +91 9876 543 210
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-primary" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      123 Tech Park, Innovation Street
                      <br />
                      Bangalore, Karnataka 560001
                      <br />
                      India
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject of your message"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        required
                        className="min-h-[150px]"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
