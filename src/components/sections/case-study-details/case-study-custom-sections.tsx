import { Container } from "@/components/ui/container";
import type { CaseStudyCustomSection } from "@/types/case-study";

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
          className="border-t border-[rgba(40,40,40,0.11)] py-20 max-[767px]:py-[50px]"
          aria-label={section.heading}
        >
          <Container>
            <div className="mx-auto max-w-[900px]">
              {section.eyebrow ? (
                <div className="relative mb-4 inline-flex items-center pl-10 text-[14px] font-semibold uppercase leading-[1.2] text-[#282828] before:absolute before:left-0 before:top-[7px] before:h-0.5 before:w-[30px] before:bg-[#ad5151] max-[767px]:pl-[23px] max-[767px]:before:top-1 max-[767px]:before:w-[15px]">
                  <span>{section.eyebrow}</span>
                </div>
              ) : null}
              <h2 className="mb-4 font-montserrat text-[35px] font-bold leading-[1.38] text-[#282828] max-[1199px]:text-[28px] max-[767px]:text-2xl">
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
                        <h3 className="mb-1 font-montserrat text-[16px] font-bold text-[#282828]">
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
