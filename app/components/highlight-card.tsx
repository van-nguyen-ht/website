"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimateIn } from "./animate-in"

interface HighlightCardProps {
  image: string
  link?: string
  isDark?: boolean
  altText?: string
  isGif?: boolean
}

export function HighlightCard({ image, link, isDark = true, altText, isGif = false }: HighlightCardProps) {
  const CardWrapper = link ? Link : "div"
  const wrapperProps = link ? { href: link } : {}
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimateIn>
      <CardWrapper
        {...wrapperProps}
        className={link ? "block focus:outline-none" : ""}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="rounded-[48px] overflow-hidden bg-[#ECF0FA]">
          <div className="aspect-square relative">
            {isGif ? (
              <>
                {/* Static image shown when not hovered */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
                >
                  <Image
                    src="/images/sparx-snippet-static.png"
                    alt={altText || "Highlight image"}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* GIF shown when hovered */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src="/images/sparx-snippet.gif"
                    alt={altText || "Animated highlight"}
                    fill
                    className="object-contain"
                  />
                </div>
              </>
            ) : (
              <Image
                src={image || "/placeholder.svg"}
                alt={altText || "Highlight image"}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </CardWrapper>
    </AnimateIn>
  )
}
