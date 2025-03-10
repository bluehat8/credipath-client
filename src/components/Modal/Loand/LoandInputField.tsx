// "use client"

// import type React from "react"
// import { useState } from "react"

// interface InputFieldProps {
//   label: string
//   id: string
//   value: string
//   onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
//   placeholder?: string
//   type?: string
//   isTextarea?: boolean
//   disabled?: boolean
// }

// export const InputField: React.FC<InputFieldProps> = ({
//   label,
//   id,
//   value,
//   onChange,
//   placeholder = "",
//   type = "text",
//   isTextarea = false,
//   disabled = false,
// }) => {
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

//       {isTextarea ? (
//         <textarea
//           id={id}
//           value={value}
//           onChange={onChange}
//           placeholder={isFocused ? placeholder : ""}
//           className="w-full h-24 px-3 pt-6 pb-2 bg-neutral-800/50 border border-neutral-700/50 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-green-native/50 focus:bg-neutral-800 transition-all duration-200"
//           disabled={disabled}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//         />
//       ) : (
//         <input
//           type={type}
//           id={id}
//           value={value}
//           onChange={onChange}
//           placeholder={isFocused ? placeholder : ""}
//           className="w-full h-14 px-3 pt-6 pb-2 bg-neutral-800/50 border border-neutral-700/50 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-green-native/50 focus:bg-neutral-800 transition-all duration-200"
//           disabled={disabled}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//         />
//       )}
//     </div>
//   )
// }



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
      "w-full bg-background/50 border rounded-md",
      "text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
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
          isFocused || value
            ? "text-xs text-primary transform -translate-y-3 top-2"
            : "text-sm text-muted-foreground top-1/2 -translate-y-1/2",
        )}
      >
        {label}
      </label>

      {isTextarea ? <textarea {...inputProps} /> : <input type={type} {...inputProps} />}
    </div>
  )
}


