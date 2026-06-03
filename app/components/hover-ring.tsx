"use client"

import { useEffect, useRef, useState } from "react"

interface HoverRingProps {
  className?: string
  textColor?: string
}

export function HoverRing({ className = "", textColor = "#2E2E48" }: HoverRingProps) {
  const ringRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (ringRef.current && containerRef.current && isVisible) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Update ring position
        ringRef.current.style.setProperty("--x", `${x}px`)
        ringRef.current.style.setProperty("--y", `${y}px`)
      }
    }

    container?.addEventListener("mouseenter", handleMouseEnter)
    container?.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      container?.removeEventListener("mouseenter", handleMouseEnter)
      container?.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className={`absolute inset-0 hidden md:block ${className}`}>
      <div
        ref={ringRef}
        className="fixed pointer-events-none transition-opacity duration-200"
        style={{
          left: "var(--x, 50%)",
          top: "var(--y, 50%)",
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative w-[144px] h-[144px]">
          <svg
            className="w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
            style={{ animation: "spin 10s linear infinite" }}
          >
            <path id="textPath" d="M50,15 A35,35 0 0 1 50,85 A35,35 0 0 1 50,15" fill="none" stroke="none" />
            <text className={`text-[12px] tracking-[0.4em] font-['Studio_Feixen_Mono']`} style={{ fill: textColor }}>
              <textPath href="#textPath" startOffset="0%">
                • View • Project
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
