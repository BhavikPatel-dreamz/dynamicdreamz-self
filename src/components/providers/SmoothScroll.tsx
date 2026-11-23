
"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const SCROLL_DURATION = 1500; // milliseconds

    const handleClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;

      const target = e.target as HTMLElement;

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!link) return;

      if (
        link.closest("[data-no-smooth-scroll]") ||
        link.closest("[data-risks-topics]") ||
        link.closest(".new-web-tab") ||
        link.classList.contains("tab-link")
      ) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const section = document.getElementById(href.slice(1));

      if (!section) return;

      // Never window-scroll if the target section is inside an internal overflow/scroll container
      let parent = section.parentElement;
      while (parent && parent !== document.body && parent !== document.documentElement) {
        const style = window.getComputedStyle(parent);
        if (
          style.overflowY === "auto" ||
          style.overflowY === "scroll" ||
          style.overflow === "auto" ||
          style.overflow === "scroll"
        ) {
          return;
        }
        parent = parent.parentElement;
      }

      e.preventDefault();

      const start = window.scrollY;
      const targetPosition =
        section.getBoundingClientRect().top + start;

      const distance = targetPosition - start;

      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / SCROLL_DURATION, 1);

        // Ease-in-out animation
        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, start + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
