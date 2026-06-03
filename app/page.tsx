"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectTeaserBig } from "./components/project-teaser-big"
import { ProjectTeaserSmall } from "./components/project-teaser-small"
import { AnimateIn } from "./components/animate-in"
import { BackToTop } from "./components/back-to-top"
import { Tab } from "./components/tab"
import { AccessibilityMenu } from "./components/accessibility-menu"
// Import the TecalorTeaser component at the top of the file
import { TecalorTeaser } from "./components/tecalor-teaser"
// Import the InnoviaTeaser component
import { InnoviaTeaser } from "./components/innovia-teaser"
// Import the SparxTeaser component at the top of the file
import { SparxTeaser } from "./components/sparx-teaser"
// Import the StiebelTeaser component
import { StiebelTeaser } from "./components/stiebel-teaser"
// First, import the HighlightCard component
import { HighlightCard } from "./components/highlight-card"
// Import the SDTeaser component at the top of the file
import { SDTeaser } from "./components/sd-teaser"
// First, import the BookerForm component at the top of the file
import { BookerForm } from "./components/booker-form"

const stackItems = {
  main: [
    {
      name: "System thinking",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brain-LlJJHKA024H8Dx3K3aqZKg1Eo9TaOa.svg",
      className: "brightness-0 invert",
    },
    {
      name: "Systemisation",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/layer-group-rVEcLD0GoaNlqfNUhmZ3dBukvVUuZg.svg",
      className: "brightness-0 invert",
    },
    {
      name: "Product design",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vector-kiUfnthAAtHCIlvNTQt1KxYFjLlHzi.svg",
      className: "brightness-0 invert",
    },
    {
      name: "Accessibility",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accessibility-YmRBXbw8vekPTndnviNlNefasw5hk1.png",
    },
    {
      name: "Figma",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figma-PKDrOUAyIDIgjg2GUiCDR8AiLY47aR.png",
    },
    {
      name: "Webflow",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%2011-RbYHkfCoTjJBaJCOgYvFFsGrZ9myiY.svg",
    },
    {
      name: "Framer",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/framer-ZJilsjbOW0Ks4Dcqfq9LyA4OBaaE06.png",
    },
    {
      name: "Tokens Architecture",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tokens-So0SjM3OXjp2Px9ae0riqvin1L1ryt.png",
    },
  ],
  extra: [
    {
      name: "Cursor",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%205-f6uUmsABKtybY9Rzga4HQmnEQrXRR5.svg",
    },
    {
      name: "Copilot",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%208-cr68aqm3BxQQNtzeIqAWRjbTihtCwm.svg",
    },
    {
      name: "Style Dictionary",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%208-G2GmFalbN7qM01tI2lwi4SIWxfHzlm.png",
    },
    {
      name: "Tailwind",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component%2010-1YWGIH5XiwixJBUaPhbGpbqzZIUR3y.png",
    },
    {
      name: "HTML & CSS",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hc-OOAdvExo0HHWR6X3mNYpSpl7FEL1gv.png",
    },
    {
      name: "Javascript",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/js-mqhvPkx1qunl6rWGrjfcS6YQd9PwKv.png",
    },
  ],
}

// Add the highlights data
const highlights = [
  {
    component: SDTeaser,
    size: "big",
    props: {
      title: "Solid media teaser",
      description:
        "Default text lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.",
      buttonLabel: "Go to project",
      buttonHref: "/solid-design-system",
    },
  },
  {
    image: "/images/sparx-snippet-static.png",
    altText: "Design System Architecture diagram showing component hierarchy and relationships",
    isGif: true,
    size: "small",
  },
  {
    component: BookerForm,
    size: "small",
    customContainer: true,
    props: {
      className: "booker-form",
    },
  },
  // New highlight card positioned below the Sparx highlight card
  {
    image: "/gradient-flow.png",
    altText: "Modern interface design concept with gradients",
    size: "small",
    positionedUnder: "sparx",
  },
]

const sideProjects = [
  {
    title: "Tecalor",
    category:
      "Collaborated on a strategic brand refresh and multi-brand architecture to support the Tecalor product relaunch, modernizing the digital identity across 5,000+ pages while cutting time-to-market by 40%.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SteTec-project-teaser-cover.jpg-ZVjdCn186WoWz3rdvkm6CdWj2bOuVq.png",
    slug: "tecalor",
    altText: "See Tecalor project details",
    type: "tecalor",
  },
  {
    title: "Sparx",
    category:
      "Designing and building the landing page for Sparx - Denkwerk's internal design thinking tool kit. The website was developed on Webflow platform with minor custom low code.",
    image: "/images/sparx-cover3.jpg",
    slug: "https://sparx.denkwerk.com/",
    altText: "Go to Sparx landing page",
    type: "sparx",
  },
  {
    title: "Innovia Films",
    category:
      "Designing a new website for Innovia Films that reflects the brand's new core values: innovation, service & sustainability; and developing the website using Webflow platform with low code injections.",
    image: "/images/innovia-cover-tablet.jpg",
    slug: "https://www.innoviafilms.com/",
    altText: "Go to Innovia Films landing page",
    type: "innovia",
  },
  {
    title: "Motel One",
    category: "Establishing a process and a design system approach for existing templates & components.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-motelone-ti5QADnp0SzXTyYFezgy0KDbJhRoJp.png",
    flag: "Coming soon",
    type: "default",
  },
  {
    title: "Condor",
    category: "Building fluid typography token structure and automation to boost designer/development workflow",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/condor-cover.jpg-ZwJfkZnsJ5sONvoaTvjcdjyvuRWbnZ.jpeg",
    flag: "Coming soon",
    type: "default",
  },
]

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const nextProject = () => {
    if (currentProject < sideProjects.length - 1) {
      setCurrentProject(currentProject + 1)
    }
  }

  const previousProject = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1)
    }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#1d1523] from-[60%] via-[#403756] via-[85%] via-[#574960] via-[90%] to-[#8ba49d] to-[95%] text-[#e0e0e0]"
          : "bg-gradient-to-b from-[#FFEFED] from-[60%] via-[#FFEFED] via-[85%] via-[#FFEFED] via-[90%] to-[#362d47] to-[95%] text-[#1a2634]"
      }`}
    >
      {scrolled ? (
        <header className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 transition-all duration-300">
          <div
            className={`pl-6 pr-3.5 h-14 flex items-center justify-between rounded-full transition-all duration-300 min-w-[280px] bg-[#292033] shadow-lg`}
          >
            <Link
              href="/"
              className={`text-[15px] font-medium hover:opacity-70 transition-opacity whitespace-nowrap text-white text-left focus:outline-none focus-visible:outline-none`}
              aria-label="Home"
              tabIndex={2}
              style={{ marginLeft: "0px" }}
            >
              Van Nguyen
            </Link>

            <nav className="flex items-center gap-3 sm:gap-4" aria-label="Main navigation">
              <Link
                href="https://www.linkedin.com/in/van-nguyen-33a236275/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to Van nguyen's linkedin page"
                tabIndex={1}
                className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fbcfcb] focus-visible:ring-offset-2"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-5uOAnTQchzjYhqlaZCJzaO6RV1fAtW.png"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>

              <div>
                <AccessibilityMenu scrolled={scrolled} isDark={isDark} />
              </div>

              <button
                onClick={toggleTheme}
                className={`${
                  scrolled ? "w-8 h-8 bg-[#2d3d4f] hover:bg-[#3a4b5f]" : "w-10 h-10 bg-[#2d3d4f] hover:bg-[#3a4b5f]"
                } rounded-full flex items-center justify-center transition-colors`}
                aria-label={isDark ? "Change to light theme" : "Change to dark theme"}
                tabIndex={3}
              >
                {isDark ? (
                  <Sun className={`${scrolled ? "w-4 h-4" : "w-5 h-5"} text-white`} aria-hidden="true" />
                ) : (
                  <Moon className={`${scrolled ? "w-4 h-4" : "w-5 h-5"} text-white`} aria-hidden="true" />
                )}
              </button>
            </nav>
          </div>
        </header>
      ) : (
        <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
          <div className="bg-[#292033] backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.1)]">
            <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
              <Link
                href="/"
                className="text-[15px] font-medium hover:opacity-70 transition-opacity text-white text-left focus:outline-none focus-visible:outline-none"
                aria-label="Home"
                tabIndex={0}
                style={{ position: "relative", zIndex: 997 }}
              >
                Van Nguyen
              </Link>

              <nav className="flex items-center gap-3 sm:gap-4" aria-label="Main navigation">
                <Link
                  href="https://www.linkedin.com/in/van-nguyen-33a236275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Van nguyen's linkedin page"
                  tabIndex={0}
                  className="linkedin-link block p-2 rounded-full hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fbcfcb] focus-visible:ring-offset-2"
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

                <div style={{ position: "relative", zIndex: 999 }}>
                  <AccessibilityMenu scrolled={false} isDark={isDark} />
                </div>

                <button
                  onClick={toggleTheme}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#2d3d4f] hover:bg-[#3a4b5f]"
                  aria-label={isDark ? "Change to light theme" : "Change to dark theme"}
                  tabIndex={0}
                  style={{ position: "relative", zIndex: 998 }}
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

      <main id="main-content" className="pt-32 lg:pt-40 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto pb-[430px]">
          {/* Profile section */}
          <AnimateIn>
            <div className="max-w-[720px] space-y-4">
              <div className="flex flex-col">
                <div className="relative w-[106px] h-[106px] -ml-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Draft_self_assesment-95FNpNILfL4IwWcdnneF96dPYCESuW.png"
                    alt="Van Nguyen standing in front of a bookshelf"
                    width={106}
                    height={106}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p
                  className={`text-sm font-normal leading-[150%] tracking-[0.04em] ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}
                >
                  Product designer with a track record of building award-winning of architecting, scaling, managing enterprise design systems for multi-brand ecosystems. Deeply committed to ingraining brand&apos;s core identity and philosophy directly into the user experience, ensuring that complex multi-brand digital ecosystems maintain high emotional resonance alongside functional excellence.
                </p>
                <div className="inline-flex items-center gap-2 px-4 h-9 mt-6 mb-6 rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.1)] bg-[#2E2E48] -ml-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 badge-glow"></span>
                  <span className="text-white text-sm">Open for Work and Collaboration</span>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Highlight section */}
          <div className="mt-32">
            <div className="grid grid-cols-4 gap-6 md:gap-[24px]">
              {/* First two columns with SD-Teaser spanning 2 columns */}
              <div className="col-span-2">
                <div className="aspect-square rounded-[48px] overflow-hidden relative">
                  <Image
                    src="/images/ui-highlight-background.png"
                    alt="Financial chart background"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-[24px] left-0 right-0 z-10 px-6" style={{ aspectRatio: "16/10" }}>
                    <SDTeaser
                      title="Solid media teaser"
                      description="Default text lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor."
                      buttonLabel="Go to project"
                      buttonHref="/solid-design-system"
                    />
                  </div>
                </div>
              </div>

              {/* Column with Sparx highlight card and new highlight card stacked */}
              <div className="col-span-1">
                <div className="space-y-[24px]">
                  {/* Sparx highlight card */}
                  <HighlightCard
                    image="/images/sparx-snippet-static.png"
                    altText="Design System Architecture diagram showing component hierarchy and relationships"
                    isGif={true}
                  />

                  {/* New highlight card positioned below Sparx */}
                  <div className="aspect-square rounded-[48px] overflow-hidden bg-[#ECF0FA]">
                    <div className="w-full h-full"></div>
                  </div>
                </div>
              </div>

              {/* BookerForm highlight card */}
              <div className="col-span-1">
                <div className="aspect-square rounded-[48px] overflow-hidden bg-[#F6F4EF] relative">
                  <BookerForm className="booker-form absolute inset-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Selected Works section */}
          <div className="mt-32 lg:mt-[200px]">
            <AnimateIn>
              <h2 className={`text-[14px] font-semibold mb-6 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                Selected Works
              </h2>
            </AnimateIn>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 mb-32">
              <ProjectTeaserBig
                title="Union Investment"
                category="Built the enterprise design system from scratch to support 20+ product teams by optimizing complex financial workflows and reducing maintenance costs by 42%."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solid-design-system-cover.jpg-KIK7kePoViN8LWxvHe7fFlFXwbMMnY.jpeg"
                isDark={isDark}
                slug="solid-design-system"
                altText="See Union Investment project details"
              />
              <StiebelTeaser
                title="Stiebel Eltron x Tecalor"
                category="Overhauled the global B2B multi-brand architecture to power an e-commerce transformation across 5,000+ digital pages, cutting time-to-market by 40%."
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-teaser-image-02-cFPeN8zv9cV2fw4RTHdqQOL4kkM3VG.png?height=960&width=1200"
                isDark={isDark}
                slug="stiebel-eltron-tecalor"
                altText="See Stiebel Eltron and Tecalor project details"
              />
            </div>

            <div className="relative">
              <div className="relative">
                <div className="overflow-visible">
                  <div
                    className="flex justify-start transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentProject * 100}%)` }}
                  >
                    {sideProjects.map((project, index) => (
                      <div key={index} className="w-[40%] flex-shrink-0 pr-6">
                        {project.type === "tecalor" ? (
                          <TecalorTeaser
                            title={project.title}
                            category={project.category}
                            isDark={isDark}
                            slug={project.slug}
                            altText={project.altText}
                          />
                        ) : project.type === "sparx" ? (
                          <SparxTeaser
                            title={project.title}
                            category={project.category}
                            image={project.image}
                            isDark={isDark}
                            slug={project.slug}
                            altText={project.altText}
                          />
                        ) : project.type === "innovia" ? (
                          <InnoviaTeaser
                            title={project.title}
                            category={project.category}
                            isDark={isDark}
                            slug={project.slug}
                            altText={project.altText}
                          />
                        ) : (
                          <ProjectTeaserSmall
                            title={project.title}
                            category={project.category}
                            image={project.image}
                            isDark={isDark}
                            slug={project.slug}
                            flag={project.flag}
                            altText={project.altText}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center gap-8 mt-12">
                  <button
                    onClick={previousProject}
                    disabled={currentProject === 0}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border-2 min-w-[24px] min-h-[24px] ${
                      isDark ? "border-white text-white" : "border-[#292033] text-[#292033]"
                    } ${
                      currentProject === 0 ? "opacity-40 cursor-not-allowed hover:bg-transparent" : "hover:bg-white/10"
                    }`}
                    aria-label="Previous project"
                    tabIndex={currentProject === 0 ? -1 : 0}
                  >
                    <ChevronLeft className="w-5 h-5 -ml-1" />
                  </button>

                  <div className="flex items-center gap-3">
                    {sideProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          currentProject === index
                            ? isDark
                              ? "bg-white"
                              : "bg-[#292033]"
                            : isDark
                              ? "bg-white/20 hover:bg-white/30"
                              : "bg-[#292033]/20 hover:bg-[#292033]/30"
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                        aria-current={currentProject === index ? "true" : "false"}
                        tabIndex={-1}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextProject}
                    disabled={currentProject === sideProjects.length - 1}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border-2 min-w-[24px] min-h-[24px] ${
                      isDark ? "border-white text-white" : "border-[#292033] text-[#292033]"
                    } ${
                      currentProject === sideProjects.length - 1
                        ? "opacity-40 cursor-not-allowed hover:bg-transparent"
                        : "hover:bg-white/10"
                    }`}
                    aria-label="Next project"
                    tabIndex={currentProject === sideProjects.length - 1 ? -1 : 0}
                  >
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stack section */}
          <div className="mt-32">
            <AnimateIn>
              <h2 className={`text-[14px] font-semibold mb-12 ${isDark ? "text-white" : "text-[#1a2634]"}`}>
                My Stack
              </h2>
            </AnimateIn>

            <div className="space-y-12">
              {/* Main Section */}
              <div className="space-y-4">
                <AnimateIn>
                  <h3 className={`text-base mb-6 ${isDark ? "text-white" : "text-white"}`}>Main</h3>
                </AnimateIn>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                  {stackItems.main.map((item, index) => (
                    <AnimateIn key={index} className="group" delay={index * 100}>
                      <Tab>
                        <div className="w-6 h-6 relative flex items-center justify-center">
                          <Image
                            src={item.icon || "/placeholder.svg"}
                            alt={item.name}
                            width={24}
                            height={24}
                            className={item.className}
                          />
                        </div>
                        <span className="text-white text-base">{item.name}</span>
                      </Tab>
                    </AnimateIn>
                  ))}
                </div>
              </div>

              {/* Extra Section */}
              <div className="space-y-4">
                <AnimateIn>
                  <h3 className={`text-base mb-6 ${isDark ? "text-white" : "text-white"}`}>Extra</h3>
                </AnimateIn>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                  {stackItems.extra.map((item, index) => (
                    <AnimateIn key={index} className="group" delay={index * 100}>
                      <Tab>
                        <div className="w-6 h-6 relative flex items-center justify-center">
                          <Image src={item.icon || "/placeholder.svg"} alt={item.name} width={24} height={24} />
                        </div>
                        <span className="text-white text-base">{item.name}</span>
                      </Tab>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BackToTop isDark={isDark} />
    </div>
  )
}
