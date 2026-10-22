"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { FaqCircleCrossIcon } from "@/components/ui/AccordionClient";
import { sharedUiCopy } from "@/content/common";
import { commerceSolutions, homeSectionCopy } from "@/content/home-client";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type FeatureGridItem = {
  title?: string | readonly string[];
  name?: string | readonly string[];
  description?: string | readonly string[];
  icon?: string;
  alt?: string;
  iconAlt?: string;
  iconSvg?: React.ReactNode;
  linkText?: string;
  linkUrl?: string;
  href?: string;
  link?: string;
  ctaText?: string;
  bullets?: readonly string[];
  [key: string]: any;
};

export type AgencyServiceItem = FeatureGridItem;

export type AgencyServicesContent = {
  eyebrow?: string;
  heading?: string | readonly string[];
  title?: string | readonly string[];
  subtitle?: string | readonly string[];
  description?: string | readonly string[];
  items?: readonly any[];
  boxes?: readonly any[];
  paragraphs?: readonly any[];
  moments?: readonly any[];
  centerImage?: any;
  cta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  [key: string]: any;
};

export type ServiceOfferingsGridBlockProps = {
  heading?: string | readonly string[];
  title?: string | readonly string[];
  eyebrow?: string;
  description?: string | readonly string[];
  features?: readonly any[];
  items?: readonly any[];
  content?: AgencyServicesContent | any;
  columns?: 2 | 3 | 4;
  className?: string;
  id?: string;
  titleAlign?: "center" | "left";
  cardVariant?: "default" | "services-box" | "webflow" | string;
  showDescription?: boolean;
  hideCta?: boolean;
  preserveBreaks?: boolean;
  headerLayout?: "split" | "centered";
  [key: string]: any;
};

export type FeaturesGridSectionProps = ServiceOfferingsGridBlockProps;
export type AgencyServicesSectionProps = ServiceOfferingsGridBlockProps;

export function ServiceOfferingsGridBlock({
  heading,
  eyebrow,
  description,
  features,
  items,
  content,
  columns = 3,
  className,
  id = "services",
  titleAlign = "center",
  cardVariant = "default",
  showDescription = true,
  hideCta = false,
  preserveBreaks = false,
}: ServiceOfferingsGridBlockProps) {
  // Normalize props
  const resolvedHeading = heading ?? content?.heading ?? "";
  const resolvedEyebrow = eyebrow ?? content?.eyebrow;
  const resolvedDescription = description ?? content?.description;
  const resolvedItems = features ?? items ?? content?.items ?? content?.boxes ?? [];
  const cta = content?.cta;

  // If agency-services style (cardVariant === "services-box" or has content prop without features)
  if (content || cardVariant === "services-box") {
    const colGridClass =
      columns === 4
        ? "grid-cols-4 max-[1199px]:grid-cols-2"
        : columns === 3
        ? "grid-cols-3 max-[1199px]:grid-cols-2"
        : "grid-cols-2";

    return (
      <section
        className={cn(
          "what-we-provide-sec py-20 max-[992px]:py-[50px]",
          cardVariant === "services-box" && "pb-0 max-[992px]:pb-0",
          className,
        )}
        data-section="services"
        id={id}
      >
        <Container>
          <div
            data-aos="fade-up"
            className="mb-0 flex flex-wrap items-start justify-between gap-10 max-[992px]:gap-2.5"
          >
            <div className="title max-w-[580px]">
              {resolvedEyebrow && (
                <div className="eyebrow mb-3">
                  <span className="font-montserrat text-sm font-semibold uppercase text-[#535353]">
                    {resolvedEyebrow}
                  </span>
                </div>
              )}
              <h2 className="font-montreal-medium text-[35px] font-normal leading-[1.3] text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
                {formatBrText(resolvedHeading, preserveBreaks ? undefined : "max-[1199px]:hidden")}
              </h2>
            </div>
            {showDescription && resolvedDescription && (
              <div className="description max-w-[520px]">
                <p className="font-sans text-base font-medium leading-[27px] text-[#535353] max-[767px]:text-sm">
                  {formatBrText(resolvedDescription, preserveBreaks ? undefined : "max-[1199px]:hidden")}
                </p>
              </div>
            )}
          </div>

          <div className="services-provide-main mt-[50px] max-[991px]:mt-[30px]">
            <div className={cn("wrapper grid gap-4 max-[991px]:block", colGridClass)}>
              {resolvedItems.map((service: any, idx: number) => {
                const serviceHref = service.href ?? service.link ?? service.linkUrl;

                return (
                  <div
                    key={`${service.title}-${idx}`}
                    className="services-box w-full max-[991px]:[&:not(:last-child)]:mb-4"
                  >
                    <div className="flex h-full flex-col justify-between rounded-[10px] border border-[#efefef] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div>
                        {service.icon ? (
                          <div className="mb-4 size-10">
                            <Image
                              src={service.icon}
                              alt={service.iconAlt ?? ""}
                              width={40}
                              height={40}
                              className="size-full object-contain"
                            />
                          </div>
                        ) : service.iconSvg ? (
                          <div className="mb-4 size-10">{service.iconSvg}</div>
                        ) : null}
                        <h3 className="mb-2 font-montreal-medium text-lg font-normal text-ink">
                          {formatBrText(service.title)}
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-muted">
                          {formatBrText(service.description)}
                        </p>
                        {service.bullets && service.bullets.length > 0 && (
                          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-muted">
                            {service.bullets.map((b: any, bIdx: number) => (
                              <li key={bIdx}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {serviceHref && (
                        <div className="mt-4 pt-2">
                          <Link
                            href={serviceHref}
                            className="inline-flex items-center text-sm font-semibold text-brand-red hover:underline"
                          >
                            {service.linkText ?? sharedUiCopy.learnMore} →
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {!hideCta && cta && (
            <div className="mt-10 text-center">
              <Button href={cta.href} variant="primary">
                {cta.label}
              </Button>
            </div>
          )}
        </Container>
      </section>
    );
  }

  // Standard FeaturesGridSection layout
  const colClass =
    columns === 4
      ? "w-1/4 max-[1199px]:w-1/2 max-[767px]:w-full"
      : columns === 2
      ? "w-1/2 max-[767px]:w-full"
      : "w-1/3 max-[992px]:w-1/2 max-[767px]:w-full";

  return (
    <section
      className={cn("features-grid-sec py-20 max-[992px]:py-[50px]", className)}
      data-section="features"
      id={id}
    >
      <Container>
        <div
          data-aos="fade-up"
          className={cn(
            "title mb-12 max-[767px]:mb-6",
            titleAlign === "center" ? "mx-auto max-w-[850px] text-center" : "text-left",
          )}
        >
          {resolvedEyebrow ? (
            <div className="mb-2.5">
              <span className="font-montserrat text-sm font-semibold uppercase text-[#535353]">
                {resolvedEyebrow}
              </span>
            </div>
          ) : null}
          <h2 className="font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {formatBrText(resolvedHeading, "max-[1199px]:hidden")}
          </h2>
          {resolvedDescription ? (
            <p className="mt-2.5 font-sans text-base font-medium leading-[27px] text-[#535353] max-[767px]:text-sm">
              {formatBrText(resolvedDescription, "max-[1199px]:hidden")}
            </p>
          ) : null}
        </div>

        <div data-aos="fade-up" className="-mx-3 flex flex-wrap justify-center">
          {resolvedItems.map((item: any, idx: number) => (
            <div data-aos="fade-up" className={cn("mb-6 px-3", colClass)} key={`${item.title}-${idx}`}>
              <article className="group relative z-0 flex h-full flex-col justify-between rounded-[10px] border border-[#efefef] bg-white p-[30px_26px] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <div>
                  {item.icon ? (
                    <div className="icon relative z-10 mb-4 h-[50px] w-[50px]">
                      <Image
                        alt={item.iconAlt || (typeof item.title === "string" ? item.title : item.title.join(" "))}
                        className="size-full object-contain"
                        height={50}
                        src={item.icon}
                        width={50}
                      />
                    </div>
                  ) : item.iconSvg ? (
                    <div className="icon relative z-10 mb-4 h-[50px] w-[50px]">{item.iconSvg}</div>
                  ) : null}
                  <h3 className="relative z-10 mt-2 mb-2.5 font-montreal-medium text-[20px] font-normal leading-[28px] text-ink max-[767px]:text-lg">
                    {formatBrText(item.title, "max-[767px]:hidden")}
                  </h3>
                  <p className="relative z-10 font-sans text-base font-medium leading-[27px] tracking-[0.32px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
                    {formatBrText(item.description, "max-[767px]:hidden")}
                  </p>
                </div>

                {item.linkUrl || item.href || item.link ? (
                  <div className="relative z-10 mt-4 pt-2">
                    <Link
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-red transition-colors hover:text-brand-red/80"
                      href={(item.linkUrl || item.href || item.link)!}
                    >
                      {item.linkText ?? sharedUiCopy.learnMore} →
                    </Link>
                  </div>
                ) : null}
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export type CommerceSolutionItem = {
  title: string;
  summary: string;
  body: string;
  href: string;
  cta: string;
};

export type CommerceSolutionsSectionProps = {
  title?: string;
  description?: string;
  solutions?: readonly CommerceSolutionItem[];
};

export function CommerceSolutionsSection({
  title = homeSectionCopy.commerceSolutionsTitle,
  description = homeSectionCopy.commerceSolutionsDescription,
  solutions = commerceSolutions,
}: CommerceSolutionsSectionProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = solutions && solutions.length > 0 ? solutions : commerceSolutions;
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <section className="py-[60px] max-[992px]:py-[50px] max-[767px]:py-10" aria-labelledby="commerce-solutions-title">
      <Container>
        <div
          data-aos="fade-up"
          className="mb-[54px] flex items-center justify-between gap-10 max-[992px]:mb-8 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-0"
        >
          <h2 id="commerce-solutions-title" className="w-[40%] font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[1199px]:text-[30px] max-[992px]:w-full max-[992px]:text-[28px] max-[767px]:text-[24px]">
            {title}
          </h2>
          <p className="w-[47%] font-sans text-base leading-[1.9] font-medium text-muted max-[992px]:mt-2.5 max-[992px]:w-full max-[767px]:text-sm">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 items-start gap-3 max-[992px]:grid-cols-1" data-commerce-accordion>
          {columns.map((column, columnIndex) => (
            <div data-aos="fade-up" className="grid gap-3" key={columnIndex}>
              {column.map((item, itemIndex) => {
                const index = columnIndex * half + itemIndex;
                const isOpen = activeIndex === index;
                const panelId = `commerce-solution-panel-${index}`;
                const triggerId = `commerce-solution-trigger-${index}`;

                return (
                  <article
                    className={cn(
                      "relative rounded-[15px] border border-[#6e7590]/10 p-5 shadow-[2px_2px_4px_rgb(83_83_83/5%)] max-[767px]:p-[15px]",
                      isOpen ? "bg-[#eff4ef]" : "bg-white",
                    )}
                    key={item.title}
                  >
                    <h3 className="m-0">
                      <button
                        id={triggerId}
                        type="button"
                        className="relative flex w-full cursor-pointer items-start justify-between gap-5 border-0 bg-transparent p-0 pr-10 text-left font-montreal-medium text-xl leading-7 font-normal text-ink max-[767px]:flex-col max-[767px]:gap-1 max-[767px]:text-base max-[767px]:leading-6"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setActiveIndex(isOpen ? -1 : index)}
                      >
                        <span className="block">
                          <span className="block">{item.title}</span>
                          <span className="mt-2.5 block font-montserrat text-sm leading-none font-medium text-ink max-[767px]:mt-[5px] max-[767px]:text-[13px] max-[767px]:leading-normal">
                            {item.summary}
                          </span>
                        </span>
                        <FaqCircleCrossIcon
                          className="accordion-close-icon absolute top-1/2 right-0 size-[30px] -translate-y-1/2 shrink-0 max-[992px]:size-[26px]"
                          isOpen={isOpen}
                        />
                        <span className="sr-only">{isOpen ? homeSectionCopy.commerceAccordion.close : homeSectionCopy.commerceAccordion.open} {item.title}</span>
                      </button>
                    </h3>
                    <div id={panelId} role="region" aria-labelledby={triggerId} aria-hidden={!isOpen} inert={!isOpen} className={cn("grid grid-rows-[0fr] transition-[grid-template-rows,margin-top] duration-300", isOpen && "mt-4 max-[767px]:mt-2.5 grid-rows-[1fr]")}>
                      <div className="overflow-hidden">
                        <div className="border-t border-[#6e7590]/10 pt-4 max-[767px]:pt-2.5">
                          <p className="mb-[15px] text-sm leading-6 font-normal text-muted">{item.body}</p>
                          <Link
                            className="btn-link-arrow inline-flex items-center gap-2.5 font-montserrat text-sm leading-none font-bold text-brand-red uppercase transition-colors hover:text-ink focus-visible:text-ink"
                            href={item.href}
                          >
                            <span>{item.cta}</span>
                            <svg
                              aria-hidden="true"
                              className="size-2.5 shrink-0"
                              fill="none"
                              height="10"
                              viewBox="0 0 10 10"
                              width="10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.00008 9.00008L9.00008 1.00008M9.00008 1.00008H2.60008M9.00008 1.00008V7.40008"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { ShopifyStageServicesBlock, ShopifyStageServicesSection } from "./ShopifyStageServicesBlock";
import {
  ThemeCustomizationServicesBlock,
  ThemeCustomizationServicesSection,
} from "./ThemeCustomizationServicesBlock";

export {
  ServiceOfferingsGridBlock as FeaturesGridSection,
  ServiceOfferingsGridBlock as AgencyServicesSection,
  ShopifyStageServicesSection,
  ShopifyStageServicesBlock,
  ThemeCustomizationServicesSection,
  ThemeCustomizationServicesBlock,
  ServiceOfferingsGridBlock as AiServicesGridSection,
  ServiceOfferingsGridBlock as ShopifyThemesGridSection,
  ServiceOfferingsGridBlock as ShopifyCroBarriersSection,
  ServiceOfferingsGridBlock as ShopifyCroServicesSection,
  ServiceOfferingsGridBlock as ShopifyMobileAppDtcSection,
  ServiceOfferingsGridBlock as ShopifyMobileAppExperienceSection,
  ServiceOfferingsGridBlock as ShopifyAppFeaturesSection,
  ServiceOfferingsGridBlock as ShopifyHoursTasksSection,
  ServiceOfferingsGridBlock as ShopifyAppsGridSection,
};

