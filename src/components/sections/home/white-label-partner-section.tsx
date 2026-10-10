import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeSectionCopy } from "@/content/home";

export type WhiteLabelPartnerContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  bullets?: readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type WhiteLabelPartnerSectionProps = {
  content?: WhiteLabelPartnerContent;
};

export function WhiteLabelPartnerSection({ content }: WhiteLabelPartnerSectionProps = {}) {
  const eyebrow = content?.eyebrow ?? homeSectionCopy.whiteLabelPartnerEyebrow;
  const title = content?.title ?? homeSectionCopy.whiteLabelPartnerTitle;
  const description = content?.description ?? homeSectionCopy.whiteLabelPartnerDescription;
  const bullets =
    content?.bullets && content.bullets.length > 0
      ? content.bullets
      : homeSectionCopy.whiteLabelPartnerBullets;
  const ctaLabel = content?.ctaLabel ?? homeSectionCopy.agencyPartnershipCta;
  const ctaHref = content?.ctaHref || homeSectionCopy.agencyPartnershipCtaHref;

  return (
    <section className="wlp-banner lg:pt-20 pt-12.5 pb-0" aria-labelledby="white-label-partner-title">
      <Container>
        <div
          data-aos="fade-up"
          className="flex items-center justify-between gap-8 rounded-[30px] border-[1.5px] border-[#1920191a] bg-[#eff4ef] p-[40px_32px_32px] max-[1199px]:rounded-[20px] max-[1199px]:p-[30px] max-[992px]:flex-col max-[992px]:items-start max-[767px]:p-5"
        >
          <div className="max-w-[868px]">
            <span className="eyebrow mb-2 inline-block rounded-[50px] bg-ink px-2.5 py-[6.5px] text-center text-xs leading-none font-bold text-white uppercase">{eyebrow}</span>
            <SectionHeading id="white-label-partner-title" className="mb-2.5">{title}</SectionHeading>
            <p className="mb-3.75 text-base leading-7 font-medium text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {bullets.map((tag) => (
                <span className="rounded-[30px] border border-dark-green/10 bg-white px-3 py-[5.5px] text-center text-xs leading-none font-bold text-muted uppercase" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <ButtonLink className="btn-explore" variant="primary" href={ctaHref}>
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
