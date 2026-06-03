"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimateIn } from "./animate-in"
import { HoverRing } from "./hover-ring"

interface StiebelTeaserProps {
  title: string
  category: string
  image: string
  isDark?: boolean
  className?: string
  slug?: string
  altText?: string
}

export function StiebelTeaser({
  title,
  category,
  image,
  isDark = true,
  className = "",
  slug,
  altText,
}: StiebelTeaserProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [gifKey, setGifKey] = useState(0)

  // Reset the GIF when hover state changes
  useEffect(() => {
    if (isHovered) {
      setGifKey((prevKey) => prevKey + 1)
    }
  }, [isHovered])

  return (
    <AnimateIn className={className}>
      <div className="block space-y-4 lg:space-y-12">
        <Link href={slug || "#"} className="block focus:outline-none" tabIndex={0}>
          <div
            className="aspect-[4/3] relative overflow-hidden bg-[#292033] group cursor-none project-teaser-image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Static image shown when not hovered */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
            >
              <Image src={image || "/placeholder.svg"} alt={altText || title} fill className="object-cover" />
            </div>

            {/* GIF shown when hovered */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
              {isHovered && (
                <Image
                  key={gifKey}
                  src="/images/SteTec-cover7.gif"
                  alt="Animated comparison of Stiebel Eltron (red) and Tecalor (green) interfaces"
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* Add the HoverRing with highest z-index */}
            <div className="absolute inset-0 z-30">
              <HoverRing textColor="#092F1B" />
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
