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
}: {
  content?: PricingEngagementContent;
  className?: string;
}) {
  return (
    <section className={cn("bg-[#edf2ee] py-20 max-[992px]:py-[50px]", className)} data-section="pricing" id="pricing">
      <Container>
        <SplitSectionHeading
          className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div className="grid grid-cols-3 gap-5 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1">
          {content.items.map((item) => (
            <article className="flex h-full flex-col rounded-[16px] border border-[#e8e4da] bg-white p-7 shadow-[0_4px_18px_rgba(40,40,40,0.05)] max-[1199px]:p-5" key={item.label}>
              <h3 className="mb-3 font-montreal-medium text-2xl font-medium leading-8 text-ink max-[1199px]:text-xl max-[767px]:text-lg">
                {item.label}
              </h3>
              <span className="mb-4 inline-flex w-fit rounded-full bg-[#fbefd7] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.5px] text-brand-red">
                {item.badge}
              </span>
              <p className="mb-4 font-montserrat text-[26px] font-bold leading-8 text-ink max-[1199px]:text-2xl">
                {item.price}
              </p>
              <p className="mb-4 text-sm font-medium leading-6 text-muted">
                {item.description}
              </p>
              <Link
                className="mt-auto inline-flex items-center text-sm font-bold uppercase leading-5 text-brand-red underline decoration-1 underline-offset-2 transition-opacity hover:opacity-80"
                href={item.ctaHref}
              >
                {item.ctaLabel}
                <svg
                  aria-hidden="true"
                  className="ml-2 shrink-0"
                  fill="none"
                  height="12"
                  viewBox="0 0 12 12"
                  width="12"
                >
                  <path
                    d="M1 11L11 1M11 1H2M11 1V10"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
