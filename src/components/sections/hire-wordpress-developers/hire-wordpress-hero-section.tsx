import { Fragment } from "react";

import { ReviewAnimation } from "@/components/sections/shopify-plus-agency/review-animation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { hireWordPressHero } from "@/content/hire-wordpress-developers";

export type HiringHeroContent = {
  title: string;
  description: string;
  ctaLabel: string;
  stats: readonly { value: string; label: string; labelLines?: readonly string[] }[];
};

type HiringHeroSectionProps = {
  content: HiringHeroContent;
  ctaHref?: string;
};

export function HiringHeroSection({ content, ctaHref = "/request-quote" }: HiringHeroSectionProps) {
  return (
    <section className="overflow-hidden bg-white pt-[215px] pb-[80px] max-[991px]:pt-[140px] max-[767px]:pb-10">
      <Container>
        <div className="inner-hero-content mx-auto max-w-[900px] text-center">
          <h1 className="font-sans text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10">
            {content.title}
          </h1>
          <p className="mx-auto mt-6 mb-6 max-w-[920px] lg:text-lg text-base leading-[34.2px] font-medium text-muted max-[991px]:leading-[30.4px]">
            {content.description}
          </p>
          <ButtonLink href={ctaHref} variant="primary">
            {content.ctaLabel}
          </ButtonLink>
        </div>

        <div className="total-deliver-wrap flex items-center justify-between py-[55px] max-[991px]:justify-center max-[991px]:py-[30px] max-[767px]:flex-col">
          {content.stats.map((stat) => (
            <div
              className="deliver-col relative ml-[49px] border-l-[1.3px] border-[#efefef] pl-[49px] text-center first:ml-0 first:border-l-0 first:pl-0 max-[991px]:ml-[18px] max-[991px]:pl-[18px] max-[767px]:mb-5 max-[767px]:ml-0 max-[767px]:w-full max-[767px]:border-0 max-[767px]:border-b-[1.3px] max-[767px]:border-b-[#efefef] max-[767px]:px-0 max-[767px]:pt-0 max-[767px]:pb-5 max-[767px]:last:mb-0 max-[767px]:last:border-b-0 max-[767px]:last:pb-0"
              key={stat.label}
            >
              <strong className="mb-[5px] block font-sans text-[44px] leading-[55px] font-bold tracking-[-.88px] text-black max-[991px]:mb-[10px] max-[991px]:text-[26px] max-[991px]:leading-normal max-[767px]:text-[30px]">
                {stat.value}
              </strong>
              <span className="mx-auto block text-[18px] leading-[24px] font-medium text-muted max-[991px]:text-xs max-[767px]:text-base">
                {(stat.labelLines ?? [stat.label]).map((line, lineIndex, lines) => (
                  <Fragment key={line}>
                    {line}
                    {lineIndex < lines.length - 1 ? <br className="max-[767px]:hidden" /> : null}
                  </Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>

        <div>
          <ReviewAnimation />
        </div>
      </Container>
    </section>
  );
}

export function HireWordPressHeroSection() {
  return <HiringHeroSection content={hireWordPressHero} />;
}
