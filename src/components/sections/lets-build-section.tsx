import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";

export type LetsBuildContent = {
  heading: string | readonly string[];
  description: string | readonly string[];
  ctaLabel: string;
  ctaHref: string;
};

export type LetsBuildSectionProps = {
  content: LetsBuildContent;
  id?: string;
};

export function LetsBuildSection({
  content,
  id,
}: LetsBuildSectionProps) {
  return (
    <section className="lets-build-section relative z-[1] bg-[linear-gradient(97deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-[58px] text-center before:absolute before:left-0 before:top-0 before:-z-[1] before:h-[111px] before:w-[187px] before:bg-[url('/assets/services/mobile-application-development/backgrounds/cta-circle-left.svg')] before:bg-contain before:bg-left before:bg-no-repeat after:absolute after:bottom-0 after:right-0 after:-z-[1] after:h-[116px] after:w-[206px] after:bg-[url('/assets/services/mobile-application-development/backgrounds/cta-circle-right.svg')] after:bg-contain after:bg-right after:bg-no-repeat max-[768px]:py-10" id={id}>
      <Container>
        <SplitSectionHeading
          className="mx-auto mb-6 max-w-[880px]"
          description={content.description}
          heading={content.heading}
          pClassName="leading-[30.4px]"
          variant="centered"
        />
        <div className="pt-2 text-center" data-aos="fade-up">
          <ButtonLink
            aria-label={content.ctaLabel}
            href={content.ctaHref}
            variant="primary"
          >
            {content.ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
