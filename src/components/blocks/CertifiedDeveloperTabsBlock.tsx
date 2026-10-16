"use client";

import React, { type KeyboardEvent, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { shopifyCredentialTabs } from "@/content/shopify-certified-developers";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type CredentialTabItem = {
  id?: string;
  label?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  details?: readonly {
    label: string;
    value: string;
  }[];
  [key: string]: any;
};

export type CredentialTabsContent = {
  heading?: string | readonly string[];
  title?: string | readonly string[];
  description?: string | readonly string[];
  items: readonly CredentialTabItem[];
  [key: string]: any;
};

export type CertifiedDeveloperTabsBlockProps = {
  content?: CredentialTabsContent | any;
  items?: readonly any[];
  className?: string;
  [key: string]: any;
};

export type CredentialTabsSectionProps = CertifiedDeveloperTabsBlockProps;

export function CertifiedDeveloperTabsBlock({
  content = shopifyCredentialTabs,
  className,
}: CertifiedDeveloperTabsBlockProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const idPrefix = "shopify-credential";

  function selectAndFocus(index: number) {
    const nextIndex = (index + content.items.length) % content.items.length;
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
      selectAndFocus(content.items.length - 1);
    }
  }

  return (
    <section
      className={cn("py-20 max-[992px]:py-[50px]", className)}
      aria-labelledby="shopify-credential-tabs-title"
    >
      <Container>
        <header
          data-aos="fade-up"
          className="mx-auto mb-[54px] max-w-[560px] text-center max-[992px]:mb-[30px]"
        >
          <h2
            className="mb-2.5 font-sans text-[35px] font-bold leading-[48px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]"
            id="shopify-credential-tabs-title"
          >
            {formatBrText(content.heading)}
          </h2>
          <p className="font-sans text-base font-medium leading-[30px] text-muted">
            {formatBrText(content.description)}
          </p>
        </header>

        <div data-aos="fade-up" className="overflow-hidden rounded-[29px] border border-ink/10">
          <div
            aria-label="Shopify credential requirements"
            className="grid grid-cols-4 max-[575px]:grid-cols-1"
            role="tablist"
          >
            {content.items.map((item: any, index: number) => {
              const isActive = activeIndex === index;
              const tabId = `${idPrefix}-tab-${item.id}`;
              const panelId = `${idPrefix}-panel-${item.id}`;

              return (
                <button
                  aria-controls={panelId}
                  aria-selected={isActive}
                  className={cn(
                    "cursor-pointer border-t-0 border-r border-b border-l-0 border-ink/15 px-2.5 py-[26px] text-center font-sans text-base font-normal leading-none last:border-r-0 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#2f72d2] max-[992px]:text-sm max-[575px]:w-full max-[575px]:rounded-none max-[575px]:border-r-0 max-[575px]:py-5",
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

          {content.items.map((item: any, index: number) => {
            const itemId = item.id || `tab-${index}`;
            const tabId = `${idPrefix}-tab-${itemId}`;
            const panelId = `${idPrefix}-panel-${itemId}`;
            const isActive = activeIndex === index;

            return (
              <div
                aria-labelledby={tabId}
                className={cn(
                  "flex items-center justify-between bg-[#fafaf7] p-10 max-[992px]:flex-col max-[992px]:p-[30px] max-[575px]:p-[30px_20px]",
                  !isActive && "hidden",
                )}
                hidden={!isActive}
                id={panelId}
                key={itemId}
                role="tabpanel"
                tabIndex={0}
              >
                <div className="w-[55%] max-[992px]:w-full max-[992px]:text-center">
                  {item.eyebrow && (
                    <span className="mb-2 block font-montserrat text-xs font-semibold uppercase text-brand-red">
                      {item.eyebrow}
                    </span>
                  )}
                  <h3 className="mb-3 font-display text-2xl font-medium text-ink max-[767px]:text-xl">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-normal leading-relaxed text-[#535353]">
                    {item.description}
                  </p>
                </div>
                {item.details && item.details.length > 0 && (
                  <div className="w-[38%] border-l border-ink/10 pl-10 max-[992px]:mt-6 max-[992px]:w-full max-[992px]:border-t max-[992px]:border-l-0 max-[992px]:pt-6 max-[992px]:pl-0">
                    <ul className="space-y-3">
                      {item.details.map((detail: any, dIdx: number) => (
                        <li key={dIdx} className="flex justify-between text-sm">
                          <span className="font-medium text-muted">{detail.label}:</span>
                          <span className="font-semibold text-ink">{detail.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export {
  CertifiedDeveloperTabsBlock as CredentialTabsSection,
  CertifiedDeveloperTabsBlock as VerifiedKnowledgeSection,
  CertifiedDeveloperTabsBlock as CredentialEvidenceSection,
  CertifiedDeveloperTabsBlock as CertifiedAgencySupportSection,
  CertifiedDeveloperTabsBlock as CertifiedServicesSection,
  CertifiedDeveloperTabsBlock as PartnerDirectoryProofSection,
};
