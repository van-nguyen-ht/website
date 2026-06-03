"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { AnimateIn } from "./animate-in"
import { HoverRing } from "./hover-ring"

interface ProjectTeaserBigProps {
  title: string
  category: string
  image: string
  isDark?: boolean
  className?: string
  slug?: string
  altText?: string
}

export function ProjectTeaserBig({
  title,
  category,
  image,
  isDark = true,
  className = "",
  slug,
  altText,
}: ProjectTeaserBigProps) {
  // Create a wrapper for the image only
  const ImageWrapper = slug
    ? slug.startsWith("http")
      ? ({ children }: { children: React.ReactNode }) => (
          <a href={slug} target="_blank" rel="noopener noreferrer" className="block focus:outline-none" tabIndex={0}>
            {children}
          </a>
        )
      : ({ children }: { children: React.ReactNode }) => (
          <Link href={`/${slug}`} className="block focus:outline-none" tabIndex={0}>
            {children}
          </Link>
        )
    : "div"

  return (
    <AnimateIn className={className}>
      <div className="block space-y-4 lg:space-y-12">
        <ImageWrapper>
          {/* Replace the rounded-2xl with overflow-hidden on the image container */}
          <div className="aspect-[4/3] relative overflow-hidden bg-[#292033] group cursor-none project-teaser-image-container">
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image src={image || "/placeholder.svg"} alt={altText || title} fill className="object-cover" />
            {slug && <HoverRing />}
          </div>
        </ImageWrapper>
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
