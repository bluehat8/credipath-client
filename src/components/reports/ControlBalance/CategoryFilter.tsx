import * as React from 'react';
import { CategoryData } from './type';
import { Search } from 'lucide-react';

interface CategoryFilterProps {
  categories: CategoryData[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Categorías */}
      <div className="flex-1 flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-4 py-2.5 bg-zinc-700/50 hover:bg-zinc-700 transition-colors rounded-lg border border-zinc-600/50 whitespace-nowrap"
            aria-label={`Filter by ${category.label}`}
          >
            {category.icon ? (
              <img
                src={category.icon}
                alt={`${category.label} icon`}
                className="w-5 h-5 object-contain"
              />
            ) : (
              <div className="w-5 h-5 bg-zinc-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                {category.label[0].toUpperCase()}
              </div>
            )}
            <span className="text-white/90 text-sm font-medium">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Búsqueda */}
      <div className="relative min-w-[280px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
        <input
          type="search"
          placeholder="Buscar transacción..."
          aria-label="Search transactions"
          className="w-full bg-zinc-700/30 border border-zinc-600/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        />
      </div>
    </div>
  );
}