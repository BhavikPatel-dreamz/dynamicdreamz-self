import { CommerceSolutionsAccordion, type CommerceSolutionItem } from "@/components/sections/home/commerce-solutions-accordion";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { commerceSolutions, homeSectionCopy } from "@/content/home-client";

export type CommerceSolutionsSectionProps = {
  title?: string;
  description?: string;
  solutions?: readonly CommerceSolutionItem[];
};

export function CommerceSolutionsSection({
  title = homeSectionCopy.commerceSolutionsTitle,
  description = homeSectionCopy.commerceSolutionsDescription,
  solutions = commerceSolutions,
}: CommerceSolutionsSectionProps = {}) {
  const items = solutions.length > 0 ? solutions : commerceSolutions;

  return (
    <section className="py-20 max-[992px]:py-15 max-[768px]:py-10" aria-labelledby="commerce-solutions-title">
      <Container>
        <SplitSectionHeading
          className="mb-[54px] max-[992px]:mb-8"
          description={description}
          heading={title}
          headingId="commerce-solutions-title"
          titleColumnClassName="w-[40%] max-[992px]:w-full"
          textColumnClassName="w-[47%] max-[992px]:w-full max-[992px]:mt-0"
          variant="left"
        />
        <CommerceSolutionsAccordion items={items} />
      </Container>
    </section>
  );
}
