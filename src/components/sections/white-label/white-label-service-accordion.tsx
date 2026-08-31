"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { sharedUiCopy } from "@/content/common";
import { cn } from "@/lib/class-names";
import type { WhiteLabelService } from "@/types/white-label-service";

type WhiteLabelServiceAccordionProps = {
  services: readonly WhiteLabelService[];
  idPrefix: string;
  flushEnd?: boolean;
};

export function WhiteLabelServiceAccordion({
  idPrefix,
  services,
  flushEnd = false,
}: WhiteLabelServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const columns = [services.slice(0, 3), services.slice(3)];

  return (
    <div className={cn("mb-[43px] flex gap-[60px] max-[1199px]:mb-[30px] max-[1199px]:gap-[50px] max-[992px]:mb-[25px] max-[992px]:flex-col max-[992px]:gap-0 max-[767px]:mb-5", flushEnd && "mb-0 max-[1199px]:mb-0 max-[992px]:mb-0 max-[767px]:mb-0")}>
      {columns.map((column, columnIndex) => (
        <div className="flex flex-1 flex-col" key={`service-column-${columnIndex}`}>
          {column.map((service, itemIndex) => {
            const index = columnIndex * 3 + itemIndex;
            const isOpen = openIndex === index;
            const triggerId = `${idPrefix}-trigger-${index}`;
            const panelId = `${idPrefix}-panel-${index}`;
            const isLastInColumn = itemIndex === column.length - 1;

            return (
              <article
                className={cn(
                  "border-b border-white/10",
                  isLastInColumn && "min-[992px]:border-b-0",
                  columnIndex === 1 && isLastInColumn && "max-[992px]:border-b-0",
                )}
                key={service.title}
              >
                <button
                  className={cn(
                    "flex w-full cursor-pointer items-center border-0 bg-transparent py-5 text-left select-none max-[1199px]:py-[18px] max-[992px]:py-[15px]",
                    itemIndex === 0 && "!pt-0",
                    columnIndex === 1 && itemIndex === 0 && "max-[992px]:!pt-[15px]",
                  )}
                  id={triggerId}
                  type="button"
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <Image
                    className="mr-[18px] size-[52px] shrink-0 rounded-[15px] object-contain max-[1199px]:mr-[15px] max-[1199px]:size-12 max-[992px]:mr-2.5 max-[992px]:size-10 max-[767px]:size-[30px]"
                    src={service.icon}
                    alt=""
                    width={52}
                    height={52}
                    aria-hidden="true"
                  />
                  <span className="flex-1 font-sans text-lg leading-[27px] font-bold text-white max-[1199px]:leading-[26px] max-[767px]:text-base max-[767px]:leading-6">
                    {service.title}
                  </span>
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 pb-0.5 text-[28px] leading-none font-normal text-white transition-all duration-300 max-[1199px]:size-7 max-[1199px]:text-2xl max-[992px]:size-6 max-[992px]:text-xl max-[767px]:size-[22px]"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-700 ease-in-out motion-reduce:duration-0",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-[70px] text-base leading-[30.4px] font-medium text-white/80 max-[1199px]:pb-5 max-[1199px]:pl-[63px] max-[1199px]:leading-[26px] max-[992px]:pb-[15px] max-[992px]:pl-[50px] max-[992px]:leading-6 max-[767px]:pl-10 max-[767px]:text-[15px] max-[767px]:leading-[22px]">
                      {service.description}
                      {service.href ? (
                        <Link
                          className="mt-[15px] flex w-fit items-center gap-2.5 font-semibold text-white transition-colors hover:text-brand-red"
                          href={service.href}
                        >
                          {service.linkLabel ?? sharedUiCopy.readMore}
                          <span aria-hidden="true">←</span>
                        </Link>
                      ) : null}
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
