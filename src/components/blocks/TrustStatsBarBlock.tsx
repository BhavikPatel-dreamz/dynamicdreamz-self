"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { resourcesSectionCopy, resourcesStats } from "@/content/resources";
import { whiteLabelShopifyCounters } from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";
import type { WhiteLabelCard } from "@/types/white-label-service";

export type AnimatedCounterStat = {
  value: number;
  suffix: string;
  label: string;
};

export type CityPageCounterItem = {
  value: string;
  label: string;
  subLabel?: string;
};

export type TrustStatsBarContent = {
  heading?: string;
  description?: string;
  eyebrow?: string;
  stats?: readonly AnimatedCounterStat[];
  items?: readonly CityPageCounterItem[];
};

export type TrustStatsBarBlockProps = {
  content?: TrustStatsBarContent | any;
  className?: string;
  eyebrowVariant?: "pill" | "dash" | string;
  counters?: readonly any[];
  stats?: readonly any[];
  reasons?: readonly any[];
  title?: any;
  eyebrow?: any;
  [key: string]: any;
};

export type ProofCounterContent = {
  heading: string;
  description: string;
  stats: readonly AnimatedCounterStat[];
};

export type ProofCounterSectionProps = {
  content: ProofCounterContent;
};

export type CityPageCounterContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly CityPageCounterItem[];
};

export type CityPageCounterSectionProps = {
  content: CityPageCounterContent;
  className?: string;
  eyebrowVariant?: "pill" | "dash";
};

function ResourcesCounterGrid({ stats = resourcesStats }: { stats?: readonly AnimatedCounterStat[] }) {
  const rootRef = useRef<HTMLUListElement>(null);
  const [values, setValues] = useState(() => stats.map(() => 0));
  const startedRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => setValues(stats.map((stat) => stat.value));
    if (reduceMotion) {
      finish();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        observer.disconnect();
        const startedAt = performance.now();
        const duration = 2000;

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setValues(stats.map((stat) => Math.round(stat.value * eased)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [stats]);

  return (
    <ul
      ref={rootRef}
      data-aos="fade-up"
      className="resources-counter-grid grid grid-cols-4 gap-4 max-[992px]:grid-cols-2 max-[992px]:pb-4 max-[767px]:grid-cols-1"
    >
      {stats.map((stat, index) => (
        <li
          data-aos="fade-up"
          className="resources-counter-card relative flex min-h-[193px] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#efefef] bg-white px-5 text-center shadow-[0_39px_50px_rgba(74,74,74,0.05)] after:absolute after:top-0 after:right-0 after:size-[193px] after:bg-[url('/assets/backgrounds/counter-ellipse.webp')] after:bg-contain after:bg-no-repeat max-[767px]:mx-[30px]"
          key={stat.label}
        >
          <span className="sr-only">
            {stat.value}
            {stat.suffix}
          </span>
          <span
            aria-hidden="true"
            className="relative z-[1] text-[60px] font-extrabold leading-[75.3px] tracking-[-1.2px]"
          >
            {values[index]}
            {stat.suffix}
          </span>
          <span className="relative z-[1] mt-1 text-sm font-semibold tracking-[-0.2px] text-muted">
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TrustStatsBarBlock({
  content = {},
  className,
  eyebrowVariant = "dash",
}: TrustStatsBarBlockProps = {}) {
  const safeContent = content || {};
  if (safeContent.stats && safeContent.stats.length > 0) {
    return (
      <section
        className={cn("py-20 max-[991px]:py-[50px] max-[767px]:pt-[30px] max-[767px]:pb-[60px]", className)}
        aria-labelledby="proof-counter-title"
      >
        <Container>
          {(safeContent.heading || safeContent.description) && (
            <div
              data-aos="fade-up"
              className="mx-auto mb-[70px] max-w-[650px] text-center max-[1199px]:mb-[50px] max-[767px]:mb-[45px]"
            >
              {safeContent.heading && (
                <h2
                  className="mb-3 font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:mx-auto max-[767px]:max-w-[290px] max-[767px]:text-2xl max-[767px]:leading-[33.24px]"
                  id="proof-counter-title"
                >
                  {safeContent.heading}
                </h2>
              )}
              {safeContent.description && (
                <p className="text-base font-medium leading-[30px] text-muted">
                  {safeContent.description}
                </p>
              )}
            </div>
          )}
          <ResourcesCounterGrid stats={safeContent.stats} />
        </Container>
      </section>
    );
  }

  const items = safeContent.items || [];

  return (
    <section className={cn("city-page-counter py-20 max-[991px]:py-[50px]", className)}>
      <Container>
        {(safeContent.heading || safeContent.description) && (
          <div
            data-aos="fade-up"
            className="section_title_with_eyebrow mb-10 flex flex-wrap items-start justify-between gap-6 max-[991px]:mb-[30px] max-[991px]:flex-col max-[991px]:gap-4"
          >
            <div className="title max-w-[620px]">
              {safeContent.eyebrow && (
                <div className="eyebrow mb-4">
                  <span
                    className={cn(
                      "font-montserrat text-sm font-semibold uppercase text-[#535353]",
                      eyebrowVariant === "dash" &&
                        "relative pl-10 before:absolute before:left-0 before:top-2.5 before:h-0.5 before:w-7 before:bg-brand-red before:content-['']",
                    )}
                  >
                    {safeContent.eyebrow}
                  </span>
                </div>
              )}
              {safeContent.heading && (
                <h2 className="font-montreal-medium text-[35px] font-normal leading-[1.4] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
                  {safeContent.heading}
                </h2>
              )}
            </div>
            {safeContent.description && (
              <div className="section_text max-w-[560px]">
                <p className="text-base font-medium leading-[27px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
                  {safeContent.description}
                </p>
              </div>
            )}
          </div>
        )}

        <div data-aos="fade-up" className="wrapper flex flex-wrap">
          {items.map((item: any, idx: number) => (
            <div
              key={item.label}
              className={cn(
                "counter-box relative flex w-1/4 flex-col justify-center border-r border-[#d9d9d9] px-6 py-4 last:border-r-0 max-[991px]:w-1/2 max-[991px]:border-b max-[991px]:py-6 max-[767px]:w-full max-[767px]:border-r-0 max-[767px]:px-0",
                idx % 2 === 1 && "max-[991px]:border-r-0",
                idx >= items.length - 2 && "max-[991px]:border-b-0",
              )}
            >
              <div className="counter-number mb-1 font-montreal-medium text-[50px] font-normal leading-[1.1] text-brand-red max-[1199px]:text-[40px] max-[767px]:text-[32px]">
                {item.value}
              </div>
              <div className="counter-label font-montserrat text-base font-semibold leading-[1.4] text-ink max-[767px]:text-sm">
                {item.label}
              </div>
              {item.subLabel && (
                <div className="counter-sublabel mt-1 text-xs text-muted">
                  {item.subLabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export type CounterItem = {
  value: string;
  label: string;
};

export type WhiteLabelCounterSectionProps = {
  counters?: readonly CounterItem[];
};

export function WhiteLabelCounterSection({
  counters = whiteLabelShopifyCounters,
}: WhiteLabelCounterSectionProps = {}) {
  return (
    <section className="white_label_counter_section relative border-y border-[rgba(0,0,0,0.10)] bg-white py-0">
      <Container variant="fullBleedTablet">
        <div
          data-aos="fade-up"
          className="stats_container flex flex-wrap items-center justify-between max-[991px]:relative max-[991px]:after:absolute max-[991px]:after:top-1/2 max-[991px]:after:left-0 max-[991px]:after:h-[1px] max-[991px]:after:w-full max-[991px]:after:-translate-y-1/2 max-[991px]:after:bg-[rgba(40,40,40,0.10)] max-[991px]:after:content-['']"
        >
          {counters.map((item, index) => (
            <div
              className={`stats_item w-1/4 py-[17px] text-center max-[1199px]:px-5 max-[991px]:w-1/2 max-[767px]:min-h-[94px] max-[767px]:p-4 ${
                index % 2 === 0
                  ? "border-r border-[rgba(40,40,40,0.10)]"
                  : index === 1
                    ? "border-r border-[rgba(40,40,40,0.10)] max-[991px]:border-r-0"
                    : "border-r-0"
              }`}
              key={item.label}
            >
              <div className="stats_box mx-auto w-fit max-[991px]:max-w-[205px]">
                <div className="stats_number flex items-center justify-center font-sans text-2xl font-bold leading-none text-[#282828] max-[1199px]:text-xl max-[767px]:text-base">
                  {item.value}
                </div>
                <p className="counter_title mt-2 font-montserrat text-[13px] font-medium leading-none text-[#535353] max-[1199px]:leading-[18px] max-[767px]:mx-auto max-[767px]:max-w-[135px]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export type WhiteLabelWhySectionProps = {
  eyebrow?: string;
  title: string | readonly string[];
  reasons: readonly WhiteLabelCard[];
  className?: string;
  id?: string;
};

export function WhiteLabelWhySection({
  eyebrow,
  title,
  reasons,
  className,
  id = "why-partner-dynamic-dreamz",
}: WhiteLabelWhySectionProps) {
  return (
    <section className={cn("white_label_why_partner_section py-20 max-[992px]:py-[50px]", className)} id={id}>
      <Container>
        {eyebrow && (
          <div data-aos="fade-up" className="mb-4 text-center">
            <span className="font-montserrat text-sm font-semibold uppercase text-[#535353]">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 data-aos="fade-up" className="mb-12 text-center font-montreal-medium text-[35px] font-normal leading-tight text-ink max-[992px]:text-[30px] max-[767px]:text-2xl">
          {formatBrText(title)}
        </h2>
        <div data-aos="fade-up" className="grid grid-cols-3 gap-6 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1">
          {reasons.map((reason) => (
            <article className="rounded-[15px] border border-[rgba(40,40,40,0.10)] bg-white p-6 shadow-sm" key={reason.title}>
              <h3 className="mb-3 font-display text-lg font-medium text-brand-red">
                {reason.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-muted">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export type WhiteLabelStatsSectionProps = {
  stats?: readonly any[];
  variant?: string;
  [key: string]: any;
};

export function WhiteLabelStatsSection({
  stats = [],
}: WhiteLabelStatsSectionProps = {}) {
  return <WhiteLabelCounterSection counters={stats} />;
}

export function ResourcesTrustSection({
  content,
  className,
}: TrustStatsBarBlockProps = {}) {
  const heading = content?.heading ?? resourcesSectionCopy.trustTitle;
  const description = content?.description ?? resourcesSectionCopy.trustDescription;
  const stats = content?.stats ?? resourcesStats;

  return (
    <section
      className={cn("trusted-web-sec py-20 max-[991px]:py-[50px]", className)}
      aria-labelledby="resources-trust-title"
    >
      <Container variant="narrow">
        {(heading || description) && (
          <div
            data-aos="fade-up"
            className="resources-trust-intro mx-auto mb-[70px] max-w-[650px] text-center"
          >
            {heading && (
              <h2
                id="resources-trust-title"
                className="mb-3 font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-[24px] max-[767px]:leading-[33.24px]"
              >
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-[18px] font-medium leading-[34.2px] text-muted max-[991px]:text-[16px] max-[991px]:leading-[30.4px]">
                {description}
              </p>
            )}
          </div>
        )}
        <ResourcesCounterGrid stats={stats} />
      </Container>
    </section>
  );
}

export {
  TrustStatsBarBlock as ProofCounterSection,
  TrustStatsBarBlock as CityPageCounterSection,
};
