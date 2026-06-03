"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimateIn } from "./animate-in"
import { HoverRing } from "./hover-ring"

interface SparxTeaserProps {
  title: string
  category: string
  image: string
  isDark?: boolean
  className?: string
  slug?: string
  altText?: string
}

export function SparxTeaser({
  title,
  category,
  image,
  isDark = true,
  className = "",
  slug,
  altText,
}: SparxTeaserProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimateIn className={className}>
      <div className="block space-y-4 lg:space-y-12">
        <Link href={slug || "#"} className="block focus:outline-none" tabIndex={0}>
          <div
            className="aspect-[4/3] relative overflow-hidden bg-[#292033] group cursor-none project-teaser-image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Base image */}
            <Image src={image || "/placeholder.svg"} alt={altText || title} fill className="object-cover" />

            {/* Animated GIF overlay that appears only on hover */}
            <div
              className="absolute transition-opacity duration-300"
              style={{
                opacity: isHovered ? 1 : 0,
                left: "calc(6px + 56px)", // 6px (original) + 64px - 8px (moved left)
                bottom: "calc(6px + 16px)", // 6px (original) + 24px - 8px (moved down)
                width: "132px", // 50% bigger than 80px
                height: "132px", // 50% bigger than 80px
              }}
            >
              <div className="w-full h-full relative">
                <Image
                  src="/images/sparx-eye.gif"
                  alt="Animated eye"
                  fill
                  className="object-contain"
                  style={{ border: "none", outline: "none" }} // Remove any potential border/outline
                />
              </div>
            </div>

            {/* Add the HoverRing with highest z-index */}
            <div className="absolute inset-0 z-30">
              <HoverRing />
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
