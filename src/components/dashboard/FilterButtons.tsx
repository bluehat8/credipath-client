"use client"

import { useState } from "react"
import { Button } from "components/components/ui/button"

type FilterButtonsProps = {
  onFilterChange?: (days: number) => void
  className?: string
}

export default function FilterButtons({ onFilterChange, className }: FilterButtonsProps = {}) {
  const filters = [
    { label: "Hoy", days: 0 },
    { label: "Últimos 3 días", days: 3 },
    { label: "Últimos 7 días", days: 7 },
    { label: "Últimos 30 días", days: 30 },
  ]

  const [activeFilter, setActiveFilter] = useState(0)

  const handleClick = (days: number) => {
    setActiveFilter(days)
    onFilterChange?.(days)
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-lg font-medium text-white">Seleccione una fecha:</h2>
      <div className="flex gap-2 overflow-x-auto pb-2 sm:overflow-visible">
        {filters.map((filter) => (
          <Button
            key={filter.days}
            variant={activeFilter === filter.days ? "default" : "outline"}
            size="sm"
            className={
              activeFilter === filter.days
                ? "bg-green-gradient text-white hover:bg-green-native-dark"
                : "border-green-native hover:bg-green-native-light hover:text-white"
            }
            onClick={() => handleClick(filter.days)}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
