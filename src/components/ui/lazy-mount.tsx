"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type LazyMountProps = {
  children: ReactNode;
  fallback: ReactNode;
  rootMargin?: string;
};

export function LazyMount({
  children,
  fallback,
  rootMargin = "1200px",
}: LazyMountProps) {
  const [mounted, setMounted] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const timer = window.setTimeout(() => setMounted(true), 0);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={sentinelRef} data-lazy-mount={mounted ? "active" : "pending"}>
      {mounted ? children : fallback}
    </div>
  );
}
