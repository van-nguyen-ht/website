"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { createPortal } from "react-dom"

interface AccessibilityMenuProps {
  scrolled?: boolean
  isDark?: boolean
}

export function AccessibilityMenu({ scrolled = false, isDark = true }: AccessibilityMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [lineHeight, setLineHeight] = useState(1.5)
  const [isReset, setIsReset] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [buttonPosition, setButtonPosition] = useState({ top: 0, right: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Update button position for fixed dropdown
  useEffect(() => {
    const updateButtonPosition = () => {
      if (buttonRef.current && !scrolled) {
        const rect = buttonRef.current.getBoundingClientRect()
        setButtonPosition({
          top: rect.bottom + window.scrollY,
          right: window.innerWidth - rect.right,
        })
      }
    }

    if (isOpen) {
      updateButtonPosition()
    }

    window.addEventListener("resize", updateButtonPosition)
    return () => window.removeEventListener("resize", updateButtonPosition)
  }, [scrolled, isOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Apply font size and line height changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
    document.body.style.lineHeight = lineHeight.toString()
  }, [fontSize, lineHeight])

  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10)
      setIsReset(false)
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10)
      setIsReset(false)
    }
  }

  const increaseLineHeight = () => {
    if (lineHeight < 2.0) {
      setLineHeight(Number.parseFloat((lineHeight + 0.1).toFixed(1)))
      setIsReset(false)
    }
  }

  const decreaseLineHeight = () => {
    if (lineHeight > 1.0) {
      setLineHeight(Number.parseFloat((lineHeight - 0.1).toFixed(1)))
      setIsReset(false)
    }
  }

  const resetSettings = () => {
    setFontSize(100)
    setLineHeight(1.5)
    setIsReset(true)
  }

  const buttonClasses =
    "w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-white/20 text-white hover:bg-white/10 active:border-white min-w-[24px] min-h-[24px]"

  const renderDropdown = () => {
    if (!isOpen || !mounted) return null

    const dropdownContent = (
      <div
        ref={dropdownRef}
        className={`w-56 rounded-md ${scrolled ? "shadow-2xl shadow-black/50" : "shadow-lg"} bg-[#292033] ring-1 ring-black ring-opacity-5 py-4 px-2`}
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="px-4 py-2 text-sm text-white">Text Size</div>
          <div className="flex items-center justify-between px-4 py-2">
            <button
              onClick={decreaseFontSize}
              className={buttonClasses}
              aria-label="Decrease font size"
              tabIndex={isOpen ? 0 : -1}
            >
              -
            </button>
            <span className="text-white">{fontSize}%</span>
            <button
              onClick={increaseFontSize}
              className={buttonClasses}
              aria-label="Increase font size"
              tabIndex={isOpen ? 0 : -1}
            >
              +
            </button>
          </div>

          <div className="mt-6 px-4 py-2 text-sm text-white">Line Height</div>
          <div className="flex items-center justify-between px-4 py-2">
            <button
              onClick={decreaseLineHeight}
              className={buttonClasses}
              aria-label="Decrease line height"
              tabIndex={isOpen ? 0 : -1}
            >
              -
            </button>
            <span className="text-white">{lineHeight}x</span>
            <button
              onClick={increaseLineHeight}
              className={buttonClasses}
              aria-label="Increase line height"
              tabIndex={isOpen ? 0 : -1}
            >
              +
            </button>
          </div>

          <div className="mt-6 px-4 py-2 flex items-center justify-between">
            <span className="text-sm text-white">Reset to Default</span>
            <button
              onClick={resetSettings}
              className={`w-10 h-6 rounded-full flex items-center justify-center transition-colors border border-white/20 ${
                isReset ? "bg-white" : "bg-transparent"
              } hover:bg-white/10 active:border-white`}
              role="switch"
              aria-checked={isReset}
              aria-label="Reset to default settings"
              tabIndex={isOpen ? 0 : -1}
            >
              <div className="relative w-full h-full">
                <div className={`absolute inset-0 flex items-center ${isReset ? "justify-end" : "justify-start"} px-1`}>
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-200 ${isReset ? "bg-[#3a4b5f]" : "bg-white"}`}
                  ></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    )

    // For scrolled header (sticky), use portal with fixed position at top-right
    if (scrolled) {
      return createPortal(<div className="fixed top-4 right-4 z-[9999]">{dropdownContent}</div>, document.body)
    }

    // For main header, position it under the button using fixed positioning
    return createPortal(
      <div
        style={{
          position: "fixed",
          top: `${buttonPosition.top}px`,
          right: `${buttonPosition.right}px`,
          zIndex: 9999,
        }}
      >
        {dropdownContent}
      </div>,
      document.body,
    )
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          scrolled ? "w-8 h-8 bg-[#2d3d4f] hover:bg-[#3a4b5f]" : "w-10 h-10 bg-[#2d3d4f] hover:bg-[#3a4b5f]"
        } rounded-full flex items-center justify-center transition-colors`}
        aria-label="Open accessibility options"
        aria-expanded={isOpen}
        aria-haspopup="true"
        tabIndex={0}
      >
        <Image
          src="/images/accessibility-icon2.svg"
          alt="Accessibility"
          width={scrolled ? 16 : 20}
          height={scrolled ? 16 : 20}
          className="text-white opacity-90 hover:opacity-100 transition-opacity"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </button>

      {renderDropdown()}
    </div>
  )
}
