"use client"

import { usePathname } from "next/navigation"
import type React from "react" // Import React

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <html lang="en" className="overflow-x-hidden dark" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/StudioFeixenSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/StudioFeixenSans-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/StudioFeixenSans-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style jsx global>{`
          /* Inline critical CSS to ensure focus styles are applied immediately */
          *:focus-visible {
            outline: 2px solid #FBCFCB !important;
            outline-offset: 4px !important;
          }
          
          /* Force LinkedIn link to be first in focus order */
          a[aria-label="LinkedIn Profile"] {
            display: block !important;
            position: relative !important;
            z-index: 100 !important;
            order: -1 !important;
          }
          
          /* Thinner focus styles for LinkedIn link */
          a[aria-label="LinkedIn Profile"]:focus-visible {
            outline: 2px solid #fbcfcb !important;
            outline-offset: 4px !important;
            border-radius: 9999px !important;
          }
          
          /* Ensure the LinkedIn link wrapper gets focus styles too */
          .linkedin-link:focus-visible {
            outline: 2px solid #fbcfcb !important;
            outline-offset: 4px !important;
          }
          
          /* Fix for elements in the nav */
          header nav {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
          }
          
          /* Fix for mobile version */
          @media (max-width: 640px) {
            header nav a[aria-label="LinkedIn Profile"] {
              margin-right: 4px !important;
            }
          }
          
          /* Focus styles for accessibility button */
          button[aria-label="Accessibility options"]:focus-visible {
            outline: 2px solid #fbcfcb !important;
            outline-offset: 4px !important;
            border-radius: 9999px !important;
          }
          
          /* Focus styles for back to top button */
          button[aria-label="Back to top"]:focus-visible {
            outline: 2px solid #fbcfcb !important;
            outline-offset: 4px !important;
            border-radius: 9999px !important;
          }
          
          /* IMPORTANT: Ensure header elements are focusable */
          header a:focus-visible,
          header button:focus-visible {
            outline: 2px solid #fbcfcb !important;
            outline-offset: 4px !important;
          }
          
          /* Ensure back button is focusable */
          a[aria-label="Back to home"]:focus-visible {
            outline: 2px solid #fbcfcb !important;
            outline-offset: 4px !important;
          }
          
          /* Ensure theme toggle is focusable */
          button[aria-label="Switch to light mode"]:focus-visible,
          button[aria-label="Switch to dark mode"]:focus-visible {
            outline: 2px solid #fbcfcb !important;
            outline-offset: 4px !important;
            border-radius: 9999px !important;
          }
        `}</style>
      </head>
      <body className="antialiased overflow-x-hidden dark">{children}</body>
    </html>
  )
}
