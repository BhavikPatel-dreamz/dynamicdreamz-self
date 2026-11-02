"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import type { AnimatedCounterStat } from "@/components/sections/proof-counter-section";

type NumericCounterStat = AnimatedCounterStat & {
  numericValue: number;
};

export function AnimatedProofCounters({
  stats,
}: {
  stats: readonly AnimatedCounterStat[];
}) {
  const rootRef = useRef<HTMLUListElement>(null);
  const numericStats = useMemo<NumericCounterStat[]>(
    () =>
      stats.map((stat) => ({
        ...stat,
        numericValue:
          typeof stat.value === "number"
            ? stat.value
            : parseInt(String(stat.value).replace(/\D/g, ""), 10) || 0,
      })),
    [stats],
  );
  const [values, setValues] = useState(() => numericStats.map(() => 0));
  const startedRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const finish = () => setValues(numericStats.map((stat) => stat.numericValue));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    let animationFrame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        observer.disconnect();

        const startTime = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - startTime) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValues(
            numericStats.map((stat) => Math.round(stat.numericValue * eased)),
          );
          if (progress < 1) animationFrame = window.requestAnimationFrame(tick);
        };

        animationFrame = window.requestAnimationFrame(tick);
      },
      { threshold: 0.2 },
    );

    observer.observe(root);
    return () => {
      observer.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [numericStats]);

  return (
    <ul
      ref={rootRef}
      data-aos="fade-up"
      className="resources-counter-grid grid grid-cols-4 gap-4 max-[992px]:grid-cols-2 max-[992px]:pb-4 max-[768px]:grid-cols-1"
    >
      {stats.map((stat, index) => (
        <li
          data-aos="fade-up"
          className="resources-counter-card relative flex min-h-[193px] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#efefef] bg-white px-5 text-center shadow-[0_39px_50px_rgba(74,74,74,0.05)] after:absolute after:top-0 after:right-0 after:size-[193px] after:bg-[url('/assets/backgrounds/counter-ellipse.webp')] after:bg-contain after:bg-no-repeat max-[768px]:mx-[30px]"
          key={stat.label}
        >
          <span className="sr-only">
            {stat.value}
            {stat.suffix}
          </span>
          <span
            aria-hidden="true"
            className="counter-value font-montreal-medium text-[50px] font-normal leading-[1.2] tracking-normal text-brand-red max-[1200px]:text-[40px] max-[768px]:text-[32px]"
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
