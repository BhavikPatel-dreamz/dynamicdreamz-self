"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { resourcesStats } from "@/content/resources";
import { cn } from "@/lib/class-names";

export type AnimatedCounterStat = {
  value: number | string;
  suffix?: string;
  label: string;
};

export type ProofCounterSectionContent = {
  heading?: string;
  description?: string;
  eyebrow?: string;
  stats?: readonly any[];
  items?: readonly any[];
};

export type ProofCounterSectionProps = {
  content?: ProofCounterSectionContent;
  className?: string;
};

function AnimatedCounters({ stats = resourcesStats }: { stats?: readonly any[] }) {
  const rootRef = useRef<HTMLUListElement>(null);
  const numericStats = React.useMemo(
    () =>
      stats.map((s) => ({
        ...s,
        numericValue:
          typeof s.value === "number"
            ? s.value
            : parseInt(String(s.value).replace(/\D/g, ""), 10) || 0,
      })),
    [stats],
  );
  const [values, setValues] = useState(() => numericStats.map(() => 0));
  const startedRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => setValues(numericStats.map((s) => s.numericValue));
    if (reduceMotion) {
      finish();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        observer.disconnect();

        const startTime = performance.now();
        const duration = 1600;

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValues(numericStats.map((s) => Math.round(s.numericValue * eased)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [numericStats]);

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
            className="counter-value font-montreal-medium text-[50px] font-normal leading-[1.2] tracking-normal text-brand-red max-[1199px]:text-[40px] max-[767px]:text-[32px]"
          >
            {values[index]}
            {stat.suffix ?? ""}
          </span>
          <span className="counter-label mt-2.5 font-montserrat text-sm font-semibold uppercase leading-[1.4] text-ink">
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ProofCounterSection({
  content = {},
  className,
}: ProofCounterSectionProps = {}) {
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
          <AnimatedCounters stats={safeContent.stats} />
        </Container>
      </section>
    );
  }

  const items = safeContent.items || [];

  return (
    <section className={cn("city-page-counter py-20 max-[991px]:py-[50px]", className)}>
      <Container>
        {(safeContent.heading || safeContent.description) && (
          <SplitSectionHeading
            description={safeContent.description}
            eyebrow={safeContent.eyebrow}
            heading={safeContent.heading || ""}
            textColumnClassName="max-w-[560px]"
            titleColumnClassName="max-w-[620px]"
            variant="left"
          />
        )}

        <div data-aos="fade-up" className="wrapper flex flex-wrap">
          {items.map((item: any, idx: number) => (
            <div
              key={item.label}
              className={cn(
                "counter-box relative flex w-1/4 flex-col justify-center border-r border-[#d9d9d9] px-6 py-4 last:border-r-0 max-[991px]:w-1/2 max-[991px]:border-b max-[991px]:py-6 max-[767px]:w-full max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:border-[#d9d9d9] max-[767px]:py-5 max-[767px]:px-0",
                "max-[767px]:last:border-b-0",
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
