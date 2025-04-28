"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-in-right" | "slide-in-left" | "scale-in"
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "slide-up",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              section.classList.add("visible")
            }, delay)
            observer.unobserve(section)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [delay])

  return (
    <div ref={sectionRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  )
}
