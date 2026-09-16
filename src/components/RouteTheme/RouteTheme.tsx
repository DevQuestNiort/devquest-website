"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const DEFAULT_THEME = "2027";

export function RouteTheme() {
  const pathname = usePathname();

  useEffect(() => {
    const firstSegment = pathname.split("/")[1];
    const theme = /^\d{4}$/.test(firstSegment) ? firstSegment : DEFAULT_THEME;
    document.documentElement.setAttribute("data-theme", theme);
  }, [pathname]);

  return null;
}
