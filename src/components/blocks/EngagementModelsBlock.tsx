import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { shopifyCroEngagements } from "@/content/shopify-cro-agency";
import { shopifyPlusAgencyPricing } from "@/content/shopify-plus-agency";
import { whiteLabelShopifyDeliveryComparison } from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type PricingEngagementItem = {
  label: string;
  badge: string;
  price: string;
  description: string;
  bullets?: readonly string[];
  ctaLabel: string;
  ctaHref: string;
};

export type PricingEngagementContent = {
  eyebrow?: string;
  heading?: string | readonly string[];
  title?: string | readonly string[];
  description?: string | readonly string[];
  items?: readonly any[];
  [key: string]: any;
};

export type EngagementModelsBlockProps = {
  content?: PricingEngagementContent;
  className?: string;
  id?: string;
  [key: string]: any;
};

export type PricingTableSectionProps = EngagementModelsBlockProps;

export function EngagementModelsBlock({
  content = shopifyPlusAgencyPricing,
  className,
  id = "our_white_label_pricing",
}: EngagementModelsBlockProps) {
  const items: readonly any[] = content.items || [];
  const heading = content.heading || content.title || "";

  return (
    <section
      className={cn(
        "white_label_wp_develop_plan_section shopify-plus-engagement mb-0 bg-[#edf2ee] py-20 max-[992px]:py-[50px]",
        className,
      )}
      data-section="pricing"
      id={id}
    >
      <Container>
        <div
          data-aos="fade-up"
          className="mb-[50px] flex flex-wrap items-start justify-between gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
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
              {formatBrText(heading)}
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

        <div
          data-aos="fade-up"
          className="grid grid-cols-3 gap-6 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        >
          {items.map((item) => (
            <article
              key={item.label}
              className="plan_card pricing_card relative flex flex-col justify-between rounded-[20px] border border-[rgba(40,40,40,0.10)] bg-white p-8 pb-[60px] max-[1199px]:p-6 max-[1199px]:pb-[56px]"
            >
              <div>
                {item.badge ? (
                  <div className="plan_badge pricing_badge mb-6 inline-block rounded-[30px] bg-[rgba(173,81,81,0.05)] px-[12.5px] py-[5.5px] font-montserrat text-xs font-bold uppercase text-brand-red">
                    {item.badge}
                  </div>
                ) : null}
                <h3 className="plan_label pricing_card_label mb-2.5 font-montreal-medium text-lg font-normal text-ink">
                  {item.label}
                </h3>
                {item.price ? (
                  <div className="plan_price pricing_price mb-6 border-b border-[rgba(40,40,40,0.10)] pb-6 font-montreal-medium text-[22px] font-normal leading-[29px] text-ink">
                    {item.price}
                  </div>
                ) : null}
                <p className="plan_desc mb-6 font-sans text-sm font-normal leading-[24px] text-muted">
                  {item.description}
                </p>
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="plan_bullets mb-8 space-y-3">
                    {item.bullets.map((bullet: string) => (
                      <li
                        key={bullet}
                        className="flex items-start text-sm font-medium text-[#282828]"
                      >
                        <span className="mr-2.5 mt-1 size-1.5 shrink-0 rounded-full bg-brand-red" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {(item.ctaHref || item.cta?.href) ? (
                <Link
                  href={item.ctaHref || item.cta?.href}
                  className="btn-link-arrow group/arrow absolute bottom-6 inline-flex items-center font-montserrat text-sm font-bold uppercase tracking-normal text-brand-red transition-colors duration-300 hover:text-ink max-[767px]:text-xs"
                >
                  <span>{item.ctaLabel || item.cta?.label || "Learn More"}</span>
                  <svg
                    aria-hidden="true"
                    className="ml-2.5 h-auto w-2.5 shrink-0 fill-brand-red transition-colors duration-300 group-hover/arrow:fill-ink"
                    viewBox="0 0 12 12"
                  >
                    <path d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z" />
                  </svg>
                </Link>
              ) : null}
            </article>
          ))}
        </div>

        <div data-aos="fade-up" className="pricing_cta_wrapper mt-[30px] text-center" />
      </Container>
    </section>
  );
}

export type DeliveryModelComparisonContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  columns: readonly {
    label: string;
    isWinner?: boolean;
    kicker?: string;
    pill?: string;
  }[];
  rows: readonly {
    feature: string;
    inHouse: string;
    freelancer: string;
    partner: string;
  }[];
  ctas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
};

export type DeliveryModelComparisonSectionProps = {
  content?: DeliveryModelComparisonContent | any;
};

export function DeliveryModelComparisonSection({
  content = whiteLabelShopifyDeliveryComparison,
}: DeliveryModelComparisonSectionProps = {}) {
  return (
    <section className="choose_the_right_delivery_model_section bg-white py-20 max-[991px]:py-12">
      <Container>
        <div
          data-aos="fade-up"
          className="section_title mb-12 max-[991px]:mb-8"
        >
          {content.eyebrow ? (
            <span className="mb-3 block font-montserrat text-sm font-semibold uppercase text-[#535353]">
              {content.eyebrow}
            </span>
          ) : null}
          <div className="flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col">
            <h2 className="w-full max-w-[620px] font-display text-[35px] font-medium leading-[1.3] text-ink max-[991px]:text-[28px] max-[767px]:text-2xl">
              {content.heading}
            </h2>
            {content.description ? (
              <p className="w-full max-w-[500px] font-sans text-base font-medium leading-7 text-[#535353]">
                {content.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="compare-wrap -mx-4 overflow-x-auto px-4 scrollbar-thin">
          <div
            data-aos="fade-up"
            className="compare-table-main overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.10)]"
          >
            <table className="compare-table w-full min-w-[860px] border-collapse bg-white">
              <thead>
                <tr>
                  {content.columns?.map((col: any, idx: number) => (
                    <th
                      className={`p-4 text-left text-sm font-bold uppercase tracking-wider ${
                        col.isWinner
                          ? "border-t border-x border-[#AD5151] bg-[#F7F4E9] text-[#282828]"
                          : "border-b border-[rgba(0,0,0,0.10)] bg-[#FAFAF7] text-[#282828]"
                      } ${idx === 0 ? "w-[20%]" : ""}`}
                      key={col.label}
                    >
                      {col.isWinner && col.kicker ? (
                        <span className="mb-1.5 block font-montserrat text-[10px] font-bold uppercase text-[#AD5151]">
                          {col.kicker}
                        </span>
                      ) : null}
                      <span className="inline-flex items-center">
                        {col.label}
                        {"pill" in col && col.pill ? (
                          <span className="platinum-pill ml-2 inline-flex items-center rounded-full bg-[#AD5151] px-2.5 py-1 text-[10px] font-bold uppercase text-white">
                            {col.pill}
                          </span>
                        ) : null}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows?.map((row: any, idx: number) => {
                  const isLastRow = idx === content.rows.length - 1;
                  return (
                    <tr
                      className="border-b border-[rgba(0,0,0,0.10)] last:border-b-0"
                      key={row.feature}
                    >
                      <td className="p-4 text-left font-sans text-sm font-bold text-[#282828]">
                        {row.feature}
                      </td>
                      <td className="p-4 text-left font-sans text-sm font-medium text-[#535353]">
                        {row.inHouse}
                      </td>
                      <td className="p-4 text-left font-sans text-sm font-medium text-[#535353]">
                        {row.freelancer}
                      </td>
                      <td
                        className={`p-4 text-left font-sans text-sm font-bold text-[#282828] border-x border-[#AD5151] bg-[#F7F4E9] ${
                          isLastRow ? "border-b border-b-[#AD5151] rounded-br-[24px]" : ""
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <svg
                            aria-hidden="true"
                            className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#AD5151]"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              d="M6.5123 7.72L9.37584 10.4578L15.5397 4.03783C16.213 3.33647 16.2055 2.22643 15.5226 1.53429C15.1854 1.19244 14.7252 1 14.245 1H3.98412C3.17502 1 2.4006 1.32854 1.83833 1.91034 1.30058 2.46676 1 3.21031 1 3.98412V14.0768C1 14.8554 1.31067 15.6019 1.86312 16.1507 2.41077 16.6947 3.15134 17 3.92325 17H13.8281C14.5817 17 15.3106 16.7317 15.8844 16.2432 16.5922 15.6406 17 14.7577 17 13.8281V8.78667"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth="2"
                            />
                          </svg>
                          <span>{row.partner}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {content.ctas && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 max-[767px]:flex-col">
            {content.ctas.primary && (
              <ButtonLink href={content.ctas.primary.href} variant="primary">
                {content.ctas.primary.label}
              </ButtonLink>
            )}
            {content.ctas.secondary && (
              <ButtonLink href={content.ctas.secondary.href} variant="outline">
                {content.ctas.secondary.label}
              </ButtonLink>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

export type ShopifyCroEngagementItem = {
  title: string;
  description: string;
  icon: string;
  alt: string;
  features: readonly string[];
  cta: {
    label: string;
    href: string;
  };
};

export type ShopifyCroEngagementContent = {
  heading: string | readonly string[];
  items: readonly ShopifyCroEngagementItem[];
};

export type ShopifyCroEngagementSectionProps = {
  content?: ShopifyCroEngagementContent;
  className?: string;
};

export function ShopifyCroEngagementSection({
  content = shopifyCroEngagements,
  className = "shopify-cro-engagement-section bg-[#FAFAF7] py-10 max-[767px]:py-8",
}: ShopifyCroEngagementSectionProps = {}) {
  const items = content?.items || [];
  return (
    <section className={className}>
      <Container>
        <div data-aos="fade-up" className="section-title mx-auto mb-[35px] text-center">
          <h2 className="font-display text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
            {formatBrText(content?.heading ?? "")}
          </h2>
        </div>

        <div className="shopify-cro-engagement-grid mx-auto -mb-4 flex max-w-[956px] flex-wrap justify-between">
          {items.map((item) => (
            <div
              key={item.title}
              data-aos="fade-up"
              className="shopify-cro-engagement-card mb-4 w-[calc(50%-8px)] max-[767px]:w-full"
            >
              <div className="shopify-cro-engagement-box flex h-full flex-col justify-between rounded-[30px] border border-black/10 bg-white p-[25px] shadow-none">
                <div>
                  <div className="content-box relative mb-[26px] pb-[26px] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-gradient-to-r before:from-transparent before:via-[#AD5151] before:to-transparent">
                    <span className="icon mb-6 inline-block size-10">
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={40}
                        height={40}
                        className="size-full object-contain"
                      />
                    </span>
                    <h3 className="mb-2.5 font-display text-2xl font-medium leading-[30px] text-ink max-[767px]:text-xl">
                      {item.title}
                    </h3>
                    <p className="m-0 font-sans text-base font-medium leading-[190%] text-muted">
                      {item.description}
                    </p>
                  </div>

                  <div className="content-list">
                    <ul className="m-0 list-none p-0">
                      {(item.features || []).map((feature) => (
                        <li
                          key={feature}
                          className="mb-3 border-b-[1.5px] border-black/10 bg-[url('/assets/shopify-cro-agency/engagement/checkbox-list.svg')] bg-[length:16px] bg-[left_top_0] bg-no-repeat pb-[13px] pl-[33px] font-sans text-base font-medium leading-[190%] text-muted last:mb-0 last:border-b-0 last:pb-0 max-[767px]:text-sm"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ButtonLink
                  href={item.cta?.href ?? "/request-quote"}
                  variant="primary"
                  className="mt-9 w-full text-center text-sm uppercase max-[991px]:py-3"
                >
                  {item.cta?.label ?? "Request Quote"}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export {
  EngagementModelsBlock as PricingTableSection,
  EngagementModelsBlock as ShopifyHoursComparisonSection,
};
