"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Header } from "../components/header"
import { AnimateIn } from "../components/animate-in"
import { ScrollRing } from "../components/scroll-ring"
import { BackToTop } from "../components/back-to-top"

export default function ProjectPage() {
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
        const isHeaderHovered = header?.matches(":hover") || false
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
      <Header scrolled={scrolled} isDark={isDark} toggleTheme={toggleTheme} />

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

            <AnimateIn animation="fade-up" duration="normal" delay={800}>
              <div className="mt-24 space-y-8 max-w-[1000px]">
                <h2 className={`text-2xl font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}>Design Process</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Our design process followed a systematic approach to ensure we created a robust and scalable system:
                  </p>
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong className="text-white">Audit & Research</strong>
                      <p className="mt-2">
                        We began by auditing existing components across all products and researching industry best
                        practices for design systems.
                      </p>
                    </li>
                    <li>
                      <strong className="text-white">Design Principles</strong>
                      <p className="mt-2">
                        Established core design principles that would guide our decision-making process and ensure
                        consistency.
                      </p>
                    </li>
                    <li>
                      <strong className="text-white">Component Architecture</strong>
                      <p className="mt-2">
                        Developed a modular component architecture that balances flexibility with consistency.
                      </p>
                    </li>
                    <li>
                      <strong className="text-white">Documentation</strong>
                      <p className="mt-2">
                        Created comprehensive documentation including usage guidelines, code examples, and best
                        practices.
                      </p>
                    </li>
                    <li>
                      <strong className="text-white">Development Sync</strong>
                      <p className="mt-2">
                        Regular alignment with development teams to ensure technical feasibility and implementation
                        accuracy.
                      </p>
                    </li>
                    <li>
                      <strong className="text-white">Build & Testing</strong>
                      <p className="mt-2">
                        Rigorous testing of components across different scenarios and devices to ensure reliability.
                      </p>
                    </li>
                    <li>
                      <strong className="text-white">Release & Integration</strong>
                      <p className="mt-2">
                        Systematic release process with clear versioning and integration support for teams.
                      </p>
                    </li>
                    <li>
                      <strong className="text-white">Feedback & Iteration</strong>
                      <p className="mt-2">
                        Continuous collection of user feedback and iterative improvements to the system.
                      </p>
                    </li>
                  </ol>
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
