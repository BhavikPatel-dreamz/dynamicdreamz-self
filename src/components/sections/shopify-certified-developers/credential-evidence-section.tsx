import Image from "next/image";

import { SplitSectionHeading } from "@/components/sections/shopify-certified-developers/split-section-heading";
import { Container } from "@/components/ui/container";
import { shopifyCredentialEvidence } from "@/content/shopify-certified-developers";

type CredentialEvidenceSectionProps = {
  content?: typeof shopifyCredentialEvidence;
};

export function CredentialEvidenceSection({
  content = shopifyCredentialEvidence,
}: CredentialEvidenceSectionProps) {
  return (
    <section
      className="scroll-mt-24 bg-[#fafaf7] py-[54px] max-[991px]:py-10"
      id="see-our-certifications"
      aria-labelledby="shopify-credential-evidence-title"
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] max-[1199px]:mb-[30px]"
          description={content.description}
          heading={content.heading}
          headingId="shopify-credential-evidence-title"
          textClassName="w-[56%]"
          titleClassName="w-[41%]"
        />
        <div className="grid grid-cols-4 gap-x-10 max-[1199px]:gap-x-5 max-[991px]:grid-cols-2 max-[991px]:gap-y-[30px] max-[575px]:grid-cols-1">
          {content.items.map((item) => (
            <article className="flex h-full flex-col text-center" key={item.title}>
              <a
                aria-label={`View the ${item.title} credential on Credly`}
                className="mx-auto mb-[27px] flex h-[230px] w-[246px] max-w-full items-start justify-center bg-[url('/assets/shopify-certified-developers/credential-wings.svg')] bg-top bg-contain bg-no-repeat focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt={item.imageAlt}
                  className="h-[213px] w-[174px] translate-y-[18px] object-contain transition-transform duration-300 hover:translate-y-2.5 motion-reduce:transition-none max-[1199px]:h-auto max-[1199px]:w-[165px] max-[575px]:w-[150px]"
                  height={213}
                  src={item.image}
                  width={174}
                />
              </a>
              <div className="flex flex-1 flex-col justify-between">
                <h3 className="mb-4 text-center text-[15px] leading-[22.5px] font-bold text-ink">
                  {item.title}
                </h3>
                <span className="mx-auto inline-block w-fit rounded-[5px] bg-brand-red/10 px-2.5 py-[5px] text-center text-xs leading-[18px] font-bold text-brand-red">
                  {item.count}
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-[50px] text-center text-sm leading-[26.6px] font-semibold italic text-ink max-[575px]:mt-[30px]">
          {content.note}
        </p>
      </Container>
    </section>
  );
}
