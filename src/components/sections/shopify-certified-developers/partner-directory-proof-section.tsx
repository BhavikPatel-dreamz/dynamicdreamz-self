import Image from "next/image";

import { Container } from "@/components/ui/container";
import { shopifyPartnerDirectoryProof } from "@/content/shopify-certified-developers";

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mr-2 size-[34px] max-[1199px]:size-[30px]"
      fill="none"
      viewBox="0 0 34 33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.967.567c.363-.757 1.441-.757 1.804 0l4.348 9.081a1 1 0 0 0 .77.56l9.98 1.329c.832.11 1.165 1.136.557 1.715l-7.293 6.941a1 1 0 0 0-.294.906l1.82 9.902c.152.826-.72 1.46-1.459 1.06l-8.855-4.79a1 1 0 0 0-.952 0l-8.855 4.79c-.739.4-1.611-.234-1.46-1.06L7.9 21.1a1 1 0 0 0-.294-.906L.312 13.252c-.608-.579-.275-1.605.557-1.715l9.98-1.33a1 1 0 0 0 .77-.559L15.967.567Z"
        fill="#282828"
      />
    </svg>
  );
}

type PartnerDirectoryProofSectionProps = {
  content?: typeof shopifyPartnerDirectoryProof;
};

export function PartnerDirectoryProofSection({
  content = shopifyPartnerDirectoryProof,
}: PartnerDirectoryProofSectionProps) {
  return (
    <section
      className="pb-20 max-[991px]:pb-[50px]"
      aria-labelledby="shopify-partner-directory-title"
    >
      <Container>
        <div className="rounded-[30px] bg-[#fafaf7] p-[50px] max-[1199px]:p-[50px_40px] max-[991px]:p-[40px_30px] max-[575px]:rounded-[20px] max-[575px]:p-[30px_20px]">
          <header className="mx-auto max-w-[875px] text-center">
            <h2
              className="mb-[15px] font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[1199px]:text-[33px] max-[991px]:text-[32px] max-[991px]:leading-10 max-[575px]:text-2xl max-[575px]:leading-[33.24px]"
              id="shopify-partner-directory-title"
            >
              {content.heading}
            </h2>
            <p className="text-base leading-[30.4px] font-medium text-muted">
              {content.description}
            </p>
          </header>

          <div className="mt-[70px] grid grid-cols-4 items-end gap-10 max-[1199px]:mt-10 max-[1199px]:gap-5 max-[991px]:grid-cols-2 max-[991px]:gap-y-[30px] max-[575px]:mt-[30px] max-[575px]:grid-cols-1">
            {content.items.map((item) => (
              <div className="text-center" key={item.label}>
                {item.kind === "image" ? (
                  <a
                    aria-label="View Dynamic Dreamz in Shopify’s official Partner Directory"
                    className="mx-auto block w-fit focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                    href={content.href}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      alt={item.imageAlt}
                      className="mx-auto block h-11 w-[136px] object-contain"
                      height={item.imageHeight}
                      src={item.image}
                      width={item.imageWidth}
                    />
                  </a>
                ) : (
                  <p className="flex min-h-11 items-center justify-center text-[60px] leading-[49px] font-bold text-ink max-[1199px]:text-[50px] max-[1199px]:leading-11 max-[575px]:text-[40px] max-[575px]:leading-10">
                    {item.kind === "rating" ? <StarIcon /> : null}
                    {item.value}
                  </p>
                )}
                <p className="mt-[15px] border-t-[1.5px] border-ink/10 pt-[15px] text-sm leading-[21px] font-bold text-ink uppercase max-[1199px]:text-xs max-[575px]:mt-2.5 max-[575px]:pt-2.5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
