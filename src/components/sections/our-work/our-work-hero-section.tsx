import Image from "next/image";

import styles from "@/components/sections/our-work/our-work-hero-section.module.css";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { proofLogos, showcaseImages } from "@/content/home";
import { ourWorkPage } from "@/content/our-work";
import { cn } from "@/lib/class-names";

function ShowcaseSet({
  decorative = false,
  liveCaseStudiesLayout = false,
}: {
  decorative?: boolean;
  liveCaseStudiesLayout?: boolean;
}) {
  return (
    <div
      className={cn(
        "scrolling_img shrink-0",
        liveCaseStudiesLayout &&
          "relative z-2 mt-6 max-[991.98px]:mt-0 max-[991.98px]:flex max-[991.98px]:flex-row",
        styles.showcaseSet,
      )}
    >
      <div
        className={cn(
          "grid shrink-0 grid-cols-2 gap-y-6 gap-x-4.25 pb-6 max-[991.98px]:flex max-[991.98px]:gap-y-4 max-[991.98px]:pb-0 max-[991.98px]:pr-4",
          liveCaseStudiesLayout &&
            "gap-x-[17px] pb-0 max-[991.98px]:gap-x-4 max-[991.98px]:pr-6",
        )}
        aria-hidden={decorative || undefined}
      >
        <div className="scrolling_img two_col_img col-span-2 overflow-hidden rounded-[15.93px] shadow-[6.371px_6.371px_15.929px_rgb(0_0_0/6%)] max-[991.98px]:h-[227px] max-[991.98px]:w-[342px] max-[991.98px]:shrink-0 max-[991.98px]:rounded-[10px]">
          <div className="item_img">
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
        </div>
        {[showcaseImages[1], showcaseImages[2]].map((image) => (
          <div className="scrolling_img overflow-hidden rounded-[15.93px] shadow-[6.371px_6.371px_15.929px_rgb(0_0_0/6%)] max-[991.98px]:h-[227px] max-[991.98px]:w-[105px] max-[991.98px]:shrink-0 max-[991.98px]:rounded-[10px]" key={image.src}>
            <div className="item_img">
              <Image
                className="h-auto w-full max-[991.98px]:h-full max-[991.98px]:object-cover max-[991.98px]:object-top"
                src={image.src}
                alt={decorative ? "" : image.alt}
                width={image.width}
                height={image.height}
                sizes="266px"
              />
            </div>
          </div>
        ))}
        {showcaseImages.slice(3).map((image) => (
          <div className="scrolling_img two_col_img col-span-2 overflow-hidden rounded-[15.93px] shadow-[6.371px_6.371px_15.929px_rgb(0_0_0/6%)] max-[991.98px]:h-[227px] max-[991.98px]:w-[342px] max-[991.98px]:shrink-0 max-[991.98px]:rounded-[10px]" key={image.src}>
            <div className="item_img">
              <Image
                className="h-auto w-full max-[991.98px]:h-full max-[991.98px]:object-cover max-[991.98px]:object-top"
                src={image.src}
                alt={decorative ? "" : image.alt}
                width={image.width}
                height={image.height}
                sizes="548px"
              />
            </div>
          </div>
        ))}
      </div>
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
  fullBleedShowcaseAtTablet?: boolean;
  layout?: "default" | "caseStudiesLive";
  typography?: "default" | "liveMontserrat";
};

export function OurWorkHeroSection({
  content,
  fullBleedShowcaseAtTablet = false,
  layout = "default",
  typography = "default",
}: OurWorkHeroSectionProps = {}) {
  const liveCaseStudiesLayout = layout === "caseStudiesLive";
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
        "hero-new-section overflow-hidden bg-cream pt-[91px]",
        typography === "liveMontserrat"
          ? "max-[991.98px]:pt-16"
          : "max-[767px]:pt-[74px]",
      )}
    >
      <Container
        className={cn(
          "container relative max-[991.98px]:max-w-none max-[991.98px]:px-0",
          !liveCaseStudiesLayout && "min-h-[568px] max-[991.98px]:min-h-0",
        )}
      >
        <div
          className={cn(
            "wrapper flex max-[991.98px]:flex-col",
            liveCaseStudiesLayout
              ? "flex-wrap justify-between"
              : "min-h-[568px] max-[991.98px]:min-h-0",
          )}
        >
          <div
            className={cn(
              "left-col z-1 flex flex-col justify-center",
              liveCaseStudiesLayout
                ? "w-[44.697%] py-[60px] max-[1399px]:w-1/2 max-[1199px]:w-[57%] max-[991.98px]:w-full max-[991.98px]:px-[calc((100%-680px)/2)] max-[991.98px]:pt-[30px] max-[991.98px]:pb-10 max-[767px]:px-[calc((100%-500px)/2)] max-[575px]:px-5"
                : "w-[58%] max-w-[710px] py-16 pr-10 max-[1199px]:w-[57%] max-[991.98px]:w-full max-[991.98px]:max-w-none max-[991.98px]:px-10 max-[767px]:px-5",
              typography === "liveMontserrat"
                ? "max-[991.98px]:items-center max-[991.98px]:text-center"
                : "max-[767px]:items-center max-[767px]:text-center",
            )}
          >
            <div className="hero-content">
              <p className="mb-3.75 flex items-center lg:justify-start justify-center text-[13px] leading-none font-semibold text-muted uppercase before:mr-3 before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] max-[767px]:mb-5 max-[767px]:text-xs">
                {heroContent.eyebrow}
              </p>
              <h1
                className={cn(
                  "max-w-[700px] text-ink max-[991.98px]:max-w-[680px]",
                  typography === "liveMontserrat"
                    ? "font-montserrat text-[50px] leading-[66px] font-bold tracking-[-1px] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]"
                    : "font-montserrat text-[50px] leading-[66px] font-bold tracking-[-1px] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]",
                )}
              >
                {heroContent.title}
              </h1>
              <p className="mt-2.5 max-w-[690px] text-base leading-[190%] font-medium text-muted max-[767px]:mt-4 max-[767px]:text-[15px] max-[767px]:leading-[29px]">
                {heroContent.description}
              </p>
              <div className="mt-6 flex gap-[15px] max-[767px]:w-full max-[767px]:flex-col max-[767px]:gap-2.5 lg:justify-start justify-center">
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
            </div>

            <div
              className={cn(
                "partnerships-review-profiles relative mt-[30px] flex items-center max-[767px]:mt-[30px] max-[767px]:w-full max-[767px]:flex-wrap before:hidden max-[767px]:before:absolute max-[767px]:before:top-1/2 max-[767px]:before:left-0 max-[767px]:before:block max-[767px]:before:h-px max-[767px]:before:w-full max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] after:hidden max-[767px]:after:absolute max-[767px]:after:top-0 max-[767px]:after:left-1/2 max-[767px]:after:block max-[767px]:after:h-full max-[767px]:after:w-px max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']",
                liveCaseStudiesLayout && "min-[992px]:-mx-[15px]",
              )}
              aria-label="Partnerships and independent review profiles"
            >
              {proofLogos.map((logo) => (
                <a
                  className={cn(
                    "relative flex min-h-[54px] items-center justify-center border-r border-[#d9d9d9] px-[15px] last:border-r-0 max-[767px]:w-1/2 max-[767px]:border-r-0 max-[767px]:p-[18px]",
                    !liveCaseStudiesLayout && "first:pl-0",
                  )}
                  key={logo.src}
                  href={logo.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Image
                    className="w-auto max-w-[100px]"
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            className={cn(
              liveCaseStudiesLayout
                ? "right-col relative flex w-[43.182%] shrink-0 overflow-hidden max-[1399px]:w-1/2 max-[1199px]:w-[43%] max-[991.98px]:h-[227px] max-[991.98px]:w-full max-[767px]:hidden"
                : "right-col absolute top-0 right-0 h-full w-[42%] overflow-hidden max-[1199px]:w-[43%] max-[991.98px]:relative max-[991.98px]:h-[277px] max-[991.98px]:w-full max-[767px]:hidden",
              fullBleedShowcaseAtTablet &&
              "max-[991.98px]:right-auto max-[991.98px]:left-1/2 max-[991.98px]:h-[227px]! max-[991.98px]:min-h-[227px] max-[991.98px]:w-screen max-[991.98px]:max-w-[100vw] max-[991.98px]:-translate-x-1/2",
            )}
          >
            <div className="scrolling_img_wrap relative w-full shrink-0 overflow-hidden">
              <div
                className={cn(
                  "scrolling_anim_img absolute top-0 max-[991.98px]:relative max-[991.98px]:left-0 max-[991.98px]:w-max",
                  liveCaseStudiesLayout
                    ? "left-0 h-full w-full px-[68px] max-[1199px]:px-5 max-[991.98px]:h-auto max-[991.98px]:px-0"
                    : "right-0 w-[calc(100%-18px)]",
                )}
              >
                <div className="scrolling_track max-[991.98px]:flex max-[991.98px]:flex-row max-[991.98px]:flex-nowrap">
                  <ShowcaseSet liveCaseStudiesLayout={liveCaseStudiesLayout} />
                  <ShowcaseSet decorative liveCaseStudiesLayout={liveCaseStudiesLayout} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
