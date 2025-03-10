"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Check if user has a saved preference or use system preference as default
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      return savedTheme
    }

    // Check for system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }

    return "light"
  })

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light"
      localStorage.setItem("theme", newTheme)
      return newTheme
    })
  }

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement

    // Remove the previous theme class
    root.classList.remove("light", "dark")

    // Add the current theme class
    root.classList.add(theme)
  }, [theme])

  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

