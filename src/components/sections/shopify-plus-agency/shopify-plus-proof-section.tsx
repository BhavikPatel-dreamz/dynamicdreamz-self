import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyPlusAgencyWhyChoose } from "@/content/shopify-plus-agency";

export type ShopifyPlusProofContent = typeof shopifyPlusAgencyWhyChoose;

export function ShopifyPlusProofSection({
  content,
}: {
  content: ShopifyPlusProofContent;
}) {
  return (
    <section
      className="why_shopify_plus_brands_choose_section bg-white pt-20 pb-0 max-[992px]:pt-[50px]"
      data-section="why-shopify-plus"
      id="why-shopify-plus"
    >
      <Container>
        <SplitSectionHeading
          className="mb-10 max-[1199px]:mb-[30px]"
          description={content.intro}
          eyebrow={content.eyebrow}
          heading={content.heading}
          textColumnClassName="w-[48%] max-[992px]:w-full"
          titleColumnClassName="w-[44%] max-[992px]:w-full"
          variant="left"
        />
        <div className="wrapper flex flex-wrap justify-between">
          <div className="left-col w-1/2 max-[767px]:w-full">
            <div className="text-block h-full border-y border-[#2828281c] py-[30px] pr-[30px] max-[1399px]:py-5 max-[1399px]:pr-[30px] max-[1199px]:pr-5 max-[767px]:border-0 max-[767px]:p-0">
              <p className="m-0 font-sans text-base font-medium leading-[28px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {content.text}
              </p>
            </div>
          </div>
          <div className="right-col w-1/2 max-[767px]:mt-5 max-[767px]:w-full">
            <div className="list-box flex h-full flex-wrap border-y border-l border-[#2828281c] py-[30px] pr-0 pl-10 max-[1399px]:py-5 max-[1399px]:pl-5 max-[1199px]:pl-2.5 max-[991px]:pl-5 max-[767px]:border-0 max-[767px]:p-0">
              {content.stats.map((stat, index) => (
                <div
                  className="list-col mb-5 w-1/2 px-2.5 max-[1399px]:mb-[15px] max-[767px]:mb-[15px] max-[767px]:w-full max-[767px]:border-b max-[767px]:border-[#2828281c] max-[767px]:p-0 max-[767px]:pb-[15px] max-[767px]:last:mb-0 max-[767px]:last:border-b-0 max-[767px]:last:pb-0 [&:nth-last-child(-n+2)]:mb-0"
                  key={stat}
                >
                  <div className="list-item">
                    <span
                      aria-hidden="true"
                      className="mb-[5px] block font-montserrat text-sm font-semibold leading-[22px] text-brand-red"
                    >
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <h3 className="m-0 font-montserrat text-base font-medium leading-6 text-ink max-[1399px]:text-sm max-[1399px]:leading-[22px] max-[767px]:max-w-[171px]">
                      {stat}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
