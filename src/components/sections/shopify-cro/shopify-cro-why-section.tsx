import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { shopifyCroWhyDynamicDreamz } from "@/content/shopify-cro-agency";

export type ShopifyCroWhySectionProps = {
  content?: typeof shopifyCroWhyDynamicDreamz;
  className?: string;
};

export function ShopifyCroWhySection({
  content = shopifyCroWhyDynamicDreamz,
  className = "shopify-cro-dynamic-dreamz bg-white pt-0 pb-20 max-[991px]:pb-12",
}: ShopifyCroWhySectionProps) {
  return (
    <section className={className}>
      <Container>
        <div
          data-aos="fade-up"
          className="cro-dynamic-dreamz-wrap overflow-hidden rounded-[30px] bg-[#F7F4E9]"
        >
          <div className="column-row flex flex-wrap items-end justify-between p-[43px_57px_0] max-[1199px]:p-[30px_30px_0] max-[991px]:p-[30px_20px_0]">
            <div className="column-left w-[51%] max-[991px]:w-full">
              <div data-aos="fade-up" className="content-box pb-[50px] max-[991px]:pb-2.5">
                <div className="section_title_with_eyebrow mb-[15px]">
                  <div className="title">
                    <Eyebrow className="mb-4 text-[#535353]">
                      {content.eyebrow}
                    </Eyebrow>
                    <h2 className="m-0 font-display text-[35px] font-normal leading-[44px] tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
                      {content.heading}
                    </h2>
                  </div>
                </div>
                {content.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="mb-6 font-sans text-base font-medium leading-[190%] text-muted last:mb-0 max-[767px]:text-sm"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="column-right w-[43.5%] max-[991px]:w-full">
              <div className="content-list rounded-t-[30px] border-[1.5px] border-[#AD5151]/40 bg-white p-[35px_26px] max-[767px]:p-5">
                <ul className="m-0 list-none p-0">
                  {content.points.map((point) => (
                    <li
                      key={point}
                      className="mb-[17px] border-b border-black/10 bg-[url('/assets/shopify-cro-agency/assessment/list-arrow.svg')] bg-[length:16px] bg-[left_top_5px] bg-no-repeat pb-[17px] pl-[25px] font-sans text-base font-semibold leading-[128%] text-ink last:mb-0 last:border-b-0 last:pb-0 max-[767px]:text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bottom-text bg-[#AD5151] p-3 text-center">
            <p className="m-0 font-sans text-base font-medium leading-none text-white max-[767px]:text-sm max-[767px]:leading-[22px]">
              {content.tagline}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
