"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { Milestone } from "@/lib/data"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface TimelineGraphProps {
  milestones: Milestone[]
}

export default function TimelineGraph({ milestones }: TimelineGraphProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const isMobile = useMobile()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleMilestoneHover = (index: number) => {
    setActiveIndex(index)
  }

  const handleMilestoneLeave = () => {
    setActiveIndex(null)
  }

  // Variants for animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const mobileLineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto px-4 py-8">
      {isMobile ? (
        // Mobile vertical timeline
        <motion.div
          className="relative flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={timelineRef}
        >
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30 left-[20px] md:left-1/2 md:transform md:-translate-x-1/2"
            variants={mobileLineVariants}
          />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              className="relative w-full flex mb-12 last:mb-0"
              variants={contentVariants}
              onMouseEnter={() => handleMilestoneHover(index)}
              onMouseLeave={handleMilestoneLeave}
              custom={index}
            >
              <div className="flex flex-col md:flex-row w-full items-start md:items-center">
                <motion.div
                  className={cn(
                    "absolute left-[20px] md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full z-10 flex items-center justify-center",
                    activeIndex === index ? "bg-primary" : "bg-primary/70",
                  )}
                  variants={nodeVariants}
                >
                  <motion.div
                    className={cn(
                      "w-12 h-12 rounded-full absolute",
                      activeIndex === index ? "bg-primary/30 animate-ping" : "bg-transparent",
                    )}
                  />
                  <span className="text-xs text-white font-bold">{index + 1}</span>
                </motion.div>

                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-10 md:text-right">
                  <div
                    className={cn(
                      "p-4 rounded-lg transition-all duration-300",
                      activeIndex === index ? "bg-primary/10 shadow-lg" : "bg-transparent",
                    )}
                  >
                    <h3 className="text-xl font-bold flex items-center md:justify-end">
                      <span className="text-primary mr-2 md:mr-0 md:ml-2">{milestone.year}</span>
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{milestone.description}</p>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2 md:pl-10">{/* Empty div for layout on mobile */}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        // Desktop horizontal timeline
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={timelineRef}
        >
          {/* Main timeline line */}
          <div className="relative h-1 w-full bg-muted/50 my-16">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary to-accent"
              variants={lineVariants}
            />

            {/* Timeline nodes and content */}
            <div className="absolute top-0 left-0 w-full">
              {milestones.map((milestone, index) => {
                const position = `${(index / (milestones.length - 1)) * 100}%`

                return (
                  <motion.div
                    key={milestone.id}
                    className="absolute transform -translate-x-1/2"
                    style={{ left: position }}
                    variants={nodeVariants}
                    onMouseEnter={() => handleMilestoneHover(index)}
                    onMouseLeave={handleMilestoneLeave}
                  >
                    {/* Node */}
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full -mt-3 flex items-center justify-center cursor-pointer transition-all duration-300",
                        activeIndex === index ? "bg-primary scale-125" : "bg-primary/70",
                      )}
                    >
                      <motion.div
                        className={cn(
                          "w-12 h-12 rounded-full absolute",
                          activeIndex === index ? "bg-primary/30 animate-ping" : "bg-transparent",
                        )}
                      />
                    </div>

                    {/* Year label */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="font-bold text-primary">{milestone.year}</span>
                    </div>

                    {/* Content - alternating top/bottom */}
                    <AnimatePresence>
                      {(activeIndex === index || activeIndex === null) && (
                        <motion.div
                          className={cn(
                            "absolute w-64 p-4 rounded-lg transition-all duration-300",
                            index % 2 === 0 ? "-top-32" : "top-16",
                            "left-1/2 transform -translate-x-1/2",
                            activeIndex === index ? "bg-primary/10 shadow-lg z-10" : "bg-background/80",
                          )}
                          initial={{ opacity: 0, y: index % 2 === 0 ? -10 : 10 }}
                          animate={{
                            opacity: activeIndex === index ? 1 : 0.7,
                            y: 0,
                            scale: activeIndex === index ? 1.05 : 1,
                          }}
                          exit={{ opacity: 0, y: index % 2 === 0 ? -10 : 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-lg font-bold">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
