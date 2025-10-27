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

  const totalPages = Math.ceil(totalItems / limit) || 1;

  const setTotal = useCallback((total: number) => {
    setTotalItems(total);
  }, []);

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setPage(newPage);
      }
    },
    [totalPages]
  );

  const handleNext = useCallback(() => {
    if (page < totalPages) setPage(page + 1);
  }, [page, totalPages]);

  const handlePrevious = useCallback(() => {
    if (page > 1) setPage(page - 1);
  }, [page]);

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
