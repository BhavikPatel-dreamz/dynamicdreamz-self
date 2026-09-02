import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type LetsBuildContent = {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type LetsBuildSectionProps = {
  content: LetsBuildContent;
  className?: string;
  id?: string;
};

export function LetsBuildSection({
  content,
  className = "lets-build-section relative z-[1] bg-[linear-gradient(97deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-[58px] text-center before:absolute before:left-0 before:top-0 before:-z-[1] before:h-[111px] before:w-[187px] before:bg-[url('/assets/services/mobile-application-development/backgrounds/cta-circle-left.svg')] before:bg-contain before:bg-left before:bg-no-repeat after:absolute after:bottom-0 after:right-0 after:-z-[1] after:h-[116px] after:w-[206px] after:bg-[url('/assets/services/mobile-application-development/backgrounds/cta-circle-right.svg')] after:bg-contain after:bg-right after:bg-no-repeat max-[767px]:py-10",
  id,
}: LetsBuildSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="lets-build-text mx-auto max-w-[880px]">
          <h2 className="mb-[15px] font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {formatBrText(content.heading)}
          </h2>
          <p className="mb-6 text-base font-normal leading-[30.4px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
            {formatBrText(content.description)}
          </p>
          <div className="pt-2">
            <ButtonLink
              aria-label={content.ctaLabel}
              href={content.ctaHref}
              variant="primary"
            >
              {content.ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
