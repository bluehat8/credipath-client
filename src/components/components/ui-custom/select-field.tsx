"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "./../../lib/utils"

interface SelectOption {
  value: string
  label: string
}

interface SelectFieldProps {
  label: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: SelectOption[]
  disabled?: boolean
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  id,
  value,
  onChange,
  options,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      {/* Etiqueta flotante */}
      <label
        htmlFor={id}
        className={cn(
          "absolute left-3 transition-all duration-200 pointer-events-none z-10 px-1", // Padding para evitar recorte
          isFocused || value
            ? "text-xs bg-background text-muted-foreground/60 transform -translate-y-3.5" // Fondo sólido y mejor posición
            : "text-sm text-muted-foreground top-1/2 -translate-y-1/2",
          disabled && "text-muted-foreground/50"
        )}
      >
        {label}
      </label>

      {/* Contenedor del select */}
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full h-14 px-3 pt-6 pb-2 bg-backgroundprop border rounded-md",
            "text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary",
            "transition-all duration-200 appearance-none",
            disabled && "opacity-70 cursor-not-allowed"
          )}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Icono de flecha */}
        <ChevronDown
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none",
            disabled && "text-muted-foreground/50"
          )}
        />
      </div>
    </div>
  )
}