import type { CSSProperties } from "react";

import styles from "@/components/sections/about/about-counter-stats.module.css";

type AboutStatistic = {
  label: string;
  value: string;
};

type AboutCounterStatsProps = {
  statistics: readonly AboutStatistic[];
};

function createRibbon(target: number, digitIndex: number) {
  if (digitIndex === 0) {
    return Array.from({ length: target + 1 }, (_, index) => index);
  }

  const turns = 30;
  return Array.from({ length: turns + 1 }, (_, index) => {
    if (index === 0) return 0;
    if (index === turns) return target;
    return (index * 7 + digitIndex * 3) % 10;
  });
}

function OdometerNumber({ value }: { value: string }) {
  const digits = value.split("").map((digit, index) => createRibbon(Number(digit), index));

  return (
    <span className="inline-flex align-middle" aria-hidden="true">
      {digits.map((ribbon, digitIndex) => {
        const target = value[digitIndex];

        return (
          <span className="relative inline-block h-[1lh] w-[0.64em] overflow-hidden max-[767px]:w-[0.625em]" key={`${target}-${digitIndex}`}>
            <span className="invisible block">8</span>
            <span
              className={`${styles.ribbon} absolute inset-x-0 top-0 block text-left`}
              style={{ "--odometer-end": `-${ribbon.length - 1}lh` } as CSSProperties}
            >
              {ribbon.map((digit, index) => (
                <span className="block h-[1lh] leading-[1lh]" key={`${digit}-${index}`}>
                  {digit}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function AboutCounterStats({ statistics }: AboutCounterStatsProps) {
  return (
    <dl className="flex w-[55%] items-center justify-end max-[991px]:w-full max-[991px]:justify-center">
      {statistics.map((stat) => {
        const number = stat.value.replace(/\D/g, "");

        return (
          <div
            className="w-max border-l border-white/25 pl-[30px] text-left first:ml-0 first:border-l-0 first:pl-0 not-first:ml-[30px] max-[1199px]:pl-5 max-[1199px]:not-first:ml-5 max-[991px]:text-center max-[359px]:pl-2.5 max-[359px]:not-first:ml-2.5"
            key={stat.label}
          >
            <dt className="mb-3 text-[16px] leading-[18.4px] font-bold text-white/60 uppercase max-[1199px]:text-[14px] max-[767px]:mb-0 max-[767px]:text-[10px] max-[359px]:text-[9px]">
              {stat.label}
            </dt>
            <dd
              className="flex h-[49.48px] items-center justify-start text-[45px] leading-[45px] font-semibold tracking-[-0.56px] text-white max-[1199px]:h-[38.81px] max-[1199px]:text-[40px] max-[1199px]:leading-[35px] max-[991px]:justify-center max-[767px]:h-[31.66px] max-[767px]:text-xl max-[767px]:leading-[30px]"
              aria-label={stat.value}
              data-about-counter={stat.label}
            >
              <OdometerNumber value={number} />
              <span className="ml-0.5 text-[40px] leading-[45px] max-[1199px]:leading-[35px] max-[767px]:text-xl max-[767px]:leading-[30px]" aria-hidden="true">
                +
              </span>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
