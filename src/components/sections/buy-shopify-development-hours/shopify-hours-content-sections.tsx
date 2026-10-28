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
      className="bulk-shopify-fulltime-resources bg-[#FAFAF7] py-[75px] max-[1199px]:py-[60px] max-[767px]:py-[50px]"
    >
      <Container>
        <div className="bulk-shopify-fulltime-resources-row flex items-center justify-between gap-0 max-[1199px]:flex-wrap">
          <div
            className="section_title_with_eyebrow flex-wrap flex flex-col items-center max-[1199px]:mx-auto max-[1199px]:mb-[50px] max-[991px]:mb-[30px] min-[1200px]:items-start min-[1200px]:w-[580px] min-[1200px]:max-w-[580px] min-[1200px]:flex-1 min-[1200px]:min-w-0 min-[1200px]:mb-0 min-[1200px]:mx-0"
            data-aos="fade-up"
          >
            <div className="title mb-2.5 w-full text-left">
              <Eyebrow
                as="div"
                className="eyebrow mb-4 inline-flex w-fit max-[767px]:pl-[23px]"
                linePosition="overlay"
              >
                <span>{shopifyHoursComparison.eyebrow}</span>
              </Eyebrow>
              <h2
                className="font-montreal-medium text-[35px] font-normal leading-[49px] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-[42px] max-[991px]:mb-2.5 max-[767px]:text-2xl max-[767px]:leading-[31.2px]"
                id="shopify-hours-comparison-title"
              >
                {shopifyHoursComparison.heading}
              </h2>
            </div>
            <div className="section_text w-full text-left">
              <p className="m-0 font-sans text-base font-medium leading-7 text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-6">
                {shopifyHoursComparison.description}
              </p>
            </div>
          </div>

          <div
            className="bulk-shopify-fulltime-resources-box w-[700px] max-w-full shrink-0 max-[1199px]:w-full"
            data-aos="fade-up"
          >
            <div className="offer-both-fits-text relative z-1 mx-auto w-full max-w-[566px] rounded-t-[25px] bg-[#1a1e1a] px-10 py-[3px] text-center text-white before:absolute before:bottom-[-1px] before:left-0 before:-z-1 before:h-full before:w-5 before:-skew-x-[27deg] before:[border-top-left-radius:365px] before:bg-[#1a1e1a] after:absolute after:right-0 after:bottom-[-1px] after:-z-1 after:h-full after:w-5 after:skew-x-[26deg] after:[border-top-right-radius:365px] after:bg-[#1a1e1a] max-[767px]:max-w-[457px] max-[599px]:max-w-[390px] max-[475px]:max-w-[280px] max-[374px]:max-w-[240px]">
              <span className="bg-italic inline-block font-sans text-base font-semibold leading-[30.4px] text-white italic max-[767px]:text-sm max-[599px]:text-[11px] max-[599px]:leading-[normal] max-[475px]:relative max-[475px]:top-1 max-[374px]:text-[9px]">
                {shopifyHoursComparison.ribbon}
              </span>
            </div>
            <div className="bulk-shopify-fulltime-resources-table flex items-stretch rounded-[20px] border-2 border-[#171E16] bg-white p-[20px_32px_20px_20px] min-[768px]:max-[991px]:p-[20px_10px] max-[767px]:flex-wrap max-[767px]:p-[30px_15px]">
              {shopifyHoursComparison.items.map((item, index) => (
                <article
                  className={`bulk-shopify-fulltime-resources-list relative flex flex-col ${
                    index === 0
                      ? "bg-light-yellow w-[57%] rounded-[20px] bg-[#F7F4E9] p-[44px_38px_44px_24px] min-[768px]:max-[991px]:w-1/2 max-[767px]:w-full max-[767px]:p-[25px_15px]"
                      : "ml-[35px] w-[53%] p-[44px_0_0_0] min-[768px]:max-[991px]:w-1/2 min-[768px]:max-[991px]:ml-[35px] max-[767px]:ml-0 max-[767px]:w-full max-[767px]:p-[44px_15px_0_15px]"
                  }`}
                  key={item.title}
                >
                  <h4 className="mb-3 font-montreal-medium text-[18px] font-normal leading-[25.92px] text-ink">
                    {item.title}
                  </h4>
                  <ul className="pb-[35px] max-[1199px]:pb-[25px]">
                    {item.points.map((point) => (
                      <li
                        className="relative mb-4 border-b border-black/10 pb-4 pl-[25px] font-sans text-sm font-medium leading-[normal] text-[#535353] last:mb-0 last:border-b-0 last:pb-0"
                        key={point}
                      >
                        <Image
                          alt=""
                          aria-hidden="true"
                          className="absolute top-[2px] left-0 size-[17px]"
                          height={17}
                          src="/assets/buy-shopify-development-hours/icons/comparison-check.svg"
                          width={17}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`block w-full font-sans text-sm font-semibold leading-6 text-[#282828] ${
                      index === 0
                        ? "bg-white rounded-[10px] p-[10px_12px]"
                        : "rounded-[10px] bg-[rgba(173,81,81,0.10)] p-[11px_10px]"
                    }`}
                  >
                    {item.note}
                  </span>
                  <div className="get-started-btn absolute -bottom-[50px] left-1/2 -translate-x-1/2 w-[318px] text-center max-[767px]:static max-[767px]:mt-5 max-[767px]:translate-x-0 max-[767px]:w-full">
                    <ButtonLink
                      className="bg-[#FAFAF7] min-w-[318px] max-[991px]:!px-6 max-[991px]:!py-3 max-[991px]:!min-h-[42px] max-[991px]:!h-[42px] max-[767px]:min-w-full max-[767px]:w-full"
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
      className="can-you-use-shopify-hours py-20 max-[991px]:py-[50px]"
    >
      <Container>
        <div className="can-you-use-shopify-hours-row">
          <SplitSectionHeading
            className="mb-[50px]"
            description={shopifyHoursTasks.description}
            eyebrow={shopifyHoursTasks.eyebrow}
            heading={shopifyHoursTasks.heading}
            headingId="shopify-hours-tasks-title"
            variant="left"
          />
          <div data-aos="fade-up" className="can-you-use-shopify-hours-list">
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
        </div>
      </Container>
    </section>
  );
}
