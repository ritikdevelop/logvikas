import Image from "next/image"
import { milestones } from "@/lib/data"
import AnimatedSection from "@/components/animated-section"
import TimelineGraph from "@/components/timeline-graph"

export const metadata = {
  title: "About Us - Log Vikas",
  description: "Learn about Log Vikas, our mission, values, and journey.",
}

export default function AboutPage() {
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
                <span className="gradient-text">About</span> Log Vikas
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our story, mission, and the journey of Log Vikas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Log Vikas was founded in 2018 with a simple yet powerful vision: to empower people through technology
                  and information. What began as a small blog sharing technology insights has grown into a comprehensive
                  platform offering both information resources and technology services.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our journey has been driven by a commitment to quality, accessibility, and innovation. We believe that
                  access to reliable information and technology solutions should be available to everyone, regardless of
                  their background or resources.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Today, Log Vikas serves a diverse community of readers, learners, and clients, providing them with the
                  tools and knowledge they need to succeed in an increasingly digital world.
                </p>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Log Vikas Story"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Log Vikas Mission"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Log Vikas, our mission is to facilitate growth and development through technology and information.
                  We strive to create a platform where people can access reliable knowledge, share experiences, and find
                  solutions to their technological needs.
                </p>
                <h3 className="text-xl font-bold mt-4">Our Core Values:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Accessibility:</strong> Making technology and information available to everyone.
                  </li>
                  <li>
                    <strong>Quality:</strong> Delivering excellence in everything we do.
                  </li>
                  <li>
                    <strong>Innovation:</strong> Embracing new ideas and approaches.
                  </li>
                  <li>
                    <strong>Integrity:</strong> Maintaining honesty and transparency in all our interactions.
                  </li>
                  <li>
                    <strong>Community:</strong> Fostering a sense of belonging and shared purpose.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones - Timeline Graph */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/80 to-secondary/5 z-0"></div>

        {/* Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow opacity-30"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-48 h-48 border border-secondary/20 rounded-full animate-spin-slow opacity-30"
          style={{ animationDuration: "12s" }}
        ></div>

        <div className="container relative px-4 md:px-6 z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the key milestones in the Log Vikas story.
              </p>
            </div>
          </div>

          {/* Timeline Graph Component */}
          <TimelineGraph milestones={milestones} />
        </div>
      </section>
    </div>
  )
}
