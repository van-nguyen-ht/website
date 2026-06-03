"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import { AnimateIn } from "./animate-in"
import { AccessibilityMenu } from "./accessibility-menu"
import { BackToTop } from "./back-to-top"

interface ProjectLayoutProps {
  children: ReactNode
  title: string
  tabs?: {
    label: string
    isActive?: boolean
    href: string
  }[]
}

export default function ProjectLayout({ children, title, tabs }: ProjectLayoutProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#111827] text-white" : "bg-white text-[#111827]"
      }`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#292033] backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="h-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-[15px] font-medium hover:opacity-70 transition-opacity text-white flex items-center gap-2"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>

            <nav className="flex items-center gap-8">
              <Link href="/portfolio" className="text-sm text-white hover:opacity-70 transition-opacity">
                Portfolio
              </Link>
              <Link href="/about" className="text-sm text-white hover:opacity-70 transition-opacity">
                About
              </Link>
              <Link href="/articles" className="text-sm text-white hover:opacity-70 transition-opacity">
                Articles
              </Link>
              <Link href="/work-with-me" className="text-sm text-white hover:opacity-70 transition-opacity">
                Work with me
              </Link>
              <Link href="/contact" className="text-sm text-white hover:opacity-70 transition-opacity">
                Contact
              </Link>
              <Link
                href="https://www.linkedin.com/in/van-nguyen-33a236275/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-5uOAnTQchzjYhqlaZCJzaO6RV1fAtW.png"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <AccessibilityMenu scrolled={false} isDark={isDark} />
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#2d3d4f] hover:bg-[#3a4b5f]"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-white" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5 text-white" aria-hidden="true" />
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <AnimateIn>
            <h1 className="text-4xl sm:text-5xl font-medium mb-12">{title}</h1>
          </AnimateIn>

          {tabs && (
            <div className="flex gap-8 mb-12">
              {tabs.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={`text-sm transition-colors ${
                    tab.isActive ? "text-white bg-[#292033] px-4 py-2 rounded-full" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          )}

          {children}
        </div>
      </main>

      {/* Back to Top Button */}
      <BackToTop isDark={isDark} />
    </div>
  )
}
