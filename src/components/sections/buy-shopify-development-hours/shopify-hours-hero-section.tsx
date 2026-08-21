import Image from "next/image";

import { PricingPackageSelector } from "@/components/sections/buy-shopify-development-hours/pricing-package-selector";
import { Container } from "@/components/ui/container";
import {
  shopifyHoursHero,
  shopifyHoursPackages,
} from "@/content/buy-shopify-development-hours";

export function ShopifyHoursHeroSection() {
  const titleStart = shopifyHoursHero.title.replace(
    shopifyHoursHero.emphasizedTitle,
    "",
  );

  return (
    <section
      aria-labelledby="shopify-hours-hero-title"
      className="mb-20 rounded-b-[50px] bg-cream pt-[150px] pb-20 max-[1199px]:mb-[60px] max-[991px]:pt-[100px] max-[991px]:pb-10"
    >
      <Container>
        <div className="grid grid-cols-[51%_49%] items-center max-[991px]:grid-cols-1 max-[991px]:gap-[50px]">
          <div>
            <h1
              className="font-sans text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[1199px]:text-[42px] max-[1199px]:leading-[55px] max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10 max-[767px]:tracking-[-0.6px]"
              id="shopify-hours-hero-title"
            >
              {titleStart}
              <em className="font-extrabold text-brand-red">
                {shopifyHoursHero.emphasizedTitle}
              </em>
            </h1>
            <p className="mt-6 max-w-[675px] text-lg leading-[34.2px] font-medium tracking-[0.18px] text-muted max-[991px]:max-w-none max-[991px]:text-base max-[991px]:leading-[30.4px]">
              {shopifyHoursHero.description}
            </p>
            <h2 className="mt-[34px] font-sans text-base leading-[22.36px] font-bold">
              {shopifyHoursHero.highlightsHeading}
            </h2>
            <ul className="mt-6 max-w-[460px]">
              {shopifyHoursHero.highlights.map((highlight) => (
                <li
                  className="relative mb-[13px] border-b border-[#dedbd2] pr-1 pb-[13px] pl-10 text-base leading-[normal] font-semibold last:mb-0 last:border-b-0 last:pb-0 max-[767px]:pr-0 max-[767px]:pl-[31px] max-[767px]:text-sm max-[767px]:leading-[22px]"
                  key={highlight}
                >
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="absolute -top-px left-0 size-[21px] max-[767px]:top-0 max-[767px]:size-[19px]"
                    height={24}
                    src="/assets/buy-shopify-development-hours/icons/key-highlights.svg"
                    width={24}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div className="pl-[50px] max-[1199px]:pl-[30px] max-[991px]:pl-0">
            <PricingPackageSelector
              heading={shopifyHoursHero.pricingHeading}
              packages={shopifyHoursPackages}
              quoteHref={shopifyHoursHero.quoteHref}
              quoteLabel={shopifyHoursHero.quoteLabel}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
