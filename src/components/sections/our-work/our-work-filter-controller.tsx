"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { WorkFilter, WorkPlatform } from "@/content/our-work";

type OurWorkFilterControllerProps = {
  filters: readonly WorkFilter[];
  counts: Record<WorkPlatform, number>;
};

export function OurWorkFilterController({ filters, counts }: OurWorkFilterControllerProps) {
  const [activeFilter, setActiveFilter] = useState<WorkPlatform>("all");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const listRef = useRef<HTMLUListElement>(null);

  const updateIndicator = useCallback(() => {
    const activeButton = listRef.current?.querySelector<HTMLButtonElement>(
      `[data-work-filter="${activeFilter}"]`,
    );

    if (!activeButton) return;
    setIndicator({ left: activeButton.offsetLeft, width: activeButton.offsetWidth });
  }, [activeFilter]);

  useEffect(() => {
    updateIndicator();
    const list = listRef.current;
    if (!list) return;

    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(list);
    window.addEventListener("resize", updateIndicator);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  function showPlatform(platform: WorkPlatform) {
    setActiveFilter(platform);

    document.querySelectorAll<HTMLElement>("[data-work-project]").forEach((project) => {
      project.hidden = platform !== "all" && project.dataset.workPlatform !== platform;
    });
  }

  return (
    <div>
      <div className="max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto w-max min-w-full rounded-[50px] border border-[#efefef] px-[30px] py-4 max-[767px]:rounded-none max-[767px]:border-0 max-[767px]:p-0">
          <ul className="relative flex w-max min-w-full" ref={listRef} aria-label="Filter projects by platform">
            {filters.map((filter) => (
              <li className="shrink-0" key={filter.id}>
                <button
                  className="relative z-1 cursor-pointer rounded-[30px] border-0 bg-transparent px-5 py-[15px] text-base leading-[normal] font-medium whitespace-nowrap transition-colors duration-300"
                  data-work-filter={filter.id}
                  type="button"
                  aria-pressed={activeFilter === filter.id}
                  onClick={() => showPlatform(filter.id)}
                >
                  <span className={activeFilter === filter.id ? "text-white" : "text-[#090909]"}>
                    {filter.label}
                  </span>
                </button>
              </li>
            ))}
            <li
              aria-hidden="true"
              className="pointer-events-none absolute top-0 bottom-0 z-0 rounded-[25px] bg-black transition-[width,left] duration-300 ease-in-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          </ul>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {counts[activeFilter]} {counts[activeFilter] === 1 ? "project" : "projects"}.
      </p>
    </div>
  );
}
