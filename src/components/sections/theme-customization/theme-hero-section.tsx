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
  className = "theme-customize-hero overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[991px]:pt-16",
  containerClassName,
  descriptionClassName = "mb-0 text-base font-medium leading-7 text-muted max-[1199px]:text-sm max-[1199px]:leading-6",
  imageClassName,
  imageStretchesOnDesktop = false,
  mediaClassName,
  mediaColumnClassName,
  secondaryDescriptionClassName = "mt-4 mb-6 text-lg font-medium leading-[34.2px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]",
  tabletImageHalfWidth = false,
  tabletImageTopSpacing = false,
  textClassName = "hero-content",
  textColumnClassName = "left-col flex w-[51%] flex-col items-start justify-center py-[60px] max-[1399px]:w-1/2 max-[1199px]:w-full max-[1199px]:pb-8 max-[1199px]:text-center max-[991px]:py-10",
  titleClassName = "mb-2.5 inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-0.7px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]",
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
        cn(
          "block h-auto w-full object-contain object-bottom",
          imageStretchesOnDesktop ? "max-w-none" : "max-w-[570px]",
        )
      }
      mediaClassName={
        mediaClassName ?? "image-block flex w-full items-end pt-[60px]"
      }
      mediaColumnClassName={
        mediaColumnClassName ??
        cn(
          "right-col flex w-[43.182%] self-end items-end justify-end max-[1399px]:w-[48%] max-[1199px]:mx-auto max-[1199px]:w-1/2 max-[767px]:w-full",
          tabletImageHalfWidth ? "max-[767px]:w-full" : "max-[767px]:w-full",
          tabletImageTopSpacing && "max-[992px]:mt-[25px]",
        )
      }
      secondaryDescriptionClassName={secondaryDescriptionClassName}
      textClassName={textClassName}
      textColumnClassName={textColumnClassName}
      titleClassName={titleClassName}
      wrapperClassName={
        wrapperClassName ??
        cn(
          "wrapper flex flex-wrap justify-between max-[1199px]:flex-col",
          alignItemsEnd ? "items-end max-[1199px]:items-center" : "items-start",
        )
      }
    />
  );
}
