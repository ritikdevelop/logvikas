import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all button-hover",
          "bg-gradient-to-r shadow-md hover:shadow-lg active:opacity-90",
          {
            "from-primary to-accent text-primary-foreground": variant === "primary",
            "from-secondary to-primary text-secondary-foreground": variant === "secondary",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
GradientButton.displayName = "GradientButton"

export { GradientButton }
