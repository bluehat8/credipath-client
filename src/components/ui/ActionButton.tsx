"use client";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

interface ActionButtonProps {
  icon: string;
  text: string;
  onClick: () => void;
  variant?: "primary" | "danger";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  text,
  onClick,
  variant = "primary",
  isLoading = false,
  disabled = false,
  className = "",
  type = "button",
  ariaLabel,
}) => {
  const baseClasses =
    "flex items-center rounded-md shadow-[0px_0px_10px_rgba(38,71,95,0.25)] text-base font-light tracking-wide transition-colors focus:outline-none focus:ring-2";

  const variantClasses = {
    primary:
      "gap-7 px-7 py-3 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 focus:ring-blue-500 max-md:px-5",
    danger:
      "gap-4 px-6 py-3 bg-zinc-800 text-rose-600 hover:bg-zinc-700 focus:ring-rose-500 max-md:px-5",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed hover:bg-zinc-800";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        disabled || isLoading ? disabledClasses : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      aria-label={ariaLabel || text}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <LoadingSpinner size="small" className="mr-2" />
      ) : (
        <img
          src={icon}
          className="object-contain shrink-0 w-6 aspect-square"
          alt=""
          aria-hidden="true"
        />
      )}
      <span>{isLoading ? "Cargando..." : text}</span>
    </button>
  );
};

export default ActionButton;
