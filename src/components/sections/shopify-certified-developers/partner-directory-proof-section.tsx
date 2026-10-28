import Image from "next/image";

import { Container } from "@/components/ui/container";
import { shopifyPartnerDirectoryProof } from "@/content/shopify-certified-developers";

export type PartnerDirectoryProofItem =
  | {
      kind: "image";
      image: string;
      imageAlt?: string;
      imageWidth?: number;
      imageHeight?: number;
      label: string;
    }
  | {
      kind: "rating" | "text";
      value: string;
      label: string;
    };

export type PartnerDirectoryProofContent = {
  heading: string | readonly string[];
  description: string | readonly string[];
  href: string;
  items: readonly PartnerDirectoryProofItem[];
};

type PartnerDirectoryProofSectionProps = {
  content?: PartnerDirectoryProofContent;
};

export function PartnerDirectoryProofSection({
  content = shopifyPartnerDirectoryProof,
}: PartnerDirectoryProofSectionProps) {
  return (
    <section
      className="shopifys_official_partner_section pt-0 pb-20 max-[992px]:pb-[50px]"
      aria-labelledby="shopify-partner-directory-title"
    >
      <Container>
        <div
          data-aos="fade-up"
          className="sop-box-wrapper rounded-[30px] bg-[#fafaf7] p-[50px] max-[1199px]:p-[50px_40px] max-[992px]:p-[40px_30px] max-[575px]:rounded-[20px] max-[575px]:p-[30px_20px]"
        >
          <header className="section-title mx-auto max-w-[875px] text-center">
            <h2
              className="mb-[15px] font-montreal-medium text-[35px] leading-[48.475px] font-normal tracking-[-0.7px] text-ink max-[1199px]:text-[33px] max-[992px]:text-[32px] max-[992px]:leading-10 max-[575px]:text-2xl max-[575px]:leading-[33.24px]"
              id="shopify-partner-directory-title"
            >
              {content.heading}
            </h2>
            <p className="text-base leading-[30.4px] font-medium text-muted">
              {content.description}
            </p>
          </header>

          <div className="sop-state mt-[70px] max-[1199px]:mt-10 max-[575px]:mt-[30px]">
            <div className="sop-row grid grid-cols-4 items-end gap-10 max-[1199px]:gap-5 max-[992px]:grid-cols-2 max-[992px]:gap-y-[30px] max-[575px]:grid-cols-1">
              {content.items.map((item) => (
                <div className="sop-col text-center" key={item.label}>
                  <div className="sop-item">
                    {item.kind === "image" ? (
                      <a
                        aria-label="View Dynamic Dreamz in Shopify’s official Partner Directory"
                        className="mx-auto block w-fit focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                        href={content.href}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          alt={item.imageAlt ?? item.label}
                          className="mx-auto block h-11 w-[136px] object-contain"
                          height={item.imageHeight ?? 44}
                          src={item.image}
                          width={item.imageWidth ?? 136}
                        />
                      </a>
                    ) : (
                      <h3 className="flex min-h-11 items-center justify-center font-display text-[60px] leading-[49px] font-normal text-ink max-[1199px]:text-[50px] max-[1199px]:leading-11 max-[575px]:text-[40px] max-[575px]:leading-10">
                        {item.value}
                      </h3>
                    )}
                    <p className="mt-[15px] border-t-[1.5px] border-ink/10 pt-[15px] text-sm leading-[21px] font-semibold text-[#535353] uppercase max-[1199px]:text-xs max-[575px]:mt-2.5 max-[575px]:pt-2.5">
                      {item.label}
                    </p>
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
