"use client";

import { useQuery } from "@tanstack/react-query";

export function useServerQuery<T>({
  queryKey,
  queryFn,
  enabled = true,
}: {
  queryKey: any[];
  queryFn: () => Promise<T>;
  enabled?: boolean;
}) {
  return useQuery<T>({
    queryKey,
    queryFn,
    enabled,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
