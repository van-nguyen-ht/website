"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface SDTeaserProps {
  date?: string
  author?: string
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  className?: string
}

export function SDTeaser({
  date = "",
  author = "",
  title = "Solid media teaser",
  description = "Default text lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.",
  buttonLabel = "Go to project",
  buttonHref = "#",
  className = "",
}: SDTeaserProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dark blue gradient under the content with z-index */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#010d24] to-[#031845]"></div>
      </div>

      {/* Background with gradient overlay */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <Image
          src="/images/ui-highlight-sd-teaser-background.png"
          alt="Blue wave background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
      </div>

      {/* Opacity gradient layer that appears in both states, growing from bottom up */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#010d24] via-[#031845]/80 to-transparent z-10"></div>

      {/* Additional opacity layer that appears on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#010d24]/90 via-[#031845]/70 to-transparent transition-opacity duration-300 z-10 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Content overlay */}
      <div className="relative z-20 px-6 pr-[16px] pb-6 pt-8 flex flex-col h-full justify-between">
        {/* Main content */}
        <div className="mt-auto w-full">
          {title && (
            <h3 className="text-white text-[16px] leading-[150%] font-medium mb-0 w-full roboto-font">{title}</h3>
          )}

          {/* Additional text that appears on hover */}
          <div
            className={`text-white opacity-80 mb-2 w-full roboto-font transition-all duration-300 ${
              isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <p className="text-[12px] leading-[150%]">
              Expandable text tincidunt laoreet nulla phasellus mauris leo venenatis id commodo. Mauris elementum risus
              sed massa libero dui adipiscing sagittis.
            </p>
          </div>

          {description && (
            <p className="text-white opacity-80 mb-3 w-full text-[12px] leading-[150%] roboto-font">{description}</p>
          )}

          {/* Button - only show if buttonLabel exists */}
          {buttonLabel && (
            <Link
              href={buttonHref}
              className="inline-block bg-white text-blue-800 p-3 rounded-[4px] font-medium transition-all hover:bg-[#466DAF] hover:text-white active:bg-[#051530] active:text-white text-[12px] leading-[150%] roboto-font focus:outline-none"
            >
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
