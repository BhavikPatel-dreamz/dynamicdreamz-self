"use client";

import Link from "next/link";
import { useState } from "react";

import { FaqCircleCrossIcon } from "@/components/ui/faq-circle-cross-icon";
import { homeSectionCopy } from "@/content/home-client";
import { cn } from "@/lib/class-names";

export type CommerceSolutionItem = {
  title: string;
  summary: string;
  body: string;
  href: string;
  cta: string;
};

function ArrowIcon() {
  return (
    <svg className="h-2.5 w-2.5 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 11 11 1m0 0H2.5M11 1v8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CommerceSolutionsAccordion({
  items,
}: {
  items: readonly CommerceSolutionItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <div className="grid grid-cols-2 items-start gap-3 max-[992px]:grid-cols-1" data-commerce-accordion>
      {columns.map((column, columnIndex) => (
        <div data-aos="fade-up" className="grid gap-3" key={columnIndex}>
          {column.map((item, itemIndex) => {
            const index = columnIndex * half + itemIndex;
            const isOpen = activeIndex === index;
            const panelId = `commerce-solution-panel-${index}`;
            const triggerId = `commerce-solution-trigger-${index}`;

            return (
              <article
                className={cn(
                  "relative rounded-[15px] border border-[#6e7590]/10 p-5 shadow-[2px_2px_4px_rgb(83_83_83/5%)] max-[768px]:p-[15px]",
                  isOpen ? "bg-[#eff4ef]" : "bg-white",
                )}
                key={item.title}
              >
                <h3 className="m-0">
                  <button
                    id={triggerId}
                    type="button"
                    className="relative block w-full cursor-pointer border-0 bg-transparent p-0 pr-[45px] max-[992px]:pr-[38px] max-[768px]:pr-[42px] text-left font-display text-xl leading-7 font-medium text-ink max-[768px]:text-base max-[768px]:leading-6"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  >
                    <span className="block w-full">
                      <span className="block w-full">{item.title}</span>
                      <span className="mt-2.5 block font-display text-sm leading-normal font-medium text-ink max-[768px]:mt-[5px] max-[768px]:text-[13px]">
                        {item.summary}
                      </span>
                    </span>
                    <FaqCircleCrossIcon
                      className="absolute right-0 top-1/2 -translate-y-1/2 size-[30px] max-[992px]:size-[26px] max-[768px]:size-[26px] shrink-0 pointer-events-none"
                      isOpen={isOpen}
                      />
                    <span className="sr-only">
                      {isOpen
                        ? homeSectionCopy.commerceAccordion.close
                        : homeSectionCopy.commerceAccordion.open}{" "}
                      {item.title}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={cn(
                    "grid grid-rows-[0fr] transition-[grid-template-rows,margin-top] duration-300",
                    isOpen && "mt-4 max-[768px]:mt-2.5 grid-rows-[1fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#6e7590]/10 pt-4 max-[768px]:pt-2.5">
                      <p className="mb-[15px] text-sm leading-6 font-normal text-muted">
                        {item.body}
                      </p>
                      <Link
                        className="inline-flex items-center gap-2.5 text-sm leading-none font-bold text-brand-red uppercase transition-colors hover:text-ink focus-visible:text-ink"
                        href={item.href}
                      >
                        {item.cta}
                        <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ))}
    </div>
  );
}
