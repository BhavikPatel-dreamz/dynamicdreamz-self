import Image from "next/image";
import React from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/container";
import { shopifyPlusAgencyContent } from "@/content/home";
import { shopifyCroAssessment, shopifyCroWhyDynamicDreamz } from "@/content/shopify-cro-agency";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type EvaluationFrameworkItem = {
  title: string | readonly string[];
  description: string | readonly string[];
};

export type EvaluationFrameworkContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  items: readonly EvaluationFrameworkItem[];
};

export type WhyChooseUsBlockProps = {
  heading?: string | readonly string[];
  title?: string | readonly string[];
  description?: string | readonly string[];
  eyebrow?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imagePosition?: "left" | "right";
  bullets?: readonly string[];
  cta?: {
    label: string;
    href: string;
  };
  className?: string;
  id?: string;
  variant?: string;
  items?: readonly any[];
  content?: any;
};

export type TwoColImageWithTextSectionProps = WhyChooseUsBlockProps;
export type EvaluationFrameworkSectionProps = WhyChooseUsBlockProps;

export function WhyChooseUsBlock({
  heading,
  description,
  eyebrow,
  image,
  imagePosition = "left",
  bullets,
  cta,
  className,
  id = "why-choose-us",
  content,
}: WhyChooseUsBlockProps) {
  // If evaluation framework items are provided, render the numbered card grid
  if (content && content.items && content.items.length > 0) {
    return (
      <section
        className={cn("how-to-choose-spa-sec bg-white py-20 max-[992px]:py-[50px]", className)}
        data-section="evaluation-framework"
        id={id}
      >
        <Container>
          <div
            data-aos="fade-up"
            className="mb-[50px] flex flex-wrap items-start justify-between gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          >
            <div className="w-[44%] max-[992px]:w-full">
              {content.eyebrow && (
                <Eyebrow as="span" className="mb-4">
                  {content.eyebrow}
                </Eyebrow>
              )}
              <h2 className="font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">
                {formatBrText(content.heading)}
              </h2>
            </div>
            {content.description && (
              <div className="w-[48%] max-[992px]:w-full">
                <p className="font-sans text-base font-medium leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                  {formatBrText(content.description)}
                </p>
              </div>
            )}
          </div>

          <div
            className="spa-wrapper flex flex-wrap border-t border-l border-[#2828281c]"
            data-aos="fade-up"
          >
            {content.items.map((item: any, index: number) => (
              <div
                className="spa-col w-1/4 max-[991px]:w-1/2 max-[767px]:w-full"
                key={
                  typeof item.title === "string"
                    ? item.title
                    : Array.isArray(item.title)
                    ? item.title.join(" ")
                    : String(index)
                }
              >
                <article className="spa-item flex h-full flex-col border-r border-b border-[#2828281c] p-6 max-[1399px]:p-5">
                  <div className="spa-title">
                    <span
                      aria-hidden="true"
                      className="mb-5 flex size-[34px] items-center justify-center rounded-full bg-[#fbefd7] font-montserrat text-[10px] font-bold text-brand-red max-[991px]:mb-2.5"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.title ? (
                      <h3 className="m-0 mb-2.5 font-montreal-medium text-base font-normal leading-6 text-ink">
                        {formatBrText(item.title)}
                      </h3>
                    ) : null}
                  </div>
                  <div className="spa-text">
                    <p className="m-0 font-sans text-sm font-normal leading-[22px] text-muted">
                      {formatBrText(item.description)}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // Two-column image with text layout
  const resolvedHeading = heading ?? "";
  const resolvedDesc = description ?? "";

  return (
    <section
      className={cn("two-col-image-with-text-section py-20 max-[992px]:py-[50px]", className)}
      id={id}
    >
      <Container>
        <div data-aos="fade-up" className="wrapper flex flex-wrap items-center justify-between">
          {image ? (
            <div
              data-aos="fade-up"
              className={cn(
                "left-col w-[41.229%] max-[1199px]:w-[43%] max-[992px]:w-full",
                imagePosition === "right" && "order-2 max-[992px]:order-1",
              )}
            >
              <div className="image-block relative overflow-hidden rounded-[10px] pb-[106.386%] max-[992px]:mb-[30px] max-[992px]:pb-[70%]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 992px) 100vw, (max-width: 1200px) 43vw, 469px"
                  className="absolute top-0 left-0 h-full w-full rounded-[10px] object-cover"
                />
              </div>
            </div>
          ) : null}

          <div
            data-aos="fade-up"
            className={cn(
              image
                ? "right-col w-[53.685%] max-[1199px]:w-[53%] max-[992px]:w-full"
                : "w-full",
              imagePosition === "right" && "order-1 max-[992px]:order-2",
            )}
          >
            <div className="text-block">
              {eyebrow && (
                <Eyebrow as="span" className="mb-4">
                  {eyebrow}
                </Eyebrow>
              )}
              <h2 className="mb-4 font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">
                {formatBrText(resolvedHeading)}
              </h2>
              {Array.isArray(resolvedDesc) ? (
                resolvedDesc.map((p, idx) => (
                  <p
                    key={idx}
                    className="mb-4 font-sans text-base font-medium leading-[27px] text-[#535353] last:mb-0"
                  >
                    {formatBrText(p)}
                  </p>
                ))
              ) : (
                <p className="m-0 font-sans text-base font-medium leading-[27px] text-[#535353]">
                  {formatBrText(resolvedDesc)}
                </p>
              )}
              {bullets && bullets.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#535353]">
                      <svg
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-brand-red"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {cta && (
                <div className="mt-8">
                  <ButtonLink href={cta.href} variant="primary">
                    {cta.label}
                  </ButtonLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export const counterToneClasses = {
  green: "bg-[#eff4ef]",
  stone: "bg-[#f4f2ef]",
  peach: "bg-[#f6eee5]",
  lime: "bg-[#f0f6e5]",
} as const;

export type ShopifyPlusAgencyCounter = {
  value: string;
  label: string;
  note?: string;
  tone?: "green" | "stone" | "peach" | "lime";
};

export type ShopifyPlusAgencyContent = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  paragraphs?: readonly string[];
  counters?: readonly ShopifyPlusAgencyCounter[];
  videoSrc?: string;
};

export type ShopifyPlusAgencySectionProps = {
  content?: ShopifyPlusAgencyContent;
};

export function ShopifyPlusAgencySection({ content }: ShopifyPlusAgencySectionProps = {}) {
  const eyebrow = content?.eyebrow ?? shopifyPlusAgencyContent.eyebrow;
  const title = content?.title ?? shopifyPlusAgencyContent.title;
  const intro = content?.intro ?? shopifyPlusAgencyContent.intro;
  const paragraphs = content?.paragraphs && content.paragraphs.length > 0 ? content.paragraphs : shopifyPlusAgencyContent.paragraphs;
  const counters = content?.counters && content.counters.length > 0 ? content.counters : shopifyPlusAgencyContent.counters;
  const videoSrc = content?.videoSrc || shopifyPlusAgencyContent.videoSrc;

  return (
    <section className="bg-[#fbeed5] py-[43px] max-[992px]:py-[30px]" aria-labelledby="shopify-plus-agency-title">
      <Container>
        <div
          data-aos="fade-up"
          className="section_title_with_eyebrow mb-10 flex flex-wrap items-end justify-between gap-8 max-[1199px]:mb-5 max-[992px]:gap-0"
        >
          <div className="title w-[42%] max-[1199px]:w-full max-[1199px]:mb-2.5">
            <Eyebrow as="span" className="mb-4">
              {eyebrow}
            </Eyebrow>
            <h2 id="shopify-plus-agency-title" className="m-0 font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">
              {title}
            </h2>
          </div>
          <div className="w-[48%] max-[1199px]:w-full">
            <p className="font-sans text-base font-medium leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
              {intro}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-8 rounded-[30px] bg-[#fafaf7] p-8 max-[1199px]:rounded-[20px] max-[1199px]:p-6 max-[992px]:gap-0">
          <div data-aos="fade-up" className="w-[46.816%] max-[992px]:w-full">
            <div className="mb-5 max-w-[575px]">
              {paragraphs.map((paragraph, index) => (
                <p className={index === 0 ? "mb-3.75 text-sm leading-6 font-normal text-muted" : "text-sm leading-[1.8] font-normal text-muted"} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mx-[-4px] mb-[-8px] flex flex-wrap">
              {counters.map((counter) => {
                const tone = counter.tone && counter.tone in counterToneClasses ? counter.tone : "green";
                return (
                  <div className="mb-2 w-1/2 px-1 max-[767px]:w-full" key={counter.value}>
                    <div className={`flex h-full min-h-[136px] flex-col justify-between rounded-[20px] p-[18px] max-[767px]:rounded-xl ${counterToneClasses[tone]}`}>
                      <div>
                        <h3 className="font-montreal-medium m-0 block text-[35px] leading-[1.4] font-normal text-ink max-[767px]:text-[24px] max-[767px]:leading-[33.24px] max-[767px]:tracking-[-.48px]">
                          {counter.value}
                        </h3>
                        <span className="mt-[5px] mb-[25px] block font-montserrat text-xs leading-none font-semibold text-[#4d5577] uppercase max-[767px]:mb-5">{counter.label}</span>
                      </div>
                      {counter.note ? <p className="text-xs leading-none font-medium text-muted">{counter.note}</p> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="relative w-1/2 min-h-[380px] overflow-hidden rounded-[20px] max-[992px]:mt-5 max-[992px]:w-full max-[992px]:min-h-0 max-[992px]:aspect-[1.37] max-[767px]:rounded-xl"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/about/hero-video-poster.webp"
              src={videoSrc}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export type ShopifyCroAssessmentContent = {
  heading: string | readonly string[];
  description: string | readonly string[];
  points: readonly string[];
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export type ShopifyCroAssessmentSectionProps = {
  content?: ShopifyCroAssessmentContent;
  className?: string;
};

export function ShopifyCroAssessmentSection({
  content = shopifyCroAssessment,
  className = "shopify-cro-assessment rounded-t-[50px] bg-[#E6ECF0] py-[50px] max-[767px]:rounded-t-[30px] max-[767px]:py-10",
}: ShopifyCroAssessmentSectionProps = {}) {
  const points = content?.points || [];
  return (
    <section className={className}>
      <Container>
        <div data-aos="fade-up" className="content-box text-center">
          <h2 className="mb-2.5 font-display text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
            {formatBrText(content?.heading ?? "")}
          </h2>
          <p className="mb-6 font-sans text-base font-medium leading-7 text-muted">
            {formatBrText(content?.description ?? "")}
          </p>

          <ul className="-m-1.5 flex flex-wrap justify-center p-0 list-none">
            {points.map((point) => (
              <li
                key={point}
                className="m-1.5 rounded-[30px] border border-black/20 bg-white bg-[url('/assets/shopify-cro-agency/assessment/list-arrow.svg')] bg-[left_20px_center] bg-no-repeat px-5 py-[11px] pl-[45px] font-sans text-base font-medium text-ink shadow-none max-[767px]:text-sm"
              >
                {point}
              </li>
            ))}
          </ul>

          {content?.cta?.href && (
            <div className="mt-[30px]">
              <Button
                href={content.cta.href}
                variant="primary"
                className="px-8 text-sm uppercase max-[991px]:py-3"
              >
                {content.cta.label}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export type ShopifyCroWhyContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  paragraphs: readonly string[];
  points: readonly string[];
  tagline?: string;
};

export type ShopifyCroWhySectionProps = {
  content?: ShopifyCroWhyContent;
  className?: string;
};

export function ShopifyCroWhySection({
  content = shopifyCroWhyDynamicDreamz,
  className = "shopify-cro-dynamic-dreamz bg-white pt-0 pb-20 max-[991px]:pb-12",
}: ShopifyCroWhySectionProps = {}) {
  const paragraphs = content?.paragraphs || [];
  const points = content?.points || [];

  return (
    <section className={className}>
      <Container>
        <div
          data-aos="fade-up"
          className="cro-dynamic-dreamz-wrap overflow-hidden rounded-[30px] bg-[#F7F4E9]"
        >
          <div className="column-row flex flex-wrap items-end justify-between p-[43px_57px_0] max-[1199px]:p-[30px_30px_0] max-[991px]:p-[30px_20px_0]">
            <div className="column-left w-[51%] max-[991px]:w-full">
              <div data-aos="fade-up" className="content-box pb-[50px] max-[991px]:pb-2.5">
                <div className="section_title_with_eyebrow mb-[15px]">
                  <div className="title">
                    {content?.eyebrow && (
                      <div className="eyebrow mb-4">
                        <span className="font-montserrat text-sm font-semibold uppercase text-brand-red">
                          {content.eyebrow}
                        </span>
                      </div>
                    )}
                    <h2 className="m-0 font-display text-[35px] font-normal leading-[44px] tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
                      {formatBrText(content?.heading ?? "")}
                    </h2>
                  </div>
                </div>
                {paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="mb-6 font-sans text-base font-medium leading-[190%] text-muted last:mb-0 max-[767px]:text-sm"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="column-right w-[43.5%] max-[991px]:w-full">
              <div className="content-list rounded-t-[30px] border-[1.5px] border-[#AD5151]/40 bg-white p-[35px_26px] max-[767px]:p-5">
                <ul className="m-0 list-none p-0">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="mb-[17px] border-b border-black/10 bg-[url('/assets/shopify-cro-agency/assessment/list-arrow.svg')] bg-[length:16px] bg-[left_top_5px] bg-no-repeat pb-[17px] pl-[25px] font-sans text-base font-semibold leading-[128%] text-ink last:mb-0 last:border-b-0 last:pb-0 max-[767px]:text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {content?.tagline && (
            <div className="bottom-text bg-[#AD5151] p-3 text-center">
              <p className="m-0 font-sans text-base font-medium leading-none text-white max-[767px]:text-sm max-[767px]:leading-[22px]">
                {content.tagline}
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export {
  WhyChooseUsBlock as TwoColImageWithTextSection,
  WhyChooseUsBlock as EvaluationFrameworkSection,
  WhyChooseUsBlock as WhyChooseShopifyMigrationSection,
  WhyChooseUsBlock as DesignReasonsSection,
  WhyChooseUsBlock as ShopifyTeamBoxesSection,
};
