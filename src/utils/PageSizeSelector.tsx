"use client";
import React from "react";

interface PageSizeSelectorProps {
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  options?: number[];
  disabled?: boolean;
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({
  pageSize,
  onPageSizeChange,
  options = [5, 10, 25, 50],
  disabled = false,
}) => {
  return (
    <div className="flex items-center text-zinc-300 text-sm">
      <label htmlFor="page-size" className="mr-2">
        Mostrar:
      </label>
      <select
        id="page-size"
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        disabled={disabled}
        className={`bg-zinc-700 border border-zinc-600 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        aria-label="Elementos por página"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="ml-2">por página</span>
    </div>
  );
};

export default PageSizeSelector;
