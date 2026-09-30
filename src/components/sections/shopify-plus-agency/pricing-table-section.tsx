import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyPlusAgencyPricing } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";
import Link from "next/link";

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
  heading: string;
  description?: string;
  items: readonly PricingEngagementItem[];
};

export function PricingTableSection({
  content = shopifyPlusAgencyPricing,
  className,
  titleColumnClassName,
  textColumnClassName,
}: {
  content?: PricingEngagementContent;
  className?: string;
  titleColumnClassName?: string;
  textColumnClassName?: string;
}) {
  return (
    <section
      className={cn("white_label_wp_develop_plan_section shopify-plus-engagement mb-0 bg-[#edf2ee] py-20 max-[992px]:py-[50px]", className)}
      data-section="pricing"
      id="our_white_label_pricing"
    >
      <Container>
        <SplitSectionHeading
          className="mb-10 gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          textColumnClassName={textColumnClassName}
          titleColumnClassName={titleColumnClassName}
          variant="left"
        />

        <div className="pricing_cards grid grid-cols-3 gap-5 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1">
          {content.items.map((item) => (
            <article
              className="pricing_card group relative flex h-full flex-col rounded-[20px] bg-white px-6 pt-8 pb-[60px] max-[1199px]:px-5 max-[1199px]:pt-6"
              key={item.label}
            >
              <div className="pricing_card_label mb-2.5 font-montreal-medium text-[18px] font-normal leading-6 text-ink">
                {item.label}
              </div>
              <span className="pricing_badge mb-[30px] inline-block w-fit rounded-[30px] bg-[rgba(173,81,81,0.05)] px-[12.5px] py-[5.5px] font-montserrat text-xs leading-[12px] font-bold uppercase text-[#ad5151]">
                {item.badge}
              </span>
              <div className="pricing_price mb-6 border-b border-[rgba(40,40,40,0.1)] pb-6 font-montreal-medium text-[22px] leading-[29.04px] text-ink">
                {item.price}
              </div>
              <p className="m-0 mb-[15px] font-sans text-sm font-normal leading-6 text-[#535353]">
                {item.description}
              </p>
              {item.bullets && item.bullets.length > 0 && (
                <ul className="m-0 mb-[15px] list-none p-0">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-b border-[rgba(40,40,40,0.1)] py-2.5 font-sans text-sm leading-snug font-normal text-[#535353]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                className="btn-link-arrow absolute bottom-6 left-6 inline-flex items-center font-montserrat text-sm leading-[14px] font-bold uppercase text-[#ad5151] transition-colors hover:text-[#282828] max-[1199px]:left-5"
                href={item.ctaHref}
              >
                <span>{item.ctaLabel}</span>
                <svg
                  aria-hidden="true"
                  className="ml-2.5 size-[10px] shrink-0 fill-[#ad5151] transition-colors group-hover:fill-[#282828]"
                  viewBox="0 0 12 12"
                >
                  <path d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Live template always renders `.pricing_cta_wrapper` (margin-top: 30px). */}
        <div className="pricing_cta_wrapper mt-[30px] text-center" />
      </Container>
    </section>
  );
}
