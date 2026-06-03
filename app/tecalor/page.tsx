"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, ArrowLeft, ExternalLink } from "lucide-react"
import { AnimateIn } from "../components/animate-in"
import { ScrollRing } from "../components/scroll-ring"
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

      // Removed cursor hiding functionality
    }

    const handleHeaderHover = () => {
      setIsHeaderHovered(true)
    }

    const handleHeaderLeave = () => {
      setIsHeaderHovered(false)
    }

    const header = document.querySelector("header")
    header?.addEventListener("mouseenter", handleHeaderHover)
    header?.addEventListener("mouseleave", handleHeaderLeave)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      header?.removeEventListener("mouseenter", handleHeaderHover)
      header?.removeEventListener("mouseleave", handleHeaderLeave)
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
                  onError={() => setError("Failed toload LinkedIn icon")}
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
              <div
                ref={heroRef}
                className="aspect-[20/7] relative rounded-2xl overflow-hidden bg-[#ffffff] flex items-center justify-center"
              >
                <div
                  ref={heroRef}
                  className="aspect-[20/7] relative rounded-2xl overflow-hidden bg-white flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tec-hero-cover6.jpg-7NoqOUJWIPuXhjODCVqgDJg20cJFGO.png"
                      alt="Tecalor heat pump interface showing temperature performance graph, with mobile screen displaying heat source options (water, earth, air), and performance metrics at different temperatures from +20°C to -20°C"
                      width={1200}
                      height={600}
                      className="w-full object-contain"
                      priority
                      onError={() => setError("Failed to load hero image")}
                    />
                  </div>
                  <ScrollRing />
                </div>
                <ScrollRing />
              </div>
            </AnimateIn>

            <div className="mt-16">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="flex-1">
                  <AnimateIn animation="fade-up" duration="normal" delay={200}>
                    <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      The Brief
                    </h2>

                    <h3 className={`text-base font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>Client</h3>
                    <div className="space-y-6 mb-12">
                      <p className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular`}>
                        Tecalor GmbH
                      </p>
                      <Link
                        href="https://waermepumpe.tecalor.de/de/home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular underline hover:opacity-80 flex items-center gap-2`}
                      >
                        look at Tecalor's ecommerce page
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </AnimateIn>
                </div>

                <div className="flex-1">
                  <AnimateIn animation="fade-up" duration="normal" delay={750}>
                    <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      My Role & Contributions
                    </h2>
                    <div className="max-w-[720px]">
                      <div className="space-y-6">
                        <p className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular`}>
                          As Product Designer, my responsibilities encompassed:
                        </p>

                        <div className="space-y-4">
                          <h3 className={`text-base font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                            Design and Problem-Solving:
                          </h3>
                          <ul
                            className={`${
                              isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"
                            } space-y-2 text-[14px] font-regular list-disc pl-5`}
                          >
                            <li>Developed user flows and wireframes based on validated research.</li>
                            <li>
                              Made critical decisions on organizational principles, advocating for a user-centric
                              approach.
                            </li>
                            <li>
                              Demonstrated how integrating projects could simplify the user experience and improve
                              feature utilization.
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h3 className={`text-base font-medium ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                            Challenges Overcome:
                          </h3>
                          <ul
                            className={`${
                              isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"
                            } space-y-2 text-[14px] font-regular list-disc pl-5`}
                          >
                            <li>Navigated shifting business priorities</li>
                            <li>
                              Facilitated stakeholder feedback sessions, ensuring everyone's perspectives were
                              considered.
                            </li>
                            <li>
                              Presented design & design processes from start to end of project to leadership,
                              influencing key decisions.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AnimateIn>
                </div>
              </div>
            </div>

            <AnimateIn animation="fade-up" duration="normal" delay={200}>
              <div className="mt-16">
                <div className="flex flex-col lg:flex-row gap-16">
                  <div className="flex-1">
                    <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      The Before
                    </h2>
                    <div className="space-y-4 mb-12">
                      <p className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular`}>
                        The main challenge was to create a distinct visual identity for Tecalor while maintaining the
                        efficiency and consistency benefits of sharing a design system with Stiebel Eltron. We needed to
                        ensure that both brands could maintain their unique market positions while sharing core
                        components and patterns.
                      </p>
                      <p className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular mt-4`}>
                        Additionally, we needed to optimize the brand for digital products while ensuring accessibility
                        and maintaining visual appeal. This required careful consideration of color contrast,
                        typography, and interactive elements.
                      </p>
                      <div className="mt-8 space-y-6">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tec-before-assets.jpg-Lrb2hhm25seOpiAjgvsP7LrXaq61y2.png"
                          alt="Tecalor brand assets showing color palette with green tones and interface icons"
                          width={720}
                          height={360}
                          className="w-full"
                        />
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tec-before.jpg-i3Niqwi2dDKgFMiAPSoJL4BrFgb4Ia.png"
                          alt="Tecalor's e-commerce interface showing product return forms and order management"
                          width={720}
                          height={480}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">{/* Right column intentionally empty */}</div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={750}>
              <div className="space-y-4">
                <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                  The Brand Refresh
                </h2>

                <h3 className={`text-base font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                  Exploration axis
                </h3>
                <div className="space-y-4 mb-12">
                  <div className="w-full lg:w-1/2">
                    <Image
                      src="/images/Tec-exploration-axis.jpg"
                      alt="Design exploration grid showing different brand attributes: Creative, Trustworthy, Subtle Green, Bold Green, Lean on, Engaging, Subtle Type, and Bold Type with descriptions for each approach"
                      width={720}
                      height={360}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="pt-12">
                  <h3 className={`text-base font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                    Systematic colors building
                  </h3>
                </div>
                <div className="space-y-4 mb-12">
                  <div className="w-full lg:w-1/2">
                    <p className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular`}>
                      To enhance the brand's digital experience, I create scalable, systematic contrast steps color
                      ramps for design team to leverage brand elements. This gives structure to the colors for
                      scalability and assist clients converting from print style guide.
                    </p>
                  </div>
                  <div className="mt-8 space-y-6">
                    <Image
                      src="/images/Tec-color-strategy.png"
                      alt="Systematic color building strategy showing color ramps with contrast steps for primary, secondary and neutral colors with accessibility indicators for white and black text"
                      width={720}
                      height={360}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mb-12 pt-12">
                  <h3 className={`text-base font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                    Product Exploration
                  </h3>
                  <div className="space-y-4 mb-12">
                    <div className="w-full lg:w-1/2">
                      <p className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular`}>
                        The exploration process involved developing foundational concepts and testing their adaptability
                        across the entire system. Initial design directions provided a starting point, but translating
                        them into a cohesive experience required deeper iteration. Rather than applying surface-level
                        changes, the focus was on refining and expanding the design language to ensure consistency and
                        scalability across all touchpoints.
                      </p>
                    </div>
                    <div className="mt-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tec-product-exploration-desktop.jpg-pzvohPhL9gTjN4Euaey30SlWMrOL9q.jpeg"
                        alt="Tecalor WPL 07 ACS Classic Plus heat pump product page showing a residential installation with the outdoor unit, pricing at 7.756 €, and multiple power options from 3.20 kW to 7.80 kW"
                        width={1200}
                        height={800}
                        className="w-full"
                      />
                    </div>
                    <div className="mt-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tec-systemize2.jpg-5ZDaua2GbJPOqrxIcXivMoh33uJLUb.png"
                        alt="Tecalor design system color palette showing primary green and dark color combinations with interface components"
                        width={720}
                        height={360}
                        className="w-full"
                      />
                    </div>
                    <div className="mt-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tec-product-exploration.jpg-9EZ3ybAMG08xg3sKmBJux9JuTMdxvJ.png"
                        alt="Collection of Tecalor interface components showing product catalog, contact forms, and information sections with green accent colors"
                        width={720}
                        height={360}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={800}>
              <div className="mt-24 w-full">
                <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                  Systemizing The Refresh
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className={`text-base font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      Integration
                    </h3>
                    <div className="w-full lg:w-1/2">
                      <p className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular`}>
                        To maintain harmony across the system, work was shared regularly to assess balance and cohesion.
                        The design continuously evolved through iterative testing within the product UI, with ongoing
                        collaboration and feedback from product teams.
                      </p>
                    </div>
                    <div className="mt-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tec-bringitalltogether2.jpg-MK75AKE2f5azcQSPfQSZyxE7S3D6Qf.png"
                        alt="Design system documentation showing button component anatomy and form interface evolution"
                        width={1400}
                        height={600}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 mt-12">
                    <h3 className={`text-base font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      Updating The System
                    </h3>
                    <div className="w-full lg:w-1/2">
                      <p className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular`}>
                        Once the system was fully aligned, core libraries were refactored, and changes were
                        systematically migrated with the help of the Token Studio plugin. Alongside refreshed
                        components, the new library introduced foundational elements, including illustrations, icons,
                        color, typography, and spacing, ensuring consistency and scalability.
                      </p>
                    </div>
                    <div className="mt-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tec-after2.jpg-xVKRgF0hJIrkn2k8P3wX172Hba2dRc.png"
                        alt="Updated Tecalor product interface showing modernized search, navigation, and product details layout"
                        width={1400}
                        height={600}
                        className="w-full"
                      />
                    </div>
                    <div className="mt-8">
                      <Image
                        src="/images/Tec-update-the-system2.jpg"
                        alt="Tecalor design system components showing mobile UI, typography, color palette, product images, and icon sets in green brand colors with interface elements and illustrations"
                        width={1400}
                        height={600}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-up" duration="normal" delay={800}>
              <div className="mt-24 w-full">
                <h2 className={`text-2xl font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                  Reflection & Learnings
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className={`text-base font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                      Key Lessons Learned:
                    </h3>
                    <div className="w-full lg:w-1/2">
                      <p className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} text-[14px] font-regular`}>
                        This project underscored the significance of a user-centered design approach and the impact of
                        iterative development driven by real user feedback. It emphasized the need to align business
                        goals with user needs to create a product that offers meaningful value.
                      </p>
                    </div>

                    <div className="space-y-4 mt-8">
                      <h3 className={`text-base font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                        For Homeowners and Customers:
                      </h3>
                      <div className="w-full lg:w-1/2">
                        <ul
                          className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} space-y-2 text-[14px] font-regular list-disc pl-5`}
                        >
                          <li>
                            A more intuitive and visually cohesive website, making it easier to explore and compare
                            heating solutions.
                          </li>
                          <li>
                            Improved access to product details, cost breakdowns, and financing options for informed
                            decision-making.
                          </li>
                          <li>
                            A seamless e-commerce experience, simplifying the process of purchasing energy-efficient
                            heating systems.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <h3 className={`text-base font-medium mb-4 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                        For Installers and Industry Professionals:
                      </h3>
                      <div className="w-full lg:w-1/2">
                        <ul
                          className={`${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"} space-y-2 text-[14px] font-regular list-disc pl-5`}
                        >
                          <li>
                            Streamlined navigation for quicker access to technical specifications and installation
                            resources.
                          </li>
                          <li>
                            Enhanced clarity in product categorization, reducing time spent searching for the right
                            solutions.
                          </li>
                          <li>
                            A modernized design system that ensures consistency across all digital touchpoints,
                            improving overall usability.
                          </li>
                        </ul>
                      </div>
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
