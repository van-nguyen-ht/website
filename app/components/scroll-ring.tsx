"use client"

import { useEffect, useRef } from "react"

export function ScrollRing() {
  const ringRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ringRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Only show and update ring position when mouse is within container
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          ringRef.current.style.setProperty("--x", `${x}px`)
          ringRef.current.style.setProperty("--y", `${y}px`)
          ringRef.current.style.opacity = "1"
        } else {
          ringRef.current.style.opacity = "0"
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div ref={ringRef} className="scroll-cursor">
        <div className="scroll-text" />
      </div>
    </div>
  )
}
