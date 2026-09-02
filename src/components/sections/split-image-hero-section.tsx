import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type SplitImageHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SplitImageHeroContent = {
  title: string;
  description: string;
  secondaryDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaAriaLabel?: string;
  image: SplitImageHeroImage;
};

export type SplitImageHeroTextProps = Pick<
  SplitImageHeroContent,
  | "title"
  | "description"
  | "secondaryDescription"
  | "ctaLabel"
  | "ctaHref"
  | "ctaAriaLabel"
> & {
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  secondaryDescriptionClassName?: string;
  breakClassName?: string;
};

export function SplitImageHeroText({
  title,
  description,
  secondaryDescription,
  ctaLabel,
  ctaHref = "/request-quote",
  ctaAriaLabel,
  className,
  titleClassName,
  descriptionClassName,
  secondaryDescriptionClassName,
  breakClassName,
}: SplitImageHeroTextProps) {
  return (
    <div className={className}>
      <h1 className={titleClassName}>{formatBrText(title, breakClassName)}</h1>
      <p className={descriptionClassName}>
        {formatBrText(description, breakClassName)}
      </p>
      {secondaryDescription && (
        <p className={secondaryDescriptionClassName ?? descriptionClassName}>
          {formatBrText(secondaryDescription, breakClassName)}
        </p>
      )}
      {ctaLabel && (
        <ButtonLink
          aria-label={ctaAriaLabel ?? ctaLabel}
          href={ctaHref}
          variant="primary"
        >
          {ctaLabel}
        </ButtonLink>
      )}
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
