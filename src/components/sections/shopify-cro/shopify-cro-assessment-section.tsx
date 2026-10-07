import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyCroAssessment } from "@/content/shopify-cro-agency";

export type ShopifyCroAssessmentSectionProps = {
  content?: typeof shopifyCroAssessment;
  className?: string;
};

export function ShopifyCroAssessmentSection({
  content = shopifyCroAssessment,
  className = "shopify-cro-assessment rounded-t-[50px] bg-[#E6ECF0] py-[50px] max-[767px]:rounded-t-[30px] max-[767px]:py-10",
}: ShopifyCroAssessmentSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div data-aos="fade-up" className="content-box text-center">
          <h2 className="mb-2.5 font-display text-[35px] font-normal leading-[48.475px] tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
            {content.heading}
          </h2>
          <p className="mb-6 font-sans text-base font-medium leading-7 text-muted">
            {content.description}
          </p>

          <ul className="-m-1.5 flex flex-wrap justify-center p-0 list-none">
            {content.points.map((point) => (
              <li
                key={point}
                className="m-1.5 rounded-[30px] border border-black/20 bg-white bg-[url('/assets/shopify-cro-agency/assessment/list-arrow.svg')] bg-[left_20px_center] bg-no-repeat px-5 py-[11px] pl-[45px] font-sans text-base font-medium text-ink shadow-none max-[767px]:text-sm"
              >
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-[30px]">
            <ButtonLink
              href={content.cta.href}
              variant="primary"
              className="px-8 text-sm uppercase max-[991px]:py-3"
            >
              {content.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
