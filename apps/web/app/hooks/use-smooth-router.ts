"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function useSmoothRouter() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const smoothPush = (href: string) => {
    startTransition(() => router.push(href));
  };

  return { smoothPush, isPending };
}
