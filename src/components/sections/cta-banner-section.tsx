import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export type CtaBannerSectionProps = {
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBannerSection({
  heading = "Want us to help you with your online store?",
  ctaLabel = "Request a quote",
  ctaHref = siteConfig.quotePath,
}: CtaBannerSectionProps = {}) {
  return (
    <section
      className="request-banner flex min-h-[119px] items-center bg-[linear-gradient(97.18deg,#15c064_28.5%,#00d1ff_91.82%)] py-[35px]"
      aria-labelledby="cta-banner-title"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 text-center max-[1199px]:gap-5">
          <h2
            id="cta-banner-title"
            className="font-montserrat text-[30px] font-bold leading-[43.2px] tracking-[-0.6px] text-white max-[1199px]:text-[26px] max-[1199px]:leading-9 max-[767px]:text-[20px] max-[767px]:leading-7"
          >
            {heading}
          </h2>
          <ButtonLink
            href={ctaHref}
            variant="light"
            className="min-h-[42px] px-6 py-3 font-montserrat text-[13px] font-bold uppercase text-[#121212]"
          >
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
