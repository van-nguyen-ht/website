"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimateIn } from "./animate-in"
import { HoverRing } from "./hover-ring"

interface InnoviaTeaserProps {
  title: string
  category: string
  isDark?: boolean
  className?: string
  slug?: string
  altText?: string
}

export function InnoviaTeaser({ title, category, isDark = true, className = "", slug, altText }: InnoviaTeaserProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimateIn className={className}>
      <div className="block space-y-4 lg:space-y-12">
        <Link href={slug || "#"} className="block focus:outline-none" tabIndex={0}>
          <div
            className="aspect-[4/3] relative overflow-hidden bg-[#0057B8] group cursor-none project-teaser-image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background color is #0057B8 */}
            <div className="absolute inset-0 bg-[#0057B8] opacity-100"></div>

            {/* Desktop image with specific positioning */}
            <div
              className="absolute transition-all duration-700 ease-out"
              style={{
                left: isHovered ? "56px" : "24px",
                top: isHovered ? "64px" : "40px",
                width: "60%",
                height: "60%",
              }}
            >
              <Image
                src="/images/innovia-cover-desktop.jpg"
                alt="Innovia Films global presence map showing manufacturing sites in Mexico, Australia, Poland, UK, and Germany with 1,400 employees and 16 sales offices"
                fill
                className="object-contain"
              />
            </div>

            {/* Tablet image - 30% smaller than desktop */}
            <div
              className="absolute transition-all duration-700 ease-out"
              style={{
                right: isHovered ? "56px" : "24px",
                bottom: isHovered ? "64px" : "40px",
                width: "42%", // 60% - 30% of 60% = 42%
                height: "42%",
              }}
            >
              <Image
                src="/images/innovia-cover-tablet.jpg"
                alt="Innovia Films sustainability goals showing 50%, 80%, and 90% targets for various environmental initiatives"
                fill
                className="object-contain"
              />
            </div>

            {/* Add the HoverRing with highest z-index */}
            <div className="absolute inset-0 z-30">
              <HoverRing textColor="#ffffff" />
            </div>
          </div>
        </Link>
        <div className="space-y-1 lg:space-y-2">
          <h3 className={`text-2xl font-normal ${isDark ? "text-white" : "text-[#1a2634]"}`}>{title}</h3>
          <p
            className={`text-sm font-normal leading-[150%] tracking-[0.04em] lg:pr-12 ${isDark ? "text-[#cbd5e0]" : "text-[#2d403b]"}`}
          >
            {category}
          </p>
        </div>
      </div>
    </AnimateIn>
  )
}
