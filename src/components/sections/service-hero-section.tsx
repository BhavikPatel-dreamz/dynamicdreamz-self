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
  subheading?: string;
  secondaryDescription?: string;
  paragraphs?: readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imageContainerClassName?: string;
  reviews?: readonly ServiceHeroReviewItem[];
  coBranding?: ServiceHeroCoBranding;
  maxWidthClassName?: string;
  eyebrows?: readonly string[];
  videoSrc?: string;
  badges?: readonly {
    name: string;
    src: string;
    href: string;
    alt: string;
    width: number;
    height: number;
  }[];
  videoLogo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ServiceHeroSectionProps = {
  content?: ServiceHeroContent;
  className?: string;
  variant?: "split" | "centered";
  showReviews?: boolean;
  headingClassName?: string;
  leftColClassName?: string;
  rightColClassName?: string;
  imageClassName?: string;
  reviewClassName?: string;
  bodyClassName?: string;
  videoLogoClassName?: string;
};

export function ServiceHeroSection({
  content = shopifyPlusAgencyHero,
  className = "inner-hero-sec relative overflow-hidden bg-white pt-[158px] pb-[55px] max-[992px]:pt-[100px]",
  variant = "split",
  showReviews = true,
  headingClassName,
  leftColClassName,
  rightColClassName,
  imageClassName,
  reviewClassName,
  bodyClassName,
  videoLogoClassName,
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
                <h1 className={cn(
                  "inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[379px]:text-[28px] max-[379px]:leading-[38px]",
                  headingClassName,
                )}>
                  {formatBrText(content.title, "max-[1199px]:hidden")}
                </h1>
                {content.subheading ? (
                  <p className="mt-2.5 mb-0 font-montserrat text-base font-semibold leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                    {content.subheading}
                  </p>
                ) : null}
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
                        dangerouslySetInnerHTML={{ __html: content.secondaryDescription }}
                      />
                    )}
                  </>
                )}
                {content.secondaryCta ? (
                  <div className="mt-2 flex flex-wrap items-center justify-center gap-[15px] max-[575px]:flex-col">
                    {content.ctaLabel && (
                      <ButtonLink
                        className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                        aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                        href={ctaHref}
                        variant="primary"
                      >
                        {content.ctaLabel}
                      </ButtonLink>
                    )}
                    <ButtonLink
                      className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                      aria-label={content.secondaryCta.ariaLabel ?? `Dynamic Dreamz - ${content.secondaryCta.label}`}
                      href={content.secondaryCta.href}
                      variant="outline"
                    >
                      {content.secondaryCta.label}
                    </ButtonLink>
                  </div>
                ) : content.ctaLabel ? (
                  <div className="mt-2">
                    <ButtonLink
                      className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                      aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                      href={ctaHref}
                      variant="primary"
                    >
                      {content.ctaLabel}
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            </div>
            {showReviews ? (
              <div className="right-col mx-auto w-full max-w-[480px]">
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
            ) : null}
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
              {content.eyebrows && content.eyebrows.length > 0 && (
                <div className="eyebrow mb-[15px] flex flex-nowrap items-center gap-[15px] whitespace-nowrap text-[13px] font-bold uppercase tracking-[1px] text-[#555] before:mr-3 before:block before:h-0.5 before:w-[30px] before:shrink-0 before:bg-brand-red before:content-[''] max-[992px]:mb-[9px] max-[767px]:gap-2 max-[767px]:mb-[5px] max-[767px]:text-[11px] max-[767px]:tracking-[0.5px] max-[767px]:before:mr-2 max-[767px]:before:w-[15px]">
                  {content.eyebrows.map((item, idx) => (
                    <span
                      className="after:ml-[15px] after:inline-block after:h-[12px] after:w-px after:bg-[#d9d9d9] after:content-[''] last:after:hidden max-[767px]:after:ml-2 max-[767px]:after:h-[10px]"
                      key={idx}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
              <h1 className={cn(
                "inline-block max-w-[770px] font-montreal-medium text-[50px] font-medium leading-[66px] tracking-[0] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]",
                headingClassName,
              )}>
                {formatBrText(content.title, "max-[1199px]:hidden")}
              </h1>
              {content.subheading ? (
                <p className="mt-2.5 mb-0 font-montserrat text-base font-semibold leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                  {content.subheading}
                </p>
              ) : null}
              {content.paragraphs ? (
                content.paragraphs.map((paragraph, idx) => (
                  <p
                    className={cn(
                      "mt-4 mb-4 text-sm font-normal leading-6 text-muted first:mt-6 last:mb-6 max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
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
                      "mt-3 mb-3.75 text-sm font-normal leading-6 text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
                      bodyClassName,
                    )}
                  >
                    {formatBrText(content.description)}
                  </p>
                  {content.secondaryDescription && (
                    <p
                      className={cn(
                        "mt-3 mb-3.75 text-sm font-normal leading-[24px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
                        bodyClassName,
                      )}
                    >
                      {formatBrText(content.secondaryDescription)}
                    </p>
                  )}
                </>
              )}
              {content.secondaryCta ? (
                <div className="services-hero-btn mt-2.5 flex flex-wrap items-center gap-5 max-[1199px]:justify-center max-[575px]:flex-col max-[575px]:items-center max-[575px]:gap-[13px]">
                  {content.ctaLabel && (
                    <ButtonLink
                      className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                      aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                      href={ctaHref}
                      variant="primary"
                    >
                      {content.ctaLabel}
                    </ButtonLink>
                  )}
                  <ButtonLink
                    className="max-[575px]:mx-1 max-[575px]:w-[calc(100%-8px)]"
                    aria-label={content.secondaryCta.ariaLabel ?? `Dynamic Dreamz - ${content.secondaryCta.label}`}
                    href={content.secondaryCta.href}
                    variant="outline"
                  >
                    {content.secondaryCta.label}
                  </ButtonLink>
                </div>
              ) : content.ctaLabel ? (
                <ButtonLink
                  className="services-hero-btn"
                  aria-label={`Dynamic Dreamz - ${content.ctaLabel}`}
                  href={ctaHref}
                  variant="primary"
                >
                  {content.ctaLabel}
                </ButtonLink>
              ) : null}

              {content.badges && content.badges.length > 0 && (
                <div
                  className="global_brands_grid_wrap relative mt-10 flex items-center max-[1199px]:justify-center max-[767px]:-mx-[15px] max-[767px]:w-[calc(100%+30px)] max-[767px]:flex-wrap max-[767px]:overflow-hidden max-[767px]:before:absolute max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:block max-[767px]:before:h-full max-[767px]:before:w-px max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:top-1/2 max-[767px]:after:left-5 max-[767px]:after:block max-[767px]:after:h-px max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']"
                  aria-label="Partnerships and independent review profiles"
                >
                  {content.badges.map((badge, idx) => (
                    <div
                      className="global_brands_item relative border-r border-[#d9d9d9] px-4 first:pl-0 last:border-r-0 max-[767px]:w-1/2 max-[767px]:border-0 max-[767px]:p-3.5 max-[767px]:text-center"
                      key={`${badge.href}-${idx}`}
                    >
                      <a
                        className="flex items-center justify-center"
                        href={badge.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <Image
                          className="h-auto max-h-11 w-auto object-contain"
                          src={badge.src}
                          alt={badge.alt}
                          width={badge.width}
                          height={badge.height}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={cn(rightColClassName ?? defaultRightCol, content.videoSrc && "max-[992px]:hidden")}>
            {content.videoSrc ? (
              <div className="video-wrapper relative aspect-[1.5] max-[992px]:hidden">
                <div className="absolute inset-0 overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <video
                    aria-hidden="true"
                    autoPlay
                    className="h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    tabIndex={-1}
                  >
                    <source src={content.videoSrc} type="video/mp4" />
                  </video>
                </div>
                {content.videoLogo ? (
                  <span className={cn("absolute top-[70px] left-[-120px] z-10 flex h-[61px] w-[174px] items-center justify-center rounded-[16px] bg-white px-4 shadow-[0_6px_18px_rgba(0,0,0,0.04)] max-[1199px]:left-5", videoLogoClassName)}>
                    <Image
                      alt={content.videoLogo.alt}
                      className="h-auto w-auto brightness-0"
                      height={content.videoLogo.height}
                      src={content.videoLogo.src}
                      width={content.videoLogo.width}
                    />
                  </span>
                ) : null}
              </div>
            ) : content.image ? (
              <>
                <div className={cn("service-img flex justify-center", content.imageContainerClassName)}>
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
