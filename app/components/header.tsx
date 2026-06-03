"use client"

import Link from "next/link"
import Image from "next/image"
import { Moon, Sun } from "lucide-react"
import { AccessibilityMenu } from "./accessibility-menu"

interface HeaderProps {
  scrolled: boolean
  isDark: boolean
  toggleTheme: () => void
}

export function Header({ scrolled, isDark, toggleTheme }: HeaderProps) {
  return (
    <header
      className={`${scrolled ? "fixed left-1/2 -translate-x-1/2 bottom-6" : "fixed top-0 left-0 right-0"} z-50 transition-all duration-300`}
    >
      <div
        className={`${
          scrolled
            ? "pl-6 pr-3.5 h-14 rounded-full min-w-[280px] bg-[#292033] shadow-lg"
            : "bg-[#292033] backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.1)]"
        } transition-all duration-300`}
      >
        <div
          className={`${
            scrolled
              ? "flex items-center justify-between"
              : "max-w-[1400px] mx-auto px-2 sm:px-4 h-16 flex items-center justify-between"
          }`}
        >
          <Link
            href="/"
            className="text-[15px] font-medium hover:opacity-70 transition-opacity text-white focus:outline-none focus-visible:outline-none"
            aria-label="Home"
            tabIndex={scrolled ? -1 : 0}
          >
            Van Nguyen
          </Link>

          <nav className={`flex items-center gap-3 sm:gap-4 ${scrolled ? "ml-4" : ""}`} aria-label="Main navigation">
            <Link
              href="https://www.linkedin.com/in/van-nguyen-33a236275/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go to Van nguyen's linkedin page"
              className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity"
              tabIndex={0}
              style={{ position: "relative", zIndex: 1000 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-5uOAnTQchzjYhqlaZCJzaO6RV1fAtW.png"
                alt="LinkedIn"
                width={18}
                height={18}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            <AccessibilityMenu scrolled={scrolled} isDark={isDark} />

            <button
              onClick={toggleTheme}
              className={`${
                scrolled ? "w-8 h-8 bg-[#2d3d4f] hover:bg-[#3a4b5f]" : "w-10 h-10 bg-[#2d3d4f] hover:bg-[#3a4b5f]"
              } rounded-full flex items-center justify-center transition-colors`}
              aria-label={isDark ? "Change to light theme" : "Change to dark theme"}
              tabIndex={0}
            >
              {isDark ? (
                <Sun className={`${scrolled ? "w-4 h-4" : "w-5 h-5"} text-white`} aria-hidden="true" />
              ) : (
                <Moon className={`${scrolled ? "w-4 h-4" : "w-5 h-5"} text-white`} aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
