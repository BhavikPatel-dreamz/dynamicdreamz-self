"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import type { CareerLocation } from "@/content/career";

type CareerJobListSlot = {
  location: CareerLocation;
  content: ReactNode;
};

type CareerLocationFilterProps = {
  locations: CareerLocation[];
  jobLists: CareerJobListSlot[];
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`absolute top-1/2 right-4 h-1.5 w-2.5 -translate-y-1/2 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 10 6"
      width="10"
      height="6"
    >
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CareerLocationFilter({
  locations,
  jobLists,
}: CareerLocationFilterProps) {
  const [selectedSlug, setSelectedSlug] = useState(locations[0]?.slug ?? "surat");
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedLocation =
    locations.find((location) => location.slug === selectedSlug) ?? locations[0];
  const selectedList =
    jobLists.find((jobList) => jobList.location.slug === selectedSlug) ?? jobLists[0];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function openMenu() {
    setIsOpen(true);
    requestAnimationFrame(() => {
      const selectedIndex = locations.findIndex(
        (location) => location.slug === selectedSlug,
      );
      optionRefs.current[Math.max(selectedIndex, 0)]?.focus();
    });
  }

  function handleOptionKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    optionIndex: number,
  ) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (optionIndex + direction + locations.length) % locations.length;
      optionRefs.current[nextIndex]?.focus();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      rootRef.current?.querySelector<HTMLButtonElement>("[data-location-toggle]")?.focus();
    }
  }

  return (
    <>
      <div className="pt-[50px] pb-7 text-right max-[767px]:pt-[30px] max-[767px]:pb-[43px]">
        <div
          className="relative inline-block min-w-[149px] text-left max-[767px]:w-full"
          ref={rootRef}
        >
          <button
            className="relative block h-[45px] w-full cursor-pointer rounded-[5px] border border-[#efefef] bg-[rgba(254,254,254,0.93)] py-3 pr-8 pl-4 text-left text-base leading-[normal] font-semibold text-[#090909] capitalize"
            data-location-toggle
            type="button"
            aria-expanded={isOpen}
            aria-haspopup="menu"
            aria-controls="career-location-menu"
            onClick={() => (isOpen ? setIsOpen(false) : openMenu())}
            onKeyDown={(event) => {
              if (!isOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
                event.preventDefault();
                openMenu();
              }
            }}
          >
            {selectedLocation.label}
            <ChevronIcon open={isOpen} />
          </button>

          <div
            className={`absolute top-[calc(100%+5px)] left-0 z-30 grid w-full transition-[grid-template-rows,opacity,visibility] duration-300 ${
              isOpen
                ? "visible grid-rows-[1fr] opacity-100"
                : "invisible grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <ul
                className="rounded-[5px] border border-[#efefef] bg-white py-3 shadow-[2px_6px_19px_rgb(0_0_0/8%)]"
                id="career-location-menu"
                role="menu"
                aria-label="Choose job location"
              >
                {locations.map((location, index) => (
                  <li key={location.slug} role="none">
                    <button
                      className="block w-full cursor-pointer border-0 bg-white px-2.5 py-2.5 text-left text-base leading-[normal] font-medium text-[#090909] capitalize transition-colors duration-300 hover:bg-[#f4f4f4] focus-visible:bg-[#f4f4f4]"
                      ref={(element) => {
                        optionRefs.current[index] = element;
                      }}
                      type="button"
                      role="menuitemradio"
                      aria-checked={location.slug === selectedSlug}
                      onClick={() => {
                        setSelectedSlug(location.slug);
                        setIsOpen(false);
                      }}
                      onKeyDown={(event) => handleOptionKeyDown(event, index)}
                    >
                      {location.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mb-[37px]"
        role="region"
        aria-live="polite"
        aria-label={`${selectedList.location.label} current opportunities`}
      >
        {selectedList.content}
      </div>
    </>
  );
}
