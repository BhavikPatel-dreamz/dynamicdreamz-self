import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";

export type ShopifyPlusProofContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  intro?: string;
  text?: string;
  stats: readonly string[];
};

export function ShopifyPlusProofSection({
  content,
}: {
  content: ShopifyPlusProofContent;
}) {
  return (
    <section
      className="why_shopify_plus_brands_choose_section bg-white py-20 max-[992px]:py-15 max-[768px]:py-10"
      data-section="why-shopify-plus"
      id="why-shopify-plus"
    >
      <Container>
        <SplitSectionHeading
          className="max-[768px]:mb-0"
          description={content.intro}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />
        <div data-aos="fade-up" className="wrapper flex flex-wrap justify-between">
          <div className="left-col w-1/2 max-[768px]:w-full">
            <div className="text-block h-full border-y border-[#2828281c] py-[30px] pr-[30px] max-[1400px]:py-5 max-[1400px]:pr-[30px] max-[1200px]:pr-5 max-[768px]:border-0 max-[768px]:p-0">
              <p className="m-0 font-sans text-sm font-normal leading-6 text-muted">
                {content.text}
              </p>
            </div>
          </div>
          <div className="right-col w-1/2 max-[768px]:mt-5 max-[768px]:w-full">
            <div className="list-box flex h-full flex-wrap border-y border-l border-[#2828281c] py-[30px] pr-0 pl-10 max-[1400px]:py-5 max-[1400px]:pl-5 max-[1200px]:pl-2.5 max-[992px]:pl-5 max-[768px]:border-0 max-[768px]:p-0">
              {content.stats.map((stat, index) => (
                <div
                  className="list-col mb-5 w-1/2 px-2.5 max-[1400px]:mb-[15px] max-[768px]:mb-[15px] max-[768px]:w-1/2 max-[768px]:border-b max-[768px]:border-[#2828281c] max-[768px]:p-0 max-[768px]:pb-[15px] max-[768px]:last:mb-0 max-[768px]:[&:nth-last-child(-n+2)]:border-b-0 max-[768px]:last:pb-0 [&:nth-last-child(-n+2)]:mb-0"
                  key={stat}
                >
                  <div className="flex flex-col list-none">
                    <span
                      aria-hidden="true"
                      className="mb-[5px] block font-montserrat text-sm font-semibold leading-[22px] text-brand-red"
                    >
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <h3 className="m-0 font-montserrat text-base font-medium leading-6 text-ink max-[1400px]:text-sm max-[1400px]:leading-[22px] max-[768px]:max-w-[171px]">
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
