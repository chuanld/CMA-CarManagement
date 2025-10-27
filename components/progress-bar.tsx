"use client";

import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 150,
  minimum: 0.1,
  speed: 300,
});

export default function ProgressBar() {
  const pathname = usePathname();

useEffect(() => {
  NProgress.start();

  const timer = setTimeout(() => {
    NProgress.set(0.95); // chạy tới gần hết
  }, 150);

  const doneTimer = setTimeout(() => {
    NProgress.done();
  }, 600); // dừng sau 0.6s

  return () => {
    clearTimeout(timer);
    clearTimeout(doneTimer);
  };
}, [pathname]);


  return null;
}
