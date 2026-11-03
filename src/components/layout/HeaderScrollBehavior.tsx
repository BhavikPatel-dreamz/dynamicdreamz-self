"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type HeaderScrollState = "top" | "up" | "down";

function applyScrollState(header: HTMLElement, state: HeaderScrollState) {
  header.classList.toggle("header-up", state === "up");
  header.classList.toggle("header-down", state === "down");
}

export function HeaderScrollBehavior() {
  const pathname = usePathname();
  const stateRef = useRef<{
    previousPosition: number;
    scrollState: HeaderScrollState;
  }>({
    previousPosition: 0,
    scrollState: "top",
  });

  // When navigating to another page, open directly from top (instant scroll, no scroll-up animation)
  // and reset the header to its initial top state.
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("enable-smooth-scroll");
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }

    const header = document.querySelector<HTMLElement>(".site-header");
    if (header) {
      stateRef.current.previousPosition = 0;
      stateRef.current.scrollState = "top";
      applyScrollState(header, "top");
    }
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;
    const siteHeader = header;

    let frame = 0;
    stateRef.current.previousPosition = window.scrollY;
    stateRef.current.scrollState = window.scrollY > 0 ? "down" : "top";
    applyScrollState(siteHeader, stateRef.current.scrollState);

    function updateHeader() {
      const position = window.scrollY;
      const nextState: HeaderScrollState =
        position <= 0
          ? "top"
          : position < stateRef.current.previousPosition
            ? "up"
            : position > stateRef.current.previousPosition
              ? "down"
              : stateRef.current.scrollState;

      stateRef.current.previousPosition = position;
      frame = 0;

      if (nextState === stateRef.current.scrollState) return;
      stateRef.current.scrollState = nextState;
      applyScrollState(siteHeader, nextState);
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
