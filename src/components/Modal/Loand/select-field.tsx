// "use client"

// import type React from "react"
// import { useState } from "react"
// import { ChevronDown } from "lucide-react"

// interface SelectOption {
//   value: string
//   label: string
// }

// interface SelectFieldProps {
//   label: string
//   id: string
//   value: string
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
//   options: SelectOption[]
//   disabled?: boolean
// }

// export const SelectField: React.FC<SelectFieldProps> = ({ label, id, value, onChange, options, disabled = false }) => {
//   const [isFocused, setIsFocused] = useState(false)

//   return (
//     <div className="relative">
//       <label
//         htmlFor={id}
//         className={`absolute left-3 transition-all duration-200 pointer-events-none ${
//           isFocused || value
//             ? "text-xs text-green-native transform -translate-y-3 top-2"
//             : "text-sm text-neutral-500 top-1/2 -translate-y-1/2"
//         }`}
//       >
//         {label}
//       </label>

//       <select
//         id={id}
//         value={value}
//         onChange={onChange}
//         className="w-full h-14 px-3 pt-6 pb-2 bg-neutral-800/50 border border-neutral-700/50 rounded-md text-white focus:outline-none focus:border-green-native/50 focus:bg-neutral-800 transition-all duration-200 appearance-none"
//         disabled={disabled}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//       >
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>

//       <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
//     </div>
//   )
// }


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

export const SelectField: React.FC<SelectFieldProps> = ({ label, id, value, onChange, options, disabled = false }) => {
  const [isFocused, setIsFocused] = useState(false)

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
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full h-14 px-3 pt-6 pb-2 bg-background/50 border rounded-md",
            "text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
            "transition-all duration-200 appearance-none",
            disabled && "opacity-70 cursor-not-allowed",
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
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>
    </div>
  )
}



