import { Container } from "@/components/ui/container";
import { shopifyCroAssessment } from "@/content/shopify-cro-agency";

export type ShopifyCroAssessmentSectionProps = {
  content?: typeof shopifyCroAssessment;
  className?: string;
};

export function ShopifyCroAssessmentSection({
  content = shopifyCroAssessment,
  className = "shopify-cro-assessment rounded-t-[50px] bg-[#E6ECF0] py-[50px] max-[767px]:rounded-t-[30px] max-[767px]:py-8",
}: ShopifyCroAssessmentSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="content-box mx-auto max-w-[850px] text-center">
          <h2 className="mb-2.5 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
            {content.heading}
          </h2>
          <p className="mb-6 font-sans text-base font-medium leading-[30.4px] text-muted">
            {content.description}
          </p>

          <ul className="-m-1.5 flex flex-wrap justify-center p-0 list-none">
            {content.points.map((point) => (
              <li
                key={point}
                className="m-1.5 inline-flex items-center rounded-[30px] border border-black/20 bg-white px-5 py-2.5 font-sans text-base font-semibold leading-[128%] text-ink shadow-none max-[767px]:text-sm"
              >
                <svg
                  className="mr-2.5 size-4 text-brand-red flex-shrink-0"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-[30px]">
            <a
              href={content.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red inline-block rounded-[30px] border-2 border-brand-red bg-brand-red px-8 py-3 text-center font-sans text-sm font-bold uppercase leading-[18px] text-white shadow-sm transition-all duration-300 hover:bg-transparent hover:text-brand-red focus-visible:outline-none"
            >
              {content.cta.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
