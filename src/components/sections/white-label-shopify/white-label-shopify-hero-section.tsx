import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { whiteLabelShopifyHero } from "@/content/white-label-shopify-development";

type WhiteLabelShopifyHeroSectionProps = {
  content?: typeof whiteLabelShopifyHero;
};

export function WhiteLabelShopifyHeroSection({
  content = whiteLabelShopifyHero,
}: WhiteLabelShopifyHeroSectionProps) {
  return (
    <section className="hero-new-section overflow-hidden bg-[#f7f4e9] pt-[91px] max-[991px]:pt-16">
      <Container>
        <div className="wrapper flex flex-wrap items-center justify-between">
          <div className="left-col flex w-[51%] flex-col items-start justify-center py-[60px] max-[991px]:w-full max-[991px]:py-10 max-[767px]:py-8">
            <div className="hero-content">
              <h1 className="font-sans text-[44px] font-bold leading-[56px] text-ink max-[1199px]:text-[38px] max-[1199px]:leading-[48px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {content.title.replace(content.titleAccent, "").trim()}{" "}
                <i className="font-editorial-italic font-normal italic text-[#ad5151]">
                  {content.titleAccent}
                </i>
              </h1>

              {content.lead ? (
                <p className="mt-3.5 mb-5 font-sans text-xl font-medium text-ink max-[767px]:text-lg">
                  {content.lead}
                </p>
              ) : null}

              {content.paragraphs.map((p, index) => (
                <p
                  className="mb-8 font-sans text-base font-medium leading-7 text-[#535353] max-[767px]:mb-6"
                  key={index}
                >
                  {p}
                </p>
              ))}

              <div className="btn-group flex flex-wrap items-center gap-4 max-[767px]:flex-col max-[767px]:items-stretch">
                <ButtonLink href={content.ctaHref} variant="primary">
                  {content.cta}
                </ButtonLink>
                {content.secondaryCta ? (
                  <ButtonLink href={content.secondaryCta.href} variant="outline">
                    {content.secondaryCta.label}
                  </ButtonLink>
                ) : null}
              </div>

              <div className="global_brands_grid_wrap mt-10 flex flex-wrap items-center max-[767px]:relative max-[767px]:mt-7.5">
                {content.badges.map((badge, idx) => (
                  <div
                    className="global_brands_item flex items-center px-4 max-[1199px]:px-3 max-[767px]:w-1/2 max-[767px]:justify-center max-[767px]:py-3.5 not-last:border-r not-last:border-[#d9d9d9] max-[767px]:not-last:border-none"
                    key={badge.label || idx}
                  >
                    <a
                      href={badge.href}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        alt={badge.alt}
                        className="h-11 w-auto object-contain"
                        height={badge.height}
                        src={badge.icon}
                        width={badge.width}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right-col w-[45%] max-[991px]:hidden">
            <div className="video-wrapper relative overflow-hidden rounded-[20px] shadow-sm">
              <video
                autoPlay
                className="w-full rounded-[20px] object-cover"
                loop
                muted
                playsInline
              >
                <source src={content.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
