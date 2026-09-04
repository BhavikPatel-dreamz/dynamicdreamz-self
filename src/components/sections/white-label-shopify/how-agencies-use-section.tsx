import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { whiteLabelShopifyAgencyUseCases } from "@/content/white-label-shopify-development";

type HowAgenciesUseSectionProps = {
  content?: typeof whiteLabelShopifyAgencyUseCases;
};

export function HowAgenciesUseSection({
  content = whiteLabelShopifyAgencyUseCases,
}: HowAgenciesUseSectionProps) {
  return (
    <section className="how_agencies_use_dynamic_dreamz_section bg-[#faf9f5] py-20 max-[991px]:py-12">
      <Container>
        <div className="section_title mb-12 max-[991px]:mb-8">
          {content.eyebrow ? (
            <Eyebrow className="mb-3 text-[#ad5151]">{content.eyebrow}</Eyebrow>
          ) : null}
          <div className="flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col">
            <h2 className="w-full max-w-[580px] font-sans text-[35px] font-bold leading-[1.3] text-ink max-[991px]:text-[28px] max-[767px]:text-2xl">
              {content.heading}
            </h2>
            {content.description ? (
              <p className="w-full max-w-[540px] font-sans text-base font-medium leading-7 text-[#535353]">
                {content.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {content.cards.map((card) => (
            <div
              className="flex h-full flex-col justify-between rounded-[20px] border border-[rgba(23,30,22,0.10)] bg-white p-[30px_20px] max-[1199px]:p-5"
              key={card.tag}
            >
              <div>
                <span className="mb-5 block font-montserrat text-sm font-bold uppercase tracking-wider text-[#AD5151] max-[1399px]:text-xs">
                  {card.tag}
                </span>
                <h3 className="mb-2.5 font-sans text-[22px] font-medium leading-[1.35] text-[#282828] max-[1399px]:text-lg max-[991px]:text-base">
                  {card.heading}
                </h3>
                <p className="font-sans text-base font-medium leading-7 text-[#535353] max-[991px]:text-sm max-[991px]:leading-6">
                  {card.description}
                </p>
              </div>

              <div className="cta-link mt-[25px] border-t border-[rgba(0,0,0,0.10)] pt-[25px]">
                <span className="mb-5 inline-block rounded-[10px] border border-[#D0D0CE] bg-[#FAFAF7] px-2.5 py-1.5 text-sm font-bold leading-normal text-[#282828] max-[1399px]:text-xs">
                  {card.pill}
                </span>
                <div>
                  <Link
                    className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink transition-colors hover:text-[#AD5151]"
                    href={card.ctaHref}
                  >
                    <span>{card.ctaLabel}</span>
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
