import { SplitImageHeroSection } from "@/components/sections/split-image-hero-section";
import { cn } from "@/lib/class-names";

export type ThemeHeroContent = {
  eyebrow?: string | readonly string[];
  title: string;
  description: string;
  secondaryDescription?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaAriaLabel?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  secondaryCtaAriaLabel?: string;
  secondaryCtaTarget?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ThemeHeroSectionProps = {
  alignItemsEnd?: boolean;
  content: ThemeHeroContent;
  className?: string;
  containerClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  imageStretchesOnDesktop?: boolean;
  mediaClassName?: string;
  mediaColumnClassName?: string;
  secondaryDescriptionClassName?: string;
  tabletImageHalfWidth?: boolean;
  tabletImageTopSpacing?: boolean;
  textClassName?: string;
  textColumnClassName?: string;
  titleClassName?: string;
  wrapperClassName?: string;
};

export function ThemeHeroSection({
  alignItemsEnd = true,
  content,
  className = "inner-hero-sec theme-customization-service-sec relative overflow-hidden bg-white pt-[190px] pb-0 max-[992px]:pt-[100px]",
  containerClassName,
  descriptionClassName = "mt-6 mb-6 text-lg font-medium leading-[34.2px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
  imageClassName,
  imageStretchesOnDesktop = false,
  mediaClassName,
  mediaColumnClassName,
  secondaryDescriptionClassName = "mt-4 mb-6 text-lg font-medium leading-[34.2px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
  tabletImageHalfWidth = false,
  tabletImageTopSpacing = false,
  textClassName = "inner-hero-content",
  textColumnClassName,
  titleClassName = "inline-block font-montreal-medium text-[50px] font-medium leading-[66px] tracking-[0] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]",
  wrapperClassName,
}: ThemeHeroSectionProps) {
  return (
    <SplitImageHeroSection
      breakClassName="max-[1199px]:hidden"
      className={className}
      containerClassName={containerClassName}
      content={{
        ...content,
        ctaAriaLabel:
          content.ctaAriaLabel ??
          (content.ctaText ? `Dynamic Dreamz - ${content.ctaText}` : undefined),
        ctaLabel: content.ctaText,
        secondaryCtaAriaLabel:
          content.secondaryCtaAriaLabel ??
          (content.secondaryCtaText
            ? `Dynamic Dreamz - ${content.secondaryCtaText}`
            : undefined),
        secondaryCtaHref: content.secondaryCtaHref,
        secondaryCtaLabel: content.secondaryCtaText,
        secondaryCtaTarget: content.secondaryCtaTarget,
      }}
      descriptionClassName={descriptionClassName}
      imageClassName={
        imageClassName ??
        cn("w-full", imageStretchesOnDesktop ? "max-w-none" : "max-w-[570px]")
      }
      mediaClassName={
        mediaClassName ?? "service-img flex w-full items-end justify-center"
      }
      mediaColumnClassName={
        mediaColumnClassName ??
        cn(
          "right-col flex w-1/2 items-end justify-end max-[992px]:mx-auto max-[767px]:justify-center",
          tabletImageHalfWidth ? "max-[767px]:w-full" : "max-[767px]:w-full",
          tabletImageTopSpacing && "max-[992px]:mt-[25px]",
        )
      }
      secondaryDescriptionClassName={secondaryDescriptionClassName}
      textClassName={textClassName}
      textColumnClassName={
        textColumnClassName ??
        "left-col w-1/2 pb-14 max-[992px]:w-full max-[992px]:text-center"
      }
      titleClassName={titleClassName}
      wrapperClassName={
        wrapperClassName ??
        cn(
          "inner-wrapper flex flex-wrap justify-between",
          alignItemsEnd ? "items-start" : "items-end",
        )
      }
    />
  );
}
