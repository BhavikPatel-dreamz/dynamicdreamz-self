import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyCroAssessment } from "@/content/shopify-cro-agency";

export type ShopifyCroAssessmentContent = {
  heading: string | readonly string[];
  description: string | readonly string[];
  points: readonly string[];
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export type ShopifyCroAssessmentSectionProps = {
  content?: ShopifyCroAssessmentContent;
  className?: string;
};

export function ShopifyCroAssessmentSection({
  content = shopifyCroAssessment,
  className = "shopify-cro-assessment rounded-t-[50px] bg-[#E6ECF0] py-[50px] max-[768px]:rounded-t-[30px] max-[768px]:py-10",
}: ShopifyCroAssessmentSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div data-aos="fade-up" className="content-box text-center">
          <SplitSectionHeading
            className="mb-6"
            description={content.description}
            heading={content.heading}
            variant="centered"
          />

          <ul className="-m-1.5 flex flex-wrap justify-center p-0 list-none">
            {content.points.map((point) => (
              <li
                key={point}
                className="m-1.5 rounded-[30px] border border-black/20 bg-white bg-[url('/assets/shopify-cro-agency/assessment/list-arrow.svg')] bg-[left_20px_center] bg-no-repeat px-5 py-[11px] pl-[45px] font-sans text-sm font-medium text-ink shadow-none max-[768px]:text-sm"
              >
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-[30px]">
            <ButtonLink
              href={content.cta.href}
              variant="primary"
              className="px-8"
            >
              {content.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
