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
        <div
          key={index}
          className={section.className}
          dangerouslySetInnerHTML={{ __html: section.html }}
        />
      ))}
    </>
  );
}
