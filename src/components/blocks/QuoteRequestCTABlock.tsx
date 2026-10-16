import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

const defaultCtaBannerCopy = {
  heading: sharedUiCopy.ctaBanner.heading,
  ctaLabel: sharedUiCopy.ctaBanner.label,
} as const;

export type QuoteRequestCTABlockProps = {
  heading?: string | readonly string[];
  description?: string | readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
  content?: {
    heading?: string | readonly string[];
    description?: string | readonly string[];
    ctaLabel?: string;
    ctaHref?: string;
    label?: string;
    title?: string;
    buttonText?: string;
    buttonLink?: string;
  };
};

export type CtaBannerSectionProps = QuoteRequestCTABlockProps;

export function QuoteRequestCTABlock({
  heading,
  description,
  ctaLabel,
  ctaHref,
  content,
}: QuoteRequestCTABlockProps = {}) {
  const finalHeading = heading ?? content?.heading ?? content?.title ?? defaultCtaBannerCopy.heading;
  const finalDescription = description ?? content?.description;
  const finalCtaLabel = ctaLabel ?? content?.ctaLabel ?? content?.label ?? content?.buttonText ?? defaultCtaBannerCopy.ctaLabel;
  const finalCtaHref = ctaHref ?? content?.ctaHref ?? content?.buttonLink ?? siteConfig.quotePath;

  const isMobileAppCta = Boolean(
    finalCtaHref?.includes("mobile-app") ||
      (typeof finalHeading === "string" && finalHeading.toLowerCase().includes("mobile app")),
  );

  return (
    <section
      className="request-banner flex min-h-[119px] items-center bg-[linear-gradient(97.18deg,#15c064_28.5%,#00d1ff_91.82%)] py-[35px]"
      aria-labelledby="cta-banner-title"
    >
      <Container
        className={
          isMobileAppCta ? "min-[1400px]:max-w-[1408px] px-[15px]" : undefined
        }
      >
        <div
          data-aos="fade-up"
          className="flex flex-wrap items-center justify-center gap-8 text-center max-[1199px]:gap-5"
        >
          <div className="text-center">
            <h2
              id="cta-banner-title"
              className={cn(
                "font-display text-[30px] font-normal leading-[43.2px] tracking-[-0.6px] text-white max-[1199px]:text-[26px] max-[1199px]:leading-9 max-[767px]:text-[20px] max-[767px]:leading-7",
                isMobileAppCta && "!font-montreal-medium !font-normal !tracking-normal",
              )}
            >
              {formatBrText(finalHeading)}
            </h2>
            {finalDescription ? (
              <p className="mt-2 text-base font-medium text-white/90 max-[767px]:text-sm">
                {formatBrText(finalDescription)}
              </p>
            ) : null}
          </div>
          <Link
            href={finalCtaHref}
            className="inline-flex min-h-[50px] items-center justify-center rounded-[30px] bg-white px-6 py-[15px] font-montserrat text-base font-bold uppercase text-[#121212] transition-colors duration-300 hover:bg-black hover:text-white"
          >
            {finalCtaLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}

export const CtaBannerSection = QuoteRequestCTABlock;

export type WhiteLabelFinalCta = {
  title: string | readonly string[];
  description: string | readonly string[];
  label: string;
};

export type WhiteLabelFinalCtaSectionProps = {
  cta: WhiteLabelFinalCta;
  ctaHref?: string;
  variant?: "default" | "certifiedDevelopers" | "shopifyHours";
};

export function WhiteLabelFinalCtaSection({
  cta,
  ctaHref = siteConfig.quotePath,
}: WhiteLabelFinalCtaSectionProps) {
  return (
    <section className="bg-white py-[52px] max-[1199px]:py-[52px] max-[992px]:py-10">
      <Container className="max-[575px]:px-4">
        <div data-aos="fade-up" className="flex items-center justify-between max-[992px]:flex-wrap max-[992px]:gap-5">
          <div className="flex-1 max-w-[560px] flex-none pr-0 max-[992px]:mx-auto max-[992px]:max-w-none max-[992px]:text-center">
            <h2 className="mb-[15px] font-display text-[30px] leading-[42px] font-medium text-ink max-[1199px]:text-[26px] max-[1199px]:leading-9 max-[992px]:mb-2.5 max-[992px]:text-[22px] max-[992px]:leading-8 max-[767px]:tracking-[-0.48px]">
              {formatBrText(cta.title)}
            </h2>
            <p className="text-base leading-[30.4px] font-medium text-muted max-[1199px]:leading-[26px] max-[992px]:text-[15px] max-[992px]:leading-[22px]">
              {formatBrText(cta.description)}
            </p>
          </div>
          <div className="shrink-0 max-[992px]:w-full max-[992px]:pb-[10.4px] max-[992px]:text-center">
            <Link
              className="inline-flex min-h-[46px] items-center justify-center rounded-[30px] bg-brand-red px-8 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-black max-[992px]:min-h-0 max-[992px]:py-3 max-[992px]:text-sm max-[992px]:leading-[18px]"
              href={ctaHref}
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export type ImageCtaSectionProps = {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string;
};

export function ImageCtaSection({
  heading,
  description,
  ctaLabel,
  ctaHref,
  backgroundImage,
}: ImageCtaSectionProps) {
  return (
    <section className="thinking-migration-box pb-20">
      <Container>
        <div
          data-aos="fade-up"
          className="rounded-[14px] bg-cover bg-center bg-no-repeat px-5 py-[31px] text-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h2 className="font-display text-[28px] font-medium leading-[137%] tracking-[-0.32px] text-white max-[767px]:text-[22px]">
            {heading}
          </h2>
          <p className="mb-[34px] text-base font-medium leading-[190%] text-white max-[767px]:text-sm max-[767px]:leading-[26px]">
            {description}
          </p>
          <ButtonLink className="text-white" href={ctaHref} variant="outline">
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export type LetsBuildContent = {
  heading: string | readonly string[];
  description: string | readonly string[];
  ctaLabel: string;
  ctaHref: string;
};

export type LetsBuildSectionProps = {
  content: LetsBuildContent;
  id?: string;
};

export function LetsBuildSection({
  content,
  id,
}: LetsBuildSectionProps) {
  return (
    <section className="lets-build-section relative z-[1] bg-[linear-gradient(97deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-[58px] text-center before:absolute before:left-0 before:top-0 before:-z-[1] before:h-[111px] before:w-[187px] before:bg-[url('/assets/services/mobile-application-development/backgrounds/cta-circle-left.svg')] before:bg-contain before:bg-left before:bg-no-repeat after:absolute after:bottom-0 after:right-0 after:-z-[1] after:h-[116px] after:w-[206px] after:bg-[url('/assets/services/mobile-application-development/backgrounds/cta-circle-right.svg')] after:bg-contain after:bg-right after:bg-no-repeat max-[767px]:py-10" id={id}>
      <Container>
        <div data-aos="fade-up" className="lets-build-text mx-auto max-w-[880px]">
          <h2 className="mb-[15px] font-display text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {formatBrText(content.heading)}
          </h2>
          <p className="mb-6 text-base font-normal leading-[30.4px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
            {formatBrText(content.description)}
          </p>
          <div className="pt-2">
            <ButtonLink
              aria-label={content.ctaLabel}
              href={content.ctaHref}
              variant="primary"
            >
              {content.ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
