import React from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type ShopifyMobileAppComparisonRow = {
  title: string;
  subtitle: string;
  appBuilder: string;
  custom: string;
};

export type ShopifyMobileAppComparisonContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  tableHeaders?: readonly string[];
  rows?: readonly ShopifyMobileAppComparisonRow[] | readonly any[];
  [key: string]: any;
};

export type PlatformComparisonTableBlockProps = {
  content?: ShopifyMobileAppComparisonContent | any;
  className?: string;
  [key: string]: any;
};

export type ShopifyMobileAppComparisonSectionProps = PlatformComparisonTableBlockProps;

export function PlatformComparisonTableBlock({
  content,
  className,
}: PlatformComparisonTableBlockProps) {
  return (
    <section
      className={cn(
        "why_build_a_custom_shopify_mobile_app bg-[#F7F4E9] py-20 max-[991px]:py-[50px]",
        className,
      )}
    >
      <Container className="px-[15px] min-[1400px]:max-w-[1408px]">
        <div
          data-aos="fade-up"
          className="mb-[50px] flex flex-wrap items-start justify-between gap-10 max-[767px]:mb-[30px]"
        >
          <div className="w-[44%] max-[991px]:w-full">
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
            <div className="w-[48%] max-[991px]:w-full">
              <p className="font-sans text-base font-medium leading-[28px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {formatBrText(content.description)}
              </p>
            </div>
          )}
        </div>

        <div
          data-aos="fade-up"
          className="table-main overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white"
        >
          <div className="table-wrap overflow-x-auto">
            <table className="m-0 w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr>
                  {content.tableHeaders.map((header: any, idx: number) => (
                    <th
                      key={header}
                      className={`w-1/3 border-b border-[rgba(0,0,0,0.10)] p-[31px_20px] font-sans text-sm font-bold uppercase leading-[13px] text-[#282828] max-[767px]:p-[20px_16px] ${
                        idx === content.tableHeaders.length - 1
                          ? "border-l border-[rgba(0,0,0,0.10)] bg-[#EFF4EF]"
                          : "bg-[#FAFAF7]"
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row: any, rIdx: number) => {
                  const isLastRow = rIdx === content.rows.length - 1;
                  const borderBottom = isLastRow
                    ? "border-b-0"
                    : "border-b border-[rgba(0,0,0,0.10)]";

                  return (
                    <tr key={row.title}>
                      <td
                        className={`bg-white p-[16px_20px] align-middle text-sm leading-[22px] text-[#282828] ${borderBottom} max-[767px]:p-[12px_16px] max-[767px]:text-xs`}
                      >
                        <strong>{row.title}</strong>
                        <span className="table-sub mt-2.5 block text-xs font-medium leading-5 text-[#535353] max-[767px]:mt-1">
                          {row.subtitle}
                        </span>
                      </td>
                      <td
                        className={`bg-white p-[16px_20px] align-middle text-sm font-medium leading-[22px] text-[#535353] ${borderBottom} max-[767px]:p-[12px_16px] max-[767px]:text-xs`}
                      >
                        {row.appBuilder}
                      </td>
                      <td
                        className={`border-l border-[rgba(0,0,0,0.10)] bg-[#EFF4EF] p-[16px_20px] align-middle text-base font-bold leading-[22px] text-[#282828] ${borderBottom} max-[991px]:text-sm max-[767px]:p-[12px_16px] max-[767px]:text-xs`}
                      >
                        {row.custom}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

export type ArchitecturePatternItem = {
  label: string;
  title: string;
  description: string;
  stack: string;
};

export type RecentArchitecturePatternsContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly ArchitecturePatternItem[];
};

export type RecentArchitecturePatternsSectionProps = {
  content?: RecentArchitecturePatternsContent | any;
  className?: string;
  id?: string;
  [key: string]: any;
};

export function RecentArchitecturePatternsSection({
  content,
  className,
  id,
}: RecentArchitecturePatternsSectionProps) {
  if (!content) return null;
  const items = content.items ?? [];
  return (
    <section
      className={cn(
        "recent_architecture_patterns_section py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <div
          data-aos="fade-up"
          className="mb-10 flex flex-wrap items-end justify-between gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5 max-[991px]:flex-col max-[991px]:items-start"
        >
          <div className="w-[44%] max-[991px]:w-full">
            {content.eyebrow ? (
              <span className="mb-4 block font-montserrat text-sm font-semibold uppercase text-[#535353]">
                {content.eyebrow}
              </span>
            ) : null}
            <h2 className="font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">
              {formatBrText(content.heading)}
            </h2>
          </div>
          {content.description ? (
            <div className="w-[48.3%] max-[1199px]:w-1/2 max-[991px]:w-full">
              <p className="font-sans text-sm font-medium leading-7 text-muted xl:text-base max-[767px]:leading-6">
                {formatBrText(content.description)}
              </p>
            </div>
          ) : null}
        </div>

        <div data-aos="fade-up" className="wrapper -mx-[7.5px] -mb-[15px] flex flex-wrap">
          {items.map((item: any) => (
            <div
              data-aos="fade-up"
              className="recent_architecture_col mb-[15px] w-1/4 px-[7.5px] max-[1199px]:w-1/2 max-[767px]:w-full"
              key={item.title}
            >
              <article className="recent_architecture_item flex h-full flex-col justify-between gap-[30px] rounded-[20px] border border-[rgba(23,30,22,0.10)] bg-white p-[30px_18px]">
                <div className="top_text">
                  <div className="title">
                    <span className="mb-[15px] block font-montserrat text-sm font-bold uppercase leading-5 text-[#AD5151]">
                      {item.label}
                    </span>
                    <h3 className="font-montreal-medium text-[20px] font-normal leading-[130%] text-[#282828]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 font-sans text-sm font-normal leading-[24px] text-[#535353]">
                    {item.description}
                  </p>
                </div>
                <div className="bottom_text">
                  <p className="rounded-[10px] border border-[#D0D0CE] bg-[#FAFAF7] p-[8.5px_7px] text-center font-sans text-[10px] font-bold leading-[150%] tracking-[-0.33px] text-[#282828] max-[1399px]:flex max-[1399px]:min-h-[49px] max-[1399px]:items-center max-[1399px]:p-[8.5px_10px] max-[1399px]:text-left max-[1199px]:min-h-0 max-[1199px]:w-fit">
                    {item.stack}
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

export {
  PlatformComparisonTableBlock as ShopifyMobileAppComparisonSection,
};
