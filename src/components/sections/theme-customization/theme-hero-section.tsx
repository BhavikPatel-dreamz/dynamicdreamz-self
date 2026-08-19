import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type ThemeHeroContent = {
  title: string;
  description: string;
  secondaryDescription?: string;
  ctaText?: string;
  ctaHref?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ThemeHeroSectionProps = {
  content: ThemeHeroContent;
  className?: string;
};

export function ThemeHeroSection({
  content,
  className = "inner-hero-sec theme-customization-service-sec relative overflow-hidden bg-white pt-[190px] pb-0 max-[991px]:pt-[100px]",
}: ThemeHeroSectionProps) {
  const ctaHref = content.ctaHref ?? "/request-quote";

  return (
    <section className={className}>
      <Container>
        <div className="inner-wrapper flex flex-wrap items-end justify-between">
          <div className="left-col w-1/2 pb-[50px] max-[991px]:w-full max-[991px]:text-center max-[991px]:pb-8">
            <div className="inner-hero-content">
              <h1 className="inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]">
                {formatBrText(content.title, "max-[1199px]:hidden")}
              </h1>
              <p className="mt-6 mb-6 text-base font-normal leading-[30.4px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
                {formatBrText(content.description, "max-[1199px]:hidden")}
              </p>
              {content.secondaryDescription && (
                <p className="mt-4 mb-6 text-base font-normal leading-[30.4px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
                  {formatBrText(content.secondaryDescription, "max-[1199px]:hidden")}
                </p>
              )}
              {content.ctaText && (
                <ButtonLink
                  aria-label={`Dynamic Dreamz - ${content.ctaText}`}
                  href={ctaHref}
                  variant="primary"
                >
                  {content.ctaText}
                </ButtonLink>
              )}
            </div>
          </div>
          <div className="right-col flex w-1/2 justify-end items-end max-[991px]:mx-auto max-[991px]:w-full max-[991px]:justify-center">
            <div className="service-img w-full flex justify-center items-end">
              <Image
                alt={content.image.alt}
                className="h-auto w-full max-w-[570px] object-contain object-bottom"
                height={content.image.height}
                priority
                src={content.image.src}
                width={content.image.width}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
