"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, ArrowLeft, ExternalLink } from "lucide-react"
import { AnimateIn } from "../components/animate-in"
import { ScrollRing } from "../components/scroll-ring"
import { PhaseSlider } from "../components/phase-slider"
import { AccessibilityMenu } from "../components/accessibility-menu"
import { BackToTop } from "../components/back-to-top"

export default function ProjectPage() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const [error, setError] = useState<string | null>(null)
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
        // document.body.classList.toggle("cursor-hidden", isVisible && !isHeaderHovered)
      }
    }

    const handleHeaderHover = () => {
      setIsHeaderHovered(true)
      // document.body.classList.remove("cursor-hidden")
    }

    const handleHeaderLeave = () => {
      setIsHeaderHovered(false)
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        // document.body.classList.toggle("cursor-hidden", isVisible)
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
      // document.body.classList.remove("cursor-hidden")
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
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
          <div className="pl-6 pr-3.5 h-14 flex items-center justify-between rounded-full transition-all duration-300 min-w-[280px] bg-[#292033] shadow-lg">
            <Link
              href="/"
              className="text-[15px] font-medium hover:opacity-70 transition-opacity text-white flex items-center gap-2 focus:outline-none focus-visible:outline-[2px] focus-visible:outline-[#fbcfcb] focus-visible:outline-offset-[4px]"
              aria-label="Back to home"
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
                className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity focus:outline-none focus-visible:outline-[2px] focus-visible:outline-[#fbcfcb] focus-visible:outline-offset-[4px]"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-5uOAnTQchzjYhqlaZCJzaO6RV1fAtW.png"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  onError={() => setError("Failed to load LinkedIn icon")}
                />
              </Link>

              <AccessibilityMenu scrolled={true} isDark={isDark} />

              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-[#2d3d4f] hover:bg-[#3a4b5f] focus:outline-none focus-visible:outline-[2px] focus-visible:outline-[#fbcfcb] focus-visible:outline-offset-[4px]"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
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
                className="text-[15px] font-medium hover:opacity-70 transition-opacity text-white flex items-center gap-2 focus:outline-none focus-visible:outline-[2px] focus-visible:outline-[#fbcfcb] focus-visible:outline-offset-[4px]"
                aria-label="Back to home"
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
                  className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity focus:outline-none focus-visible:outline-[2px] focus-visible:outline-[#fbcfcb] focus-visible:outline-offset-[4px]"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-5uOAnTQchzjYhqlaZCJzaO6RV1fAtW.png"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                    onError={() => setError("Failed to load LinkedIn icon")}
                  />
                </Link>

                <AccessibilityMenu scrolled={false} isDark={isDark} />

                <button
                  onClick={toggleTheme}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#2d3d4f] hover:bg-[#3a4b5f] focus:outline-none focus-visible:outline-[2px] focus-visible:outline-[#fbcfcb] focus-visible:outline-offset-[4px]"
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
      )}

      <main className="pt-32 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto pb-96">
          <div className="content-animation">
            <AnimateIn animation="fade-up" duration="normal" delay={150}>
              <div ref={heroRef} className="aspect-[20/7] relative rounded-2xl overflow-hidden bg-white">
                <div className="relative w-[90%] h-[90%] mx-auto flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solid-design-system-hero-cover.jpg-c2JbGiYV6ed6KioAgfPH00I81GDU1q.png"
                    alt="Union Investment website showing events calendar displayed on tablet and mobile devices. The tablet screen shows 'Veranstaltungsübersicht' (Events Overview) with tabs for current, upcoming, and past events. Featured events include 'Nachhaltigkeitskonferenz 2024' (Sustainability Conference 2024) in Frankfurt and 'Team Forum' with Frankfurt skyline image. The mobile version displays a responsive layout of the same events interface."
                    fill
                    className="object-contain"
                    priority
                    onError={(e) => {
                      console.error("Failed to load hero image")
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>
                <ScrollRing />
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={200}>
              <div className="mt-16">
                <div className="flex flex-row flex-wrap gap-6">
                  <div className="w-[150px]">
                    <p
                      className={`text-3xl md:text-6xl font-light font-mono ${isDark ? "text-white" : "text-[#1a2634]"}`}
                    >
                      50+
                    </p>
                    <p className={`text-[14px] mt-2 font-sans ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                      product teams adopted
                      <br />
                      the design system
                    </p>
                  </div>
                  <div className="w-[150px]">
                    <p
                      className={`text-3xl md:text-6xl font-light font-mono ${isDark ? "text-white" : "text-[#1a2634]"}`}
                    >
                      42%
                    </p>
                    <p className={`text-[14px] mt-2 font-sans ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                      less ongoing maintenance costs
                    </p>
                  </div>
                  <div className="w-[150px]">
                    <p
                      className={`text-3xl md:text-6xl font-light font-mono ${isDark ? "text-white" : "text-[#1a2634]"}`}
                    >
                      30%
                    </p>
                    <p className={`text-[14px] mt-2 font-sans ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                      lighter web pages
                    </p>
                  </div>
                  <div className="w-[150px]">
                    <p
                      className={`text-3xl md:text-6xl font-light font-mono ${isDark ? "text-white" : "text-[#1a2634]"}`}
                    >
                      36%
                    </p>
                    <p className={`text-[14px] mt-2 font-sans ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                      faster time to market
                    </p>
                  </div>
                  <div className="w-[150px]">
                    <p
                      className={`text-3xl md:text-6xl font-light font-mono ${isDark ? "text-white" : "text-[#1a2634]"}`}
                    >
                      18%
                    </p>
                    <p className={`text-[14px] mt-2 font-sans ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                      elevation in core product quality due to accessibility focus
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={300}>
              <div className="mt-16">
                <h3
                  className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                >
                  Phases and toolkit items used
                </h3>
                <div className="mb-12">
                  <PhaseSlider projectType="solid" />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={200}>
              <div className="mt-16">
                <div className="flex flex-col lg:flex-row gap-16">
                  <div className="flex-1">
                    <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      The Brief
                    </h2>

                    <h3
                      className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                    >
                      Client
                    </h3>
                    <div className="space-y-6 mb-12">
                      <p
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                      >
                        Union Investment
                      </p>
                      <Link
                        href="https://ux-design-awards.com/winners/2024-2-solid-design-system"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular underline hover:opacity-80 flex items-center gap-2`}
                      >
                        look at Solid Design System's UX Design Award nomination
                        <ExternalLink className="w-[14px] h-[14px]" />
                      </Link>
                    </div>

                    <h3
                      className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                    >
                      Overview
                    </h3>
                    <div className="space-y-6 mb-12 w-full lg:w-1/2">
                      <p
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                      >
                        Union Investment is one of the largest fund management companies in Germany. They have several
                        digital products with almost no consistency between them. This called for a solution to unify
                        with numerous rules to serve 52 product teams with users from all corners of the country.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <AnimateIn animation="fade-up" duration="normal" delay={750}>
                      <div>
                        <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                          My Role & Contributions
                        </h2>
                        <div className="max-w-[720px]">
                          <div className="space-y-6">
                            <p
                              className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                            >
                              As the Design Engineer, my responsibilities encompassed:
                            </p>

                            <div className="space-y-4">
                              <h3
                                className={`text-base md:text-base text-[16px] font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}
                              >
                                Strategy:
                              </h3>
                              <ul
                                className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                              >
                                <li>
                                  Setting design strategy, principle and foundational guildines and best practices
                                </li>
                                <li>
                                  Leveraging experience working on other design system projects to inform strategies and
                                  avoid past mistakes
                                </li>
                                <li>Leading the design efforts and ensuring alignment with objectives</li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3
                                className={`text-base md:text-base text-[16px] font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}
                              >
                                Design and Problem-Solving:
                              </h3>
                              <ul
                                className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                              >
                                <li>
                                  Inspired by the idea of "single lego block", components are built as bite-size
                                  composable building blocks to increase reusability. Complex components such as table
                                  or navigation are therefore used with much ease (and joy).
                                </li>
                                <li>
                                  Building the structure of standardized design tokens as single source of truth between
                                  design and development to address inconsistencies in color palettes, spacing, and
                                  typography.
                                </li>
                                <li>
                                  Demonstrated approachoes that simplify the user experience and improve feature
                                  utilization
                                </li>
                                <li>
                                  Presented user-centric design processes to leadership, influencing key decisions
                                </li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3
                                className={`text-base md:text-base text-[16px] font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}
                              >
                                Mentoring Team Members:
                              </h3>
                              <ul
                                className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                              >
                                <li>Guiding and training designers from other teams</li>
                                <li>Preparing training materials</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimateIn>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={200}>
              <div className="mt-16">
                <div className="flex flex-col lg:flex-row gap-16">
                  <div className="flex-1">
                    <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      The Challenge
                    </h2>
                    <div className="space-y-4 mb-12">
                      <p
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                      >
                        As their digital products expand, neither the print-focused guidelines, vector-based assets, nor
                        the Magnolia CMS components are easily adaptable for digital platforms or optimized for modern
                        development. This leads to significant manual effort for adaptation, inconsistent UI elements,
                        developers and designers effort for adaptation, inconsistent UI elements, developers and
                        designers struggle with scalability and efficiency due to fragmentation.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">{/* Right column intentionally empty */}</div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={300}>
              <div className="max-w-[720px] space-y-4">
                <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>The Process</h2>
                <h3
                  className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                >
                  Audit
                </h3>
                <div className="space-y-4 mb-12">
                  <p
                    className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                  >
                    To address these issues, a comprehensive audit was conducted of the entire product suite to identify
                    necessary components, patterns, and guidelines. Many inconsistencies were discovered in color
                    palettes, spacing, and typography, which led me to develop standardized design tokens.
                  </p>
                  <p
                    className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                  >
                    Moreoever, workshops were held to collect product needs from stakeholders and finalize approaches to
                    solve identified problems. User testing was performed on general patterns and components to ensure
                    usability and effectiveness. Our goals and success metrics were defined collaboratively:
                  </p>
                  <ul
                    className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                  >
                    <li>
                      Establish a solid foundation: Prioritize foundational elements before iterating on additional
                      features.
                    </li>
                    <li>
                      Adoption rate: Measure success by the percentage of teams adopting the design system in new
                      projects.
                    </li>
                    <li>
                      Streamlined design process: Facilitate the engineering for better integration on both design and
                      development.
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={600}>
              <div className="mt-4">
                <div>
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Audit-02-YgO30cxDRmRnDVNDHaruT6scgqbgBG.png"
                      alt="Design system documentation showing dark mode UI components, including video players, color palettes, and interface patterns"
                      width={1400}
                      height={800}
                      className="w-full"
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Audit-vuJGZp0gVg3m1GyIaPkxHoJk3CGFdt.png"
                      alt="Design system documentation displaying light mode interfaces, forms, navigation patterns, and system architecture diagrams"
                      width={1400}
                      height={800}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={650}>
              <div className="mt-12 mb-12">
                <h3
                  className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                >
                  Kick Off
                </h3>
                <div className="max-w-[720px]">
                  <div className="space-y-4">
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                    >
                      The audit list is filtered down to the most used cases - only what is essential and agnostic is
                      built into the Solid Design System. Best accessibility practice is also integrated to funnel the
                      design process.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="bg-white">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solid-design-system-kickoff.jpg-jY38jarGwgsyhkj1ySBgPKpAi8wXIo.jpeg"
                      alt="Collection of Union Investment digital interfaces showing various layouts, components and inconsistencies across different products"
                      width={1400}
                      height={800}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <h3
                className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
              >
                Laying the foundation
              </h3>
              <div className="max-w-[720px]">
                <div className="space-y-4">
                  <p
                    className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular mb-4`}
                  >
                    The Solid design system is guided by four core principles:
                  </p>
                  <ul
                    className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                  >
                    <li>
                      <span className="font-medium">Cohesive brand experience:</span> Maintain consistency across
                      products
                    </li>
                    <li>
                      <span className="font-medium">Accessibility:</span> Embed accessibility standards while
                      maintaining the brand's visual identity into all components and patterns
                    </li>
                    <li>
                      <span className="font-medium">Clarity:</span> Promote clear and straightforward user comprehension
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 space-y-4 max-w-[720px]">
                <div className="bg-white">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solid-design-system-consistency-phClhdiOWMbqLoJ2LeEQyYqWtuMFOH.png"
                    alt="Venn diagram showing the intersection of User Experience, Brand, and Development in the design system"
                    width={720}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={700}>
              <div className="mt-12">
                <h3
                  className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                >
                  Design & Development
                </h3>
                <div className="max-w-[720px]">
                  <div className="space-y-4">
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                    >
                      A design is first dissected and refined. Then the design would be turned into resuabled components
                      which are built, structured and stress-tested in parallel with front end to ensure the build is
                      closest to front end.
                    </p>
                  </div>
                </div>
                <div className="mt-4 max-w-[720px]">
                  <div className="bg-white">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solid-design-system-designdevelopment-7yKd7MI67tyOVH9JEvR2PitxNYLpQQ.png"
                      alt="Solid Design System component interface showing a button component with various properties and a login form for Union Funds Online"
                      width={720}
                      height={400}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <h3
                    className={`text-base md:text-base text-[16px] font-medium mt-12 mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                  >
                    Component Build
                  </h3>
                  <div className="max-w-[720px]">
                    <div className="space-y-4">
                      <p
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                      >
                        Inspired by the idea of "single lego block", components are built as bite-size composable
                        building blocks to increase reusability. Complex components such as table or navigation are
                        therefore were used with much ease (and joy).
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 max-w-[720px]">
                    <div className="bg-white">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solid-design-system-component-build2.jpg-2kA0yV63N23ZnlMpnNLc0o15DfLBda.png"
                        alt="Teaser component architecture showing detailed slot structure with media, meta, and main content areas"
                        width={720}
                        height={400}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-12">
                    <h3
                      className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                    >
                      Structure
                    </h3>
                    <div className="max-w-[720px]">
                      <div className="space-y-4">
                        <p
                          className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                        >
                          Significant challenges were faced, such as balancing the development of the design system
                          while projects were rapidly evolving. To overcome these obstacles:
                        </p>
                        <ul
                          className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                        >
                          <li>
                            Detailed release notes are always up-to-date keeping stakeholders informed to manage
                            expectations.
                          </li>
                          <li>
                            Component build focus on both foundational components and complex CMS elements
                            simultaneously.
                          </li>
                          <li>Components are gradually introduced into existing products.</li>
                          <li>
                            Iterations happen in parallel with building from peer feedback for further improvements or
                            addition.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="max-w-[720px] bg-white mt-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solid-design-system-structure.jpg-Vf9ifvmkxCTgqLPeCfkq3S0Qcivjwz.png"
                        alt="Organizational structure diagram showing the design system hierarchy and component relationships"
                        width={720}
                        height={400}
                        className="w-full"
                      />
                    </div>
                    <div className="max-w-[720px] bg-white mt-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solid-design-system-flow-gXIxcKCrQHOgBYreSi3f3z3qTyN8fU.png"
                        alt="Core and team components flow diagram showing the progression from initial components through design, review, development, and publishing stages"
                        width={720}
                        height={400}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={800}>
              <div className="mt-12">
                <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                  Reflection & Learnings
                </h2>
                <div className="max-w-[720px]">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3
                        className={`text-base md:text-base text-[16px] font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}
                      >
                        Key lessons learned:
                      </h3>
                      <ul
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                      >
                        <li>
                          <span className="font-medium">Documentation is crucial:</span> Keeping a detailed record of
                          decisions creates a valuable paper trail for transparency and future reference.
                        </li>
                        <li>
                          <span className="font-medium">Early leadership involvement:</span> Engaging leadership from
                          the outset helps align expectations and fosters support, even if it means agreeing to disagree
                          at times.
                        </li>
                        <li>
                          <span className="font-medium">Continuous research is vital:</span> User needs are diverse;
                          ongoing research ensures the product remains relevant and user-focused.
                        </li>
                        <li>
                          <span className="font-medium">Prototyping enhances feedback:</span> Users provide more
                          actionable feedback when they can interact with tangible prototypes rather than abstract
                          discussions.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3
                        className={`text-base md:text-base text-[16px] font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}
                      >
                        Influences on My Approach
                      </h3>
                      <p
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                      >
                        This project reinforced the importance of a user-centered design approach and the value of
                        iterative development based on real user feedback. It highlighted the necessity of balancing
                        business objectives with user needs to create a product that delivers genuine value.
                      </p>
                    </div>
                  </div>
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
