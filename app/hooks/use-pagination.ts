import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface UsePaginationProps {
  initialPage?: number;
  initialLimit?: number;
  total?: number;
}

export const usePagination = ({
  initialPage = 1,
  initialLimit = 5,
  total = 0,
}: UsePaginationProps = {}) => {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [totalItems, setTotalItems] = useState(total);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as URLSearchParams);

  const totalPages = Math.ceil(totalItems / limit) || 1;

  // Set total item count (sau khi fetch API)
  const setTotal = useCallback((total: number) => {
    setTotalItems(total);
  }, []);

  // Chuyển trang
  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        params.set("page", newPage.toString());
        params.set("limit", limit.toString());

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState(null, "", newUrl);

        setPage(newPage);
      }
    },
    [totalPages, limit]
  );

  const handleNext = useCallback(() => {
    if (page < totalPages) {
      params.set("page", (page + 1).toString());
      params.set("limit", limit.toString());

      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState(null, "", newUrl);
      setPage(page + 1);
    }
  }, [page, totalPages, limit]);

  const handlePrevious = useCallback(() => {
    if (page > 1) {
      params.set("page", (page - 1).toString());
      params.set("limit", limit.toString());

      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState(null, "", newUrl);
      setPage(page - 1);
    }
  }, [page, totalPages, limit]);

  return {
    page,
    limit,
    totalItems,
    totalPages,
    setTotal,
    setPage,
    setLimit,
    handlePageChange,
    handleNext,
    handlePrevious,
  };
};

export default usePagination;
