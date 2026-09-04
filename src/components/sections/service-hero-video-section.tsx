import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type HeroBadge = {
  label?: string;
  icon: string;
  alt: string;
  href: string;
  width: number;
  height: number;
};

export type ServiceHeroVideoContent = {
  eyebrow?: string;
  eyebrowSpans?: readonly [string, string] | readonly string[];
  title: string;
  titleAccent?: string;
  subtitle?: string;
  lead?: string;
  paragraphs: readonly string[];
  cta: string;
  ctaHref: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
  video: string;
  badges: readonly HeroBadge[];
};

export type ServiceHeroVideoSectionProps = {
  content: ServiceHeroVideoContent;
  className?: string;
};

export function ServiceHeroVideoSection({
  content,
  className,
}: ServiceHeroVideoSectionProps) {
  return (
    <section
      className={cn(
        "hero-new-section overflow-hidden bg-[#f7f4e9] pt-[91px] max-[991px]:pt-16",
        className,
      )}
    >
      <Container>
        <div className="wrapper flex flex-wrap items-center justify-between">
          <div className="left-col flex w-[51%] flex-col items-start justify-center py-[60px] max-[1399px]:w-[50%] max-[1199px]:w-full max-[1199px]:items-center max-[1199px]:py-10 max-[1199px]:text-center max-[767px]:py-8">
            <div className="hero-content w-full">
              {content.eyebrowSpans && content.eyebrowSpans.length > 0 ? (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:justify-center max-[767px]:flex max-[767px]:w-full max-[767px]:justify-start max-[767px]:pl-6 max-[767px]:text-left max-[767px]:before:hidden">
                  {content.eyebrowSpans.map((span, idx) => (
                    <span
                      className={cn(
                        "relative inline-flex items-center font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[767px]:text-[10px]",
                        idx === 0 &&
                          "max-[767px]:before:absolute max-[767px]:before:-left-6 max-[767px]:before:top-1/2 max-[767px]:before:-translate-y-1/2 max-[767px]:before:inline-block max-[767px]:before:h-[2px] max-[767px]:before:w-[15px] max-[767px]:before:bg-brand-red max-[767px]:before:content-['']",
                        idx > 0 &&
                          "ml-2.5 pl-2.5 after:absolute after:-left-[2px] after:top-1/2 after:-translate-y-1/2 after:inline-block after:size-[3px] after:rounded-full after:bg-[#535353] after:content-['']",
                      )}
                      key={span}
                    >
                      {span}
                    </span>
                  ))}
                </div>
              ) : content.eyebrow ? (
                <div className="eyebrow relative mb-[15px] inline-flex items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1199px]:justify-center max-[767px]:flex max-[767px]:w-full max-[767px]:justify-start max-[767px]:pl-6 max-[767px]:text-left max-[767px]:before:hidden">
                  <span className="relative inline-flex items-center font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[767px]:text-[10px] max-[767px]:before:absolute max-[767px]:before:-left-6 max-[767px]:before:top-1/2 max-[767px]:before:-translate-y-1/2 max-[767px]:before:inline-block max-[767px]:before:h-[2px] max-[767px]:before:w-[15px] max-[767px]:before:bg-brand-red max-[767px]:before:content-['']">
                    {content.eyebrow}
                  </span>
                </div>
              ) : null}

              <h1 className="mb-2.5 font-montreal-medium text-[50px] font-medium leading-[60px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
                {content.titleAccent
                  ? content.title.replace(content.titleAccent, "").trim() + " "
                  : content.title}
                {content.titleAccent ? (
                  <i className="font-editorial-italic font-normal italic text-[#ad5151]">
                    {content.titleAccent}
                  </i>
                ) : null}
              </h1>

              {content.subtitle ? (
                <span className="h4 mb-2.5 block font-montserrat text-base font-semibold leading-7 text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-6 max-[767px]:text-sm max-[767px]:leading-[27px]">
                  {content.subtitle}
                </span>
              ) : content.lead ? (
                <p className="mb-2.5 font-sans text-xl font-medium text-ink max-[767px]:text-lg">
                  {content.lead}
                </p>
              ) : null}

              {content.paragraphs.map((p, index) => (
                <p
                  className="mb-[15px] font-sans text-base font-medium leading-7 text-[#535353] max-[1199px]:text-sm max-[1199px]:leading-6 max-[767px]:text-sm max-[767px]:leading-[27px]"
                  key={index}
                >
                  {p}
                </p>
              ))}

              <div className="btn-group flex items-center pt-2.5 max-[1199px]:justify-center max-[767px]:w-full max-[767px]:flex-col max-[767px]:items-center">
                <ButtonLink
                  className="min-h-[50px] px-6 py-[15px] font-montserrat text-base font-bold uppercase max-[767px]:w-full"
                  href={content.ctaHref}
                  variant="primary"
                >
                  {content.cta}
                </ButtonLink>
                {content.secondaryCta ? (
                  <ButtonLink
                    className="ml-[15px] min-h-[50px] px-6 py-[15px] font-montserrat text-base font-bold uppercase max-[767px]:ml-0 max-[767px]:mt-2.5 max-[767px]:w-full"
                    href={content.secondaryCta.href}
                    variant="outline"
                  >
                    {content.secondaryCta.label}
                  </ButtonLink>
                ) : null}
              </div>

              <div className="global_brands_grid_wrap relative mt-[30px] -mx-[15px] flex flex-wrap items-center max-[1199px]:justify-center max-[767px]:overflow-hidden max-[767px]:before:absolute max-[767px]:before:left-1/2 max-[767px]:before:top-0 max-[767px]:before:h-full max-[767px]:before:w-[1px] max-[767px]:before:-translate-x-1/2 max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] max-[767px]:after:absolute max-[767px]:after:left-5 max-[767px]:after:top-1/2 max-[767px]:after:h-[1px] max-[767px]:after:w-[calc(100%-40px)] max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']">
                {content.badges.map((badge, idx) => (
                  <div
                    className={cn(
                      "global_brands_item px-[15px] max-[1199px]:px-3",
                      "border-r border-[#d9d9d9] last:border-r-0 max-[767px]:border-r-0",
                      "max-[767px]:w-1/2 max-[767px]:p-[15px] max-[767px]:text-center",
                    )}
                    key={badge.label || idx}
                  >
                    <a
                      className="flex items-center justify-center"
                      href={badge.href}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        alt={badge.alt}
                        className="h-auto max-w-[100px] object-contain max-[767px]:max-h-[44px]"
                        height={badge.height}
                        src={badge.icon}
                        width={badge.width}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right-col flex w-[43.182%] max-[1399px]:w-[40%] max-[991px]:hidden">
            <div className="video-wrapper relative w-full min-h-[386px] overflow-hidden rounded-[20px]">
              <video
                autoPlay
                className="w-full rounded-[20px] object-cover"
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src={content.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
