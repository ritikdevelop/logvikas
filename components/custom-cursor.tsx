"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only show custom cursor on desktop devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("clickable") ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Add smooth animation to cursor movement
  useEffect(() => {
    if (!cursorOuterRef.current || !cursorInnerRef.current) return

    const animateOuterCursor = () => {
      if (!cursorOuterRef.current) return

      const { x, y } = position
      cursorOuterRef.current.style.transform = `translate(${x}px, ${y}px)`
      requestAnimationFrame(animateOuterCursor)
    }

    const animateInnerCursor = () => {
      if (!cursorInnerRef.current) return

      const { x, y } = position
      cursorInnerRef.current.style.transform = `translate(${x}px, ${y}px)`
      requestAnimationFrame(animateInnerCursor)
    }

    requestAnimationFrame(animateOuterCursor)
    requestAnimationFrame(animateInnerCursor)
  }, [position])

  if (!isVisible) return null

  return (
    <>
      <div
        ref={cursorOuterRef}
        className={cn(
          "fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out",
          isPointer ? "bg-white scale-150" : "bg-white/50 border border-white",
          isClicking ? "scale-75" : "",
        )}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.1s ease-out, width 0.2s, height 0.2s, background-color 0.2s, border 0.2s",
        }}
      />
      <div
        ref={cursorInnerRef}
        className={cn(
          "fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-100 ease-out",
          isPointer ? "opacity-0" : "opacity-100",
          isClicking ? "scale-50" : "",
        )}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.05s ease-out, opacity 0.2s, scale 0.2s",
        }}
      />
    </>
  )
}
