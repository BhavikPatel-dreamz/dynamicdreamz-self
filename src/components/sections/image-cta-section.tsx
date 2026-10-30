import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

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
          <p className="mb-[34px] text-base font-small leading-[190%] text-white max-[767px]:text-sm max-[767px]:leading-[26px]">
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

