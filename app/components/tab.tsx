import type React from "react"
import { cn } from "@/lib/utils"

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function Tab({ children, className, ...props }: TabProps) {
  return (
    <div
      className={cn("bg-[#292033b3] rounded-xl p-4 flex items-center gap-3 transition-colors text-base", className)}
      {...props}
    >
      {children}
    </div>
  )
}
