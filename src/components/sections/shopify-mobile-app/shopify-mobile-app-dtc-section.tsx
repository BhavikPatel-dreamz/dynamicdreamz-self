import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import type { shopifyMobileAppDtcSection } from "@/content/shopify-mobile-app-development";

type ShopifyMobileAppDtcSectionProps = {
  content: typeof shopifyMobileAppDtcSection;
};

export function ShopifyMobileAppDtcSection({
  content,
}: ShopifyMobileAppDtcSectionProps) {
  return (
    <section className="shopify_mobile_app_development_for_dtc_brands bg-[#FAFAF7] py-20 max-[991px]:py-[50px]">
      <Container>
        <SplitSectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          paragraphs={content.paragraphs}
          className="mb-[50px] max-[767px]:mb-[30px]"
        />

        <div className="wrapper flex flex-wrap -mx-[10px] -mb-5 justify-center">
          {content.cards.map((card, idx) => (
            <div
              key={idx}
              className="mobile-app-col w-1/3 px-[10px] mb-5 max-[991px]:w-1/2 max-[767px]:w-full"
            >
              <div className="mobile-app-box flex h-full flex-col justify-between rounded-[20px] border border-[rgba(40,40,40,0.10)] bg-[#EFF4EF] p-[35px_25px_80px_25px] max-[1199px]:p-[30px_20px_50px_20px]">
                <div>
                  <span className="mb-[15px] block font-montserrat text-[13px] font-bold uppercase leading-5 text-[#AD5151] max-[767px]:mb-2.5">
                    {card.tag}
                  </span>
                  <h3 className="mb-2.5 font-montreal-medium text-[28px] font-medium leading-[36.4px] text-ink max-[1399px]:text-[22px] max-[1399px]:leading-[30px] max-[1199px]:text-[18px] max-[1199px]:leading-[26px] max-[767px]:mb-2.5">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm leading-6 text-[#535353]">
                    {card.description}
                  </p>
                </div>

                {"badges" in card && card.badges && card.badges.length > 0 && (
                  <div className="global_brands_grid_wrap mt-[30px] flex flex-wrap items-center -mx-[15px] max-[1199px]:-mb-[15px]">
                    {card.badges.map((badge, bIdx) => (
                      <div
                        key={bIdx}
                        className="global_brands_item px-[15px] max-[1199px]:w-1/2 max-[1199px]:mb-[15px] max-[1199px]:px-3 not-last:border-r not-last:border-[#d9d9d9] max-[767px]:border-none"
                      >
                        <a
                          href={badge.href}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Image
                            src={badge.src}
                            alt={badge.alt}
                            width={badge.width}
                            height={badge.height}
                            className="h-auto max-w-[140px] max-[1199px]:max-w-full"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
