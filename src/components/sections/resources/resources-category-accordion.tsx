"use client";

import Image from "next/image";
import { useState } from "react";

import type { ResourceCategory } from "@/content/resources";
import { cn } from "@/lib/class-names";

export function ResourcesCategoryAccordion({ categories }: { categories: readonly ResourceCategory[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-[26px] bg-white px-10 pt-7 pb-7 max-[767px]:px-5" data-resources-accordion>
      {categories.map((category, index) => {
        const open = openIndex === index;
        const buttonId = `resource-category-${index}-button`;
        const panelId = `resource-category-${index}-panel`;

        return (
          <div className="border-b border-ink/10 last:border-b-0" key={category.title}>
            <button
              id={buttonId}
              type="button"
              className={cn("resources-blog-accordion-header flex min-h-[49px] w-full cursor-pointer items-center justify-between gap-4 py-3 text-left", open && "active")}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <h5 className="text-[18px] leading-[1.4] font-semibold tracking-[0.32px]">{category.title}</h5>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#f7f5ef]" aria-hidden="true">
                <Image className={cn("size-3 transition-transform duration-400", open && "rotate-180")} src="/assets/icons/accordion-arrow.svg" alt="" width={12} height={7} />
              </span>
            </button>
            <div
              id={panelId}
              className={cn("resources-blog-accordion-content grid transition-[grid-template-rows] duration-400 ease-in-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!open}
            >
              <div className="min-h-0 overflow-hidden">
                {category.links.length ? (
                  <ul className={cn("pt-5 pb-[25px]", index === 0 ? "min-[1200px]:pb-[61px]" : "min-[1200px]:pb-[41px]")}>
                    {category.links.map((link) => (
                      <li className="relative mb-6 pl-[30px] text-[16px] leading-[1.3] font-medium last:mb-0 before:absolute before:top-[9px] before:left-0 before:h-[3px] before:w-[15px] before:bg-[linear-gradient(90deg,#20b15a,#42c7d8)]" key={link.href}>
                        <a className="text-muted underline transition-colors hover:text-brand-red focus-visible:text-brand-red" href={link.href} tabIndex={open ? undefined : -1}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
