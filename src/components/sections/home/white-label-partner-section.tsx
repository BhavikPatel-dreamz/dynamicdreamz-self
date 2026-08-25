import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { homeSectionCopy } from "@/content/home";

export function WhiteLabelPartnerSection() {
  return (
    <section className="pb-0" aria-labelledby="white-label-partner-title">
      <Container>
        <div className="flex items-center justify-between gap-8 rounded-[30px] border-[1.5px] border-dark-green/10 bg-[#eff4ef] p-[40px_32px_32px] max-[1199px]:rounded-[20px] max-[1199px]:p-[30px] max-[991px]:flex-col max-[991px]:items-start max-[767px]:p-5">
          <div className="max-w-[868px]">
            <span className="mb-2 inline-block rounded-[50px] bg-ink px-2.5 py-[6.5px] text-center text-xs leading-none font-bold text-white uppercase">{homeSectionCopy.whiteLabelPartnerEyebrow}</span>
            <h2 id="white-label-partner-title" className="mb-2.5 text-[43px] leading-[1.2] font-medium max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">{homeSectionCopy.whiteLabelPartnerTitle}</h2>
            <p className="mb-[15px] text-base leading-[1.9] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[1.8]">
              {homeSectionCopy.whiteLabelPartnerDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {homeSectionCopy.whiteLabelPartnerBullets.map((tag) => (
                <span className="rounded-[30px] border border-dark-green/10 bg-white px-3 py-[5.5px] text-center text-xs leading-none font-bold text-ink uppercase" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <ButtonLink className="shrink-0 px-6 py-[15px] text-sm normal-case max-[991px]:self-start max-[767px]:w-full" variant="primary" href="/white-label-shopify-development-services">
            {homeSectionCopy.agencyPartnershipCta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
