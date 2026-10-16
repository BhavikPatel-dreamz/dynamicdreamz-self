"use client";

import { useEffect } from "react";

type HeaderScrollState = "top" | "up" | "down";

export function HeaderScrollBehavior() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;
    const siteHeader = header;

    let previousPosition = window.scrollY;
    let scrollState: HeaderScrollState = previousPosition > 0 ? "down" : "top";
    let frame = 0;

    applyScrollState(siteHeader, scrollState);

    function updateHeader() {
      const position = window.scrollY;
      const nextState: HeaderScrollState =
        position <= 0 ? "top" : position < previousPosition ? "up" : position > previousPosition ? "down" : scrollState;

      previousPosition = position;
      frame = 0;

      if (nextState === scrollState) return;
      scrollState = nextState;
      applyScrollState(siteHeader, nextState);
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    }

    function enableSmoothScroll() {
      document.documentElement.classList.add("enable-smooth-scroll");
      window.removeEventListener("pointerdown", enableSmoothScroll);
      window.removeEventListener("keydown", enableSmoothScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", enableSmoothScroll, { passive: true });
    window.addEventListener("keydown", enableSmoothScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", enableSmoothScroll);
      window.removeEventListener("keydown", enableSmoothScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

function applyScrollState(header: HTMLElement, state: HeaderScrollState) {
  header.classList.toggle("header-up", state === "up");
  header.classList.toggle("header-down", state === "down");
}
