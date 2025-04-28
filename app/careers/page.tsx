import Link from "next/link"
import { ArrowRight, Briefcase, Users, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"

export const metadata = {
  title: "Careers - Log Vikas",
  description: "Join our team at Log Vikas and be a part of our mission to empower people through technology.",
}

// Mock job listings
const jobListings = [
  {
    id: "1",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Bangalore, India (Hybrid)",
    type: "Full-time",
    description:
      "We are looking for an experienced Full Stack Developer to join our engineering team to build and maintain web applications using React, Next.js, and Node.js.",
    requirements: [
      "3+ years of experience in full stack development",
      "Proficiency in React, Next.js, and Node.js",
      "Experience with TypeScript and RESTful APIs",
      "Knowledge of database systems (SQL and NoSQL)",
      "Good problem-solving skills and attention to detail",
      "Strong communication skills",
    ],
  },
  {
    id: "2",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our design team to create intuitive and engaging user experiences for our web applications. You will work closely with developers and product managers to deliver high-quality designs.",
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in design tools like Figma and Adobe Creative Suite",
      "Experience with creating wireframes, prototypes, and user flows",
      "Understanding of accessibility and responsive design principles",
      "Portfolio demonstrating your design skills",
      "Good communication and collaboration skills",
    ],
  },
  {
    id: "3",
    title: "Content Writer",
    department: "Content",
    location: "Bangalore, India (Hybrid)",
    type: "Full-time",
    description:
      "We are seeking a talented Content Writer to create compelling articles, blog posts, and website content for our technology and news platform.",
    requirements: [
      "2+ years of experience in content writing",
      "Excellent writing skills with attention to grammar and style",
      "Knowledge of SEO principles and content optimization",
      "Ability to research and write on technical topics",
      "Experience with content management systems",
      "Degree in Journalism, Communications, or related field",
    ],
  },
  {
    id: "4",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our marketing team to develop and implement digital marketing strategies to increase brand awareness and drive user engagement.",
    requirements: [
      "3+ years of experience in digital marketing",
      "Experience with SEO, SEM, social media marketing, and email campaigns",
      "Knowledge of analytics tools and data-driven marketing",
      "Experience with marketing automation platforms",
      "Strong communication and analytical skills",
      "Degree in Marketing, Business, or related field",
    ],
  },
]

export default function CareersPage() {
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
                <span className="gradient-text">Careers</span> at Log Vikas
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our team and be part of our mission to empower people through technology and information.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Join Log Vikas?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a collaborative work environment where innovation and creativity are encouraged.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="card-hover">
              <CardHeader>
                <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work in a supportive environment with talented professionals who are passionate about making a
                  difference.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <div className="mb-3 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Flexible work options, competitive time-off policies, and a focus on your wellbeing.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <div className="mb-3 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Career Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Opportunities for professional development, mentorship programs, and a clear path for advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Current Openings</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our available positions and find your next career opportunity.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {jobListings.map((job, index) => (
              <AnimatedSection key={job.id} delay={100 * index} animation="slide-up">
                <Card className="h-full card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {job.title}
                    </CardTitle>
                    <CardDescription className="flex flex-col gap-2 mt-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{job.type}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{job.description}</p>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Don't See a Perfect Fit?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our team. Send us your resume and let us know why
                you'd be a great addition to Log Vikas.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
