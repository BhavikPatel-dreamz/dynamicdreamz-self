import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  shopifyHoursAudiences,
  shopifyHoursCommitments,
  shopifyHoursComparison,
  shopifyHoursTasks,
} from "@/content/buy-shopify-development-hours";

const sectionHeadingClass =
  "font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]";

export function ShopifyHoursCommitmentSection() {
  return (
    <section
      aria-labelledby="shopify-hours-commitment-title"
      className="pb-20 max-[1199px]:pb-[60px]"
    >
      <Container>
        <h2
          className={`${sectionHeadingClass} mb-[60px] text-center max-[1199px]:mb-[30px]`}
          id="shopify-hours-commitment-title"
        >
          {shopifyHoursCommitments.heading}
        </h2>
        <div className="grid grid-cols-3 max-[767px]:grid-cols-1">
          {shopifyHoursCommitments.items.map((item, index) => (
            <article
              className={`min-h-[193px] border-r border-b border-[#ededed] p-[42px_45px_49px_28px] max-[991px]:min-h-0 max-[991px]:p-[30px_25px] max-[767px]:border-r-0 max-[767px]:p-5 max-[767px]:px-0 ${
                index === 2 ? "border-r-0" : ""
              } ${index > 2 ? "border-b-0 max-[767px]:border-b" : ""}`}
              key={item.title}
            >
              <h3 className="mb-[15px] font-sans text-base leading-6 font-bold">
                {item.title}
              </h3>
              <p className="text-base leading-[30.4px] font-medium text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ShopifyHoursAudienceSection() {
  return (
    <section
      aria-labelledby="shopify-hours-audience-title"
      className="bg-dark-green py-[100px] text-white max-[1199px]:py-20 max-[991px]:py-[60px] max-[767px]:py-[50px]"
    >
      <Container>
        <div className="grid grid-cols-[26%_1fr] items-center gap-[30px] max-[1199px]:grid-cols-[32%_1fr] max-[1199px]:gap-[50px] max-[991px]:grid-cols-1 max-[991px]:gap-[50px] max-[767px]:gap-[42px]">
          <h2
            className="font-sans text-[35px] leading-[48px] font-bold tracking-[-0.7px] max-[991px]:text-center max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
            id="shopify-hours-audience-title"
          >
            {shopifyHoursAudiences.heading.map((line, index) => (
              <span key={line}>
                {index > 0 ? <br className="max-[991px]:hidden" /> : null}
                {index > 0 ? " " : null}
                {line}
              </span>
            ))}
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-[767px]:grid-cols-1 max-[767px]:gap-10">
            {shopifyHoursAudiences.items.map((item) => (
              <article className="relative pl-5" key={item.title}>
                <span
                  aria-hidden="true"
                  className="absolute top-[5px] left-0 size-3 rounded-full bg-[#36f4a4]"
                />
                <h3 className="mb-[26px] font-sans text-base leading-6 font-bold max-[767px]:mb-[7px]">
                  {item.title}
                </h3>
                <p className="text-base leading-[30.4px] font-medium text-white">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ShopifyHoursComparisonSection() {
  return (
    <section
      aria-labelledby="shopify-hours-comparison-title"
      className="bg-[#fafaf7] py-[75px] max-[991px]:py-[60px] max-[767px]:py-[50px]"
    >
      <Container>
        <div className="grid grid-cols-[1fr_800px] items-center gap-0 max-[1199px]:grid-cols-1 max-[1199px]:gap-0">
          <header className="pr-[68px] max-[1199px]:pb-[50px] max-[1199px]:pr-0 max-[1199px]:text-center">
            <h2 className={sectionHeadingClass} id="shopify-hours-comparison-title">
              {shopifyHoursComparison.heading}
            </h2>
            <p className="mt-[15px] text-base leading-[30px] font-medium text-muted">
              {shopifyHoursComparison.eyebrow}
            </p>
          </header>

          <div>
            <p className="relative z-1 mx-auto w-full max-w-[566px] rounded-t-[25px] bg-[#1a1e1a] px-10 py-[3px] text-center text-base leading-[30.4px] font-semibold text-white italic before:absolute before:bottom-[-1px] before:left-0 before:-z-1 before:h-full before:w-5 before:-skew-x-[27deg] before:rounded-tl-full before:bg-[#1a1e1a] after:absolute after:right-0 after:bottom-[-1px] after:-z-1 after:h-full after:w-5 after:skew-x-[26deg] after:rounded-tr-full after:bg-[#1a1e1a] max-[767px]:max-w-[457px] max-[767px]:text-sm max-[599px]:max-w-[390px] max-[599px]:text-[11px] max-[599px]:leading-[17.7px] max-[475px]:max-w-[280px] max-[374px]:max-w-[240px] max-[374px]:text-[9px]">
              {shopifyHoursComparison.ribbon}
            </p>
            <div className="flex items-stretch rounded-[20px] border-2 border-ink bg-white p-[20px_32px_20px_20px] max-[991px]:p-[20px_10px] max-[767px]:flex-wrap max-[767px]:pt-[30px] max-[767px]:pr-[15px] max-[767px]:pb-[39px] max-[767px]:pl-[15px]">
              {shopifyHoursComparison.items.map((item, index) => (
                <article
                  className={`relative flex flex-col max-[767px]:min-h-0 max-[767px]:w-full ${
                    index === 0
                      ? "w-[57%] rounded-[20px] bg-[#f7f4e9] pt-11 pr-[38px] pb-11 pl-6 max-[991px]:w-1/2 max-[767px]:min-h-[501px] max-[767px]:w-full max-[767px]:p-[25px_15px]"
                      : "ml-[35px] w-[53%] bg-white pt-11 max-[991px]:w-1/2 max-[767px]:ml-0 max-[767px]:w-full max-[767px]:px-[15px] max-[767px]:pt-11"
                  }`}
                  key={item.title}
                >
                  <h3 className="mb-6 font-sans text-lg leading-[25.2px] font-bold">
                    {item.title}
                  </h3>
                  <ul className="pb-[35px] max-[991px]:pb-[25px]">
                    {item.points.map((point) => (
                      <li
                        className="relative mb-4 border-b border-[#e5e5e5] pr-1 pb-4 pl-[30px] text-base leading-[30.4px] font-medium text-muted last:mb-0 last:border-b-0 last:pb-0 max-[767px]:pr-0"
                        key={point}
                      >
                        <Image
                          alt=""
                          aria-hidden="true"
                          className="absolute top-[5px] left-0 size-[19px]"
                          height={22}
                          src="/assets/buy-shopify-development-hours/icons/comparison-check.svg"
                          width={22}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className={`rounded-[10px] text-base leading-[30.4px] font-semibold text-ink ${index === 0 ? "bg-white p-[10px_12px]" : "bg-brand-red/10 p-[11px_10px]"}`}>
                    {item.note}
                  </p>
                  <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 max-[767px]:static max-[767px]:mt-5 max-[767px]:translate-x-0">
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
      className="py-20 max-[1199px]:py-[60px] max-[767px]:py-[50px]"
    >
      <Container>
        <header className="pb-[50px] text-center">
          <h2 className={sectionHeadingClass} id="shopify-hours-tasks-title">
            {shopifyHoursTasks.heading}
          </h2>
          <p className="mt-6 text-lg leading-[34.2px] font-medium text-muted max-[767px]:text-base max-[767px]:leading-[30.4px]">
            {shopifyHoursTasks.description}
          </p>
        </header>
        <ul className="flex flex-wrap justify-center gap-x-[11px] gap-y-6">
          {shopifyHoursTasks.items.map((item) => (
            <li
              className="flex items-center rounded-full border border-black/20 bg-[#fafaf7] py-[17px] pr-[13px] pl-[37px] text-[15px] leading-[19.48px] font-semibold max-[767px]:w-full"
              key={item}
            >
              <Image
                alt=""
                aria-hidden="true"
                className="-ml-[22px] mr-2 h-[9px] w-[14px] shrink-0"
                height={9}
                src="/assets/buy-shopify-development-hours/icons/task-check.svg"
                width={14}
              />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
