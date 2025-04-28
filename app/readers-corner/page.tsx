"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { articles, type Article } from "@/lib/data"
import AnimatedSection from "@/components/animated-section"

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
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-muted via-muted/50 to-muted/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Articles
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore articles, news, and stories across various categories.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <AnimatedSection animation="slide-up" className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-6 p-1 bg-muted/50 rounded-lg">
                  <TabsTrigger
                    value="all"
                    className="transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="technology"
                    className="transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Technology
                  </TabsTrigger>
                  <TabsTrigger
                    value="world-news"
                    className="transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    World News
                  </TabsTrigger>
                  <TabsTrigger
                    value="jobs"
                    className="transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Jobs
                  </TabsTrigger>
                  <TabsTrigger
                    value="entertainment"
                    className="transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Entertainment
                  </TabsTrigger>
                  <TabsTrigger
                    value="success-stories"
                    className="transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Success Stories
                  </TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectMode(!selectMode)}
                    className={selectMode ? "bg-primary/10" : ""}
                  >
                    {selectMode ? "Cancel Selection" : "Select Articles"}
                  </Button>

                  {selectMode && (
                    <>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Selection <ChevronDown className="ml-1 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Selection Options</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start font-normal"
                            onClick={selectAllArticles}
                          >
                            Select All
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start font-normal"
                            onClick={deselectAllArticles}
                          >
                            Deselect All
                          </Button>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <Button
                        variant="default"
                        size="sm"
                        onClick={handleDownloadSelected}
                        disabled={selectedArticles.length === 0}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download ({selectedArticles.length})
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </AnimatedSection>

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

      {/* Share Your Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Share Your <span className="gradient-text">Story</span>
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a success story or experience you&apos;d like to share with our community? We&apos;d love to hear
                from you!
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
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
