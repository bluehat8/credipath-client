"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "./../../lib/utils"

interface InputFieldProps {
  label: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  type?: string
  isTextarea?: boolean
  disabled?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  value,
  onChange,
  placeholder = "",
  type = "text",
  isTextarea = false,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const inputProps = {
    id,
    value,
    onChange,
    placeholder,
    disabled,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    className: cn(
      "w-full bg-background/70 border rounded-md",
      "text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary",
      "transition-all duration-200",
      isTextarea ? "h-32 px-3 pt-6 pb-2 resize-none" : "h-14 px-3 pt-6 pb-2",
      disabled && "opacity-70 cursor-not-allowed",
    ),
  }

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={cn(
          "absolute left-3 transition-all duration-200 pointer-events-none z-10",
          "px-1", // Padding para mejor separación
          isFocused || value
            ? "text-xs bg-background text-muted-foreground/60 transform -translate-y-3.5" // (se usaba text-`primary) Fondo sólido y mejor posición
            : "text-sm text-muted-foreground/50 top-1/2 -translate-y-1/2",
          disabled && "text-muted-foreground/50"
        )}
      >
        {label}
      </label>

      {isTextarea ? <textarea {...inputProps} /> : <input type={type} {...inputProps} />}
    </div>
  )
}