"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

interface BackToTopProps {
  isDark: boolean
}

export function BackToTop({ isDark }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top of page"
      tabIndex={0}
      className={`fixed right-8 bottom-[100px] w-12 h-12 rounded-full border min-w-[24px] min-h-[24px] ${
        isDark ? "border-[#2d3d4f]" : "border-white"
      } shadow-[0_4px_12px_rgba(139,164,157,0.2)] flex items-center justify-center transition-all duration-300 hover:bg-[#3a4b5f] group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } back-to-top-button`}
    >
      <ChevronUp
        className={`w-6 h-6 -mt-0.5 transition-colors group-hover:text-white ${
          isDark ? "text-[#2d3d4f]" : "text-white"
        }`}
      />
    </button>
  )
}
