"use client";

import { useState } from "react";

import { expertise } from "@/content/home";
import { cn } from "@/lib/class-names";

export function ExpertiseAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="mt-[-1.21px] w-[57%] max-w-[654px] grow max-[991px]:mt-[37px] max-[991px]:w-full max-[991px]:max-w-none max-[767px]:mt-[33px]">
      {expertise.map((item, index) => {
        const isOpen = activeIndex === index;
        const panelId = `expertise-panel-${index}`;

        return (
          <div className="border-b border-blue-line py-7 first:pt-0 last:border-b-0 last:pb-0 min-[768px]:max-[991px]:py-[27.25px] max-[767px]:py-5" key={item.title}>
            <h3>
              <button
                className="flex min-h-[30px] w-full cursor-pointer items-center justify-between border-0 bg-transparent p-0 text-left font-display text-2xl leading-[1.2] font-medium max-[767px]:text-lg"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setActiveIndex(isOpen ? null : index)}
              >
                <span>{item.title}</span>
                <span
                  className={cn(
                    "relative ml-6 h-6 w-6 shrink-0 rounded-md border-[1.5px] border-ink transition-transform duration-180 max-[767px]:h-[30px] max-[767px]:w-[30px]",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                >
                  <span className="absolute top-1/2 left-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-[65%] rotate-45 border-r-[1.5px] border-b-[1.5px] border-current" />
                  <span className="absolute top-1/2 left-1/2 h-[9px] w-[1.5px] -translate-x-1/2 -translate-y-[55%] bg-current" />
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid grid-rows-[0fr] opacity-100 transition-[grid-template-rows,margin-top] duration-400 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]",
                isOpen && "mt-5 grid-rows-[1fr]",
              )}
              id={panelId}
              aria-hidden={!isOpen}
            >
              <div className="overflow-hidden">
                <p className="text-base leading-[1.9] font-semibold text-muted max-[767px]:text-sm">{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
