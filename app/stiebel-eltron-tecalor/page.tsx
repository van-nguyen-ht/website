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
        // Commented out to prevent cursor issues
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
      className={`min-h-screen font-sans transition-colors duration-300 overflow-x-hidden ${
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
              className="text-[15px] font-medium hover:opacity-70 transition-opacity text-white flex items-center gap-2"
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
                className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity"
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
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-[#2d3d4f] hover:bg-[#3a4b5f]"
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
                className="text-[15px] font-medium hover:opacity-70 transition-opacity text-white flex items-center gap-2"
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
                  className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity"
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
      )}

      <main className="pt-32 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto pb-96">
          <div className="content-animation">
            <AnimateIn animation="fade-up" duration="normal" delay={150}>
              <div ref={heroRef} className="aspect-[20/7] relative rounded-2xl overflow-hidden bg-[#092F1B]">
                <Image
                  src="/images/SteTec-cover4.jpg"
                  alt="Side-by-side comparison of Stiebel Eltron (red) and Tecalor (green) mobile interfaces showing their heat pump product navigation systems with matching brand colors"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    console.error("Failed to load hero image")
                    e.currentTarget.style.display = "none"
                  }}
                />
                <ScrollRing />
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={200}>
              <div className="mt-16">
                <div className="flex flex-col lg:flex-row gap-16">
                  <div className="flex flex-row flex-wrap gap-6">
                    <div className="w-[150px]">
                      <p
                        className={`text-3xl md:text-6xl font-light font-mono ${isDark ? "text-white" : "text-[#1a2634]"}`}
                      >
                        93%
                      </p>
                      <p className={`text-[14px] mt-2 font-sans ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                        adoption rate in products
                        <br />
                        developed with React
                      </p>
                    </div>
                    <div className="w-[150px]">
                      <p
                        className={`text-3xl md:text-6xl font-light font-mono ${isDark ? "text-white" : "text-[#1a2634]"}`}
                      >
                        40%
                      </p>
                      <p className={`text-[14px] mt-2 font-sans ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                        faster development
                        <br />
                        time
                      </p>
                    </div>
                    <div className="w-[150px]">
                      <p
                        className={`text-3xl md:text-6xl font-light font-mono ${isDark ? "text-white" : "text-[#1a2634]"}`}
                      >
                        35%
                      </p>
                      <p className={`text-[14px] mt-2 font-sans ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}>
                        reductions in design
                        <br />
                        and development costs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">{/* Right column intentionally empty */}</div>
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
                  <PhaseSlider projectType="stiebel" />
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
                        Stiebel Eltron
                      </p>
                      <Link
                        href="https://waermepumpe.tecalor.de/de/home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular underline hover:opacity-80 flex items-center gap-2`}
                      >
                        look at Tecalor's ecommerce page
                        <ExternalLink className="w-3 h-3" />
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
                        Stiebel Eltron is the leading manufacturers of heating and hot water solutions. One of their
                        heat pump brand, Tecalor, provides smart heating solutions. With the growing focus on
                        sustainable energy solutions, they wanted relaunch their minor brand Tecalor.
                      </p>
                      <p
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular mt-4`}
                      >
                        They chose to integrate it within their overarching brand, deviating from the Interact-specific
                        approach. This called for a reshape of the Stiebel Eltron design system. It needed to seamlessly
                        accommodate both Stiebel Eltron and Tecalor branded products, which involves preserving core
                        elements while meeting the unique visual and experiential
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
                                className={`${
                                  isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"
                                } space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                              >
                                <li>
                                  Developing a multibrand design system strategy that maintains brand individuality
                                  while sharing core components
                                </li>
                                <li>
                                  Creating a unified design language that accommodates both brands' unique visual
                                  identities
                                </li>
                                <li>
                                  Establishing guidelines for component variations that respect each brand's color
                                  schemes and styling preferences
                                </li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3
                                className={`text-base md:text-base text-[16px] font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}
                              >
                                Design and Implementation:
                              </h3>
                              <ul
                                className={`${
                                  isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"
                                } space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                              >
                                <li>
                                  Building a flexible component library that adapts to each brand's visual language
                                  while maintaining consistency in functionality
                                </li>
                                <li>
                                  Implementing a token-based design system that allows for brand-specific theming while
                                  sharing core structural elements
                                </li>
                                <li>Creating documentation that clearly outlines usage guidelines for both brands</li>
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <h3
                                className={`text-base md:text-base text-[16px] font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}
                              >
                                Collaboration:
                              </h3>
                              <ul
                                className={`${
                                  isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"
                                } space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                              >
                                <li>Working closely with both brand teams to ensure their needs were met</li>
                                <li>
                                  Coordinating with developers to implement the system efficiently across both platforms
                                </li>
                                <li>Training team members on the new design system</li>
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
                      The Challenge & Solution
                    </h2>
                    <div className="space-y-4 mb-12">
                      <p
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                      >
                        Overhauled a fragmented multi-brand architecture to power a global B2B digital transformation. I directed the end to end product design owning stakeholder discovery, continuous usability testing, and strict component design to modernize the digital identity across 5,000+ pages while cutting engineering time to market by 40%.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">{/* Right column intentionally empty */}</div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={300}>
              <div className="max-w-[720] space-y-4">
                <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>The Metrics</h2>
                <div className="space-y-4 mb-12">
                  <div className="w-full lg:w-1/2">
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                    >
                      Scale: Successfully deployed a unified framework across 5,000+ digital pages for 54,000+ global partners.
                    </p>
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular mt-4`}
                    >
                      Velocity: Reduced development friction to deliver a 40% faster time-to-market for cross-functional teams.
                    </p>
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular mt-4`}
                    >
                      Conversion: Modernized the end-to-end digital experience, driving measurable increases in global B2B conversions.
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="bg-white w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SteTec-workflow.jpg-V9KcfeDjVFtsDWtLyRYHJ3WaiLAviq.png"
                        alt="Design system audit workflow showing outcome exploration and assumption mapping with color-coded sticky notes and wireframe implementations"
                        width={1400}
                        height={800}
                        className="w-full rounded-2xl"
                        onError={(e) => {
                          console.error("Failed to load workflow image")
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <h3
                  className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                >
                  Phased approach
                </h3>
                <div>
                  <div className="w-full lg:w-1/2">
                    <div className="space-y-4">
                      <p
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                      >
                        A 2 phased approach was adopted to address the challenge. There's 2 key objectives:
                      </p>
                      <ul
                        className={`${
                          isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"
                        } space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                      >
                        <li>
                          The most important objective was for the new product team to start designing promptly with
                          minimal delays.
                        </li>
                        <li>
                          The second was to optimise the Tecalor branding for digital products to have a temporary
                          library, containing a core subset of the components to enable the design team to start using
                          it.
                        </li>
                      </ul>
                      <div className="mt-8 space-y-8 w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SteTec-phase1.jpg-zmtS2Z97LxKLFp3JX1hXZsOtqvUeOL.png"
                          alt="Core component architecture showing 50+ components and 25+ modules organized in a connected system with green accent colors"
                          width={720}
                          height={360}
                          className="w-full"
                          onError={(e) => {
                            console.error("Failed to load phase1 image")
                            e.currentTarget.style.display = "none"
                          }}
                        />

                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SteTec-phase2.jpg-7wERQfBcteLKg44O0JZb9xD8jH5NRx.png"
                          alt="Side-by-side comparison of the implemented design system showing Stiebel Eltron's red-accented product page and Tecalor's green-accented product page using the same component structure"
                          width={720}
                          height={360}
                          className="w-full"
                          onError={(e) => {
                            console.error("Failed to load phase2 image")
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      </div>
                    </div>
                  </div>
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
                <div className="w-full lg:w-1/2">
                  <div className="space-y-4">
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                    >
                      Transitioning to the second phase, the strategic choice was to facilitate the team's
                      implementation of the library, gather input, and finalise the branding. With these elements in
                      place, the priority shifted toward our ultimate objective: crafting a sustainable solution. Its
                      ultimate goal: remain agile by minimising the additional manual labor and added complexity of
                      multiple brands.
                    </p>
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular mt-4`}
                    >
                      To achieve this, the primary focus was on replacing the standard design styles with design tokens.
                      Tokens allow establishing a shared logic for applying styles across multiple brands – only
                      modifying some core values for each brand. The reason this works is the inherent layering of
                      design tokens, with each layer building upon the previous one in a parent-child relationship. In
                      essence, the initial layer encapsulates brand decisions, and the subsequent layers determine where
                      and how these decisions are applied.
                    </p>
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular mt-4`}
                    >
                      This modular approach resolved the immediate challenge at hand whilst streamlining maintenance,
                      providing flexibility, and enhancing overall consistency.
                    </p>

                    <div className="mt-8 space-y-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SteTec-devsketch.jpg-RYPj08ZTku0QKJY8m4UhmUhHYxZLvU.png"
                        alt="Design system color mapping showing core palettes, brand divergence, and component-specific color applications for the Tecalor brand"
                        width={720}
                        height={360}
                        className="w-full mb-8"
                        onError={(e) => {
                          console.error("Failed to load devsketch image")
                          e.currentTarget.style.display = "none"
                        }}
                      />
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SteTec-token.jpg-G5GPLAaoy6aI46zfRPFVv4KVNdvhDU.png"
                        alt="Component library architecture showing the shared structure between Stiebel Eltron (red) and Tecalor (green) design systems"
                        width={720}
                        height={360}
                        className="w-full"
                        onError={(e) => {
                          console.error("Failed to load token image")
                          e.currentTarget.style.display = "none"
                        }}
                      />
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SteTec-token-detail.jpg-1AGJeDC4oBC82KNyEA6LAK8dvzvCjh.png"
                        alt="Design token implementation showing how brand colors are applied consistently - Stiebel Eltron's red-70 and Tecalor's green-30 as primary colors"
                        width={720}
                        height={360}
                        className="w-full"
                        onError={(e) => {
                          console.error("Failed to load token detail image")
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={750}>
              <div className="mt-12 mb-12">
                <h3
                  className={`text-base md:text-base text-[16px] font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}
                >
                  Implementation and Adoption
                </h3>
                <div className="w-full lg:w-1/2">
                  <div className="space-y-4">
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                    >
                      By creating a white-label library that contains all components, and removing brand-specific
                      components from the Stiebel Eltron & Tecalor libraries, the design system is ensured to remain
                      aligned yet unique for each brand.
                    </p>
                    <p
                      className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[16px] md:text-[14px] font-regular`}
                    >
                      It's even designed to accommodate any future brands. This can help the client effectively venture
                      into new products with increased speed and quality, while maintaining consistency and leveraging
                      lessons learned from other brands and products. This empowers them to deliver a better product
                      experience and reduces the cost of design and development.
                    </p>
                    <div className="mt-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SteTec-token-transformation.jpg-2A3ccKKWsUnTm19UMzADOw4g1am8YV.png"
                        alt="Design token transformation diagram showing how components adapt between Stiebel Eltron's red theme and Tecalor's green theme through token mapping layers"
                        width={720}
                        height={360}
                        className="w-full"
                        onError={(e) => {
                          console.error("Failed to load token transformation image")
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={800}>
              <div className="space-y-8 w-full lg:w-1/2">
                <h2 className={`text-2xl font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                  Reflection & Learnings
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3
                      className={`text-base md:text-base text-[16px] font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}
                    >
                      Key lessons learned:
                    </h3>
                    <ul
                      className={`${
                        isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"
                      } space-y-2 text-[16px] md:text-[14px] font-regular list-disc pl-5`}
                    >
                      <li>
                        <span className="font-medium">Balance is crucial:</span> Finding the right balance between
                        shared components and brand-specific elements is key to a successful multibrand system.
                      </li>
                      <li>
                        <span className="font-medium">Flexibility through architecture:</span> A well-structured
                        component architecture can accommodate visual differences while maintaining functional
                        consistency.
                      </li>
                      <li>
                        <span className="font-medium">Communication is key:</span> Regular alignment with both brand
                        teams ensures the system meets everyone's needs.
                      </li>
                    </ul>
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
