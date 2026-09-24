import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type SplitImageHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SplitImageHeroContent = {
  eyebrow?: string | readonly string[];
  title: string;
  description: string;
  secondaryDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaAriaLabel?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaAriaLabel?: string;
  secondaryCtaTarget?: string;
  image: SplitImageHeroImage;
};

export type SplitImageHeroTextProps = Pick<
  SplitImageHeroContent,
  | "eyebrow"
  | "title"
  | "description"
  | "secondaryDescription"
  | "ctaLabel"
  | "ctaHref"
  | "ctaAriaLabel"
  | "secondaryCtaLabel"
  | "secondaryCtaHref"
  | "secondaryCtaAriaLabel"
  | "secondaryCtaTarget"
> & {
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  secondaryDescriptionClassName?: string;
  breakClassName?: string;
};

export function SplitImageHeroText({
  eyebrow,
  title,
  description,
  secondaryDescription,
  ctaLabel,
  ctaHref = siteConfig.quotePath,
  ctaAriaLabel,
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaAriaLabel,
  secondaryCtaTarget,
  className,
  titleClassName,
  descriptionClassName,
  secondaryDescriptionClassName,
  breakClassName,
}: SplitImageHeroTextProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <div className="eyebrow relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] tracking-normal text-ink before:absolute before:left-0 before:top-[7px] before:h-[2px] before:w-[30px] before:bg-brand-red max-[1199px]:text-[12px] max-[767px]:pl-6 max-[767px]:text-[10px] max-[767px]:before:w-[15px]">
          {Array.isArray(eyebrow) ? (
            eyebrow.map((item, index) => (
              <span
                className={cn(
                  "relative inline-flex items-center",
                  index > 0 &&
                    "ml-2.5 pl-2.5 after:absolute after:left-[-2px] after:h-[3px] after:w-[3px] after:rounded-full after:bg-[#535353]",
                )}
                key={item}
              >
                {item}
              </span>
            ))
          ) : (
            <span>{eyebrow}</span>
          )}
        </div>
      )}
      <h1 className={titleClassName}>{formatBrText(title, breakClassName)}</h1>
      <p className={descriptionClassName}>
        {formatBrText(description, breakClassName)}
      </p>
      {secondaryDescription && (
        <p className={secondaryDescriptionClassName ?? descriptionClassName}>
          {formatBrText(secondaryDescription, breakClassName)}
        </p>
      )}
      {secondaryCtaLabel && secondaryCtaHref ? (
        <div className="btn-group flex flex-wrap items-center gap-2.5 pt-2.5 max-[1199px]:justify-center max-[767px]:flex-col max-[767px]:gap-2.5">
          {ctaLabel && (
            <ButtonLink
              aria-label={ctaAriaLabel ?? ctaLabel}
              href={ctaHref}
              variant="primary"
            >
              {ctaLabel}
            </ButtonLink>
          )}
          <ButtonLink
            aria-label={secondaryCtaAriaLabel ?? secondaryCtaLabel}
            href={secondaryCtaHref}
            target={secondaryCtaTarget}
            variant="outline"
          >
            {secondaryCtaLabel}
          </ButtonLink>
        </div>
      ) : ctaLabel ? (
        <ButtonLink
          aria-label={ctaAriaLabel ?? ctaLabel}
          href={ctaHref}
          variant="primary"
        >
          {ctaLabel}
        </ButtonLink>
      ) : null}
    </div>
  );
}

export type SplitImageHeroMediaProps = {
  image: SplitImageHeroImage;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function SplitImageHeroMedia({
  image,
  className,
  imageClassName,
  priority = true,
}: SplitImageHeroMediaProps) {
  return (
    <div className={className}>
      <Image
        alt={image.alt}
        className={imageClassName}
        height={image.height}
        priority={priority}
        src={image.src}
        width={image.width}
      />
    </div>
  );
}

export type SplitImageHeroSectionProps = {
  content: SplitImageHeroContent;
  className?: string;
  containerClassName?: string;
  wrapperClassName?: string;
  textColumnClassName?: string;
  textClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  secondaryDescriptionClassName?: string;
  mediaColumnClassName?: string;
  mediaClassName?: string;
  imageClassName?: string;
  breakClassName?: string;
  imagePriority?: boolean;
};

export function SplitImageHeroSection({
  content,
  className,
  containerClassName,
  wrapperClassName,
  textColumnClassName,
  textClassName,
  titleClassName,
  descriptionClassName,
  secondaryDescriptionClassName,
  mediaColumnClassName,
  mediaClassName,
  imageClassName,
  breakClassName,
  imagePriority,
}: SplitImageHeroSectionProps) {
  return (
    <section className={className}>
      <Container className={containerClassName}>
        <div className={wrapperClassName}>
          <div className={textColumnClassName}>
            <SplitImageHeroText
              breakClassName={breakClassName}
              className={textClassName}
              ctaAriaLabel={content.ctaAriaLabel}
              ctaHref={content.ctaHref}
              ctaLabel={content.ctaLabel}
              description={content.description}
              descriptionClassName={descriptionClassName}
              eyebrow={content.eyebrow}
              secondaryCtaAriaLabel={content.secondaryCtaAriaLabel}
              secondaryCtaHref={content.secondaryCtaHref}
              secondaryCtaLabel={content.secondaryCtaLabel}
              secondaryCtaTarget={content.secondaryCtaTarget}
              secondaryDescription={content.secondaryDescription}
              secondaryDescriptionClassName={secondaryDescriptionClassName}
              title={content.title}
              titleClassName={titleClassName}
            />
          </div>
          <div className={mediaColumnClassName}>
            <SplitImageHeroMedia
              className={mediaClassName}
              image={content.image}
              imageClassName={cn("h-auto object-contain object-bottom", imageClassName)}
              priority={imagePriority}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
