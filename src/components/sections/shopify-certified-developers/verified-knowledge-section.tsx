import Image from "next/image";

import { SplitSectionHeading } from "@/components/sections/shopify-certified-developers/split-section-heading";
import { Container } from "@/components/ui/container";
import { verifiedShopifyKnowledge } from "@/content/shopify-certified-developers";

type VerifiedKnowledgeSectionProps = {
  content?: typeof verifiedShopifyKnowledge;
};

export function VerifiedKnowledgeSection({
  content = verifiedShopifyKnowledge,
}: VerifiedKnowledgeSectionProps) {
  return (
    <section
      className="py-20 max-[992px]:py-[50px]"
      aria-labelledby="verified-shopify-knowledge-title"
    >
      <Container>
        <SplitSectionHeading
          className="mb-[70px] max-[1199px]:mb-[50px] max-[992px]:mb-[30px]"
          description={content.description}
          heading={content.heading}
          headingId="verified-shopify-knowledge-title"
          textClassName="w-[calc(54%-15px)] max-[1199px]:w-[calc(43%-15px)]"
          titleClassName="w-[calc(46%-15px)] max-[1199px]:w-[calc(57%-15px)]"
        />
        <div className="grid grid-cols-3 divide-x divide-[#333]/10 max-[992px]:grid-cols-1 max-[992px]:divide-x-0 max-[992px]:divide-y">
          {content.items.map((item) => (
            <article
              className="px-[50px] text-center max-[1199px]:px-[15px] max-[992px]:px-0 max-[992px]:py-5 max-[992px]:first:pt-0 max-[992px]:last:pb-0"
              key={item.title}
            >
              <Image
                alt={item.iconAlt}
                aria-hidden={item.iconAlt === ""}
                className="mx-auto mb-5 size-[62px] object-contain"
                height={62}
                src={item.icon}
                width={62}
              />
              <h3 className="mb-2.5 text-center font-sans text-lg leading-[23px] font-bold text-brand-red">
                {item.title}
              </h3>
              <p className="text-base leading-[30.4px] font-medium text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
