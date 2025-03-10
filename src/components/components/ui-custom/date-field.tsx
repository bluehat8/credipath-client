
"use client"

import type React from "react"
import { useState } from "react"
import { Calendar } from "lucide-react"
import { cn } from "./../../lib/utils"

interface DateFieldProps {
  label: string
  id: string
  value: string
  onChange: (id: string, value: string) => void
  disabled?: boolean
}

export const DateField: React.FC<DateFieldProps> = ({ label, id, value, onChange, disabled = false }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.value)
  }

  return (
    <div className="relative">
    {/* Etiqueta flotante */}
        <label
          htmlFor={id}
          className={cn(
            "absolute left-3 transition-all duration-200 pointer-events-none z-10 px-1", // Padding para evitar recorte
            isFocused || value
              ? "text-xs bg-background text-muted-foreground/50 transform -translate-y-3.5" // Fondo sólido y mejor posición
              : "text-sm text-muted-foreground top-1/2 -translate-y-1/2",
            disabled && "text-muted-foreground/50"
          )}
        >
          {label}
        </label>

      <div className="relative">
        <input
          type="date"
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "w-full h-14 px-3 pt-6 pb-2 bg-backgroundprop border rounded-md",
            "text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
            "transition-all duration-200 appearance-none",
            disabled && "opacity-70 cursor-not-allowed",
          )}
          disabled={disabled}
        />
        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>
    </div>
  )
}