"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimateIn } from "./animate-in"
import { HoverRing } from "./hover-ring"

interface TecalorTeaserProps {
  title: string
  category: string
  isDark?: boolean
  className?: string
  slug?: string
  altText?: string
}

export function TecalorTeaser({ title, category, isDark = true, className = "", slug, altText }: TecalorTeaserProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimateIn className={className}>
      <div className={`block space-y-4 lg:space-y-12 ${!slug && "cursor-default"}`}>
        <Link href={`/${slug}`} className="block focus:outline-none" tabIndex={0}>
          <div
            className="aspect-[4/3] relative overflow-hidden bg-[#011E0E] group project-teaser-image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background color is #011E0E */}
            <div className="absolute inset-0 bg-[#011E0E] opacity-100"></div>

            {/* Right screen image - top right */}
            <div
              className="absolute top-[-10px] right-2 w-[60%] h-[40%] transition-transform duration-500 overflow-hidden z-20"
              style={{
                transform: isHovered ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              <Image
                src="/images/Tec-hero-right-screen.jpg"
                alt="Energy efficiency metrics"
                fill
                className="object-contain object-top-right"
              />
            </div>

            {/* Left screen image - center left */}
            <div
              className="absolute top-[15%] -translate-y-1/2 -left-8 w-[50%] h-[60%] transition-transform duration-500 overflow-hidden z-10"
              style={{
                transform: isHovered ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              <Image
                src="/images/Tec-hero-left-screen.jpg"
                alt="Tecalor app interface showing heat source options"
                fill
                className="object-contain object-center-left"
              />
            </div>

            {/* Graph image - bottom right */}
            <div
              className="absolute bottom-2 right-[-5%] w-[75%] h-[55%] transition-transform duration-500 overflow-hidden"
              style={{
                transform: isHovered ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              <Image
                src="/images/Tec-hero-graph.jpg"
                alt="Temperature performance graph"
                fill
                className="object-contain object-bottom-right"
              />
            </div>

            {/* Add the HoverRing with highest z-index */}
            {slug && (
              <div className="absolute inset-0 z-30">
                <HoverRing textColor="#ffffff" />
              </div>
            )}
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
