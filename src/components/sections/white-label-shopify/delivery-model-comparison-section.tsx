import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { whiteLabelShopifyDeliveryComparison } from "@/content/white-label-shopify-development";

type DeliveryModelComparisonSectionProps = {
  content?: typeof whiteLabelShopifyDeliveryComparison;
};

export function DeliveryModelComparisonSection({
  content = whiteLabelShopifyDeliveryComparison,
}: DeliveryModelComparisonSectionProps) {
  return (
    <section className="choose_the_right_delivery_model_section bg-white py-20 max-[991px]:py-12">
      <Container>
        <div className="section_title mb-12 max-[991px]:mb-8">
          {content.eyebrow ? (
            <Eyebrow className="mb-3 text-[#ad5151]">{content.eyebrow}</Eyebrow>
          ) : null}
          <div className="flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col">
            <h2 className="w-full max-w-[620px] font-sans text-[35px] font-bold leading-[1.3] text-ink max-[991px]:text-[28px] max-[767px]:text-2xl">
              {content.heading}
            </h2>
            {content.description ? (
              <p className="w-full max-w-[500px] font-sans text-base font-medium leading-7 text-[#535353]">
                {content.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="compare-wrap -mx-4 overflow-x-auto px-4 scrollbar-thin">
          <div className="compare-table-main overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.10)]">
            <table className="compare-table w-full min-w-[860px] border-collapse bg-white">
              <thead>
                <tr>
                  {content.columns.map((col, idx) => (
                    <th
                      className={`p-4 text-left text-sm font-bold uppercase tracking-wider ${
                        col.isWinner
                          ? "border-t border-x border-[#AD5151] bg-[#F7F4E9] text-[#282828]"
                          : "border-b border-[rgba(0,0,0,0.10)] bg-[#FAFAF7] text-[#282828]"
                      } ${idx === 0 ? "w-[20%]" : ""}`}
                      key={col.label}
                    >
                      {col.isWinner && col.kicker ? (
                        <span className="mb-1.5 block text-[10px] font-bold uppercase text-[#AD5151]">
                          {col.kicker}
                        </span>
                      ) : null}
                      <span>{col.label}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, idx) => {
                  const isLastRow = idx === content.rows.length - 1;
                  return (
                    <tr
                      className="border-b border-[rgba(0,0,0,0.10)] last:border-b-0"
                      key={row.feature}
                    >
                      <td className="p-4 text-left font-sans text-sm font-bold text-[#282828]">
                        {row.feature}
                      </td>
                      <td className="p-4 text-left font-sans text-sm font-medium text-[#535353]">
                        {row.inHouse}
                      </td>
                      <td className="p-4 text-left font-sans text-sm font-medium text-[#535353]">
                        {row.freelancer}
                      </td>
                      <td
                        className={`p-4 text-left font-sans text-sm font-bold text-[#282828] border-x border-[#AD5151] bg-[#F7F4E9] ${
                          isLastRow ? "border-b border-b-[#AD5151] rounded-br-[24px]" : ""
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <svg
                            aria-hidden="true"
                            className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#AD5151]"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              d="M6.5123 7.72L9.37584 10.4578L15.5397 4.03783C16.213 3.33647 16.2055 2.22643 15.5226 1.53429C15.1854 1.19244 14.7252 1 14.245 1H3.98412C3.17502 1 2.4006 1.32854 1.83833 1.91034 1.30058 2.46676 1 3.21031 1 3.98412V14.0768C1 14.8554 1.31067 15.6019 1.86312 16.1507 2.41077 16.6947 3.15134 17 3.92325 17H13.8281C14.5817 17 15.3106 16.7317 15.8844 16.2432 16.5922 15.6406 17 14.7577 17 13.8281V8.78667"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth="2"
                            />
                          </svg>
                          <span>{row.partner}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 max-[767px]:flex-col">
          <ButtonLink href={content.ctas.primary.href} variant="primary">
            {content.ctas.primary.label}
          </ButtonLink>
          <ButtonLink href={content.ctas.secondary.href} variant="outline">
            {content.ctas.secondary.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
