import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Import the BackToTop component
import BackToTop from "@/components/back-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/custom-cursor"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Log Vikas - Technology, News & Development Services",
  description: "Log Vikas provides technology services, news, and insights to help people grow and develop.",
  generator: "v0.dev",
}

// Update the RootLayout function to include ThemeProvider and BackToTop
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CustomCursor />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
