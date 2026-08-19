import Image from "next/image";
import { ReviewAnimation } from "@/components/sections/shopify-plus-agency/review-animation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyHero } from "@/content/shopify-plus-agency";

export type ServiceHeroCoBranding = {
  leftLogo: { src: string; alt: string; width: number; height: number };
  separator: { src: string; alt: string; width: number; height: number };
  rightLogo: { src: string; alt: string; width: number; height: number };
};

export type ServiceHeroContent = {
  title: string;
  description: string;
  secondaryDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  coBranding?: ServiceHeroCoBranding;
  maxWidthClassName?: string;
};

export type ServiceHeroSectionProps = {
  content?: ServiceHeroContent;
  className?: string;
  variant?: "split" | "centered";
};

export function ServiceHeroSection({
  content = shopifyPlusAgencyHero,
  className = "inner-hero-sec relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[991px]:pt-[100px]",
  variant = "split",
}: ServiceHeroSectionProps) {
  const ctaHref = content.ctaHref ?? "/request-quote";

  if (variant === "centered") {
    const maxWidth = content.maxWidthClassName ?? "max-w-[770px]";

    return (
      <section className={className}>
        <Container>
          <div className="inner-wrapper flex flex-col">
            <div className="left-col w-full">
              <div className={`inner-hero-content mx-auto ${maxWidth} text-center`}>
                {content.coBranding && (
                  <div className="mobile-app-wrapper mb-[35px] flex items-center justify-center max-[767px]:mb-[25px]">
                    <Image
                      alt={content.coBranding.leftLogo.alt}
                      className="h-[37px] w-auto max-[767px]:h-[30px]"
                      height={content.coBranding.leftLogo.height}
                      src={content.coBranding.leftLogo.src}
                      width={content.coBranding.leftLogo.width}
                    />
                    <Image
                      alt={content.coBranding.separator.alt}
                      className="mx-5 h-[29px] w-auto max-[767px]:mx-[15px] max-[767px]:h-5"
                      height={content.coBranding.separator.height}
                      src={content.coBranding.separator.src}
                      width={content.coBranding.separator.width}
                    />
                    <Image
                      alt={content.coBranding.rightLogo.alt}
                      className="h-[39px] w-auto max-[991px]:max-w-[130px] max-[767px]:h-[30px] max-[767px]:max-w-[104px]"
                      height={content.coBranding.rightLogo.height}
                      src={content.coBranding.rightLogo.src}
                      width={content.coBranding.rightLogo.width}
                    />
                  </div>
                )}
                <h1 className="inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[379px]:text-[28px] max-[379px]:leading-[38px]">
                  {content.title.includes("<br>")
                    ? content.title.split("<br>").map((line, index, lines) => (
                        <span key={line}>
                          {line}
                          {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
                        </span>
                      ))
                    : content.title}
                </h1>
                <p className="mt-6 mb-6 font-sans text-base font-normal leading-[30.4px] text-muted max-[991px]:my-4">
                  {content.description}
                </p>
                {content.secondaryDescription && (
                  <p className="mt-4 mb-6 font-sans text-base font-normal leading-[30.4px] text-muted">
                    {content.secondaryDescription}
                  </p>
                )}
                {content.ctaLabel && (
                  <div className="mt-2">
                    <ButtonLink
                      aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                      href={ctaHref}
                      variant="primary"
                    >
                      {content.ctaLabel}
                    </ButtonLink>
                  </div>
                )}
              </div>
            </div>
            <div className="right-col w-full">
              <div className="review_animation_main my-[30px]">
                <div className="mx-auto w-full max-w-[450px]">
                  <ReviewAnimation />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={className}>
      <Container>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-[55.7%] max-[1199px]:w-full max-[1199px]:text-center">
            <div className="inner-hero-content">
              <h1 className="inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]">
                {content.title.includes("<br>")
                  ? content.title.split("<br>").map((line, index, lines) => (
                      <span key={line}>
                        {line}
                        {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
                      </span>
                    ))
                  : content.title}
              </h1>
              <p className="mt-6 mb-6 text-base font-normal leading-[30.4px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
                {content.description}
              </p>
              {content.secondaryDescription && (
                <p className="mt-4 mb-6 text-base font-normal leading-[30.4px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
                  {content.secondaryDescription}
                </p>
              )}
              {content.ctaLabel && (
                <ButtonLink
                  aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                  href={ctaHref}
                  variant="primary"
                >
                  {content.ctaLabel}
                </ButtonLink>
              )}
            </div>
          </div>
          <div className="w-[41%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[991px]:w-full">
            <ReviewAnimation />
          </div>
        </div>
      </Container>
    </section>
  );
}
