"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { homeSectionCopy } from "@/content/home-client";
import {
  whiteLabelShopifySectionCopy,
  whiteLabelShopifyServices,
} from "@/content/white-label-shopify-development";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import type { WhiteLabelService } from "@/types/white-label-service";

export type WhiteLabelSolutionsBlockProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  services?: readonly WhiteLabelService[];
  idPrefix?: string;
  ctaLabel?: string;
  showCta?: boolean;
  className?: string;
  content?: any;
  items?: any;
  cards?: any;
  variant?: string;
  hideCtas?: boolean;
};

export type WhiteLabelServicesSectionProps = WhiteLabelSolutionsBlockProps;

function WhiteLabelServiceAccordion({
  idPrefix,
  services,
  flushEnd = false,
}: {
  idPrefix: string;
  services: readonly WhiteLabelService[];
  flushEnd?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const mid = Math.ceil(services.length / 2);
  const columns = [services.slice(0, mid), services.slice(mid)];

  return (
    <div
      data-aos="fade-up"
      className={cn(
        "mb-[43px] flex gap-[60px] max-[1199px]:mb-[30px] max-[1199px]:gap-[50px] max-[992px]:mb-[25px] max-[992px]:flex-col max-[992px]:gap-0 max-[767px]:mb-5",
        flushEnd && "mb-0 max-[1199px]:mb-0 max-[992px]:mb-0 max-[767px]:mb-0",
      )}
    >
      {columns.map((column, columnIndex) => (
        <div className="flex flex-1 flex-col" key={`service-column-${columnIndex}`}>
          {column.map((service, itemIndex) => {
            const index = columnIndex * mid + itemIndex;
            const isOpen = openIndex === index;
            const triggerId = `${idPrefix}-trigger-${index}`;
            const panelId = `${idPrefix}-panel-${index}`;
            const isLastInColumn = itemIndex === column.length - 1;

            return (
              <article
                className={cn(
                  "border-b border-white/10",
                  isLastInColumn && "min-[992px]:border-b-0",
                  columnIndex === 1 && isLastInColumn && "max-[992px]:border-b-0",
                )}
                key={service.title}
              >
                <button
                  className={cn(
                    "flex w-full cursor-pointer items-center border-0 bg-transparent py-5 text-left select-none max-[1199px]:py-[18px] max-[992px]:py-[15px]",
                    itemIndex === 0 && "!pt-0",
                    columnIndex === 1 && itemIndex === 0 && "max-[992px]:!pt-[15px]",
                  )}
                  id={triggerId}
                  type="button"
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <Image
                    src={service.icon}
                    alt={service.iconAlt || `${service.title} icon`}
                    width={40}
                    height={40}
                    className="mr-5 size-10 shrink-0 object-contain max-[767px]:mr-3.5 max-[767px]:size-8"
                  />
                  <span className="flex-1 font-display text-lg font-medium text-white max-[767px]:text-base">
                    {service.title}
                  </span>
                  <span
                    className={cn(
                      "ml-4 text-xl text-white/50 transition-transform duration-300",
                      isOpen && "rotate-45 text-brand-red",
                    )}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div id={panelId} className="pb-5 pl-[60px] max-[767px]:pl-0">
                    <p className="font-sans text-sm font-normal leading-relaxed text-white/70">
                      {service.description}
                    </p>
                    {service.ctaHref && service.ctaLabel && (
                      <Link
                        href={service.ctaHref}
                        className="mt-3 inline-block text-xs font-semibold text-brand-red hover:underline"
                      >
                        {service.ctaLabel} →
                      </Link>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function WhiteLabelSolutionsBlock(props: WhiteLabelSolutionsBlockProps = {}) {
  const eyebrow = props.eyebrow ?? props.content?.eyebrow;
  const title = props.title ?? props.content?.heading ?? props.content?.title ?? whiteLabelShopifySectionCopy.servicesTitle;
  const description = props.description ?? props.content?.description;
  const services = props.services ?? props.content?.items ?? props.content?.cards ?? props.content?.services ?? whiteLabelShopifyServices;
  const idPrefix = props.idPrefix ?? "white-label-shopify-service";
  const ctaLabel = props.ctaLabel ?? props.content?.ctaLabel ?? sharedUiCopy.whiteLabelServicesCta;
  const showCta = props.showCta ?? !props.hideCtas;
  const className = props.className;
  return (
    <section className={cn("bg-[#192019] py-20 max-[992px]:py-[50px]", className)}>
      <Container className="max-[575px]:px-4">
        {eyebrow ? (
          <div
            data-aos="fade-up"
            className="section_title_with_eyebrow mb-12 flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col max-[991px]:gap-4"
          >
            <div className="title max-w-[620px]">
              <div className="eyebrow mb-3">
                <span className="font-montserrat text-sm font-semibold uppercase text-white">
                  {eyebrow}
                </span>
              </div>
              <h2 className="font-montreal-medium text-[35px] font-normal leading-[48px] tracking-normal text-white max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
                {title}
              </h2>
            </div>
            {description ? (
              <div className="section_text max-w-[560px]">
                <p className="text-base font-medium leading-[27px] text-white/80 max-[767px]:text-sm max-[767px]:leading-6">
                  {description}
                </p>
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <h2
              data-aos="fade-up"
              className={
                description
                  ? "mb-5 text-center font-display text-[35px] font-medium leading-[48px] text-white max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]"
                  : "mb-16 text-center font-display text-[35px] font-medium leading-[48px] text-white max-[1199px]:mb-[50px] max-[992px]:mb-10 max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:mb-[30px] max-[767px]:text-2xl max-[767px]:leading-[33px]"
              }
            >
              {title}
            </h2>
            {description ? (
              <p
                data-aos="fade-up"
                className="mx-auto mb-16 max-w-[605px] text-center font-sans text-base font-medium leading-[30px] text-white/80 max-[1199px]:mb-[50px] max-[992px]:mb-10 max-[992px]:text-[15px] max-[992px]:leading-[26px] max-[767px]:mb-[30px]"
              >
                {description}
              </p>
            ) : null}
          </>
        )}

        <WhiteLabelServiceAccordion flushEnd={!showCta} idPrefix={idPrefix} services={services} />

        {showCta ? (
          <div data-aos="fade-up" className="text-center max-[992px]:pb-[10px]">
            <ButtonLink href={siteConfig.quotePath} variant="light">
              {ctaLabel}
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export type WhiteLabelPartnerContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  bullets?: readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type WhiteLabelPartnerSectionProps = {
  content?: WhiteLabelPartnerContent;
};

export function WhiteLabelPartnerSection({ content }: WhiteLabelPartnerSectionProps = {}) {
  const eyebrow = content?.eyebrow ?? homeSectionCopy.whiteLabelPartnerEyebrow;
  const title = content?.title ?? homeSectionCopy.whiteLabelPartnerTitle;
  const description = content?.description ?? homeSectionCopy.whiteLabelPartnerDescription;
  const bullets = content?.bullets && content.bullets.length > 0 ? content.bullets : homeSectionCopy.whiteLabelPartnerBullets;
  const ctaLabel = content?.ctaLabel ?? homeSectionCopy.agencyPartnershipCta;
  const ctaHref = content?.ctaHref || homeSectionCopy.agencyPartnershipCtaHref;

  return (
    <section className="wlp-banner pt-12.5 pb-0 lg:pt-20" aria-labelledby="white-label-partner-title">
      <Container>
        <div
          data-aos="fade-up"
          className="flex items-center justify-between gap-8 rounded-[30px] border-[1.5px] border-[#1920191a] bg-[#eff4ef] p-[40px_32px_32px] max-[1199px]:rounded-[20px] max-[1199px]:p-[30px] max-[992px]:flex-col max-[992px]:items-start max-[767px]:p-5"
        >
          <div className="max-w-[868px]">
            <span className="eyebrow mb-2 inline-block rounded-[50px] bg-ink px-2.5 py-[6.5px] text-center font-montserrat text-xs leading-none font-bold text-white uppercase">{eyebrow}</span>
            <h2 id="white-label-partner-title" className="mb-2.5 font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">{title}</h2>
            <p className="mb-3.75 font-sans text-base leading-7 font-medium text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {bullets.map((tag) => (
                <span className="rounded-[30px] border border-dark-green/10 bg-white px-3 py-[5.5px] text-center font-montserrat text-xs leading-none font-bold text-muted uppercase" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <ButtonLink className="btn-explore" href={ctaHref} variant="primary">
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export {
  WhiteLabelSolutionsBlock as WhiteLabelServicesSection,
  WhiteLabelSolutionsBlock as HowAgenciesUseSection,
  WhiteLabelSolutionsBlock as ShopifySupportScenariosSection,
  WhiteLabelSolutionsBlock as ShopifyTeamBehindItSection,
};
