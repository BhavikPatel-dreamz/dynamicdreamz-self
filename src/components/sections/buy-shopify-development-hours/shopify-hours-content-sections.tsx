import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import {
  shopifyHoursComparison,
  shopifyHoursTasks,
} from "@/content/buy-shopify-development-hours";

export function ShopifyHoursComparisonSection() {
  return (
    <section
      aria-labelledby="shopify-hours-comparison-title"
      className="bulk-shopify-fulltime-resources bg-[#fafaf7] py-[75px] max-[1199px]:py-[60px] max-[767px]:py-[50px]"
    >
      <Container>
        <div className="bulk-shopify-fulltime-resources-row flex items-center justify-between gap-0 max-[1199px]:flex-wrap">
          <header className="bulk-shopify-fulltime-resources-title w-[calc(100%-800px)] pr-[68px] max-[1199px]:w-full max-[1199px]:pb-[50px] max-[1199px]:pr-0 max-[1199px]:text-center">
            <Eyebrow className="mb-2 max-[1199px]:justify-center">
              {shopifyHoursComparison.eyebrow}
            </Eyebrow>
            <h2
              className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
              id="shopify-hours-comparison-title"
            >
              {shopifyHoursComparison.heading}
            </h2>
            <p className="mt-[15px] font-sans text-base leading-[30px] font-medium text-muted">
              {shopifyHoursComparison.description}
            </p>
          </header>

          <div className="bulk-shopify-fulltime-resources-box w-[800px] max-[1199px]:w-full">
            <p className="offer-both-fits-text relative z-1 mx-auto w-full max-w-[566px] rounded-t-[25px] bg-[#1a1e1a] px-10 py-[3px] text-center text-base leading-[30.4px] font-semibold text-white italic before:absolute before:bottom-[-1px] before:left-0 before:-z-1 before:h-full before:w-5 before:-skew-x-[27deg] before:rounded-tl-full before:bg-[#1a1e1a] after:absolute after:right-0 after:bottom-[-1px] after:-z-1 after:h-full after:w-5 after:skew-x-[26deg] after:rounded-tr-full after:bg-[#1a1e1a] max-[767px]:max-w-[457px] max-[767px]:text-sm max-[599px]:max-w-[390px] max-[599px]:text-[11px] max-[599px]:leading-[17.7px] max-[475px]:max-w-[280px] max-[374px]:max-w-[240px] max-[374px]:text-[9px]">
              {shopifyHoursComparison.ribbon}
            </p>
            <div className="bulk-shopify-fulltime-resources-table flex items-stretch rounded-[20px] border-2 border-ink bg-white p-[20px_32px_20px_20px] max-[992px]:p-[20px_10px] max-[767px]:flex-wrap max-[767px]:pt-[30px] max-[767px]:pr-[15px] max-[767px]:pb-[39px] max-[767px]:pl-[15px]">
              {shopifyHoursComparison.items.map((item, index) => (
                <article
                  className={`bulk-shopify-fulltime-resources-list relative flex flex-col max-[767px]:min-h-0 max-[767px]:w-full ${
                    index === 0
                      ? "bg-light-yellow w-[57%] rounded-[20px] bg-[#f7f4e9] pt-11 pr-[38px] pb-11 pl-6 max-[992px]:w-1/2 max-[767px]:min-h-[501px] max-[767px]:w-full max-[767px]:p-[25px_15px]"
                      : "ml-[35px] w-[53%] bg-white pt-11 max-[992px]:w-1/2 max-[767px]:ml-0 max-[767px]:w-full max-[767px]:px-[15px] max-[767px]:pt-11"
                  }`}
                  key={item.title}
                >
                  <h3 className="mb-6 font-montserrat text-lg leading-[25.2px] font-bold text-ink">
                    {item.title}
                  </h3>
                  <ul className="pb-[35px] max-[992px]:pb-[25px]">
                    {item.points.map((point) => (
                      <li
                        className="relative mb-4 border-b border-black/10 pr-1 pb-4 pl-[25px] font-sans text-base leading-[30.4px] font-medium text-[#535353] last:mb-0 last:border-b-0 last:pb-0 max-[767px]:pr-0"
                        key={point}
                      >
                        <Image
                          alt=""
                          aria-hidden="true"
                          className="absolute top-[6px] left-0 size-[17px]"
                          height={17}
                          src="/assets/buy-shopify-development-hours/icons/comparison-check.svg"
                          width={17}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`rounded-[10px] text-base leading-[30.4px] font-semibold text-[#282828] ${
                      index === 0
                        ? "bg-white p-[10px_12px]"
                        : "bg-[rgba(173,81,81,0.10)] p-[11px_10px]"
                    }`}
                  >
                    {item.note}
                  </p>
                  <div className="get-started-btn absolute -bottom-[50px] left-1/2 -translate-x-1/2 max-[767px]:static max-[767px]:mt-5 max-[767px]:translate-x-0">
                    <ButtonLink
                      className="min-w-[318px] max-[767px]:flex max-[767px]:w-full max-[767px]:min-w-0 max-[767px]:max-w-none"
                      href={item.href}
                    >
                      {item.cta}
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ShopifyHoursTasksSection() {
  return (
    <section
      aria-labelledby="shopify-hours-tasks-title"
      className="can-you-use-shopify-hours py-20 max-[1199px]:py-[60px] max-[767px]:py-[50px]"
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] max-[767px]:mb-[30px]"
          description={shopifyHoursTasks.description}
          eyebrow={shopifyHoursTasks.eyebrow}
          heading={shopifyHoursTasks.heading}
          headingId="shopify-hours-tasks-title"
          variant="left"
        />
        <div className="can-you-use-shopify-hours-list">
          <ul className="flex flex-wrap justify-start gap-x-[11px] gap-y-6">
            {shopifyHoursTasks.items.map((item) => (
              <li
                className="relative rounded-[30px] border border-black/20 bg-[#fafaf7] py-[17px] pr-[13px] pl-[37px] font-sans text-sm font-medium leading-[19.48px] text-[#282828] max-[767px]:w-full"
                key={item}
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="absolute top-1/2 left-[15px] -translate-y-1/2 h-[9px] w-[14px]"
                  height={9}
                  src="/assets/buy-shopify-development-hours/icons/task-check.svg"
                  width={14}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
