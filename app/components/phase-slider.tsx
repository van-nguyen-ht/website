"use client"
import { useState } from "react"
import Image from "next/image"
import type { JSX } from "react"

interface Phase {
  icon: JSX.Element | string
  label: string
  isImage?: boolean
}

const phases: Phase[] = [
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/build-81CEgpWJkt6iLwzGgZU1FJic3FyEiR.svg",
    label: "Design for production",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/token-architecture-scrc0GWrTXsfZUu4HGIIt3wBtZ7Eew.svg",
    label: "Token architecture",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strategy-S62pYwrUn6AfKMx03YoYN0Hk5TgixC.svg",
    label: "Creative strategy & positioning",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audit-planning-qKsFBIkbNn9SmSV4yKAG7QXmALiRLV.svg",
    label: "Audit & planning",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/style%20guide-4aYcCofDZDIrI0HjEGOBAlcoEe3dcM.svg",
    label: "Guideline & design principles",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prototyping-BCbwOwXKJ3PF5fVXUjG0dJyC4C9spv.svg",
    label: "AI Readiness",
    isImage: true,
  },
]

// For Stiebel Eltron x Tecalor page
export const stiebelPhases: Phase[] = [
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/build-81CEgpWJkt6iLwzGgZU1FJic3FyEiR.svg",
    label: "Design for production",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/token-architecture-scrc0GWrTXsfZUu4HGIIt3wBtZ7Eew.svg",
    label: "Token architecture",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strategy-S62pYwrUn6AfKMx03YoYN0Hk5TgixC.svg",
    label: "Creative strategy & positioning",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audit-planning-qKsFBIkbNn9SmSV4yKAG7QXmALiRLV.svg",
    label: "Audit & planning",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accessibility-UDqdmRtQl5Q5q28Jx3HlmPbj8i1lzr.svg",
    label: "Accessibility",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roadmap-strategy-XvcApxBPqlyNvl55hWc93yuRrZwkpN.svg",
    label: "Roadmap & strategy",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/planning-bqluqCxtaCeBrhfVWNUdaHaBEqInTp.svg",
    label: "User research",
    isImage: true,
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qualitative-research-7Xo9LRaRKAp3jWhPWKHw0DdKkYSfWI.svg",
    label: "Qualitative research",
    isImage: true,
  },
]

export function PhaseSlider({ projectType = "solid" }: { projectType?: "solid" | "stiebel" }) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const currentPhases = projectType === "solid" ? phases : stiebelPhases

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
    console.error(`Failed to load image for phase: ${currentPhases[index].label}`)

    // Create a fallback icon element
    const iconElement = document.querySelector(`[data-phase-index="${index}"] .phase-icon-container`)
    if (iconElement) {
      iconElement.innerHTML = `<div class="w-10 h-10 md:w-14 md:h-14 bg-gray-200 rounded-full flex items-center justify-center">
        <span class="text-gray-500">${currentPhases[index].label.charAt(0)}</span>
      </div>`
    }
  }

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-4 gap-y-6 px-4 pb-8">
        {currentPhases.map((phase, index) => (
          <div key={index} className="flex flex-col items-center w-[88px]" data-phase-index={index}>
            <div className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-full bg-white flex items-center justify-center mb-4 phase-icon-container">
              {phase.isImage ? (
                <Image
                  src={(phase.icon as string) || "/placeholder.svg"}
                  alt={phase.label}
                  width={56}
                  height={56}
                  className="w-10 h-10 md:w-14 md:h-14"
                  onError={() => handleImageError(index)}
                  priority
                />
              ) : typeof phase.icon === "string" ? (
                phase.icon
              ) : (
                phase.icon
              )}
            </div>
            <p className="text-center text-sm text-[#cbd5e0] leading-tight">{phase.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
