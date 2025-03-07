import { useState } from "react";

type FilterButtonsProps = {
    onFilterChange: (days: number) => void
}

const FilterButtons = ({onFilterChange} : FilterButtonsProps) => {
    const filters = [
        { label: "Hoy", days: 0 },
        { label: "Últimos 3 días", days: 3 },
        { label: "Últimos 7 días", days: 7 },
        { label: "Últimos 30 días", days: 30 },
    ];

    const [activeFilter, setActiveFilter] = useState(0)

    const handleClick = (days : number) => {
        setActiveFilter(days)
        onFilterChange(days)
    }

  return (
    <div className="flex gap-2 my-3 overflow-x-auto whitespace-nowrap md:overflow-hidden">
      {filters.map(filter => (
        <button
            key={filter.days}
            className={`text-white text-sm px-4 py-2 rounded-md  font-semibold  transition-all duration-200 ${activeFilter === filter.days ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
            onClick={() => handleClick(filter.days)}
        >
            {filter.label}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
