import type React from "react"

interface FlagProps {
  children: React.ReactNode
  className?: string
}

export function Flag({ children, className = "" }: FlagProps) {
  return (
    <div className={`h-[16px] px-2 inline-flex items-center bg-[#FFF7F6] rounded-full ${className}`}>
      <span className="text-[10px] leading-none text-[#1a2634]">{children}</span>
    </div>
  )
}
