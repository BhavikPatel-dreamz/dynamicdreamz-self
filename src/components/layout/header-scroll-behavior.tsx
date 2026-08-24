"use client";

import { useEffect } from "react";

export function HeaderScrollBehavior() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;
    const siteHeader = header;

    let previousPosition = window.scrollY;
    let frame = 0;

    if (previousPosition > 0) {
      siteHeader.classList.add("header-down");
      siteHeader.classList.remove("header-up");
    }

    function updateHeader() {
      const position = window.scrollY;

      if (position <= 0) {
        siteHeader.classList.remove("header-up", "header-down");
      } else if (position < previousPosition) {
        siteHeader.classList.add("header-up");
        siteHeader.classList.remove("header-down");
      } else if (position > previousPosition) {
        siteHeader.classList.add("header-down");
        siteHeader.classList.remove("header-up");
      }

      previousPosition = position;
      frame = 0;
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
