"use client";

import React, { type MouseEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import type { RisksShopifyTopic } from "@/content/risks-of-shopify-outsourcing";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type UrlMappingItem = {
  source: string;
  statusCode?: string;
  target: string;
};

export type SeoSafeMigrationContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description: string | readonly string[];
  tags: readonly string[];
  urlMappings: readonly UrlMappingItem[];
  checks: readonly string[];
};

export type MigrationDataChecklistBlockProps = {
  content?: SeoSafeMigrationContent | any;
  items?: readonly any[];
  className?: string;
  id?: string;
  [key: string]: any;
};

export type SeoSafeMigrationSectionProps = MigrationDataChecklistBlockProps;

export function MigrationDataChecklistBlock({
  content,
  className,
  id,
}: MigrationDataChecklistBlockProps) {
  if (!content) return null;

  const isPt0 = Boolean(
    content.eyebrow?.toLowerCase().includes("risk-free") ||
      (typeof content.heading === "string" && content.heading.toLowerCase().includes("risk-free")),
  );

  return (
    <section
      className={cn(
        "migration-seamless-checklist-box pb-20 max-[991px]:pb-[50px]",
        isPt0 ? "pt-0" : "pt-20 max-[991px]:pt-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div data-aos="fade-up" className="inner">
          <div className="flex flex-wrap items-start justify-between">
            <div className="left-col w-[38%] max-[991px]:w-full max-[991px]:mb-8">
              {content.eyebrow && (
                <div className="eyebrow mb-4">
                  <span className="font-montserrat text-sm font-semibold uppercase text-brand-red">
                    {content.eyebrow}
                  </span>
                </div>
              )}
              <h2 className="mb-4 font-montreal-medium text-[35px] font-normal leading-[1.3] text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
                {formatBrText(content.heading)}
              </h2>
              <p className="font-sans text-base font-medium leading-[28px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {formatBrText(content.description)}
              </p>

              <div className="tags mt-6 flex flex-wrap gap-2">
                {content.tags?.map((tag: string) => (
                  <span
                    className="rounded-[6px] border border-[#efefef] bg-white px-3 py-1.5 font-sans text-xs font-semibold text-ink"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="right-col w-[56%] max-[991px]:w-full">
              <div className="url-mapping-list space-y-3">
                {content.urlMappings?.map((row: UrlMappingItem, idx: number) => (
                  <div
                    className="url-mapping-item rounded-[10px] border border-[#efefef] bg-white p-4 shadow-sm"
                    key={idx}
                  >
                    <div className="flex items-center justify-between font-mono text-xs text-muted">
                      <span>{sharedUiCopy.sourceLabel}</span>
                      {row.statusCode && (
                        <span className="rounded bg-brand-red/10 px-2 py-0.5 text-brand-red">
                          {row.statusCode}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 font-mono text-sm font-medium text-ink break-all">
                      {row.source}
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-[#f0f0f0] pt-2">
                      <div className="title">
                        <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                          {sharedUiCopy.targetLabel}
                        </h3>
                        <span aria-hidden="true">→</span>
                      </div>
                      <div className="code">
                        <p className="font-mono text-sm font-medium text-ink">
                          {row.target}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="seo-checks -mx-[5px] mt-5 flex flex-wrap">
                {content.checks?.map((check: string) => (
                  <div className="seo-col mb-2.5 w-1/2 px-[5px] max-[767px]:w-full" key={check}>
                    <div className="code border-l-2 border-[#ad5151] bg-[#ad5151]/[0.07] px-3 py-[7px]">
                      <p className="font-sans text-xs font-medium text-ink md:text-sm">
                        {check}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export type RisksShopifyTopicsProps = {
  items: readonly RisksShopifyTopic[];
  [key: string]: any;
};

export function RisksShopifyTopics({ items }: RisksShopifyTopicsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  function handleTopicClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setActiveId(id);

    const scrollContainer = event.currentTarget
      .closest("[data-risks-topics]")
      ?.querySelector<HTMLElement>("[data-risks-topic-content]");
    const target = document.getElementById(id);

    if (!scrollContainer || !target) return;

    const offset = target.offsetTop - scrollContainer.offsetTop + scrollContainer.scrollTop;
    scrollContainer.scrollTo({ top: offset, behavior: "smooth" });
  }

  return (
    <section className="new-web-magento-tab" data-risks-topics>
      <Container>
        <div className="flex items-start gap-[50px] border-t border-[#dfdfdf] pt-[60px] pb-[60px] max-[1199px]:flex-col max-[1199px]:gap-8">
          <nav className="sticky top-5 w-full max-w-[367px] shrink-0 rounded-[13px] border border-[#eef0f5] bg-white px-5 py-[18px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] max-[1199px]:static max-[1199px]:max-w-none" aria-label="Shopify outsourcing topics">
            <ul className="border-l border-[#e4e2e3]">
              {items.map((item) => (
                <li
                  className="mb-[30px] px-[22px] last:mb-0 max-[991px]:mb-[25px]"
                  key={item.id}
                >
                  <a
                    className={cn(
                      "relative text-base font-semibold leading-[137%] text-[#282828] no-underline transition-colors hover:text-[#ad5151] focus-visible:text-[#ad5151]",
                      activeId === item.id && "text-[#ad5151] before:absolute before:top-0 before:-left-[22px] before:h-full before:w-[3px] before:bg-[#ad5151]",
                    )}
                    href={`#${item.id}`}
                    onClick={(event) => handleTopicClick(event, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="h-screen w-full max-w-[calc(100%-417px)] overflow-y-auto scroll-smooth [scrollbar-width:none] max-[1199px]:max-w-none [&::-webkit-scrollbar]:hidden"
            data-risks-topic-content
          >
            {items.map((item) => (
              <article className="mb-[60px] last:mb-0" id={item.id} key={item.id}>
                {item.introParagraphs?.map((paragraph) => (
                  <p className="mb-4 text-base font-medium leading-[30.4px] tracking-[0.32px] text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-[26px]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                <h2 className="relative mb-5 pl-5 text-[28px] font-medium leading-[1.37] text-[#282828] before:absolute before:top-[5px] before:left-0 before:block before:h-[34px] before:w-[5px] before:bg-[linear-gradient(111.61deg,#15c064_-0.6%,#00d1ff_92.42%)] max-[1199px]:text-2xl max-[767px]:text-[21px] max-[767px]:leading-[1.45]">
                  {item.heading}
                </h2>
                {item.paragraphs.map((paragraph) => (
                  <p className="mb-4 text-base font-medium leading-[30.4px] tracking-[0.32px] text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-[26px]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {item.bullets ? (
                  <ul className="mb-6">
                    {item.bullets.map((bullet) => (
                      <li className="relative mb-2.5 pl-[35px] text-base font-medium leading-[190%] text-[#535353] last:mb-0 max-[1199px]:text-sm max-[1199px]:leading-[26px] before:absolute before:top-0.5 before:left-0 before:size-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat" key={bullet.label}>
                        <strong className="text-black">{bullet.label}</strong> {bullet.text}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.closingParagraphs?.map((paragraph) => (
                  <p className="mb-4 text-base font-medium leading-[30.4px] tracking-[0.32px] text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-[26px]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export {
  MigrationDataChecklistBlock as SeoSafeMigrationSection,
};
