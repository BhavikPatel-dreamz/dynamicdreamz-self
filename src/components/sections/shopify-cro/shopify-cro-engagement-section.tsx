import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyCroEngagements } from "@/content/shopify-cro-agency";

export type ShopifyCroEngagementSectionProps = {
  content?: typeof shopifyCroEngagements;
  className?: string;
};

export function ShopifyCroEngagementSection({
  content = shopifyCroEngagements,
  className = "shopify-cro-engagement-section bg-[#FAFAF7] py-10 max-[767px]:py-8",
}: ShopifyCroEngagementSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="section-title mx-auto mb-[35px] text-center">
          <h2 className="font-display text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
            {content.heading}
          </h2>
        </div>

        <div className="shopify-cro-engagement-grid mx-auto -mb-4 flex max-w-[956px] flex-wrap justify-between">
          {content.items.map((item) => (
            <div
              key={item.title}
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
                    <h3 className="mb-2.5 font-sans text-2xl font-bold leading-[30px] text-ink max-[767px]:text-xl">
                      {item.title}
                    </h3>
                    <p className="m-0 font-sans text-base font-medium leading-[190%] text-muted">
                      {item.description}
                    </p>
                  </div>

                  <div className="content-list">
                    <ul className="m-0 list-none p-0">
                      {item.features.map((feature) => (
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
                  href={item.cta.href}
                  variant="primary"
                  className="mt-9 w-full text-center text-sm uppercase max-[991px]:py-3"
                >
                  {item.cta.label}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
