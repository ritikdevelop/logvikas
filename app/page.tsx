"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Download, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { articles, type Article } from "@/lib/data"
import AnimatedSection from "@/components/animated-section"
import { GradientButton } from "@/components/gradient-button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ReadersCornerPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [activeTab, setActiveTab] = useState<string>(categoryParam || "all")
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedArticles, setSelectedArticles] = useState<string[]>([])
  const [selectMode, setSelectMode] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Filter articles based on active tab
  const filteredArticles = activeTab === "all" ? articles : articles.filter((article) => article.category === activeTab)

  // Toggle article selection
  const toggleArticleSelection = (id: string) => {
    setSelectedArticles((prev) => {
      if (prev.includes(id)) {
        return prev.filter((articleId) => articleId !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  // Select all articles in current view
  const selectAllArticles = () => {
    setSelectedArticles(filteredArticles.map((article) => article.id))
  }

  // Deselect all articles
  const deselectAllArticles = () => {
    setSelectedArticles([])
  }

  // Handle download of selected articles
  const handleDownloadSelected = () => {
    if (selectedArticles.length === 0) return

    const selectedArticlesData = articles.filter((article) => selectedArticles.includes(article.id))
    const articlesData = JSON.stringify(selectedArticlesData, null, 2)
    const blob = new Blob([articlesData], { type: "application/json" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `log-vikas-articles-${selectedArticles.length}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col min-h-screen">

      {/* Articles Section */}
      <section className="w-full ">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value={activeTab} className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredArticles.map((article, index) => (
                  <AnimatedSection key={article.id} delay={isLoaded ? 100 + index * 100 : 0} animation="scale-in">
                    <ArticleCard
                      article={article}
                      isSelected={selectedArticles.includes(article.id)}
                      onSelect={toggleArticleSelection}
                      selectMode={selectMode}
                    />
                  </AnimatedSection>
                ))}
              </div>
              {filteredArticles.length === 0 && (
                <AnimatedSection className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-muted-foreground">No articles found in this category.</p>
                </AnimatedSection>
              )}
            </TabsContent>
          </Tabs>
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

       {/* Services Overview with Creative Design */}
       <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-muted via-muted/50 to-muted/80 z-0"></div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl"></div>

        {/* Decorative Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border-2 border-secondary rounded-lg rotate-12"></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border-2 border-accent rounded-lg -rotate-12"></div>
        </div>

        <div className="container relative px-4 md:px-6 z-10">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide comprehensive technology solutions to help businesses and individuals thrive in the digital
                age.
              </p>
            </div>
          </AnimatedSection>

          {/* Services grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <AnimatedSection delay={150} animation="slide-up">
              <Card className="h-full card-hover border-t-4 border-t-primary">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <CardTitle className="text-lg">Website Development</CardTitle>
                  <CardDescription className="text-sm">
                    Custom, responsive websites tailored to your brand.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="ghost" size="sm" className="group p-0 h-auto font-medium text-primary">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300} animation="slide-up">
              <Card className="h-full card-hover border-t-4 border-t-secondary">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-secondary"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12" y2="18"></line>
                    </svg>
                  </div>
                  <CardTitle className="text-lg">App Development</CardTitle>
                  <CardDescription className="text-sm">Native and cross-platform mobile applications.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="ghost" size="sm" className="group p-0 h-auto font-medium text-primary">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={450} animation="slide-up">
              <Card className="h-full card-hover border-t-4 border-t-accent">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-accent"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <CardTitle className="text-lg">UI/UX Design</CardTitle>
                  <CardDescription className="text-sm">
                    Intuitive interfaces and engaging user experiences.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="ghost" size="sm" className="group p-0 h-auto font-medium text-primary">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={600} animation="slide-up">
              <Card className="h-full card-hover border-t-4 border-t-primary">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                  </div>
                  <CardTitle className="text-lg">Digital Marketing</CardTitle>
                  <CardDescription className="text-sm">Strategies that drive traffic and conversions.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="/services">
                    <Button variant="ghost" size="sm" className="group p-0 h-auto font-medium text-primary">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={600} className="flex justify-center mt-10">
            <Link href="/services">
              <Button variant="outline" size="lg" className="group">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action with Creative Design */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>

        {/* Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container relative px-4 md:px-6 z-10">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to <span className="gradient-text">Get Started</span>?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss how Log Vikas can help you achieve your goals.
              </p>
            </div>
            <Link href="/contact">
              <GradientButton size="lg" variant="secondary">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </GradientButton>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

function ArticleCard({
  article,
  isSelected,
  onSelect,
  selectMode,
}: {
  article: Article
  isSelected: boolean
  onSelect: (id: string) => void
  selectMode: boolean
}) {
  // Function to handle individual article download
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const articleData = JSON.stringify(article, null, 2)
    const blob = new Blob([articleData], { type: "application/json" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `article-${article.id}-${article.title.toLowerCase().replace(/\s+/g, "-")}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  return (
    <Card
      className={`flex flex-col h-full overflow-hidden card-hover border-t-2 ${
        isSelected ? "border-primary border-2" : "border-t-primary/40"
      }`}
    >
      <div className="aspect-video w-full overflow-hidden relative">
        {selectMode && (
          <div
            className="absolute top-2 left-2 z-10 bg-background/80 rounded-full p-0.5 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onSelect(article.id)
            }}
          >
            <Checkbox
              checked={isSelected}
              className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
          </div>
        )}
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={400}
          height={225}
          className="object-cover w-full h-full transition-all duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
            {article.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        <CardTitle className="line-clamp-2 mt-2 text-base">{article.title}</CardTitle>
        <CardDescription className="line-clamp-2 text-xs">{article.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-0 mt-auto flex justify-between">
        <Link href={`/readers-corner/${article.id}`}>
          <Button variant="ghost" size="sm" className="group p-0 h-auto font-medium text-primary">
            Read More
            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <Button variant="outline" size="sm" onClick={handleDownload}>
          <Download className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
