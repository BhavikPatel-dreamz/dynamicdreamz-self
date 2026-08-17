"use client";

import { useState } from "react";

import { cn } from "@/lib/class-names";
import type { WhiteLabelCard } from "@/types/white-label-service";

type DesignReasonsAccordionProps = {
  items: readonly WhiteLabelCard[];
};

export function DesignReasonsAccordion({ items }: DesignReasonsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `white-label-design-reason-trigger-${index}`;
        const panelId = `white-label-design-reason-panel-${index}`;

        return (
          <article className="rounded-[15px] border border-ink/10 bg-white px-6 py-[19px] max-[767px]:rounded-[10px] max-[767px]:px-[15px] max-[767px]:py-[18px]" key={item.title}>
            <button
              className="flex w-full cursor-pointer items-center border-0 bg-transparent text-left"
              id={triggerId}
              type="button"
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="flex-1 pr-2.5 text-lg leading-[1.28] font-bold text-brand-red max-[767px]:text-base">
                {item.title}
              </span>
              <span className="relative flex size-8 shrink-0 items-center justify-center rounded-lg bg-dark-green/5" aria-hidden="true">
                <span
                  className={cn(
                    "relative block size-[15px] transition-transform duration-300 ease-in-out motion-reduce:duration-0",
                    isOpen && "rotate-45",
                  )}
                >
                  <span className="absolute top-[6.5px] left-0 h-0.5 w-[15px] rounded-full bg-dark-green" />
                  <span className="absolute top-0 left-[6.5px] h-[15px] w-0.5 rounded-full bg-dark-green" />
                </span>
              </span>
            </button>
            <div
              className={cn("grid transition-[grid-template-rows] duration-400 ease-in-out motion-reduce:duration-0", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              <div className="overflow-hidden">
                <p className="pt-2.5 text-base leading-[1.9] font-medium text-muted max-[767px]:leading-[21px]">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
