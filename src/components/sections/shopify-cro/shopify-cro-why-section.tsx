import { Container } from "@/components/ui/container";
import { shopifyCroWhyDynamicDreamz } from "@/content/shopify-cro-agency";

export type ShopifyCroWhySectionProps = {
  content?: typeof shopifyCroWhyDynamicDreamz;
  className?: string;
};

export function ShopifyCroWhySection({
  content = shopifyCroWhyDynamicDreamz,
  className = "shopify-cro-dynamic-dreamz bg-white pt-0 pb-20 max-[992px]:pb-12",
}: ShopifyCroWhySectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="cro-dynamic-dreamz-wrap overflow-hidden rounded-[30px] bg-[#F7F4E9]">
          <div className="column-row flex flex-wrap items-end justify-between p-[43px_57px_0] max-[992px]:p-[35px_30px_0] max-[767px]:p-[25px_20px_0]">
            <div className="column-left w-[51%] max-[992px]:w-full">
              <div className="content-box pb-[50px] max-[992px]:pb-8">
                <h3 className="mb-4 font-sans text-[35px] font-bold leading-[44px] tracking-[-0.7px] text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
                  {content.heading}
                </h3>
                {content.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="mb-6 font-sans text-base font-medium leading-[190%] text-muted last:mb-0 max-[767px]:text-[15px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="column-right w-[43.5%] max-[992px]:w-full">
              <div className="content-list rounded-t-[30px] border-[1.5px] border-[#AD5151]/40 bg-white p-[35px_26px] max-[767px]:p-5">
                <ul className="m-0 list-none p-0">
                  {content.points.map((point) => (
                    <li
                      key={point}
                      className="mb-[17px] flex items-center border-b border-black/10 pb-[17px] font-sans text-base font-semibold leading-[128%] text-ink last:mb-0 last:border-b-0 last:pb-0 max-[767px]:text-sm"
                    >
                      <svg
                        className="mr-3 size-4 flex-shrink-0 text-brand-red"
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
              </div>
            </div>
          </div>

          <div className="bottom-text bg-[#AD5151] px-5 py-3.5 text-center">
            <p className="m-0 font-sans text-lg font-bold leading-none text-white max-[767px]:text-base">
              {content.tagline}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
