"use client";

import { useId, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { shopifyHoursSectionCopy, type ShopifyHoursPackage } from "@/content/buy-shopify-development-hours";

type PricingPackageSelectorProps = {
  packages: readonly ShopifyHoursPackage[];
  heading: {
    prefix: string;
    accent: string;
    suffix: string;
  };
  quoteLabel: string;
  quoteHref: string;
  initialIndex?: number;
};

export function PricingPackageSelector({
  packages,
  heading,
  quoteLabel,
  quoteHref,
  initialIndex = 2,
}: PricingPackageSelectorProps) {
  const inputId = useId();
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const selectedPackage = packages[selectedIndex];
  const fillPercentage = (selectedIndex / (packages.length - 1)) * 100;

  return (
    <div className="rounded-[25px] border-[1.5px] border-black/10 p-[39px_24px_24px] max-[767px]:p-[20px_15px]" data-pricing-selector>
      <h2 className="border-b border-[#dedbd2] px-2.5 pb-[25px] text-center font-sans text-xl leading-[28.8px] font-bold tracking-[-0.4px] max-[1199px]:text-lg max-[1199px]:leading-[26px]">
        {heading.prefix} <span className="text-brand-red">{heading.accent}</span>{" "}
        {heading.suffix}
      </h2>

      <div
        aria-live="polite"
        className="mt-[25px] grid grid-cols-3 gap-2.5 max-[1199px]:grid-cols-2"
        data-pricing-stats
      >
        <PricingStat label={shopifyHoursSectionCopy.pricing.hours}>
          <strong>{selectedPackage.hours}{shopifyHoursSectionCopy.pricing.durationMinutes}</strong>
          <span>{shopifyHoursSectionCopy.pricing.bulkHours}</span>
        </PricingStat>
        <PricingStat label={shopifyHoursSectionCopy.pricing.rate}>
          <strong>${selectedPackage.rate}{shopifyHoursSectionCopy.pricing.perHour}</strong>
          <del>${selectedPackage.previousRate}{shopifyHoursSectionCopy.pricing.perHour}</del>
        </PricingStat>
        <PricingStat
          className="max-[1199px]:col-span-2"
          label={shopifyHoursSectionCopy.pricing.cost}
        >
          <strong>${selectedPackage.cost}</strong>
          <del>${selectedPackage.previousCost}</del>
        </PricingStat>
      </div>

      <div className="mt-[70px] pb-[35px] max-[767px]:mt-10">
        <label className="sr-only" htmlFor={inputId}>
          {shopifyHoursSectionCopy.pricing.packageLabel}
        </label>
        <div className="relative h-1.5">
          <output
            className="absolute -top-[43px] z-1 flex h-[35px] w-12 -translate-x-1/2 items-center justify-center rounded-[52px] border border-black/15 bg-white text-center text-[15.86px] leading-[19px] font-semibold tracking-[-0.317px] after:absolute after:top-[calc(100%-1px)] after:left-1/2 after:-translate-x-1/2 after:border-x-[5px] after:border-t-[6px] after:border-x-transparent after:border-t-white"
            htmlFor={inputId}
            style={{ left: `${fillPercentage}%` }}
          >
            {selectedPackage.hours}
          </output>
          <input
            aria-valuetext={`${selectedPackage.hours} hours at $${selectedPackage.rate} per hour, total cost $${selectedPackage.cost}`}
            className="absolute inset-0 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-transparent [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-brand-red [&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent [&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-brand-red [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent"
            id={inputId}
            max={packages.length - 1}
            min={0}
            onChange={(event) => setSelectedIndex(Number(event.target.value))}
            step={1}
            style={{
              background: `linear-gradient(to right, #b95353 0%, #b95353 ${fillPercentage}%, #e2ded8 ${fillPercentage}%, #e2ded8 100%)`,
            }}
            type="range"
            value={selectedIndex}
          />
        </div>
        <div className="mt-[15px] flex justify-between text-sm leading-[16.8px] font-semibold tracking-[-0.28px] text-ink/80 max-[475px]:text-[11px]">
          {packages.map((item) => (
            <span key={item.hours}>{item.hours} {shopifyHoursSectionCopy.pricing.hoursSuffix}</span>
          ))}
        </div>
      </div>

      <ButtonLink
        aria-label={`Buy ${selectedPackage.hours} Shopify development hours for $${selectedPackage.cost}`}
        className="flex w-full max-w-none !py-[15px] !leading-[normal] max-[1199px]:!min-h-0 max-[1199px]:!py-3 max-[1199px]:!text-sm"
        external
        href={selectedPackage.purchaseHref}
        data-purchase-link
      >
        {shopifyHoursSectionCopy.pricing.purchasePrefix}${selectedPackage.cost}
      </ButtonLink>
      <div className="flex text-center">
        <ButtonLink
          className="flex w-full max-w-none !min-h-0 rounded-none border-0 !px-0 !pt-5 !pb-0 !text-sm !leading-[normal] text-ink underline decoration-[1.5px] underline-offset-2 before:hidden hover:text-brand-red [&>span[aria-hidden]]:hidden"
          href={quoteHref}
          variant="outline"
        >
          {quoteLabel}
        </ButtonLink>
      </div>
    </div>
  );
}

function PricingStat({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[186px] flex-col items-center rounded-[10px] bg-white/60 px-[15px] py-[30px] text-center max-[767px]:min-h-[135px] max-[767px]:px-2.5 max-[767px]:py-5 ${className}`}
    >
      <span className="mb-5 w-20 rounded-[20px] border border-[#555] px-2.5 py-[5px] text-[15px] leading-6 font-semibold text-muted max-[767px]:mb-[15px] max-[767px]:w-[75px] max-[767px]:py-[3px] max-[767px]:text-sm">
        {label}
      </span>
      <div className="flex flex-col text-xl leading-8 text-ink max-[767px]:text-base max-[767px]:leading-6 [&_del]:font-medium [&_del]:text-brand-red [&_span]:font-bold [&_strong]:font-bold">
        {children}
      </div>
    </div>
  );
}
