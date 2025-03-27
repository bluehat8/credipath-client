"use client";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // If we have fewer pages than the max to show, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);

      // Calculate start and end of page range to show
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're at the beginning or end
      if (currentPage <= 2) {
        end = Math.min(totalPages - 1, 4);
      } else if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - 3);
      }

      // Add ellipsis if needed
      if (start > 2) {
        pageNumbers.push("...");
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const handlePrevious = () => {
    if (currentPage > 1 && !disabled) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !disabled) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage && !disabled) {
      onPageChange(page);
    }
  };

  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex justify-center mt-6"
      aria-label="Paginación"
      role="navigation"
    >
      <ul className="flex items-center space-x-1">
        {/* Previous button */}
        <li>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1 || disabled}
            className={`px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              currentPage === 1 || disabled
                ? "text-zinc-500 cursor-not-allowed"
                : "text-zinc-300 hover:bg-zinc-700"
            }`}
            aria-label="Página anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="px-3 py-2 text-zinc-500">...</span>
            ) : (
              <button
                onClick={() => handlePageClick(page as number)}
                disabled={disabled}
                className={`px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-700"
                } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                aria-label={`Página ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next button */}
        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages || disabled}
            className={`px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              currentPage === totalPages || disabled
                ? "text-zinc-500 cursor-not-allowed"
                : "text-zinc-300 hover:bg-zinc-700"
            }`}
            aria-label="Página siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
