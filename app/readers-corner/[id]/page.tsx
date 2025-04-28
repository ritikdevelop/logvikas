"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ThumbsUp, MessageSquare, Share2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { getArticleById } from "@/lib/data"
import AnimatedSection from "@/components/animated-section"

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id)
  const [likes, setLikes] = useState(article?.likes || 0)
  const [comments, setComments] = useState(article?.comments || [])
  const [commentText, setCommentText] = useState("")
  const [hasLiked, setHasLiked] = useState(false)

  if (!article) {
    notFound()
  }

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1)
      setHasLiked(true)
    }
  }

  const handleComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: `c${Date.now()}`,
        author: "Guest User",
        content: commentText,
        date: new Date().toISOString().split("T")[0],
      }
      setComments([...comments, newComment])
      setCommentText("")
    }
  }

  const handleDownload = () => {
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
    <div className="flex flex-col min-h-screen">
      <article className="container max-w-4xl px-4 py-12 md:py-24">
        <AnimatedSection animation="fade-in" className="mb-8">
          <Link
            href="/readers-corner"
            className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
              {article.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>By {article.author}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">{article.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{article.excerpt}</p>
        </AnimatedSection>

        <AnimatedSection
          animation="slide-up"
          delay={200}
          className="aspect-video w-full overflow-hidden rounded-lg mb-8"
        >
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={1200}
            height={675}
            className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
          />
        </AnimatedSection>

        <AnimatedSection
          animation="fade-in"
          delay={400}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <AnimatedSection animation="slide-up" delay={600} className="mt-8 flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className={`flex items-center gap-2 transition-all duration-300 ${hasLiked ? "text-primary bg-primary/10" : ""}`}
            onClick={handleLike}
          >
            <ThumbsUp className={`h-4 w-4 ${hasLiked ? "fill-primary" : ""}`} />
            <span>{likes}</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>{comments.length}</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 ml-auto" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </AnimatedSection>

        <Separator className="my-8" />

        <AnimatedSection animation="fade-in" delay={800} className="space-y-6">
          <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>

          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div
                key={comment.id}
                className="p-4 border rounded-lg transition-all duration-300 hover:shadow-md hover:border-primary/20"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-sm text-muted-foreground">{comment.date}</span>
                </div>
                <p>{comment.content}</p>
              </div>
            ))}

            {comments.length === 0 && (
              <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
            )}
          </div>

          <div className="space-y-4 mt-6">
            <h3 className="text-xl font-medium">Leave a Comment</h3>
            <Textarea
              placeholder="Write your comment here..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="min-h-[100px] transition-all duration-300 focus:border-primary"
            />
            <Button onClick={handleComment} className="transition-all duration-300 hover:bg-primary/90">
              Submit Comment
            </Button>
          </div>
        </AnimatedSection>
      </article>
    </div>
  )
}
