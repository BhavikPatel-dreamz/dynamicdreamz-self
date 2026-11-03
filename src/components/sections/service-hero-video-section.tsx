import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";
import { cn } from "@/lib/class-names";

export type HeroBadge = {
  label?: string;
  name?: string;
  icon?: string;
  src?: string;
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
  description?: string;
  body?: string;
  paragraphs?: readonly (string | readonly string[])[];
  cta?: string;
  ctaHref?: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
  video?: string;
  videoPoster?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  };
  badges?: readonly HeroBadge[];
};

export type ServiceHeroVideoSectionProps = {
  content: ServiceHeroVideoContent;
  className?: string;
  wrapperClassName?: string;
  imageClassName?: string;
  titleAccentTag?: "i" | "span";
  titleAccentClassName?: string;
  titleAccentPosition?: "start" | "end";
  rightColClassName?: string;
};

export function ServiceHeroVideoSection({
  content,
  className,
  wrapperClassName,
  imageClassName,
  titleAccentTag = "i",
  titleAccentClassName,
  titleAccentPosition = "end",
  rightColClassName,
}: ServiceHeroVideoSectionProps) {
  const isShopifyMigration = wrapperClassName?.includes("hero-shopify-migration");
  const isThreeBadges = content.badges?.length === 3;

  return (
    <section
      className={cn(
        "hero-new-section overflow-hidden bg-[#f7f4e9] pt-[91px] max-[992px]:pt-16",
        className,
      )}
    >
      <Container>
        <div className={cn("wrapper flex flex-wrap items-center justify-between", wrapperClassName)}>
          <div
            className={cn(
              "left-col flex w-[51%] flex-col items-start justify-center py-[60px] max-[1200px]:w-full max-[1200px]:items-center max-[1200px]:py-10 max-[1200px]:text-center max-[768px]:py-8",
              isShopifyMigration ? "max-[1399px]:w-[59%]" : "max-[1399px]:w-[50%]",
            )}
          >
            <div className="hero-content w-full">
              {content.eyebrowSpans && content.eyebrowSpans.length > 0 ? (
                <div className="eyebrow relative mb-[15px] flex w-fit items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1200px]:mx-auto max-[1200px]:justify-center max-[1200px]:before:top-[6px] max-[768px]:mx-auto max-[768px]:justify-center max-[768px]:pl-6 max-[768px]:before:top-1 max-[768px]:before:w-[15px]">
                  {content.eyebrowSpans.map((span, idx) => (
                    <span
                      className={cn(
                        "relative inline-flex items-center font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[768px]:text-[10px]",
                        idx === 0 &&
                          "max-[768px]:before:absolute max-[768px]:before:-left-6 max-[768px]:before:top-1/2 max-[768px]:before:-translate-y-1/2 max-[768px]:before:inline-block max-[768px]:before:h-[2px] max-[768px]:before:w-[15px] max-[768px]:before:bg-brand-red max-[768px]:before:content-['']",
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
                <div className="eyebrow relative mb-[15px] flex w-fit items-center pl-10 before:absolute before:left-0 before:top-[7px] before:inline-block before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[1200px]:mx-auto max-[1200px]:justify-center max-[1200px]:before:top-[6px] max-[768px]:mx-auto max-[768px]:justify-center max-[768px]:pl-6 max-[768px]:before:top-1 max-[768px]:before:w-[15px]">
                  <span className="relative inline-flex items-center font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] max-[768px]:text-[10px] max-[768px]:before:absolute max-[768px]:before:-left-6 max-[768px]:before:top-1/2 max-[768px]:before:-translate-y-1/2 max-[768px]:before:inline-block max-[768px]:before:h-[2px] max-[768px]:before:w-[15px] max-[768px]:before:bg-brand-red max-[768px]:before:content-['']">
                    {content.eyebrow}
                  </span>
                </div>
              ) : null}

              <h1 className="mb-2.5 font-montreal-medium text-[50px] font-normal leading-[60px] text-ink max-[1200px]:text-[40px] max-[1200px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-[40px]">
                {content.titleAccent && titleAccentPosition === "start" ? (
                  <>
                    {titleAccentTag === "span" ? (
                      <span
                        className={cn(
                          "font-normal not-italic text-[#ad5151]",
                          titleAccentClassName,
                        )}
                      >
                        {content.titleAccent}
                      </span>
                    ) : (
                      <i
                        className={cn(
                          "font-normal not-italic text-[#ad5151]",
                          titleAccentClassName,
                        )}
                      >
                        {content.titleAccent}
                      </i>
                    )}
                    {" "}
                  </>
                ) : null}
                {content.titleAccent
                  ? content.title.replace(content.titleAccent, "").trim() +
                    (titleAccentPosition !== "start" ? " " : "")
                  : content.title}
                {content.titleAccent && titleAccentPosition !== "start" ? (
                  titleAccentTag === "span" ? (
                    <span
                      className={cn(
                        "font-normal not-italic text-[#ad5151]",
                        titleAccentClassName,
                      )}
                    >
                      {content.titleAccent}
                    </span>
                  ) : (
                    <i
                      className={cn(
                        "font-normal not-italic text-[#ad5151]",
                        titleAccentClassName,
                      )}
                    >
                      {content.titleAccent}
                    </i>
                  )
                ) : null}
              </h1>

              {content.subtitle ? (
                <span className="h4 mb-2.5 block font-montserrat text-base font-semibold leading-7 text-[#535353] max-[1200px]:text-sm max-[1200px]:leading-6 max-[768px]:text-base max-[768px]:leading-[27px]">
                  {content.subtitle}
                </span>
              ) : content.lead ? (
                <p className="mb-2.5 font-sans text-xl font-medium text-ink max-[768px]:text-lg">
                  {content.lead}
                </p>
              ) : null}

              {(content.paragraphs ?? []).map((p, index) => (
                <p
                  className="mb-[15px] font-sans text-base font-medium leading-7 text-[#535353] max-[1200px]:text-sm max-[1200px]:leading-6 max-[768px]:text-sm max-[768px]:leading-[27px]"
                  key={index}
                >
                  {formatBrText(p)}
                </p>
              ))}

              {content.cta && content.ctaHref ? (
                <div className="btn-group flex items-center gap-2.5 pt-2.5 max-[1200px]:justify-center max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-2.5 [&_a]:max-[768px]:w-full">
                  <ButtonLink
                    className="px-5"
                    href={content.ctaHref}
                    variant="primary"
                  >
                    {content.cta}
                  </ButtonLink>
                  {content.secondaryCta ? (
                    <ButtonLink
                      className="px-5"
                      href={content.secondaryCta.href}
                      variant="outline"
                    >
                      {content.secondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
              ) : null}

              {content.badges && content.badges.length > 0 ? (
                <div
                  className={cn(
                    "global_brands_grid_wrap relative mt-[30px] flex items-center max-[1200px]:justify-center",
                    isThreeBadges
                      ? "-mx-[15px] flex-nowrap max-[768px]:mx-0 max-[768px]:w-full"
                      : "-mx-[15px] flex-wrap max-[768px]:overflow-hidden max-[768px]:before:absolute max-[768px]:before:left-1/2 max-[768px]:before:top-0 max-[768px]:before:h-full max-[768px]:before:w-[1px] max-[768px]:before:-translate-x-1/2 max-[768px]:before:bg-[#d9d9d9] max-[768px]:before:content-[''] max-[768px]:after:absolute max-[768px]:after:left-5 max-[768px]:after:top-1/2 max-[768px]:after:h-[1px] max-[768px]:after:w-[calc(100%-40px)] max-[768px]:after:bg-[#d9d9d9] max-[768px]:after:content-['']",
                  )}
                >
                  {content.badges.map((badge, idx) => (
                    <div
                      className={cn(
                        "global_brands_item border-r border-[#d9d9d9] last:border-r-0",
                        isThreeBadges
                          ? "w-1/3 px-[15px] max-[1200px]:px-2.5 max-[768px]:w-1/3 max-[768px]:px-2 max-[768px]:py-2 max-[768px]:text-center min-[769px]:w-auto"
                          : "px-[15px] max-[1200px]:px-3 max-[768px]:border-r-0 max-[768px]:w-1/2 max-[768px]:p-[15px] max-[768px]:text-center",
                      )}
                      key={badge.label || badge.name || idx}
                    >
                      <a
                        className="flex items-center justify-center"
                        href={badge.href}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          alt={badge.alt}
                          className={cn(
                            "h-auto w-auto max-w-[100px] object-contain max-[768px]:max-h-[44px]",
                            isThreeBadges && "max-[768px]:max-w-[90px]",
                          )}
                          height={badge.height}
                          src={badge.icon || badge.src || ""}
                          width={badge.width}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          {content.video ? (
            <div className="right-col flex w-[43.182%] max-[1399px]:w-[40%] max-[1200px]:w-[60%] max-[1200px]:mx-auto max-[1200px]:mb-10 max-[992px]:hidden">
              <div className="video-wrapper relative w-full min-h-[386px]">
                <video
                  autoPlay
                  className="w-full rounded-[20px]"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={content.video} type="video/mp4" />
                </video>
              </div>
            </div>
          ) : content.image ? (
            <div
              className={cn(
                "right-col flex w-[43.182%] max-[1399px]:w-[48%] max-[1200px]:w-[50%] max-[1200px]:mx-auto max-[1200px]:mb-10 max-[992px]:hidden",
                rightColClassName,
              )}
            >
              <div className="hero-img w-full">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  width={content.image.width ?? 493}
                  height={content.image.height ?? 292}
                  className={cn("block mix-blend-darken", content.image.className, imageClassName)}
                  priority
                />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
