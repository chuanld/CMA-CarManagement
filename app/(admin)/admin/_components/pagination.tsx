import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  onPageChange: (page: number) => void;
}

const PaginationToolbar: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
  const { total, page, limit, totalPages } = pagination;

  const handlePrevious = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  // Tạo mảng số trang với dots khi nhiều trang
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page > 3) pages.push(1, "...");
      const start = Math.max(1, page - 2);
      const end = Math.min(totalPages, page + 2);
      for (let i = start; i <= end; i++) pages.push(i);
      if (page + 2 < totalPages) pages.push("...", totalPages);
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-2 bg-gray-50 rounded-b-lg w-full">
      {/* Info */}
      <div className="text-gray-700 text-sm  sm:mb-0">
        Showing {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of {total} results
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-1">
        {/* Previous */}
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevious}
          disabled={page === 1}
          className="rounded-full px-3 py-2 disabled:opacity-50 hover:bg-gray-100 transition"
        >
          <ChevronLeft size={16} />
        </Button>

        {/* Page Numbers - hidden trên mobile */}
        <div className="hidden sm:flex items-center space-x-1">
          {getPageNumbers().map((p, idx) =>
            typeof p === "number" ? (
              <Button
                key={idx}
                variant={p === page ? "default" : "outline"}
                size="sm"
                onClick={() => onPageChange(p)}
                className={`rounded-full px-3 py-2 hover:bg-gray-100 transition ${
                  p === page ? "bg-bg-cma text-white hover:bg-gray-600" : ""
                }`}
              >
                {p}
              </Button>
            ) : (
              <span key={idx} className="px-2 text-gray-400 select-none">
                …
              </span>
            )
          )}
        </div>

        {/* Next */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleNext}
          disabled={page === totalPages}
          className="rounded-full px-3 py-2 disabled:opacity-50 hover:bg-gray-100 transition"
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default PaginationToolbar;
