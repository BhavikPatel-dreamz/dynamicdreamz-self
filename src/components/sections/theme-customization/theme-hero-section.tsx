import { SplitImageHeroSection } from "@/components/sections/split-image-hero-section";

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
  content: ThemeHeroContent;
};

export function ThemeHeroSection({
  content,
}: ThemeHeroSectionProps) {
  return (
    <SplitImageHeroSection
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
      className="theme-customize-hero relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[991px]:pt-16 max-[767px]:pt-16"
      wrapperClassName="wrapper flex flex-wrap items-end justify-between max-[1199px]:flex-col max-[1199px]:items-center max-[991px]:flex-col"
      textColumnClassName="left-col z-1 flex w-[51%] flex-col items-start justify-center py-[60px] max-[1199px]:w-full max-[1199px]:items-center max-[1199px]:text-center max-[1199px]:py-8 max-[1199px]:pb-0 max-[767px]:py-10 max-[767px]:pb-10"
      textClassName="hero-content w-full"
      titleClassName="mb-2.5 font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]"
      descriptionClassName="mt-2.5 max-w-[690px] font-sans text-base font-medium leading-[28px] text-[#535353] max-[1199px]:mx-auto max-[1199px]:text-sm max-[1199px]:leading-6 max-[767px]:mt-3 max-[767px]:text-sm max-[767px]:leading-[27px]"
      mediaColumnClassName="right-col flex w-[43.182%] items-end justify-center max-[1399px]:w-[48%] max-[1199px]:w-full max-[1199px]:mt-6 max-[991px]:mt-6 max-[767px]:hidden"
      mediaClassName="image-block flex w-full items-end justify-center pt-[60px] max-[1199px]:pt-0"
      imageClassName="block h-auto w-full max-w-[570px] object-contain object-bottom mx-auto"
    />
  );
}
