import { Container } from "@/components/ui/container";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type {
  CaseStudyCustomSection,
  CaseStudyKeyFeatures as KeyFeaturesType,
  CaseStudyProjectDelivery as DeliveryType,
} from "@/types/case-study";

type CaseStudyCustomSectionsProps = {
  sections?: CaseStudyCustomSection[];
};

export function CaseStudyCustomSections({ sections }: CaseStudyCustomSectionsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={index}
          className="border-t border-[rgba(40,40,40,0.11)] py-20 max-[991px]:py-[50px]"
          aria-label={section.heading}
        >
          <Container>
            <div className="mx-auto max-w-[900px]">
              {section.eyebrow ? (
                <div className="relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-[#535353] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                  <span>{section.eyebrow}</span>
                </div>
              ) : null}
              <h2 className="mb-4 font-montreal-medium text-[35px] font-normal leading-[1.38] text-ink max-[1199px]:text-[28px] max-[767px]:text-2xl">
                {section.heading}
              </h2>
              {section.lead ? (
                <p className="mb-4 font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[767px]:text-sm">
                  {section.lead}
                </p>
              ) : null}
              {section.description ? (
                <p className="mb-4 font-sans text-[16px] font-semibold leading-[30.4px] text-[#282828] max-[767px]:text-sm">
                  {section.description}
                </p>
              ) : null}
              {section.items && section.items.length > 0 ? (
                <div className="mt-8 grid grid-cols-3 gap-4 max-[1199px]:grid-cols-2 max-[767px]:grid-cols-1">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="border border-[rgba(40,40,40,0.11)] bg-white p-5"
                    >
                      {item.number ? (
                        <span className="mb-2 block font-montserrat text-[26px] font-bold text-[#ad5151]">
                          {item.number}
                        </span>
                      ) : null}
                      {item.title ? (
                        <h3 className="mb-1 font-display text-[16px] font-medium text-[#282828]">
                          {item.title}
                        </h3>
                      ) : null}
                      {item.note ? (
                        <p className="m-0 font-sans text-[14px] text-[#535353]">
                          {item.note}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
              {section.takeaways && section.takeaways.length > 0 ? (
                <div className="mt-6 space-y-4">
                  {section.takeaways.map((takeaway, tIdx) => (
                    <p
                      key={tIdx}
                      className="m-0 font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[767px]:text-sm"
                    >
                      {takeaway}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}

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
    <section className="bg-[#eff4ef] py-20 max-[991px]:py-[50px]" aria-labelledby="key-features-heading">
      <Container>
        <div >
          <div className="relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-[#535353] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
            <span>{eyebrow}</span>
          </div>
          <h2
            id="key-features-heading"
            className="m-0 font-montreal-medium text-[35px] font-normal leading-[1.38] text-ink max-[1199px]:text-[28px] max-[767px]:text-2xl"
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
                <h3 className="m-0 font-display text-[18px] font-medium leading-[26px] text-[#282828]">
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

type CaseStudyServiceDeliveredProps = {
  projectDelivery?: DeliveryType;
};

export function CaseStudyServiceDelivered({ projectDelivery }: CaseStudyServiceDeliveredProps) {
  if (!projectDelivery || !projectDelivery.items || projectDelivery.items.length === 0) {
    return null;
  }

  const eyebrow = projectDelivery.eyebrow || caseStudiesUiCopy.deliveryEyebrow;
  const heading = projectDelivery.heading || caseStudiesUiCopy.deliveryHeading;

  return (
    <section className="py-20 max-[991px]:py-[50px]" aria-labelledby="delivery-heading">
      <Container>
        <div className="flex flex-wrap overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.11)] max-[767px]:rounded-[16px]">
          <div className="w-[35%] border-r border-[rgba(40,40,40,0.11)] bg-[#fbefd7] p-[34px] max-[992px]:w-full max-[992px]:border-r-0 max-[992px]:border-b max-[992px]:border-[rgba(40,40,40,0.11)] max-[767px]:p-5">
            <div className="relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-[#535353] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
              <span>{eyebrow}</span>
            </div>
            <h2
              id="delivery-heading"
              className="m-0 font-montreal-medium text-[30px] font-normal leading-[1.3] text-[#282828] max-[767px]:text-[22px]"
            >
              {heading}
            </h2>
          </div>

          <div className="flex w-[65%] bg-white max-[992px]:w-full">
            <div className="grid w-full grid-cols-2 max-[767px]:grid-cols-1">
              {projectDelivery.items.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="border-b border-[rgba(40,40,40,0.11)] p-6 max-[767px]:p-4 [&:nth-child(even)]:border-l [&:nth-child(even)]:border-[rgba(40,40,40,0.11)] max-[767px]:[&:nth-child(even)]:border-l-0"
                >
                  <span className="mb-3 block font-montserrat text-[12px] font-medium uppercase leading-none tracking-[0.5px] text-[#535353]">
                    {item.category || caseStudiesUiCopy.serviceDelivered}
                  </span>
                  <h5 className="m-0 font-display text-[16px] font-medium leading-[22px] text-[#282828] max-[767px]:text-[15px]">
                    {item.name}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
