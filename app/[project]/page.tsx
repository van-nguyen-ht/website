"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import { AnimateIn } from "../components/animate-in"
import { ScrollRing } from "../components/scroll-ring"
import { AccessibilityMenu } from "../components/accessibility-menu"
import { BackToTop } from "../components/back-to-top"

export default function ProjectPage({ params }: { params: { project: string } }) {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 100)

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        const header = document.querySelector("header")
        const isHeaderHovered = header?.matches(":hover")
        document.body.classList.toggle("cursor-hidden", isVisible && !isHeaderHovered)
      }
    }

    const handleHeaderHover = () => {
      setIsHeaderHovered(true)
      document.body.classList.remove("cursor-hidden")
    }

    const handleHeaderLeave = () => {
      setIsHeaderHovered(false)
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        document.body.classList.toggle("cursor-hidden", isVisible)
      }
    }

    const header = document.querySelector("header")
    header?.addEventListener("mouseenter", handleHeaderHover)
    header?.addEventListener("mouseleave", handleHeaderLeave)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      header?.removeEventListener("mouseenter", handleHeaderHover)
      header?.removeEventListener("mouseleave", handleHeaderLeave)
      document.body.classList.remove("cursor-hidden")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#8ba49d] from-[1%] via-[#403756] via-[20%] to-[#17121C] to-[40%] text-[#e0e0e0]"
          : "bg-gradient-to-b from-[#FFEFED] from-[1%] via-[#FFEFED] via-[85%] to-[#362d47] to-[95%] text-[#1a2634]"
      }`}
    >
      {scrolled ? (
        <header className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 transition-all duration-300">
          <div
            className={`pl-6 pr-3.5 h-14 flex items-center justify-between rounded-full transition-all duration-300 min-w-[280px] bg-[#292033] shadow-lg`}
          >
            <Link
              href="/"
              className={`text-[15px] font-medium hover:opacity-70 transition-opacity whitespace-nowrap text-white flex items-center gap-2 h-6 min-w-[24px]`}
              aria-label="Back to home"
              tabIndex={0}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>

            <nav className="flex items-center gap-3 sm:gap-4" aria-label="Main navigation">
              <Link
                href="https://www.linkedin.com/in/van-nguyen-33a236275/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity"
                tabIndex={0}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-5uOAnTQchzjYhqlaZCJzaO6RV1fAtW.png"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>

              <AccessibilityMenu scrolled={true} isDark={isDark} />

              <button
                onClick={toggleTheme}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-[#2d3d4f] hover:bg-[#3a4b5f]`}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                tabIndex={0}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-white" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-white" aria-hidden="true" />
                )}
              </button>
            </nav>
          </div>
        </header>
      ) : (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
          <div className="bg-[#292033] backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.1)]">
            <div className="max-w-[1400px] mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">
              <Link
                href="/"
                className="text-[15px] font-medium hover:opacity-70 transition-opacity text-white flex items-center gap-2"
                aria-label="Back to home"
                tabIndex={0}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>

              <nav className="flex items-center gap-3 sm:gap-4" aria-label="Main navigation">
                <Link
                  href="https://www.linkedin.com/in/van-nguyen-33a236275/"
                  className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  tabIndex={0}
                >
                  <Image
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
                  tabIndex={0}
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
      )}

      <main className="pt-32 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto pb-96">
          <div className="content-animation">
            <AnimateIn animation="fade-up" duration="normal" delay={100}>
              <div ref={heroRef} className="aspect-[20/9] relative rounded-2xl overflow-hidden bg-[#332941]">
                <div className="w-full h-full bg-[#332941]" />
                <ScrollRing />
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={200}>
              <div className="mt-16 grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div className="rounded-2xl bg-opacity-10 bg-white p-6 backdrop-blur-sm">
                    <h3 className={`text-lg font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>ROLE</h3>
                    <ul className={`space-y-2 ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                      <li>Design system creation & management</li>
                      <li>UI design</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-opacity-10 bg-white p-6 backdrop-blur-sm">
                    <h3 className={`text-lg font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      SOLID TEAM
                    </h3>
                    <ul className={`space-y-2 ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                      <li>UX designer</li>
                      <li>Brand designer</li>
                      <li>Lead designer</li>
                      <li>Product manager</li>
                      <li>Product owner</li>
                      <li>8 Developers</li>
                      <li>Design system engineer (me)</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-opacity-10 bg-white p-6 backdrop-blur-sm">
                    <h3 className={`text-lg font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      TIMEFRAME
                    </h3>
                    <p className={isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}>June 2022 - now</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <h2 className={`text-2xl font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}>Impact</h2>
                  <div className="space-y-6">
                    <p className={`text-lg ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                      As design engineer, I manage the Solid Design System to create solutions that fit user experience
                      needs for different teams.
                    </p>
                    <ul className={`space-y-4 ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                      <li>
                        Identified UI-related issues, ensured quality assurance by verifying and accepting developed UI
                        features.
                      </li>
                      <li>
                        Collaborate closely with a team of product, designers, and outside stakeholders to help build a
                        flexible, user-friendly, reliable, and maintainable system.
                      </li>
                      <li>
                        Build out flexible, reusable components with a focus on brand-compliant and barrier-free basis
                        WCAG 2.1 compliance and full accessibility for our end users.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={300}>
              <div className="max-w-[720px] space-y-8 mt-32">
                <h2 className={`text-xl font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}>Overview</h2>
                <div className="space-y-4">
                  <p className={isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}>
                    Freshbooks Connect is a mobile application designed to help trades businesses manage their teams and
                    track important business metrics on the go. The app focuses on three key areas: time tracking,
                    expense management, and mileage logging.
                  </p>
                  <p className={isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}>
                    As the lead designer on this project, I worked closely with the development team to ensure the app
                    was both intuitive and powerful, meeting the specific needs of our target users while maintaining
                    consistency with the Freshbooks design system.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={400}>
              <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#332941]">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Project detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#332941]">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Project detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={500}>
              <div className="max-w-[720px] space-y-8 mt-32">
                <h2 className={`text-xl font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}>The Challenge</h2>
                <div className="space-y-4">
                  <p className={isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}>
                    The main challenge was creating a mobile interface that could handle complex business operations
                    while remaining accessible and easy to use for workers in the field. The app needed to work offline,
                    sync data efficiently, and provide a seamless experience across different devices and operating
                    systems.
                  </p>
                  <p className={isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}>
                    Through extensive user research and iterative design, we developed a solution that streamlined these
                    processes while maintaining the robustness required for business-critical operations.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={600}>
              <div className="aspect-[16/9] relative rounded-2xl overflow-hidden bg-[#332941] mt-16">
                <Image
                  src="/placeholder.svg?height=800&width=1400"
                  alt="Project detail"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={700}>
              <div className="max-w-[720px] space-y-8 mt-32">
                <h2 className={`text-xl font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}>The Solution</h2>
                <div className="space-y-4">
                  <p className={isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}>
                    The final product features an intuitive interface with smart defaults and contextual help, making it
                    easy for users to complete tasks quickly. We implemented a robust offline mode that ensures data
                    integrity while syncing in the background when connectivity is restored.
                  </p>
                  <p className={isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}>
                    Key features include automated mileage tracking, receipt scanning with OCR, and intelligent time
                    tracking that can detect job sites and suggest entries based on previous patterns.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </main>

      {!isHeaderHovered && <ScrollRing />}
      <BackToTop isDark={isDark} />
    </div>
  )
}
