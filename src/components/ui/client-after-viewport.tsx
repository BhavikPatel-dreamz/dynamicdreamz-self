"use client";

import { useEffect, useState, type ReactNode } from "react";

type ClientAfterViewportProps = {
  children: ReactNode;
  rootId: string;
  mediaQuery?: string;
  rootMargin?: string;
};

export function ClientAfterViewport({
  children,
  rootId,
  mediaQuery,
  rootMargin = "200px",
}: ClientAfterViewportProps) {
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const media = mediaQuery ? window.matchMedia(mediaQuery) : null;
    let observer: IntersectionObserver | null = null;

    function observeTarget() {
      observer?.disconnect();
      observer = null;

      if (media && !media.matches) {
        setIsNearViewport(false);
        return;
      }

      const target = document.getElementById(rootId);
      if (!target || typeof IntersectionObserver === "undefined") {
        setIsNearViewport(true);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setIsNearViewport(true);
            observer?.disconnect();
          }
        },
        { rootMargin },
      );

      observer.observe(target);
    }

    observeTarget();
    media?.addEventListener("change", observeTarget);

    return () => {
      observer?.disconnect();
      media?.removeEventListener("change", observeTarget);
    };
  }, [mediaQuery, rootId, rootMargin]);

  return isNearViewport ? children : null;
}
