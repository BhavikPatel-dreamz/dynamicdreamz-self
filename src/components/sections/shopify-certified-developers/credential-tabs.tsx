"use client";

import { type KeyboardEvent, useRef, useState } from "react";

import { cn } from "@/lib/class-names";

export type CredentialTabItem = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  details: readonly {
    label: string;
    value: string;
  }[];
};

type CredentialTabsProps = {
  items: readonly CredentialTabItem[];
  idPrefix?: string;
};

export function CredentialTabs({
  items,
  idPrefix = "shopify-credential",
}: CredentialTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectAndFocus(index: number) {
    const nextIndex = (index + items.length) % items.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectAndFocus(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectAndFocus(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectAndFocus(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectAndFocus(items.length - 1);
    }
  }

  return (
    <div className="overflow-hidden rounded-[29px] border border-ink/10">
      <div
        aria-label="Shopify credential requirements"
        className="grid grid-cols-4 max-[575px]:grid-cols-1"
        role="tablist"
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const tabId = `${idPrefix}-tab-${item.id}`;
          const panelId = `${idPrefix}-panel-${item.id}`;

          return (
            <button
              aria-controls={panelId}
              aria-selected={isActive}
              className={cn(
                "cursor-pointer border-t-0 border-r border-b border-l-0 border-ink/15 px-2.5 py-[26px] text-center text-base leading-none font-bold last:border-r-0 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#2f72d2] max-[992px]:text-sm max-[575px]:w-full max-[575px]:rounded-none max-[575px]:border-r-0 max-[575px]:py-5",
                isActive
                  ? "rounded-tr-[29px] bg-brand-red text-white max-[575px]:rounded-none"
                  : "bg-white text-ink",
              )}
              id={tabId}
              key={item.id}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item, index) => {
        const tabId = `${idPrefix}-tab-${item.id}`;
        const panelId = `${idPrefix}-panel-${item.id}`;
        const isActive = activeIndex === index;

        return (
          <div
            aria-labelledby={tabId}
            className="flex items-center justify-between bg-[#fafaf7] p-10 max-[992px]:flex-col max-[992px]:p-[30px] max-[575px]:p-[30px_20px]"
            hidden={!isActive}
            id={panelId}
            key={item.id}
            role="tabpanel"
            tabIndex={0}
          >
            <div className="w-[36%] max-[992px]:mb-5 max-[992px]:w-full">
              <span className="mb-2.5 block text-xs leading-[18px] font-bold text-brand-red uppercase">
                {item.eyebrow}
              </span>
              <h3 className="mb-2.5 text-[28px] leading-[39.2px] font-bold tracking-[-0.56px] text-ink max-[575px]:text-[22px] max-[575px]:leading-[30px]">
                {item.title}
              </h3>
              <p className="text-sm leading-[26.6px] font-medium text-muted">
                {item.description}
              </p>
            </div>
            <div className="grid w-[59%] grid-cols-2 gap-3.5 max-[992px]:w-full max-[575px]:grid-cols-1">
              {item.details.map((detail) => (
                <article
                  className="rounded-[20px] border border-[#d0d0ce] bg-[#fafaf7] p-[35px_25px] shadow-[2px_2px_0_rgba(40,40,40,0.2)] max-[575px]:p-5"
                  key={detail.label}
                >
                  <h4 className="mb-2.5 text-sm leading-[18px] font-bold text-brand-red uppercase">
                    {detail.label}
                  </h4>
                  <p className="text-sm leading-[26.6px] font-medium text-muted">
                    {detail.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
