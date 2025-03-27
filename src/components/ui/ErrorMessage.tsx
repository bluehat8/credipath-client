"use client";
import React from "react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  className = "",
}) => {
  return (
    <div
      className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ${className}`}
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="block sm:inline">{message}</span>
      </div>
      {onRetry && (
        <div className="mt-2">
          <button
            onClick={onRetry}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Intentar de nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;
