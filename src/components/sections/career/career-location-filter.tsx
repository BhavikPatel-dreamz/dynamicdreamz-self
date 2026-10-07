"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import type { CareerLocation } from "@/content/career";

type CareerJobListSlot = {
  location: CareerLocation;
  content: ReactNode;
};

type CareerLocationFilterProps = {
  locations: readonly CareerLocation[];
  jobLists: readonly CareerJobListSlot[];
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`absolute top-1/2 right-4 h-1.5 w-2.5 -translate-y-1/2 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      height="6"
      viewBox="0 0 10 6"
      width="10"
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
    <div className="current-openings-wrap mt-10 max-[767px]:mt-6">
      <div
        data-aos="fade-up"
        className="filter-location relative z-1 pb-7 text-right max-[767px]:pt-[30px] max-[767px]:pb-[43px]"
      >
        <div
          className="dropdown_menu relative inline-block min-w-[149px] text-left max-[767px]:w-full"
          ref={rootRef}
        >
          <button
            aria-controls="career-location-menu"
            aria-expanded={isOpen}
            aria-haspopup="menu"
            className="relative block h-[45px] w-full cursor-pointer rounded-[5px] border border-[#efefef] bg-[rgba(254,254,254,0.93)] py-3 pr-8 pl-4 text-left font-montserrat text-sm font-medium leading-[normal] text-[#090909] capitalize"
            data-location-toggle
            onClick={() => (isOpen ? setIsOpen(false) : openMenu())}
            onKeyDown={(event) => {
              if (!isOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
                event.preventDefault();
                openMenu();
              }
            }}
            type="button"
          >
            <span>{selectedLocation.label}</span>
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
                aria-label="Choose job location"
                className="dropdown_menu_item rounded-[5px] border border-[#efefef] bg-white py-3 shadow-[2px_6px_19px_0_rgba(0,0,0,0.08)]"
                id="career-location-menu"
                role="menu"
              >
                {locations.map((location, index) => (
                  <li key={location.slug} role="none">
                    <button
                      aria-checked={location.slug === selectedSlug}
                      className="block w-full cursor-pointer border-0 bg-white px-3 py-2 text-left font-montserrat text-base font-medium leading-[normal] text-[#090909] capitalize transition-colors duration-300 hover:bg-[#f4f4f4] focus-visible:bg-[#f4f4f4]"
                      onClick={() => {
                        setSelectedSlug(location.slug);
                        setIsOpen(false);
                      }}
                      onKeyDown={(event) => handleOptionKeyDown(event, index)}
                      ref={(element) => {
                        optionRefs.current[index] = element;
                      }}
                      role="menuitemradio"
                      type="button"
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
        data-aos="fade-up"
        aria-label={`${selectedList.location.label} current opportunities`}
        aria-live="polite"
        className="job-listing-main mb-[37px]"
        role="region"
      >
        {selectedList.content}
      </div>
    </div>
  );
}
