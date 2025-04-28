"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className={`back-to-top ${isVisible ? "visible" : ""}`}>
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground animate-float"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
