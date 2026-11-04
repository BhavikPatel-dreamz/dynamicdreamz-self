import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
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
  title: string | readonly string[];
  description: string | readonly string[];
  secondaryDescription?: string | readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaAriaLabel?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaAriaLabel?: string;
  secondaryCtaTarget?: string;
  image: SplitImageHeroImage;
};

type SplitImageHeroTextProps = Pick<
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

function SplitImageHeroText({
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
        <Eyebrow
          align="responsive-center"
          as="div"
          className="mb-[15px]"
          items={Array.isArray(eyebrow) ? eyebrow : undefined}
          linePosition="overlay"
        >
          {!Array.isArray(eyebrow) ? eyebrow : undefined}
        </Eyebrow>
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
        <div className="btn-group flex flex-wrap items-center gap-2.5 pt-2.5 max-[1200px]:justify-center max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-3.5 [&_a]:w-fit [&_a]:max-[768px]:mx-auto">
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
        <div className="btn-group flex items-center pt-2.5 max-[1200px]:justify-center max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-3.5 [&_a]:w-fit [&_a]:max-[768px]:mx-auto">
          <ButtonLink
            aria-label={ctaAriaLabel ?? ctaLabel}
            href={ctaHref}
            variant="primary"
          >
            {ctaLabel}
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}

type SplitImageHeroMediaProps = {
  image: SplitImageHeroImage;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

function SplitImageHeroMedia({
  image,
  className,
  imageClassName,
  priority = true,
}: SplitImageHeroMediaProps) {
  return (
    <div className={className}>
      <Image
        alt={image.alt}
        className={cn("block", imageClassName)}
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
          <div className={textColumnClassName} data-aos="fade-up">
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
          <div className={mediaColumnClassName} data-aos="fade-up">
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
