import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type { CaseStudyKeyFeatures as KeyFeaturesType } from "@/types/case-study";

type CaseStudyKeyFeaturesProps = {
  keyFeatures?: KeyFeaturesType;
};

export function CaseStudyKeyFeatures({ keyFeatures }: CaseStudyKeyFeaturesProps) {
  if (!keyFeatures || !keyFeatures.items || keyFeatures.items.length === 0) {
    return null;
  }

  const eyebrow = keyFeatures.eyebrow || caseStudiesUiCopy.featuresEyebrow;
  const heading = keyFeatures.heading || caseStudiesUiCopy.featuresHeading;

  const gridColsClass = keyFeatures.isTwoColumn
    ? "grid-cols-2 max-[767px]:grid-cols-1"
    : "grid-cols-3 max-[1199px]:grid-cols-2 max-[767px]:grid-cols-1";

  return (
    <section className="bg-[#eff4ef] py-20 max-[767px]:py-[50px]" aria-labelledby="key-features-heading">
      <Container>
        <div className="mb-10 max-[767px]:mb-6">
          <div className="relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-[#282828] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
            <span>{eyebrow}</span>
          </div>
          <h2
            id="key-features-heading"
            className="m-0 font-montserrat text-[35px] font-bold leading-[1.38] text-[#282828] max-[1199px]:text-[28px] max-[767px]:text-2xl"
          >
            {heading}
          </h2>
        </div>

        <div className={`grid gap-4 ${gridColsClass}`}>
          {keyFeatures.items.map((item, index) => (
            <div
              key={`${item.number}-${index}`}
              className="flex h-full flex-col justify-between overflow-hidden rounded-[18px] border border-[rgba(40,40,40,0.07)] bg-white p-[25px]"
            >
              <div className="mb-[30px]">
                <span className="block font-montserrat text-[26px] font-medium leading-none text-[#ad5151]">
                  {item.number}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="m-0 font-montserrat text-[18px] font-bold leading-[26px] text-[#282828]">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-2.5 font-sans text-[14px] font-normal leading-[22px] text-[#535353]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
