import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type ImageCtaSectionProps = {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string;
  className?: string;
};

export function ImageCtaSection({
  heading,
  description,
  ctaLabel,
  ctaHref,
  backgroundImage,
  className,
}: ImageCtaSectionProps) {
  return (
    <section className={cn("pb-20", className)}>
      <Container>
        <div
          className="rounded-[14px] bg-cover bg-center bg-no-repeat px-5 py-[31px] text-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h2 className="font-sans text-[28px] font-bold leading-[137%] tracking-[-0.32px] text-white max-[767px]:text-[22px]">
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

