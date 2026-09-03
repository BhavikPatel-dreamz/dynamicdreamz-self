import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { shopifyPlusAgencyWhyChoose } from "@/content/shopify-plus-agency";

export type ShopifyPlusProofContent = typeof shopifyPlusAgencyWhyChoose;

export function ShopifyPlusProofSection({
  content,
}: {
  content: ShopifyPlusProofContent;
}) {
  return (
    <section className="bg-white py-20 max-[992px]:py-[50px] max-[992px]:pt-[25px] max-[767px]:pt-[50px]" data-section="why-shopify-plus" id="why-shopify-plus">
      <Container>
        <div className="flex flex-wrap border-b border-black/10">
          <div className="w-1/2 py-[30px] pr-[30px] max-[1199px]:py-5 max-[1199px]:pr-5 max-[991px]:w-full max-[767px]:p-0">
            <Eyebrow className="mb-4" lineThickness="thin" lineWidth="fixed">
              {content.eyebrow}
            </Eyebrow>
            <h2 className="mb-4 font-montreal-medium text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
              {content.heading}
            </h2>
            <p className="m-0 text-base font-medium leading-[27px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
              {content.intro}
            </p>
          </div>
          <div className="w-1/2 py-[30px] pl-10 max-[1199px]:py-5 max-[1199px]:pl-5 max-[991px]:w-full max-[991px]:pl-0 max-[767px]:mt-5 max-[767px]:p-0">
            <p className="m-0 text-base font-medium leading-[27px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
              {content.intro}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap border-b border-black/10">
          <div className="w-1/2 py-[30px] pr-[30px] max-[1199px]:py-5 max-[1199px]:pr-5 max-[991px]:w-full max-[767px]:p-0">
            <p className="m-0 text-base font-medium leading-[27px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
              {content.text}
            </p>
          </div>
          <div className="w-1/2 border-l border-black/10 py-[30px] pl-10 max-[1199px]:py-5 max-[1199px]:pl-5 max-[991px]:w-full max-[991px]:border-l-0 max-[991px]:pl-0 max-[767px]:mt-5 max-[767px]:p-0">
            <ul className="grid grid-cols-2 gap-x-5 gap-y-5 max-[767px]:mt-0">
              {content.stats.map((stat, index) => (
                <li className="pt-0 max-[767px]:border-t max-[767px]:border-black/10 max-[767px]:pt-4 max-[767px]:first:border-t-0 max-[767px]:first:pt-0" key={stat}>
                  <span aria-hidden="true" className="mb-2 block font-montserrat text-xs font-bold leading-4 text-brand-red">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span className="block font-montserrat text-base font-medium leading-6 text-ink">
                    {stat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
