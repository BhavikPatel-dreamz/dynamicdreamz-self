import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import type { shopifyMobileAppComparison } from "@/content/shopify-mobile-app-development";

type ShopifyMobileAppComparisonSectionProps = {
  content: typeof shopifyMobileAppComparison;
};

export function ShopifyMobileAppComparisonSection({
  content,
}: ShopifyMobileAppComparisonSectionProps) {
  return (
    <section className="why_build_a_custom_shopify_mobile_app bg-[#F7F4E9] py-20 max-[991px]:py-[50px]">
      <Container>
        <SplitSectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          className="mb-[50px] max-[767px]:mb-[30px]"
        />

        <div className="table-main overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.10)] bg-white">
          <div className="table-wrap overflow-x-auto">
            <table className="m-0 w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr>
                  {content.tableHeaders.map((header, idx) => (
                    <th
                      key={header}
                      className={`p-[31px_20px] font-sans text-sm font-bold uppercase leading-[13px] text-[#282828] border-b border-[rgba(0,0,0,0.10)] w-1/3 max-[767px]:p-[20px_16px] ${
                        idx === content.tableHeaders.length - 1
                          ? "bg-[#EFF4EF] border-l border-[rgba(0,0,0,0.10)]"
                          : "bg-[#FAFAF7]"
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, rIdx) => {
                  const isLastRow = rIdx === content.rows.length - 1;
                  const borderBottom = isLastRow ? "border-b-0" : "border-b border-[rgba(0,0,0,0.10)]";

                  return (
                    <tr key={row.title}>
                      <td
                        className={`p-[16px_20px] align-middle bg-white ${borderBottom} text-[#282828] text-sm leading-[22px] max-[767px]:p-[12px_16px] max-[767px]:text-xs`}
                      >
                        <strong>{row.title}</strong>
                        <span className="table-sub block text-xs font-medium leading-5 text-[#535353] mt-2.5 max-[767px]:mt-1">
                          {row.subtitle}
                        </span>
                      </td>
                      <td
                        className={`p-[16px_20px] align-middle bg-white ${borderBottom} text-sm font-medium leading-[22px] text-[#535353] max-[767px]:p-[12px_16px] max-[767px]:text-xs`}
                      >
                        {row.appBuilder}
                      </td>
                      <td
                        className={`p-[16px_20px] align-middle bg-[#EFF4EF] ${borderBottom} border-l border-[rgba(0,0,0,0.10)] text-base font-bold leading-[22px] text-[#282828] max-[991px]:text-sm max-[767px]:p-[12px_16px] max-[767px]:text-xs`}
                      >
                        {row.custom}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
