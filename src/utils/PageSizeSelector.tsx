"use client"
import type React from "react"
import { cn } from "components/lib/utils"
import { ChevronDown } from "lucide-react"
import { ThemeProvider } from "context/ThemeContext"
import { useState } from "react"

interface PageSizeSelectorProps {
  pageSize: number
  onPageSizeChange: (size: number) => void
  options?: number[]
  disabled?: boolean
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({
  pageSize,
  onPageSizeChange,
  options = [5, 10, 25, 50],
  disabled = false,
}) => {

const [isFocused, setIsFocused] = useState(false)

  return (
    <ThemeProvider>
     <div className="flex items-center gap-3 text-sm">
      <div className="relative inline-flex items-center">
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-primary/10 transition-all duration-300 ease-out",
            isFocused ? "opacity-100 scale-105" : "opacity-0 scale-95",
          )}
        />

        <div
          className={cn(
            "relative flex items-center gap-2 py-2 rounded-full border transition-all duration-200",
            isFocused ? "border-primary shadow-sm" : "border-border",
            disabled ? "opacity-60 cursor-not-allowed" : "hover:border-primary/50 hover:bg-accent/50",
          )}
        >
          <span className="text-muted-foreground font-medium whitespace-nowrap">Mostrar</span>

          <div className="relative">
            <select
              id="page-size"
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              disabled={disabled}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                "appearance-none bg-transparent text-foreground font-semibold",
                "focus:outline-none min-w-[40px] text-center",
                disabled ? "cursor-not-allowed" : "cursor-pointer",
              )}
              aria-label="Elementos por página"
            >
              {options.map((option) => (
                <option key={option} value={option} className="bg-background text-foreground">
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 text-muted-foreground absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none",
                "transition-transform duration-200",
                isFocused ? "transform rotate-180" : "",
              )}
            />
          </div>

          <span className="text-muted-foreground font-medium whitespace-nowrap">por página</span>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default PageSizeSelector

