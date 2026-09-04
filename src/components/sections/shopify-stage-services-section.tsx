import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type StageServiceItem = {
  tag: string;
  title: string;
  description: string;
  pills?: readonly string[];
  cta?: {
    label: string;
    href: string;
  } | null;
};

export type ShopifyStageServicesContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly StageServiceItem[];
};

export type ShopifyStageServicesSectionProps = {
  content: ShopifyStageServicesContent;
  className?: string;
  id?: string;
};

export function ShopifyStageServicesSection({
  content,
  className,
  id = "shopify-services",
}: ShopifyStageServicesSectionProps) {
  return (
    <section
      className={cn(
        "shopify-development-services bg-[#fafaf7] py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div className="wrapper grid grid-cols-[1.2fr_0.8fr_0.8fr] gap-[15px] max-[1199px]:grid-cols-2 max-[767px]:flex max-[767px]:flex-col">
          {content.items.map((item, index) => {
            const isFirst = index === 0;
            const isFourth = index === 3;
            const isSeventh = index === 6;
            const isEighth = index === 7;

            return (
              <article
                className={cn(
                  "item relative overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.11)] p-[27px] transition-all max-[1399px]:p-5 max-[767px]:rounded-[16px]",
                  isFirst
                    ? "row-span-2 min-h-[440px] bg-[#f7f4ea] flex flex-col justify-between max-[1199px]:row-span-1 max-[1199px]:min-h-0 max-[767px]:min-h-0"
                    : isFourth
                      ? "col-span-2 bg-[#eff4ef] max-[1199px]:col-span-1 flex flex-col justify-between"
                      : isSeventh
                        ? "bg-white max-[1199px]:row-span-2 max-[1199px]:bg-[#eef4ef] flex flex-col justify-between"
                        : isEighth
                          ? "col-span-2 bg-[rgba(239,244,239,1)] max-[1199px]:col-span-1 max-[1199px]:bg-transparent flex flex-col justify-between"
                          : "bg-white flex flex-col justify-between",
                )}
                key={item.title}
              >
                <div className="top">
                  <span className="mb-[15px] block font-montserrat text-[10px] font-bold uppercase tracking-[0.8px] text-[#ad5151]">
                    {item.tag}
                  </span>
                  <h3 className="mb-2.5 font-montserrat text-[20px] font-bold leading-[28px] text-ink max-[1199px]:text-[18px] max-[1199px]:leading-[24px]">
                    {item.title}
                  </h3>
                  <div className="description">
                    <p className="font-sans text-sm font-medium leading-[24px] text-[#535353]">
                      {item.description}
                    </p>
                  </div>
                  {item.pills && item.pills.length > 0 ? (
                    <ul className="mt-[18px] flex flex-wrap gap-[7px]">
                      {item.pills.map((pill) => (
                        <li
                          className="inline-flex items-center rounded-[50px] border border-[rgba(40,40,40,0.08)] bg-[rgba(255,255,255,0.75)] px-[11px] py-[7px] font-montserrat text-[10px] font-semibold uppercase leading-normal text-[#565656]"
                          key={pill}
                        >
                          {pill}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                {item.cta ? (
                  <div className="bottom mt-5">
                    <Link
                      className="group/arrow inline-flex items-center gap-2 font-montserrat text-sm font-bold uppercase tracking-[0.5px] text-[#ad5151] transition-colors hover:text-[#282828]"
                      href={item.cta.href}
                    >
                      <span>{item.cta.label}</span>
                      <svg
                        aria-hidden="true"
                        className="size-3 shrink-0 fill-current transition-transform duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5"
                        viewBox="0 0 12 12"
                      >
                        <path d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z" />
                      </svg>
                    </Link>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
