"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { sharedUiCopy } from "@/content/common";
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
    <section className={cn("bg-[#192019] py-20 max-[991px]:py-[50px]", className)}>
      <Container>
        <SplitSectionHeading
          dark
          description={description}
          eyebrow={eyebrow}
          heading={title || ""}
          textColumnClassName="max-w-[560px]"
          titleColumnClassName="max-w-[620px]"
          variant={eyebrow ? "left" : "centered"}
        />

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

export {
  WhiteLabelPartnerSection,
  type WhiteLabelPartnerContent,
  type WhiteLabelPartnerSectionProps,
} from "@/components/sections/home/white-label-partner-section";

export {
  WhiteLabelSolutionsBlock as WhiteLabelServicesSection,
  WhiteLabelSolutionsBlock as HowAgenciesUseSection,
  WhiteLabelSolutionsBlock as ShopifySupportScenariosSection,
  WhiteLabelSolutionsBlock as ShopifyTeamBehindItSection,
};
