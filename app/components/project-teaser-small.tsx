"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { AnimateIn } from "./animate-in"
import { Flag } from "./flag"
import { HoverRing } from "./hover-ring"

interface ProjectTeaserSmallProps {
  title: string
  category: string
  image: string
  isDark?: boolean
  className?: string
  slug?: string
  flag?: string
  altText?: string
}

export function ProjectTeaserSmall({
  title,
  category,
  image,
  isDark = true,
  className = "",
  slug,
  flag,
  altText,
}: ProjectTeaserSmallProps) {
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
    : ({ children }: { children: React.ReactNode }) => <div>{children}</div>

  // Check if this is the Tecalor project to determine ring color
  const isTecalor = title === "Tecalor"
  const ringColor = isTecalor ? "#ffffff" : "#2E2E48"

  return (
    <AnimateIn className={className}>
      <div className={`block space-y-4 lg:space-y-12 ${!slug && "cursor-default"}`}>
        <ImageWrapper>
          <div
            className={`aspect-[4/3] relative overflow-hidden bg-[#292033] group ${slug ? "cursor-none" : ""} project-teaser-image-container`}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image src={image || "/placeholder.svg"} alt={altText || title} fill className="object-cover" />
            {flag && (
              <div className="absolute top-1 right-3 z-10">
                <Flag>{flag}</Flag>
              </div>
            )}
            {slug && <HoverRing textColor={ringColor} />}
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
