import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Van Nguyen - Design Portfolio",
  description: "Van Nguyen - Design Portfolio",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-B1F1TIB1J0idktfYST8TTbaBUA8AuP.png",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-B1F1TIB1J0idktfYST8TTbaBUA8AuP.png",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
