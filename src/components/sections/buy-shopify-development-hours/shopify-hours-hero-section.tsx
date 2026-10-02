import Image from "next/image";

import { PricingPackageSelector } from "@/components/sections/buy-shopify-development-hours/pricing-package-selector";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
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
      className="inner-hero-sec hire-shopify-dev-flexi-hours relative mb-20 overflow-hidden rounded-b-[50px] bg-cream pt-[150px] pb-20 max-[1199px]:mb-[60px] max-[991px]:pt-[100px] max-[991px]:pb-10"
    >
      <Container>
        <div className="hire-shopify-dev-flexi-hours-row flex flex-wrap items-center">
          <div className="hire-shopify-dev-left w-[51%] max-[991px]:w-full">
            <div className="section_title_with_eyebrow mb-[10px]">
              {/* The live eyebrow sits inline inside the 24px `.title` line box,
                  so the same 14px/24px context is reproduced here. */}
              <div className="title w-full text-[14px] leading-6">
                <Eyebrow
                  as="span"
                  className="max-[767px]:flex-wrap"
                  items={shopifyHoursHero.eyebrows}
                  linePosition="overlay"
                  tone="muted"
                />
              </div>
            </div>
            <h1
              className="font-display text-[50px] leading-[60px] font-medium text-ink max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10"
              id="shopify-hours-hero-title"
            >
              {titleStart}
              <span>{shopifyHoursHero.emphasizedTitle}</span>
            </h1>
            <p className="mt-3 mb-[15px] font-sans text-base leading-[28px] font-medium text-muted">
              {shopifyHoursHero.description}
            </p>
            <div className="hire-shopify-dev-list w-full max-w-[460px] pt-2.5">
              <h2 className="mb-5 font-montserrat text-base leading-[22.36px] font-semibold text-brand-red">
                {shopifyHoursHero.highlightsHeading}
              </h2>
              <ul>
                {shopifyHoursHero.highlights.map((highlight) => (
                  <li
                    className="relative mb-[13px] border-b border-black/10 pb-[13px] pl-[27px] font-sans text-sm leading-[normal] font-medium text-ink last:mb-0 last:border-b-0 last:pb-0 max-[767px]:pl-[31px] max-[767px]:leading-[22px]"
                    key={highlight}
                  >
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="absolute -top-px left-0 h-[21px] w-[17px] max-[767px]:top-0 max-[767px]:size-[19px]"
                      height={21}
                      src="/assets/buy-shopify-development-hours/icons/key-highlights.svg"
                      width={17}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hire-shopify-dev-right w-[49%] pl-[50px] max-[991px]:w-full max-[991px]:pt-[50px] max-[991px]:pl-0">
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
