"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function usePrefetch(paths: string[]) {
  const router = useRouter();
  useEffect(() => {
    paths.forEach((p) => router.prefetch(p));
  }, [router, paths]);
}
