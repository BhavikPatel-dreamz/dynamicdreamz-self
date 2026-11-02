"use client";

import { type ReactNode, useEffect } from "react";

interface AOSProviderProps {
  children?: ReactNode;
}

/**
 * Initializes and manages AOS (Animate On Scroll) sitewide,
 * matching the live site configuration:
 * duration: 800ms, easing: ease-in-out, once: true, offset: 80px, delay: 0.
 */
export function AOSProvider({ children }: AOSProviderProps) {
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

    const pendingRoots = new Set<Element>();
    let scheduledFrame: number | null = null;

    function observeTree(root: Element) {
      const selector = "[data-aos]:not(.aos-init):not(.aos-animate)";
      const elements: HTMLElement[] = [];

      if (root.matches(selector)) elements.push(root as HTMLElement);
      elements.push(...root.querySelectorAll<HTMLElement>(selector));

      for (const el of elements) {
        if (prefersReducedMotion) {
          el.classList.add("aos-animate");
          continue;
        }

        el.classList.add("aos-init");
        observer.observe(el);
      }
    }

    function scheduleScan() {
      if (scheduledFrame !== null) return;
      scheduledFrame = requestAnimationFrame(() => {
        scheduledFrame = null;

        for (const root of pendingRoots) observeTree(root);
        pendingRoots.clear();
      });
    }

    pendingRoots.add(document.body);
    scheduleScan();

    const mutationObserver = new MutationObserver((mutations) => {
      let hasAddedElements = false;

      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof Element) {
            pendingRoots.add(node);
            hasAddedElements = true;
          }
        }
      }

      if (hasAddedElements) scheduleScan();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (scheduledFrame !== null) cancelAnimationFrame(scheduledFrame);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}

export { AOSProvider as AosInit };
