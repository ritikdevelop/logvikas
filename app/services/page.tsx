import { ArrowRight, Code, Smartphone, BarChart, Layout, ExternalLink } from "lucide-react"
import { services } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import AnimatedSection from "@/components/animated-section"
import Image from "next/image"

export const metadata = {
  title: "Services - Log Vikas",
  description:
    "Explore the technology services offered by Log Vikas, including website development and app development.",
}

export default function ServicesPage() {
  // Map service icons to Lucide components
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-10 w-10 text-primary" />
      case "smartphone":
        return <Smartphone className="h-10 w-10 text-primary" />
      case "bar-chart":
        return <BarChart className="h-10 w-10 text-primary" />
      case "layout":
        return <Layout className="h-10 w-10 text-primary" />
      default:
        return <Code className="h-10 w-10 text-primary" />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive technology solutions to help your business thrive in the digital age.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="mb-4">{getServiceIcon(service.icon)}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Key Benefits:</h3>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="mr-2 h-4 w-4 mt-1 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="w-full py-8 md:py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection className="col-span-full text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Featured Partners</h2>
              <p className="text-muted-foreground">Trusted by leading companies worldwide</p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" className="card-hover">
              <Card className="overflow-hidden border-2 border-primary/20">
                <CardHeader className="text-center pb-2 bg-primary/5">
                  <CardTitle className="text-lg">Premium Web Hosting</CardTitle>
                  <CardDescription>Sponsored</CardDescription>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <div className="aspect-video relative mb-4">
                    <Image
                      src="/placeholder.svg?height=180&width=320"
                      alt="Web Hosting Service"
                      width={320}
                      height={180}
                      className="mx-auto rounded-md"
                    />
                  </div>
                  <p className="text-sm mb-4">Get 50% off our premium hosting packages with 99.9% uptime guarantee.</p>
                  <Button variant="outline" className="w-full mt-2 group">
                    Learn More <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={100} className="card-hover">
              <Card className="overflow-hidden border-2 border-secondary/20">
                <CardHeader className="text-center pb-2 bg-secondary/5">
                  <CardTitle className="text-lg">Cloud Solutions</CardTitle>
                  <CardDescription>Sponsored</CardDescription>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <div className="aspect-video relative mb-4">
                    <Image
                      src="/placeholder.svg?height=180&width=320"
                      alt="Cloud Services"
                      width={320}
                      height={180}
                      className="mx-auto rounded-md"
                    />
                  </div>
                  <p className="text-sm mb-4">Scalable cloud infrastructure for businesses of all sizes.</p>
                  <Button variant="outline" className="w-full mt-2 group">
                    Learn More <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200} className="card-hover">
              <Card className="overflow-hidden border-2 border-accent/20">
                <CardHeader className="text-center pb-2 bg-accent/5">
                  <CardTitle className="text-lg">AI Development Tools</CardTitle>
                  <CardDescription>Sponsored</CardDescription>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <div className="aspect-video relative mb-4">
                    <Image
                      src="/placeholder.svg?height=180&width=320"
                      alt="AI Tools"
                      width={320}
                      height={180}
                      className="mx-auto rounded-md"
                    />
                  </div>
                  <p className="text-sm mb-4">Build powerful AI applications with our developer-friendly toolkit.</p>
                  <Button variant="outline" className="w-full mt-2 group">
                    Learn More <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection className="col-span-full mt-4">
              <Alert className="bg-muted/50 border border-muted">
                <AlertDescription className="text-xs text-muted-foreground text-center">
                  Advertisement notice: The offers above are from our partners. Log Vikas may receive compensation for
                  leads generated.
                </AlertDescription>
              </Alert>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Log Vikas?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're committed to delivering exceptional value and results for our clients.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team consists of experienced professionals with deep knowledge in their respective fields.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We tailor our solutions to meet your specific needs and objectives, ensuring optimal results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide ongoing support and maintenance to ensure your digital assets continue to perform at their
                  best.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stay at the forefront of technological advancements to bring you cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain clear communication throughout the project lifecycle, keeping you informed at every step.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Results-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our focus is on delivering solutions that drive tangible results for your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your project requirements and how we can help you achieve your goals.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
