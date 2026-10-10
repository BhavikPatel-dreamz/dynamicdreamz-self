"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { FaqCircleCrossIcon } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { commerceSolutions, homeSectionCopy } from "@/content/home-client";
import { cn } from "@/lib/class-names";

function ArrowIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 11 11 1m0 0H2.5M11 1v8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CommerceSolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-[60px] max-[992px]:py-[50px] max-[767px]:py-10" aria-labelledby="commerce-solutions-title">
      <Container>
        <div
          data-aos="fade-up"
          className="mb-[54px] flex items-center justify-between gap-10 max-[992px]:mb-8 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-0"
        >
          <SectionHeading id="commerce-solutions-title" className="w-[40%] max-[992px]:w-full">{homeSectionCopy.commerceSolutionsTitle}</SectionHeading>
          <p className="w-[47%] text-base leading-[1.9] font-medium text-muted max-[992px]:mt-2.5 max-[992px]:w-full max-[767px]:text-sm">
            {homeSectionCopy.commerceSolutionsDescription}
          </p>
        </div>
        <div className="grid grid-cols-2 items-start gap-3 max-[992px]:grid-cols-1" data-commerce-accordion>
          {[commerceSolutions.slice(0, 4), commerceSolutions.slice(4)].map((column, columnIndex) => (
            <div data-aos="fade-up" className="grid gap-3" key={columnIndex}>
              {column.map((item, itemIndex) => {
                const index = columnIndex * 4 + itemIndex;
                const isOpen = activeIndex === index;
                const panelId = `commerce-solution-panel-${index}`;
                const triggerId = `commerce-solution-trigger-${index}`;

                return (
                  <article
                    className={cn(
                      "relative rounded-[15px] border border-[#6e7590]/10 p-5 shadow-[2px_2px_4px_rgb(83_83_83/5%)] max-[767px]:p-[15px]",
                      isOpen ? "bg-[#eff4ef]" : "bg-white",
                    )}
                    key={item.title}
                  >
                    <h3 className="m-0">
                      <button
                        id={triggerId}
                        type="button"
                        className="relative flex w-full cursor-pointer items-start justify-between gap-5 border-0 bg-transparent p-0 pr-10 text-left font-display text-xl leading-7 font-medium text-ink max-[767px]:flex-col max-[767px]:gap-1 max-[767px]:text-base max-[767px]:leading-6"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setActiveIndex(isOpen ? -1 : index)}
                      >
                        <span className="block">
                          <span className="block">{item.title}</span>
                          <span className="mt-2.5 block font-display text-sm leading-none font-medium text-ink max-[767px]:mt-[5px] max-[767px]:text-[13px] max-[767px]:leading-normal">
                            {item.summary}
                          </span>
                        </span>
                        <FaqCircleCrossIcon
                          className="accordion-close-icon absolute top-1/2 right-0 size-[30px] -translate-y-1/2 shrink-0 max-[992px]:size-[26px]"
                          isOpen={isOpen}
                        />
                        <span className="sr-only">{isOpen ? homeSectionCopy.commerceAccordion.close : homeSectionCopy.commerceAccordion.open} {item.title}</span>
                      </button>
                    </h3>
                    <div id={panelId} role="region" aria-labelledby={triggerId} aria-hidden={!isOpen} inert={!isOpen} className={cn("grid grid-rows-[0fr] transition-[grid-template-rows,margin-top] duration-300", isOpen && "mt-4 max-[767px]:mt-2.5 grid-rows-[1fr]")}>
                      <div className="overflow-hidden">
                        <div className="border-t border-[#6e7590]/10 pt-4 max-[767px]:pt-2.5">
                          <p className="mb-[15px] text-sm leading-6 font-normal text-muted">{item.body}</p>
                          <Link className="inline-flex items-center gap-2 text-sm leading-none font-bold text-brand-red uppercase transition-colors hover:text-ink focus-visible:text-ink" href={item.href}>
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
      </Container>
    </section>
  );
}
