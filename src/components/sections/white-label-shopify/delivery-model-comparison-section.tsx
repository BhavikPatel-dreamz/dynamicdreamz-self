import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { whiteLabelShopifyDeliveryComparison } from "@/content/white-label-shopify-development";

export type DeliveryModelComparisonContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  columns: readonly {
    label: string;
    isWinner?: boolean;
    kicker?: string;
    pill?: string;
  }[];
  rows: readonly {
    feature: string;
    inHouse: string;
    freelancer: string;
    partner: string;
  }[];
  ctas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
};

type DeliveryModelComparisonSectionProps = {
  content?: DeliveryModelComparisonContent;
};

export function DeliveryModelComparisonSection({
  content = whiteLabelShopifyDeliveryComparison,
}: DeliveryModelComparisonSectionProps) {
  return (
    <section className="choose_the_right_delivery_model_section bg-white py-20 max-[992px]:py-[50px] max-[768px]:py-10">
      <Container>
        <SplitSectionHeading
          variant="centered"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          className="max-[992px]:mb-[30px]"
        />

        <div
          data-aos="fade-up"
          className="compare-table-main w-full max-w-full min-w-0 overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.10)] bg-white"
        >
          <div className="compare-wrap w-full max-w-full min-w-0 overflow-x-auto max-[992px]:overflow-x-scroll touch-pan-x overscroll-x-contain scrollbar-thin [scrollbar-width:thin] [-webkit-overflow-scrolling:touch] max-[992px]:[&::-webkit-scrollbar]:h-[6px] max-[992px]:[&::-webkit-scrollbar-track]:bg-[#eee] max-[992px]:[&::-webkit-scrollbar-thumb]:bg-[#999] max-[992px]:[&::-webkit-scrollbar-thumb]:rounded-[10px]">
            <table className="compare-table w-full min-w-[900px] border-separate border-spacing-0 bg-white">
              <thead>
                <tr>
                  {content.columns.map((col, idx) => (
                    <th
                      className={`px-[18px] py-[17px] text-left font-montserrat text-sm font-bold uppercase tracking-[0.06em] text-[#282828] transition-colors max-[992px]:px-[14px] max-[992px]:py-2 max-[992px]:text-[12px] max-[992px]:leading-[13px] max-[992px]:whitespace-nowrap ${
                        col.isWinner
                          ? "winner-head border-t border-x border-b border-t-[#AD5151] border-x-[#AD5151] border-b-[rgba(0,0,0,0.20)] bg-[#F7F4E9] rounded-tr-[24px] whitespace-nowrap"
                          : "border-b border-[rgba(0,0,0,0.10)] bg-[#FAFAF7]"
                      } ${idx === 0 ? "w-[20%]" : ""}`}
                      key={col.label}
                    >
                      {col.isWinner && col.kicker ? (
                        <span className="mb-[7px] block font-montserrat text-[10px] font-bold uppercase leading-[13px] text-[#AD5151]">
                          {col.kicker}
                        </span>
                      ) : null}
                      <span className="inline-flex items-center">
                        {col.label}
                        {"pill" in col && col.pill ? (
                          <span className="platinum-pill ml-2 inline-flex items-center rounded-full bg-[#AD5151] px-2.5 py-[6px] font-montserrat text-[10px] font-bold uppercase leading-[13px] text-white">
                            {col.pill}
                          </span>
                        ) : null}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, idx) => {
                  const isLastRow = idx === content.rows.length - 1;
                  return (
                    <tr key={row.feature}>
                      <td
                        className={`px-[18px] py-[17px] text-left font-sans text-sm font-bold leading-none text-[#282828] max-[992px]:px-[14px] max-[992px]:py-2 max-[992px]:text-[12px] max-[992px]:leading-[18px] max-[992px]:whitespace-nowrap ${
                          isLastRow ? "border-b-0" : "border-b border-[rgba(0,0,0,0.10)]"
                        }`}
                      >
                        <strong>{row.feature}</strong>
                      </td>
                      <td
                        className={`px-[18px] py-[17px] text-left font-sans text-sm font-medium leading-6 text-[#535353] max-[992px]:px-[14px] max-[992px]:py-2 max-[992px]:text-[12px] max-[992px]:leading-[18px] max-[992px]:whitespace-nowrap ${
                          isLastRow ? "border-b-0" : "border-b border-[rgba(0,0,0,0.10)]"
                        }`}
                      >
                        {row.inHouse}
                      </td>
                      <td
                        className={`px-[18px] py-[17px] text-left font-sans text-sm font-medium leading-6 text-[#535353] max-[992px]:px-[14px] max-[992px]:py-2 max-[992px]:text-[12px] max-[992px]:leading-[18px] max-[992px]:whitespace-nowrap ${
                          isLastRow ? "border-b-0" : "border-b border-[rgba(0,0,0,0.10)]"
                        }`}
                      >
                        {row.freelancer}
                      </td>
                      <td
                        className={`winner px-[18px] py-[17px] text-left font-sans text-sm font-bold leading-5 text-[#282828] border-x border-[#AD5151] bg-[#F7F4E9] whitespace-nowrap max-[992px]:px-[14px] max-[992px]:py-2 max-[992px]:text-[12px] max-[992px]:leading-[18px] ${
                          isLastRow
                            ? "border-b border-b-[#AD5151] rounded-br-[24px]"
                            : "border-b border-b-[rgba(0,0,0,0.20)]"
                        }`}
                      >
                        <div className="winmark inline-flex items-start gap-[7px]">
                          <svg
                            aria-hidden="true"
                            className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#AD5151] max-[992px]:h-[15px] max-[992px]:w-[15px] max-[992px]:mt-0"
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

        <div className="btns_group mt-10 flex flex-wrap items-center justify-center gap-4 max-[992px]:mt-[30px] max-[576px]:flex-col max-[576px]:items-stretch max-[576px]:gap-[15px] max-[576px]:w-full">
          <ButtonLink
            href={content.ctas.primary.href}
            variant="primary"
            className="max-[768px]:text-[12px] max-[576px]:w-full max-[576px]:justify-center"
          >
            {content.ctas.primary.label}
          </ButtonLink>
          <ButtonLink
            href={content.ctas.secondary.href}
            variant="outline"
            className="max-[768px]:text-[12px] max-[576px]:w-full max-[576px]:justify-center"
          >
            {content.ctas.secondary.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
