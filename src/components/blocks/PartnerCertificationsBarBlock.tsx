import Image from "next/image";
import React from "react";
import styles from "@/components/blocks/TechStackShowcaseBlock.module.css";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { homeSectionCopy, integrationLogoRows } from "@/content/home";
import { cn } from "@/lib/class-names";

export type ShopifyPlusProofContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  intro?: string;
  text?: string;
  stats: readonly string[];
};

export type PartnerCertificationsBarBlockProps = {
  title?: string;
  content?: ShopifyPlusProofContent;
  className?: string;
};

export type IntegrationsSectionProps = PartnerCertificationsBarBlockProps;
export type ShopifyPlusProofSectionProps = {
  content: ShopifyPlusProofContent;
};

export function PartnerCertificationsBarBlock({
  title,
  content,
  className,
}: PartnerCertificationsBarBlockProps) {
  // If proof content with stats is provided, render the ShopifyPlusProof layout
  if (content && content.stats) {
    return (
      <section
        className={cn(
          "why_shopify_plus_brands_choose_section bg-white py-20 max-[991px]:py-[50px]",
          className,
        )}
        data-section="why-shopify-plus"
        id="why-shopify-plus"
      >
        <Container>
          <SplitSectionHeading
            description={content.intro}
            eyebrow={content.eyebrow}
            heading={content.heading}
            variant="left"
          />

          <div data-aos="fade-up" className="wrapper flex flex-wrap justify-between">
            <div className="left-col w-1/2 max-[767px]:w-full">
              <div className="text-block h-full border-y border-[#2828281c] py-[30px] pr-[30px] max-[1399px]:py-5 max-[1399px]:pr-[30px] max-[1199px]:pr-5 max-[767px]:border-0 max-[767px]:p-0">
                <p className="m-0 font-sans text-sm font-normal leading-6 text-muted">
                  {content.text}
                </p>
              </div>
            </div>
            <div className="right-col w-1/2 max-[767px]:mt-5 max-[767px]:w-full">
              <div className="list-box flex h-full flex-wrap border-y border-l border-[#2828281c] py-[30px] pr-0 pl-10 max-[1399px]:py-5 max-[1399px]:pl-5 max-[1199px]:pl-2.5 max-[991px]:pl-5 max-[767px]:border-0 max-[767px]:p-0">
                {content.stats.map((stat, index) => (
                  <div
                    className="list-col mb-5 w-1/2 px-2.5 max-[1399px]:mb-[15px] max-[767px]:mb-[15px] max-[767px]:w-full max-[767px]:border-b max-[767px]:border-[#2828281c] max-[767px]:p-0 max-[767px]:pb-[15px] max-[767px]:last:mb-0 max-[767px]:last:border-b-0 max-[767px]:last:pb-0 [&:nth-last-child(-n+2)]:mb-0"
                    key={stat}
                  >
                    <div className="flex flex-col list-none">
                      <span
                        aria-hidden="true"
                        className="mb-[5px] block font-montserrat text-sm font-semibold leading-[22px] text-brand-red"
                      >
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <h3 className="m-0 font-montserrat text-base font-medium leading-6 text-ink max-[1399px]:text-sm max-[1399px]:leading-[22px] max-[767px]:max-w-[171px]">
                        {stat}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Otherwise render the integrations continuous moving logo strip
  const displayTitle = title ?? homeSectionCopy.integrationsTitle;

  return (
    <section className={cn("our_partners overflow-hidden bg-[#fafaf7] py-[55px] max-[767px]:py-[50px]", className)}>
      <Container>
        <div
          data-aos="fade-up"
          className="section_title mb-[57px] flex items-center justify-center min-[768px]:max-[992px]:mb-[30px] max-[767px]:mb-[29px]"
        >
          <h2 className="m-0 max-w-[540px] text-center font-montreal-medium text-[43px] font-normal leading-[1.2] tracking-normal text-ink max-[1199px]:max-w-[400px] max-[1199px]:text-[35px] max-[1199px]:leading-[48px] max-[992px]:mb-2.5 max-[992px]:max-w-full max-[992px]:text-left max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {displayTitle}
          </h2>
        </div>
      </Container>
      <div
        data-aos="fade-up"
        className="our_partners_logo_wrap space-y-[50px] max-[767px]:space-y-6"
        aria-label="Platforms and integrations"
      >
        {integrationLogoRows.map((row, index) => (
          <div
            className="flex w-full min-h-[50px] items-center overflow-hidden max-[767px]:min-h-[30px]"
            key={index}
          >
            {[0, 1, 2].map((set) => (
              <div
                className={cn(
                  "flex shrink-0 items-center",
                  index === 0 ? styles.moveLeft : styles.moveRight,
                )}
                key={set}
                aria-hidden={set > 0 || undefined}
              >
                {row.map((logo) => (
                  <span
                    className="mx-[45px] flex items-center justify-center max-[767px]:mx-6 [&_img]:h-auto [&_img]:w-auto [&_img]:object-contain max-[767px]:[&_img]:max-h-[30px] max-[767px]:[&_img]:max-w-[120px]"
                    key={`${set}-${logo.src}`}
                  >
                    <Image
                      src={logo.src}
                      alt={set > 0 ? "" : logo.alt}
                      width={logo.width}
                      height={logo.height}
                      sizes="(max-width: 767px) 120px, 180px"
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export {
  PartnerCertificationsBarBlock as IntegrationsSection,
  PartnerCertificationsBarBlock as ShopifyPlusProofSection,
};
