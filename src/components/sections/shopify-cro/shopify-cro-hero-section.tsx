import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyCroHero } from "@/content/shopify-cro-agency";

export type ShopifyCroHeroSectionProps = {
  hero?: typeof shopifyCroHero;
  className?: string;
};

export function ShopifyCroHeroSection({
  hero = shopifyCroHero,
  className = "white_label_hero_section overflow-hidden rounded-b-[50px] bg-[#FAF8F5] pt-[140px] pb-0 max-[1199px]:pt-[120px] max-[992px]:pt-[100px] max-[992px]:pb-[30px] max-[767px]:rounded-b-[30px] max-[767px]:pt-[70px] max-[767px]:pb-5",
}: ShopifyCroHeroSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="row flex flex-wrap items-stretch justify-between">
          <div className="left-col content-col w-[53%] pb-[60px] max-[992px]:w-full max-[992px]:pb-[30px]">
            <div className="content-wrap">
              <h1 className="mb-6 font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[44px] max-[1199px]:leading-[55px] max-[992px]:text-[40px] max-[992px]:leading-[50px] max-[767px]:mb-4 max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {hero.accent ? (
                  <i className="mr-2 font-bold italic text-brand-red">
                    {hero.accent}
                  </i>
                ) : null}
                {hero.title}
              </h1>

              {hero.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="mb-5 font-sans text-base font-medium leading-[30.4px] text-muted max-[767px]:text-[15px] max-[767px]:leading-[26px]"
                >
                  {p}
                </p>
              ))}

              <div className="btn-div mt-2.5 flex flex-wrap items-center gap-[15px] max-[480px]:flex-col max-[480px]:items-stretch">
                <ButtonLink
                  href={hero.primaryCta.href}
                  variant="primary"
                  className="px-7 text-sm max-[992px]:py-3"
                >
                  {hero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={hero.secondaryCta.href}
                  variant="outline"
                  className="px-7 text-sm max-[992px]:py-3"
                >
                  {hero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="right-col media-col flex w-[44%] items-end justify-end max-[992px]:w-full max-[992px]:justify-center">
            <div className="media-wrap w-full max-w-[520px]">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                width={976}
                height={1212}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
