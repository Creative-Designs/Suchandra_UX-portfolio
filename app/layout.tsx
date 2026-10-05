import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { ThemeProvider } from "@/lib/theme"
import "./globals.css"

export const metadata: Metadata = {
  title: "Suchandra Das — Lead UX Designer",
  description:
    "Suchandra Das is a Lead UX Designer with 8–9 years of experience designing clear, scalable enterprise experiences across fintech, banking, B2B, and SaaS platforms.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f13" },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
