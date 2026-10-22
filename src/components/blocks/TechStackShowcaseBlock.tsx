import Image from "next/image";
import React from "react";
import styles from "@/components/blocks/TechStackShowcaseBlock.module.css";
import { Container } from "@/components/ui/container";
import { whiteLabelShopifySectionCopy, whiteLabelShopifyToolRows } from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";
import type { WhiteLabelTool } from "@/types/white-label-service";

export type TechnologyCategoryItem = {
  category: string;
  technologies: readonly string[];
};

export type TechnologiesWorkWithContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  categories: readonly TechnologyCategoryItem[];
};

export type TechStackShowcaseBlockProps = {
  content?: TechnologiesWorkWithContent | any;
  className?: string;
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  categories?: readonly any[];
  [key: string]: any;
};

export type TechnologiesWorkWithSectionProps = TechStackShowcaseBlockProps;

export function TechStackShowcaseBlock(props: TechStackShowcaseBlockProps = {}) {
  const content = props.content ?? {
    eyebrow: props.eyebrow,
    heading: props.title ?? props.heading ?? "",
    description: props.description,
    categories: props.categories ?? [],
  };
  const className = props.className;
  const id = props.id;
  return (
    <section
      className={cn(
        "technologies_we_work_with_section bg-[#EFF4EF] py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div
          data-aos="fade-up"
          className="mb-10 flex flex-wrap items-start justify-between gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
        >
          <div className="w-[44%] max-[992px]:w-full">
            {content.eyebrow && (
              <div className="eyebrow mb-3">
                <span className="font-montserrat text-sm font-semibold uppercase text-[#535353]">
                  {content.eyebrow}
                </span>
              </div>
            )}
            <h2 className="font-montreal-medium text-[35px] font-normal leading-[1.3] text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
              {formatBrText(content.heading)}
            </h2>
          </div>
          {content.description && (
            <div className="w-[48%] max-[992px]:w-full">
              <p className="font-sans text-base font-medium leading-[28px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {formatBrText(content.description)}
              </p>
            </div>
          )}
        </div>

        <div data-aos="fade-up" className="technologies-wrapper -mx-[7.5px] -mb-[15px] flex flex-wrap">
          {(content.categories || []).map((col: any) => (
            <div
              data-aos="fade-up"
              className="technologies-col mb-[15px] w-1/4 px-[7.5px] max-[1199px]:w-1/2 max-[767px]:w-full"
              key={col.category}
            >
              <div className="technologies-item h-full rounded-[20px] border border-[rgba(40,40,40,0.10)] bg-white p-[30px_25px] max-[991px]:rounded-[16px] max-[991px]:p-5">
                <h3 className="mb-[25px] font-montreal-medium text-[20px] font-medium leading-[132%] text-[#AD5151] max-[991px]:mb-[15px] max-[991px]:text-[18px]">
                  {col.category}
                </h3>
                <div className="item-list flex flex-wrap gap-2.5">
                  {(col.technologies || []).map((tech: any) => (
                    <span
                      className="block rounded-[10px] border border-[#D0D0CE] bg-[#FAFAF7] p-[12px_10px] text-center font-sans text-sm font-semibold leading-none text-[#282828] shadow-[2px_2px_0_0_rgba(40,40,40,0.20)] max-[991px]:rounded-[6px] max-[991px]:p-[8px_8px] max-[991px]:text-[11px]"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { homeSectionCopy, integrationLogoRows } from "@/content/home";

export type IntegrationsSectionProps = {
  title?: string;
};

export function IntegrationsSection({
  title = homeSectionCopy.integrationsTitle,
}: IntegrationsSectionProps = {}) {
  return (
    <section className="our_partners overflow-hidden bg-[#fafaf7] py-[55px] max-[767px]:py-[50px]">
      <Container>
        <div
          data-aos="fade-up"
          className="section_title mb-[57px] flex items-center justify-center min-[768px]:max-[992px]:mb-[30px] max-[767px]:mb-[29px]"
        >
          <h2 className="m-0 max-w-[540px] font-montreal-medium text-[43px] font-normal leading-[1.2] tracking-normal text-ink max-[1199px]:max-w-[400px] max-[1199px]:text-[35px] max-[1199px]:leading-[48.475px] max-[992px]:mb-2.5 max-[992px]:max-w-full max-[992px]:text-left max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">
            {title}
          </h2>
        </div>
      </Container>
      <div
        data-aos="fade-up"
        className="our_partners_logo_wrap space-y-[50px] max-[767px]:space-y-6"
        aria-label="Platforms and integrations"
      >
        {integrationLogoRows.map((row, index) => (
          <div className="flex w-full min-h-[50px] max-[767px]:min-h-[30px] items-center overflow-hidden" key={index}>
            {[0, 1, 2].map((set) => (
              <div
                className={cn(
                  "flex shrink-0 items-center",
                  index === 0 ? styles.moveLeft : styles.moveRight,
                )}
                key={set}
                aria-hidden={set > 0 || undefined}
              >
                {row.map((logo: any) => (
                  <span className="mx-[45px] flex items-center justify-center max-[767px]:mx-6 [&_img]:h-auto [&_img]:w-auto [&_img]:object-contain max-[767px]:[&_img]:max-h-[30px] max-[767px]:[&_img]:max-w-[120px]" key={`${set}-${logo.src}`}>
                    <Image src={logo.src} alt={logo.name || logo.alt || ""} width={logo.width || 120} height={logo.height || 40} className="h-auto max-h-[40px] w-auto object-contain" />
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

export type WhiteLabelToolsSectionProps = {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  ariaLabel?: string;
  rows?: readonly (readonly WhiteLabelTool[])[];
};

export function WhiteLabelToolsSection({
  className,
  eyebrow,
  title = whiteLabelShopifySectionCopy.toolsTitle,
  description = whiteLabelShopifySectionCopy.toolsDescription,
  ariaLabel = whiteLabelShopifySectionCopy.toolsAriaLabel,
  rows = whiteLabelShopifyToolRows,
}: WhiteLabelToolsSectionProps = {}) {
  return (
    <section
      className={cn(
        "white_label_wide_range_technologies_section overflow-hidden bg-[#fafaf7] py-[70px] max-[1199px]:py-[60px] max-[992px]:py-10 max-[767px]:py-[30px]",
        className,
      )}
    >
      <div
        data-aos="fade-up"
        className="wide_range_technologies_top_part mb-10 px-4 text-center max-[1199px]:mb-[35px] max-[992px]:mb-[30px] max-[767px]:mb-5"
      >
        {eyebrow ? (
          <div className="title mb-5 text-[13px] font-bold uppercase tracking-[1.5px] text-[#e33d37]">
            <span>{eyebrow}</span>
          </div>
        ) : null}
        <div className="wide_range_technologies_heading">
          <h2 className="mx-auto mb-6 max-w-[1000px] font-montreal-medium text-[35px] leading-[48.475px] font-normal tracking-normal text-ink max-[1199px]:mb-[22px] max-[991px]:mb-5 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:mb-[15px] max-[767px]:text-2xl max-[767px]:leading-[33.24px]">
            {title}
          </h2>
        </div>
        <div className="wide_range_technologies_para mx-auto max-w-[1000px]">
          <p className="text-base leading-[30.4px] font-medium text-muted max-[1199px]:leading-[26px] max-[767px]:text-sm max-[767px]:leading-5">
            {description}
          </p>
        </div>
      </div>
      <div aria-label={ariaLabel} className="wide_range_technologies_bottom_part space-y-3">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className="flex w-full items-center overflow-hidden">
            {[0, 1].map((grp) => (
              <div
                key={grp}
                aria-hidden={grp > 0 || undefined}
                className={cn(
                  "flex shrink-0 items-center",
                  rIdx % 2 === 0 ? styles.forward : styles.reverse,
                )}
              >
                {row.map((item) => (
                  <div
                    className="our_partners_logo_item relative mx-1.5 h-[94px] w-[202px] shrink-0 max-[1199px]:w-[200px] max-[992px]:w-[180px] max-[767px]:w-[170px]"
                    key={item.name}
                  >
                    <Image
                      className="object-contain"
                      src={item.image}
                      alt={grp > 0 ? "" : item.name}
                      fill
                      sizes="(max-width: 767px) 170px, (max-width: 991px) 180px, (max-width: 1199px) 200px, 202px"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export type TechKeywordContent = {
  eyebrow?: string;
  heading: string;
  introText?: string;
  highlightedText?: string;
  bodyText?: string;
};

export type TechKeywordSectionProps = {
  content: TechKeywordContent;
  className?: string;
  id?: string;
};

export function TechKeywordSection({
  content,
  className,
  id,
}: TechKeywordSectionProps) {
  return (
    <section
      className={cn(
        "tech-keyword-box bg-[#fafaf7] py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div data-aos="fade-up" className="wrapper grid grid-cols-[0.8fr_1.2fr] items-center gap-[55px] rounded-[24px] border border-[rgba(40,40,40,0.11)] bg-white p-[34px_38px] max-[1199px]:grid-cols-[0.8fr_1fr] max-[1199px]:gap-2.5 max-[1199px]:p-[30px_20px] max-[767px]:grid-cols-1 max-[767px]:gap-0">
          <div className="section_title_with_eyebrow mb-0">
            <div className="title w-full">
              {content.eyebrow ? (
                <div className="eyebrow mb-4">
                  <span className="font-montserrat text-sm font-semibold uppercase text-[#535353]">
                    {content.eyebrow}
                  </span>
                </div>
              ) : null}
              <h2 className="font-display text-[35px] font-medium leading-[48px] tracking-[-0.7px] text-ink max-[1199px]:text-[28px] max-[1199px]:leading-[38px] max-[767px]:text-2xl max-[767px]:leading-[33px]">
                {content.heading}
              </h2>
            </div>
          </div>
          <div className="tech-keyword-copy max-[767px]:mt-4">
            <p className="font-sans text-base font-normal leading-7 text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
              {content.introText ? `${content.introText} ` : null}
              {content.highlightedText ? (
                <strong className="font-semibold text-ink">
                  {content.highlightedText}
                </strong>
              ) : null}
              {content.bodyText ? content.bodyText : null}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export type PillListContent = {
  heading: string | readonly string[];
  items: readonly string[];
  description: string | readonly string[];
};

export type PillListSectionProps = {
  content: PillListContent;
  className?: string;
  id?: string;
};

export function PillListSection({
  content,
  className = "why_choose_seo_service bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[992px]:py-[50px]",
  id,
}: PillListSectionProps) {
  const items = content.items || [];
  return (
    <section className={className} id={id}>
      <Container>
        <div data-aos="fade-up" className="heading-text only-text mb-[50px] text-center max-[992px]:mb-[30px]">
          <h2 className="font-display text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading)}
          </h2>
        </div>
        <div data-aos="fade-up" className="seo_service_list text-center">
          <ul className="m-0 flex list-none flex-wrap items-center justify-center p-0">
            {items.map((item, idx) => (
              <li
                className="relative mb-6 mr-3.5 inline-flex items-center rounded-[50px] bg-white py-1.5 pr-6 pl-11 text-base font-medium leading-[30.4px] text-[#535353] shadow-sm max-[767px]:mb-3 max-[767px]:mr-0 max-[767px]:w-full max-[767px]:text-left"
                key={idx}
              >
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Image
                    alt="Bullet point icon"
                    className="h-[22px] w-[22px] shrink-0"
                    height={22}
                    src="/assets/icons/gradient-check.svg"
                    width={22}
                  />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {content.description && (
            <p className="mx-auto mt-4 max-w-[850px] text-base font-normal leading-[30.4px] text-[#535353]">
              {formatBrText(content.description)}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

const TECH_GRADIENTS: Record<string, string> = {
  Liquid: "linear-gradient(180deg, rgba(146, 0, 59, 0.06) 0%, rgba(255, 255, 255, 0) 100%)",
  PHP: "linear-gradient(180deg, rgba(146, 0, 59, 0.06) 0%, rgba(255, 255, 255, 0) 100%)",
  HTML5: "linear-gradient(180deg, rgba(228, 77, 38, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  CSS3: "linear-gradient(180deg, rgba(41, 101, 241, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  Javascript: "linear-gradient(180deg, rgba(240, 190, 37, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  JavaScript: "linear-gradient(180deg, rgba(240, 190, 37, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  jQuery: "linear-gradient(180deg, rgba(8, 104, 172, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  Ajax: "linear-gradient(180deg, rgba(0, 93, 166, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  MySQL: "linear-gradient(180deg, rgba(0, 93, 166, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  Bootstrap: "linear-gradient(180deg, rgba(113, 44, 242, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  React: "linear-gradient(180deg, rgba(0, 216, 255, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  WooCommerce: "linear-gradient(180deg, rgba(150, 88, 138, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  Elementor: "linear-gradient(180deg, rgba(211, 46, 95, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  WPBakery: "linear-gradient(180deg, rgba(46, 126, 211, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  "Divi Builder": "linear-gradient(180deg, rgba(130, 46, 211, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
};

export type ThemeCustomizationTechItem = {
  title?: string;
  name?: string;
  icon?: string;
  image?: string;
  alt?: string;
  gradient?: string;
};

export type ShopifyThemeTechSectionProps = {
  content: {
    title: string | readonly string[];
    subtitle?: string | readonly string[];
    bottomDescription?: string | readonly string[];
    items: readonly ThemeCustomizationTechItem[];
  };
  columns?: 3 | 5;
};

export function ShopifyThemeTechSection({
  content,
  columns = 3,
}: ShopifyThemeTechSectionProps) {
  const isFiveCol = columns === 5;
  const items = content?.items || [];

  return (
    <section
      className="wordpress-page-builders_sec pt-0 pb-20 max-[767px]:pb-10"
      id="technologies"
    >
      <Container>
        <div className="mx-auto max-w-[850px] text-center" data-aos="fade-up">
          <h2 className="font-display text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.title, "max-[1199px]:hidden")}
          </h2>
          {content.subtitle && (
            <p className="mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
              {formatBrText(content.subtitle, "max-[1199px]:hidden")}
            </p>
          )}
        </div>

        <div
          className={cn(
            "builder-wrapper mx-auto mt-[50px] flex flex-wrap justify-center max-[767px]:mt-[35px]",
            isFiveCol ? "max-w-[1140px] -mx-2" : "max-w-[900px]",
          )}
          data-aos="fade-up"
        >
          {items.map((tech) => {
            const title = tech.title ?? tech.name ?? "";
            const icon = tech.icon ?? tech.image ?? "";
            const alt = tech.alt ?? `${title} Logo`;

            return (
              <div
                className={cn(
                  "builder-col pb-[30px] text-center",
                  isFiveCol
                    ? "w-1/5 px-2 max-[1199px]:w-1/4 max-[767px]:w-1/2"
                    : "w-1/3 px-2.5 max-[767px]:w-1/2",
                )}
                data-aos="fade-up"
                key={title}
              >
                <div className="builder-block transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className={cn(
                      "builder-logo mx-auto flex items-center justify-center rounded-[10px] p-4",
                      isFiveCol
                        ? "min-h-[146px] border border-[#d9d9d9] mb-4 max-[767px]:min-h-[120px]"
                        : "size-[100px] rounded-[15px] mb-4 max-[767px]:size-[80px]",
                    )}
                    style={{
                      background:
                        tech.gradient ??
                        TECH_GRADIENTS[title] ??
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  >
                    {icon ? (
                      <Image
                        alt={alt}
                        className={cn(
                          "object-contain",
                          isFiveCol
                            ? "max-h-[70px] max-w-[120px] max-[767px]:max-h-[50px] max-[767px]:max-w-[100px]"
                            : "max-h-[60px] max-w-[60px] max-[767px]:max-h-[48px] max-[767px]:max-w-[48px]",
                        )}
                        height={70}
                        src={icon}
                        width={120}
                      />
                    ) : null}
                  </div>
                  <h3
                    className={cn(
                      "font-sans text-ink",
                      isFiveCol
                        ? "text-base font-normal leading-[25.92px] tracking-[0.54px]"
                        : "text-[18px] font-bold leading-[30.6px] tracking-[0.36px] max-[767px]:text-base",
                    )}
                  >
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {content.bottomDescription && (
          <div className="bottom-text mt-10 text-center" data-aos="fade-up">
            <p className="mx-auto max-w-[850px] font-sans text-base font-semibold italic leading-[26px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
              {formatBrText(content.bottomDescription)}
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

export {
  TechStackShowcaseBlock as TechnologiesWorkWithSection,
};
