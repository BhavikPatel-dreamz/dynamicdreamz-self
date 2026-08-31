import Image from "next/image";
import {
  ServiceHeroReviews,
  type ServiceHeroReviewItem,
} from "@/components/sections/service-hero-reviews";
import { ReviewAnimation } from "@/components/sections/shopify-plus-agency/review-animation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyHero } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type { ServiceHeroReviewItem } from "@/components/sections/service-hero-reviews";

export type ServiceHeroCoBranding = {
  leftLogo: { src: string; alt: string; width: number; height: number };
  separator: { src: string; alt: string; width: number; height: number };
  rightLogo: { src: string; alt: string; width: number; height: number };
};

export type ServiceHeroContent = {
  title: string;
  description: string;
  secondaryDescription?: string;
  paragraphs?: readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  reviews?: readonly ServiceHeroReviewItem[];
  coBranding?: ServiceHeroCoBranding;
  maxWidthClassName?: string;
};

export type ServiceHeroSectionProps = {
  content?: ServiceHeroContent;
  className?: string;
  variant?: "split" | "centered";
  leftColClassName?: string;
  rightColClassName?: string;
  imageClassName?: string;
  reviewClassName?: string;
  bodyClassName?: string;
};

export function ServiceHeroSection({
  content = shopifyPlusAgencyHero,
  className = "inner-hero-sec relative overflow-hidden bg-white pt-[190px] pb-[55px] max-[992px]:pt-[100px]",
  variant = "split",
  leftColClassName,
  rightColClassName,
  imageClassName,
  reviewClassName,
  bodyClassName,
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
                      className="h-[39px] w-auto max-[992px]:max-w-[130px] max-[767px]:h-[30px] max-[767px]:max-w-[104px]"
                      height={content.coBranding.rightLogo.height}
                      src={content.coBranding.rightLogo.src}
                      width={content.coBranding.rightLogo.width}
                    />
                  </div>
                )}
                <h1 className="inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[379px]:text-[28px] max-[379px]:leading-[38px]">
                  {formatBrText(content.title, "max-[1199px]:hidden")}
                </h1>
                {content.paragraphs ? (
                  content.paragraphs.map((paragraph, idx) => (
                    <p
                      className={cn(
                        "mt-4 mb-4 font-sans text-base font-normal leading-[30.4px] text-muted first:mt-6 last:mb-6",
                        bodyClassName,
                      )}
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))
                ) : (
                  <>
                    <p
                      className={cn(
                        "mt-6 mb-6 font-sans text-base font-normal leading-[30.4px] text-muted max-[992px]:my-4",
                        bodyClassName,
                      )}
                    >
                      {formatBrText(content.description)}
                    </p>
                    {content.secondaryDescription && (
                      <p
                        className={cn(
                          "mt-4 mb-6 font-sans text-base font-normal leading-[30.4px] text-muted",
                          bodyClassName,
                        )}
                      >
                        {formatBrText(content.secondaryDescription)}
                      </p>
                    )}
                  </>
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
              {content.reviews && content.reviews.length > 0 ? (
                <ServiceHeroReviews items={content.reviews} />
              ) : (
                <div className="review_animation_main my-[30px]">
                  <div className="mx-auto w-full max-w-[450px]">
                    <ReviewAnimation />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  const defaultLeftCol = content.image
    ? "left-col w-[58%] max-[1199px]:w-full max-[1199px]:text-center"
    : "left-col w-[55.7%] max-[1199px]:w-full max-[1199px]:text-center";

  const defaultRightCol = content.image
    ? "right-col w-[40%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[992px]:w-full"
    : "right-col w-[41%] max-[1199px]:mx-auto max-[1199px]:mt-[50px] max-[1199px]:w-1/2 max-[992px]:w-full";

  return (
    <section className={className}>
      <Container>
        <div className="inner-wrapper flex flex-wrap items-center justify-between">
          <div className={leftColClassName ?? defaultLeftCol}>
            <div className="inner-hero-content">
              <h1 className="inline-block font-montreal-medium text-[50px] font-medium leading-[66px] tracking-[0] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px] max-w-[770px]">
                {formatBrText(content.title, "max-[1199px]:hidden")}
              </h1>
              {content.paragraphs ? (
                content.paragraphs.map((paragraph, idx) => (
                  <p
                    className={cn(
                      "mt-4 mb-4 text-base font-normal leading-[30.4px] text-muted first:mt-6 last:mb-6 max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
                      bodyClassName,
                    )}
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))
              ) : (
                <>
                  <p
                    className={cn(
                      "mt-3 mb-3.75 text-sm font-normal leading-[24px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
                      bodyClassName,
                    )}
                  >
                    {formatBrText(content.description)}
                  </p>
                  {content.secondaryDescription && (
                    <p
                      className={cn(
                        "mt-4 mb-6 text-base font-normal leading-[30.4px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
                        bodyClassName,
                      )}
                    >
                      {formatBrText(content.secondaryDescription)}
                    </p>
                  )}
                </>
              )}
              {content.ctaLabel && (
                <ButtonLink
                  className="services-hero-btn"
                  aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                  href={ctaHref}
                  variant="primary"
                >
                  {content.ctaLabel}
                </ButtonLink>
              )}
            </div>
          </div>
          <div className={rightColClassName ?? defaultRightCol}>
            {content.image ? (
              <>
                <div className="service-img flex justify-center">
                  <Image
                    alt={content.image.alt}
                    className={cn(
                      "h-auto",
                      imageClassName,
                    )}
                    height={content.image.height}
                    priority
                    src={content.image.src}
                    width={content.image.width}
                  />
                </div>
                {content.reviews && content.reviews.length > 0 && (
                  <ServiceHeroReviews
                    className={reviewClassName}
                    items={content.reviews}
                  />
                )}
              </>
            ) : (
              <ReviewAnimation />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
