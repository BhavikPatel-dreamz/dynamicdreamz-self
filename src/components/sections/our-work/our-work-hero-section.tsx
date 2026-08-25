import Image from "next/image";

import styles from "@/components/sections/our-work/our-work-hero-section.module.css";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { proofLogos, showcaseImages } from "@/content/home";
import { ourWorkPage } from "@/content/our-work";
import { cn } from "@/lib/class-names";

function ShowcaseSet({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="grid shrink-0 grid-cols-2 gap-6 pb-6 max-[991.98px]:flex max-[991.98px]:gap-4 max-[991.98px]:pb-0 max-[991.98px]:pr-4" aria-hidden={decorative || undefined}>
      <div className="col-span-2 overflow-hidden rounded-2xl shadow-[6px_6px_16px_rgb(0_0_0/6%)] max-[991.98px]:h-[227px] max-[991.98px]:w-[342px] max-[991.98px]:shrink-0 max-[991.98px]:rounded-[10px]">
        <Image
          className="h-auto w-full max-[991.98px]:h-full max-[991.98px]:object-cover max-[991.98px]:object-top"
          src={showcaseImages[0].src}
          alt={decorative ? "" : showcaseImages[0].alt}
          width={showcaseImages[0].width}
          height={showcaseImages[0].height}
          sizes="548px"
          priority={!decorative}
        />
      </div>
      {[showcaseImages[1], showcaseImages[2]].map((image) => (
        <div className="overflow-hidden rounded-2xl shadow-[6px_6px_16px_rgb(0_0_0/6%)] max-[991.98px]:h-[227px] max-[991.98px]:w-[105px] max-[991.98px]:shrink-0 max-[991.98px]:rounded-[10px]" key={image.src}>
          <Image
            className="h-auto w-full max-[991.98px]:h-full max-[991.98px]:object-cover max-[991.98px]:object-top"
            src={image.src}
            alt={decorative ? "" : image.alt}
            width={image.width}
            height={image.height}
            sizes="266px"
          />
        </div>
      ))}
      {showcaseImages.slice(3).map((image) => (
        <div className="col-span-2 overflow-hidden rounded-2xl shadow-[6px_6px_16px_rgb(0_0_0/6%)] max-[991.98px]:h-[227px] max-[991.98px]:w-[342px] max-[991.98px]:shrink-0 max-[991.98px]:rounded-[10px]" key={image.src}>
          <Image
            className="h-auto w-full max-[991.98px]:h-full max-[991.98px]:object-cover max-[991.98px]:object-top"
            src={image.src}
            alt={decorative ? "" : image.alt}
            width={image.width}
            height={image.height}
            sizes="548px"
          />
        </div>
      ))}
    </div>
  );
}

export type HeroSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

type OurWorkHeroSectionProps = {
  content?: HeroSectionContent;
  typography?: "default" | "liveMontserrat";
};

export function OurWorkHeroSection({
  content,
  typography = "default",
}: OurWorkHeroSectionProps = {}) {
  const heroContent = content ?? {
    eyebrow: ourWorkPage.hero.eyebrow,
    title: ourWorkPage.hero.title,
    description: ourWorkPage.hero.description,
    primaryCta: ourWorkPage.hero.primaryCta,
    secondaryCta: ourWorkPage.hero.secondaryCta,
  };

  return (
    <section
      className={cn(
        "overflow-hidden bg-cream pt-[90px]",
        typography === "liveMontserrat"
          ? "max-[991.98px]:pt-16"
          : "max-[767px]:pt-[74px]",
      )}
    >
      <Container className="relative min-h-[568px] max-[991.98px]:min-h-0 max-[991.98px]:max-w-none max-[991.98px]:px-0">
        <div className="flex min-h-[568px] max-[991.98px]:min-h-0 max-[991.98px]:flex-col">
          <div
            className={cn(
              "z-1 flex w-[58%] max-w-[710px] flex-col justify-center py-16 pr-10 max-[1199px]:w-[57%] max-[991.98px]:w-full max-[991.98px]:max-w-none max-[991.98px]:px-[calc((100%-680px)/2)] max-[991.98px]:pt-[30px] max-[991.98px]:pb-10 max-[767px]:px-5 max-[767px]:py-[34px]",
              typography === "liveMontserrat"
                ? "max-[991.98px]:items-center max-[991.98px]:text-center"
                : "max-[767px]:items-center max-[767px]:text-center",
            )}
          >
            <p className="mb-6 flex items-center text-sm leading-none font-semibold text-ink uppercase before:mr-3 before:h-px before:w-[30px] before:bg-brand-red before:content-[''] max-[767px]:mb-5 max-[767px]:text-xs">
              {heroContent.eyebrow}
            </p>
            <h1
              className={cn(
                "max-w-[700px] text-ink max-[991.98px]:max-w-[680px]",
                typography === "liveMontserrat"
                  ? "font-montserrat text-[50px] leading-[66px] font-bold tracking-[-1px] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]"
                  : "text-[50px] leading-[1.32] font-medium max-[1199px]:text-[44px] max-[991.98px]:text-[40px] max-[767px]:text-[30px] max-[767px]:leading-[1.28]",
              )}
            >
              {heroContent.title}
            </h1>
            <p className="mt-4 max-w-[690px] text-base leading-[30px] font-medium text-muted max-[767px]:mt-4 max-[767px]:text-[15px] max-[767px]:leading-[29px]">
              {heroContent.description}
            </p>
            <div className="mt-6 flex gap-[15px] max-[767px]:w-full max-[767px]:flex-col max-[767px]:gap-2.5">
              {heroContent.primaryCta ? (
                <ButtonLink className="max-[767px]:w-full" href={heroContent.primaryCta.href} variant="primary">
                  {heroContent.primaryCta.label}
                </ButtonLink>
              ) : null}
              {heroContent.secondaryCta ? (
                <ButtonLink className="max-[767px]:w-full" href={heroContent.secondaryCta.href} variant="outline">
                  {heroContent.secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
            <div
              className="relative mt-[30px] flex items-center max-[767px]:mt-[30px] max-[767px]:w-full max-[767px]:flex-wrap before:hidden max-[767px]:before:absolute max-[767px]:before:top-1/2 max-[767px]:before:left-0 max-[767px]:before:block max-[767px]:before:h-px max-[767px]:before:w-full max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] after:hidden max-[767px]:after:absolute max-[767px]:after:top-0 max-[767px]:after:left-1/2 max-[767px]:after:block max-[767px]:after:h-full max-[767px]:after:w-px max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']"
              aria-label="Partnerships and independent review profiles"
            >
              {proofLogos.map((logo) => (
                <a
                  className="relative flex min-h-[54px] items-center justify-center border-r border-[#d9d9d9] px-[15px] first:pl-0 last:border-r-0 max-[767px]:w-1/2 max-[767px]:border-r-0 max-[767px]:p-[18px]"
                  key={logo.src}
                  href={logo.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Image
                    className="h-auto max-h-[54px] w-auto max-w-full max-[1199px]:max-h-11 max-[767px]:max-w-[126px]"
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full w-[42%] overflow-hidden max-[1199px]:w-[43%] max-[991.98px]:relative max-[991.98px]:h-[277px] max-[991.98px]:w-full max-[767px]:hidden">
            <div className={cn("absolute top-0 right-0 w-[calc(100%-18px)] max-[991.98px]:left-0 max-[991.98px]:flex max-[991.98px]:w-max", styles.showcaseTrack)}>
              <ShowcaseSet />
              <ShowcaseSet decorative />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
