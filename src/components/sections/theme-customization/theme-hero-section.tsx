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
      className="theme-customize-hero relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[992px]:pt-16 max-[768px]:pt-16"
      wrapperClassName="wrapper flex flex-wrap justify-between max-[1200px]:flex-col max-[1200px]:items-center max-[992px]:flex-col"
      textColumnClassName="left-col z-1 flex w-[51%] max-[1400px]:w-1/2 flex-col items-start justify-center py-[60px] max-[1200px]:w-full max-[1200px]:items-center max-[1200px]:text-center max-[1200px]:pt-15 max-[1200px]:pb-[30px] max-[992px]:py-10"
      textClassName="hero-content w-full"
      titleClassName="mb-2.5 font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1200px]:text-[40px] max-[1200px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-[40px]"
      descriptionClassName="my-0 mb-15 font-sans text-base font-medium leading-[28px] text-[#535353] max-[1200px]:mx-auto max-[1200px]:text-sm max-[1200px]:leading-6"
      mediaColumnClassName="right-col flex w-[43.182%] items-end justify-center max-[1400px]:w-[48%] max-[1200px]:w-full max-[1200px]:mt-6 max-[1200px]:hidden"
      mediaClassName="image-block flex w-full items-end justify-center pt-[60px] max-[1200px]:pt-0"
      imageClassName="block h-auto w-full max-w-[570px] object-contain object-bottom mx-auto"
      btnGroupClassName="max-[1400px]:min-[1200px]:flex-nowrap max-[1400px]:min-[1200px]:[&_a]:w-auto max-[1400px]:min-[1200px]:[&_a]:max-w-[280px] max-[1400px]:min-[1200px]:[&_a]:flex-1 max-[1400px]:min-[1200px]:[&_a]:h-auto max-[1400px]:min-[1200px]:[&_a]:min-h-[66px] max-[1400px]:min-[1200px]:[&_a]:py-[15px] max-[1400px]:min-[1200px]:[&_a]:px-6 max-[1400px]:min-[1200px]:[&_a_span]:whitespace-normal max-[1400px]:min-[1200px]:[&_a_span]:text-center max-[1400px]:min-[1200px]:[&_a_span]:leading-[1.2]"
    />
  );
}
