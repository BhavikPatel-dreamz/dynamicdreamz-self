import { ButtonLink } from "@/components/ui/button-link";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";
import { SectionDescription } from "@/components/ui/section-description";
import { formatBrText } from "@/lib/text-formatting";

export type TitleHighlightCtaProps = {
  heading: string;
  description: string;
  descriptionHighlight?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  headingId?: string;
};

export function TitleHighlightCta({
  heading,
  description,
  descriptionHighlight,
  ctaLabel,
  ctaHref,
  className,
  headingId,
}: TitleHighlightCtaProps) {
  const [descriptionBefore, descriptionAfter = ""] = descriptionHighlight
    ? description.split(descriptionHighlight)
    : [description];

  return (
    <div className={cn("title mb-12.5 text-center", className)}>
      <SplitSectionHeading
        variant="centered"
        heading={heading}
        headingId={headingId}
        className="mb-6"
      />

      <SectionDescription className="mx-auto mb-8 max-w-[697px]" textClassName="font-sans leading-[27.2px] text-sm font-normal text-[#535353]">
        {formatBrText(descriptionBefore)}
        {descriptionHighlight ? (
          <strong className="bg-[linear-gradient(97deg,#15C064_28.5%,#00D1FF_91.82%)] bg-clip-text font-bold text-transparent">
            {descriptionHighlight}
          </strong>
        ) : null}
        {formatBrText(descriptionAfter)}
      </SectionDescription>

      {ctaLabel && ctaHref ? (
        <ButtonLink aria-label={ctaLabel} href={ctaHref} variant="primary">
          {ctaLabel}
        </ButtonLink>
      ) : null}
    </div>
  );
}

export default TitleHighlightCta;
