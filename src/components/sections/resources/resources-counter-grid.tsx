"use client";

import { useEffect, useRef, useState } from "react";

import { resourcesStats } from "@/content/resources";

export type AnimatedCounterStat = {
  value: number;
  suffix: string;
  label: string;
};

type ResourcesCounterGridProps = {
  stats?: readonly AnimatedCounterStat[];
};

export function ResourcesCounterGrid({ stats = resourcesStats }: ResourcesCounterGridProps = {}) {
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

    const observer = new IntersectionObserver(([entry]) => {
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
    }, { threshold: 0.2 });

    observer.observe(root);
    return () => observer.disconnect();
  }, [stats]);

  return (
    <ul ref={rootRef} className="resources-counter-grid grid grid-cols-4 gap-4 max-[992px]:grid-cols-2 max-[992px]:pb-4 max-[767px]:grid-cols-1">
      {stats.map((stat, index) => (
        <li className="resources-counter-card relative flex min-h-[193px] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#efefef] bg-white px-5 text-center shadow-[0_39px_50px_rgba(74,74,74,0.05)] after:absolute after:top-0 after:right-0 after:size-[193px] after:bg-[url('/assets/backgrounds/counter-ellipse.webp')] after:bg-contain after:bg-no-repeat max-[767px]:mx-[30px]" key={stat.label}>
          <span className="sr-only">{stat.value}{stat.suffix}</span>
          <span aria-hidden="true" className="relative z-[1] text-[60px] leading-[75.3px] font-extrabold tracking-[-1.2px]">
            {values[index]}{stat.suffix}
          </span>
          <span className="relative z-[1] text-[16px] leading-[1.5] font-semibold text-muted">{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}
