// "use client"

// import type React from "react"

// interface DateFieldProps {
//   label: string
//   id: string
//   value: string
//   onChange: (id: string, value: string) => void
//   disabled?: boolean
// }

// export const DateField: React.FC<DateFieldProps> = ({ label, id, value, onChange, disabled = false }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(id, e.target.value)
//   }

//   return (
//     <div className="flex flex-col gap-2">
//       <label htmlFor={id} className="text-sm font-medium text-gray-300">
//         {label}
//       </label>
//       <input
//         type="date"
//         id={id}
//         value={value}
//         onChange={handleChange}
//         className={`h-[42px] px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-green-native focus:border-green-native-border ${disabled ? "opacity-70 cursor-not-allowed" : ""}`}
//         disabled={disabled}
//       />
//     </div>
//   )
// }


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
      <label
        htmlFor={id}
        className={cn(
          "absolute left-3 transition-all duration-200 pointer-events-none",
          isFocused || value
            ? "text-xs text-primary transform -translate-y-3 top-2"
            : "text-sm text-muted-foreground top-1/2 -translate-y-1/2",
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
            "w-full h-14 px-3 pt-6 pb-2 bg-background/50 border rounded-md",
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


