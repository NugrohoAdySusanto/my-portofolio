import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Nugroho Ady",
  description:
    "IT enthusiast with hands-on experience in IT Infrastructure and Support, and a growing focus on Network Engineering and System Administration.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/Logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
