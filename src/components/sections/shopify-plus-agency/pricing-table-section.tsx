import Link from "next/link";

import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyPricing } from "@/content/shopify-plus-agency";

export function PricingTableSection() {
  return (
    <section className="pricing_packages_section pt-0 pb-20" data-section="pricing">
      <Container>
        <div className="mb-[50px] text-center">
          <h2 className="mb-2.5 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink">
            {shopifyPlusAgencyPricing.heading}
          </h2>
          <p className="mb-6 text-[18px] leading-[34.2px] font-medium text-muted">
            {shopifyPlusAgencyPricing.description.split("<br>").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
              </span>
            ))}
          </p>
        </div>
        <div className="inline-block w-full rounded-[20px] bg-gradient-to-br from-[#15C064] to-[#00E0A3] p-[2px] shadow-[0_4px_50px_rgba(19,193,110,0.10)]">
          <div className="overflow-hidden rounded-[18px] bg-white">
            <div className="flex bg-[#F7F5EF] max-[767px]:hidden">
              <div className="w-[69.802%] py-5 pr-[30px] pl-[30px] text-lg leading-[30.6px] font-bold text-ink max-[992px]:w-[62%]">
                {shopifyPlusAgencyPricing.columns[0]}
              </div>
              <div className="w-[30.198%] border-l border-[#DFDFDF] py-5 pr-[30px] pl-[30px] text-lg leading-[30.6px] font-bold text-ink max-[992px]:w-[38%] max-[992px]:px-5">
                {shopifyPlusAgencyPricing.columns[1]}
              </div>
            </div>
            <div className="hidden bg-[#F7F5EF] max-[767px]:block max-[767px]:p-[15px_20px]">
              <div className="text-lg leading-[30.6px] font-bold text-ink">
                {shopifyPlusAgencyPricing.columns[0]} / {shopifyPlusAgencyPricing.columns[1]}
              </div>
            </div>
            {shopifyPlusAgencyPricing.rows.map((row) => (
              <div
                className="flex flex-wrap border-t border-[#EBEBEB] max-[767px]:flex-col max-[767px]:p-[15px_20px]"
                key={row.requirement}
              >
                <div className="w-[69.802%] py-5 pr-[30px] pl-[30px] text-base leading-[27.2px] font-medium text-[#535353] max-[992px]:w-[62%] max-[767px]:w-full max-[767px]:p-0 max-[767px]:mb-[7px]">
                  {row.requirement}
                </div>
                <div className="w-[30.198%] border-l border-[#DFDFDF] py-5 pr-[30px] pl-[30px] text-base leading-[27.2px] font-bold text-ink max-[992px]:w-[38%] max-[992px]:px-5 max-[767px]:w-full max-[767px]:border-0 max-[767px]:p-0">
                  {row.pricing === "Contact us for estimation" ? (
                    <Link
                      className="text-[#252C15] transition-colors duration-300 hover:text-[#ad5151]"
                      href="/request-quote"
                    >
                      {row.pricing}
                    </Link>
                  ) : (
                    row.pricing
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}