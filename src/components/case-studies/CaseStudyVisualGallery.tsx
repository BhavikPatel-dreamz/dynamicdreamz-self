import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type {
  CaseStudyCustomSection,
  CaseStudyKeyFeatures as KeyFeaturesType,
  CaseStudyProjectDelivery as DeliveryType,
} from "@/types/case-study";
import { SplitSectionHeading } from "../ui/split-section-heading";

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
          className="border-t border-[rgba(40,40,40,0.11)] py-20 max-[992px]:py-15 max-[768px]:py-10"
          aria-label={section.heading}
        >
          <Container>
            <div className="mx-auto max-w-[900px]">
              <div data-aos={!section.takeaways?.length ? "fade-up" : undefined}>
                {section.eyebrow ? (
                  <Eyebrow as="div" className="mb-4" linePosition="overlay">
                    {section.eyebrow}
                  </Eyebrow>
                ) : null}
                <h2 className="mb-4 font-montreal-medium text-[35px] font-normal leading-[1.38] text-ink max-[1200px]:text-[28px] max-[768px]:text-2xl">
                  {section.heading}
                </h2>
                {section.lead ? (
                  <p className="mb-4 font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[768px]:text-sm">
                    {section.lead}
                  </p>
                ) : null}
                {section.description ? (
                  <p className="mb-4 font-sans text-[16px] font-semibold leading-[30.4px] text-[#282828] max-[768px]:text-sm">
                    {section.description}
                  </p>
                ) : null}
              </div>
              {section.items && section.items.length > 0 ? (
                <div
                  data-aos="fade-up"
                  className="mt-8 grid grid-cols-3 gap-4 max-[1200px]:grid-cols-2 max-[768px]:grid-cols-1"
                >
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
                      className="m-0 font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[768px]:text-sm"
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
    ? "grid-cols-2 max-[1200px]:grid-cols-1"
    : "grid-cols-3 max-[1200px]:grid-cols-2 max-[768px]:grid-cols-1";

  return (
    <section
      className="bg-[#eff4ef] py-20 max-[992px]:py-[50px]"
      aria-labelledby="key-features-heading"
    >
      <Container>
        <SplitSectionHeading
          description={keyFeatures.description}
          heading={heading}
          headingId="key-features-heading"
          eyebrow={eyebrow}
          variant="left"
        />

        <div className={`grid gap-4 ${gridColsClass}`} data-aos="fade-up">
          {keyFeatures.items.map((item, index) => {
            const hasMetaBelowDesc = Boolean(item.label || item.table);
            return (
              <div
                key={`${item.number}-${index}`}
                className="flex h-full flex-col overflow-hidden rounded-[18px] border border-[rgba(40,40,40,0.07)] bg-white p-[25px] max-[768px]:rounded-[12px] max-[768px]:p-5"
              >
                <div className="mb-[30px]">
                  <span className="block font-montserrat text-[26px] font-medium leading-none text-[#ad5151]">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3
                    className={`font-montreal-medium text-[20px] font-normal leading-[28.8px] text-[#282828] max-[992px]:text-[18px] max-[992px]:leading-[26px] ${
                      keyFeatures.isTwoColumn || item.description
                        ? "mb-3"
                        : "mb-0"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.description ? (
                    <p
                      className={`font-sans text-[14px] font-normal leading-6 text-[#535353] whitespace-pre-line ${
                        hasMetaBelowDesc ? "mb-[15px]" : "mb-0"
                      }`}
                    >
                      {item.description}
                    </p>
                  ) : null}
                  {item.label ? (
                    <span className="label block border-l-2 border-[#ad5151] bg-[#ad5151]/[0.07] px-3 py-[7px] font-sans text-sm font-medium leading-6 text-[#535353] max-[768px]:text-xs max-[768px]:leading-5">
                      {item.label}
                    </span>
                  ) : null}
                  {item.table &&
                  item.table.headers.length > 0 &&
                  item.table.rows.length > 0 ? (
                    <div className="mt-[15px] overflow-x-auto whitespace-nowrap">
                      <table className="detail-table w-full border-collapse text-xs">
                        <thead>
                          <tr>
                            {item.table.headers.map((header, headerIdx) => (
                              <th
                                key={`th-${headerIdx}`}
                                className="border-b border-[rgba(40,40,40,0.11)] px-[9px] py-2 text-left text-[12px] font-bold uppercase tracking-[0.05em] text-[#282828]"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.table.rows.map((row, rowIdx) => (
                            <tr key={`tr-${rowIdx}`}>
                              {row.map((cell, cellIdx) => (
                                <td
                                  key={`td-${rowIdx}-${cellIdx}`}
                                  className="border-b border-[rgba(40,40,40,0.11)] px-[9px] py-2 text-[#535353]"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

type CaseStudyServiceDeliveredProps = {
  projectDelivery?: DeliveryType;
};

export function CaseStudyServiceDelivered({
  projectDelivery,
}: CaseStudyServiceDeliveredProps) {
  if (!projectDelivery || !projectDelivery.items || projectDelivery.items.length === 0) {
    return null;
  }

  const eyebrow = projectDelivery.eyebrow || caseStudiesUiCopy.deliveryEyebrow;
  const heading = projectDelivery.heading || caseStudiesUiCopy.deliveryHeading;
  const totalItems = projectDelivery.items.length;

  return (
    <section
      className="py-20 max-[992px]:py-[50px]"
      aria-labelledby="delivery-heading"
    >
      <Container>
        <div
          data-aos="fade-up"
          className="flex flex-wrap overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.11)] max-[768px]:rounded-[16px]"
        >
          <div className="w-[35%] border-r border-[rgba(40,40,40,0.11)] bg-[#fbefd7] p-[34px] max-[1200px]:p-[30px] max-[992px]:w-full max-[992px]:border-r-0 max-[992px]:border-b max-[992px]:px-5 max-[992px]:py-[25px] max-[768px]:border-b-0 max-[768px]:p-5">
            <Eyebrow as="div" className="mb-4" lineThickness="thin">
              {eyebrow}
            </Eyebrow>
            <h2
              id="delivery-heading"
              className="m-0 font-montreal-medium text-[35px] font-normal leading-[49px] text-[#282828] max-[1200px]:text-[30px] max-[1200px]:leading-[42px] max-[768px]:text-2xl max-[768px]:leading-[31.2px]"
            >
              {heading}
            </h2>
          </div>

          <div className="flex w-[65%] bg-white max-[992px]:w-full">
            <div className="grid w-full grid-cols-2 max-[768px]:grid-cols-1">
              {projectDelivery.items.map((item, index) => {
                const isInLastDesktopRow =
                  totalItems % 2 === 0
                    ? index >= totalItems - 2
                    : index === totalItems - 1;
                return (
                  <div
                    key={`${item.name}-${index}`}
                    className={`p-6 max-[992px]:p-5 max-[768px]:border-l-0 max-[768px]:border-t max-[768px]:border-b-0 max-[768px]:border-[rgba(40,40,40,0.11)] max-[768px]:px-5 max-[768px]:py-[15px] [&:nth-child(even)]:border-l [&:nth-child(even)]:border-[rgba(40,40,40,0.11)] max-[768px]:[&:nth-child(even)]:border-l-0 ${
                      isInLastDesktopRow
                        ? "border-b-0"
                        : "border-b border-[rgba(40,40,40,0.11)]"
                    }`}
                  >
                    <span className="mb-3 block font-montserrat text-[12px] font-medium uppercase leading-none text-[#535353]">
                      {item.category || caseStudiesUiCopy.serviceDelivered}
                    </span>
                    <h3 className="m-0 font-montreal-medium text-[16px] font-normal leading-[22.36px] text-[#282828]">
                      {item.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
