"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Initializes and manages AOS (Animate On Scroll) animations sitewide,
 * matching the live site configuration:
 * duration: 800ms, easing: ease-in-out, once: true, offset: 80px, delay: 0.
 */
export function AosInit() {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Set body attributes and html class matching live site
    document.documentElement.classList.add("aos-init");
    document.body.setAttribute("data-aos-easing", "ease-in-out");
    document.body.setAttribute("data-aos-duration", "800");
    document.body.setAttribute("data-aos-delay", "0");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "0px 0px -80px 0px", // 80px offset matching live site offset: 80
        threshold: 0,
      },
    );

    observerRef.current = observer;

    function scanAndObserve() {
      const elements = document.querySelectorAll<HTMLElement>(
        "[data-aos]:not(.aos-animate)",
      );

      for (const el of elements) {
        if (prefersReducedMotion) {
          el.classList.add("aos-animate");
          continue;
        }

        el.classList.add("aos-init");

        // If element is already in the viewport upon mount or navigation, animate immediately
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 80 && rect.bottom >= 0) {
          el.classList.add("aos-animate");
        } else {
          observer.observe(el);
        }
      }
    }

    // Initial scan
    scanAndObserve();

    // Observe dynamically inserted elements (tabs, sliders, modals)
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Re-scan when pathname changes on App Router client navigation
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const timer = requestAnimationFrame(() => {
      const observer = observerRef.current;
      if (!observer) return;

      const elements = document.querySelectorAll<HTMLElement>(
        "[data-aos]:not(.aos-animate)",
      );

      for (const el of elements) {
        if (prefersReducedMotion) {
          el.classList.add("aos-animate");
          continue;
        }

        el.classList.add("aos-init");
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 80 && rect.bottom >= 0) {
          el.classList.add("aos-animate");
        } else {
          observer.observe(el);
        }
      }
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname]);

  return null;
}
