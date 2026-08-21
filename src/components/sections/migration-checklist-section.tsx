import Image from "next/image";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type MigrationChecklistBullet = {
  label?: string;
  text: string;
};

export type MigrationChecklistPhase = {
  title: string;
  description?: string;
  bullets?: readonly MigrationChecklistBullet[];
};

export type MigrationChecklistSectionProps = {
  content: {
    heading: string;
    description?: string;
    sections: readonly MigrationChecklistPhase[];
  };
  className?: string;
  id?: string;
};

export function MigrationChecklistSection({
  content,
  className = "migration-process-step-sec px-0 py-20 max-[767px]:py-[50px]",
  id = "our-migration-service",
}: MigrationChecklistSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="title mb-10 text-center mx-auto max-w-[850px] max-[767px]:mb-6">
          <h2 className="mb-1.5 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading, "max-[1199px]:hidden")}
          </h2>
          {content.description && (
            <p className="mt-2.5 font-sans text-base font-medium leading-[27.2px] text-[#535353] max-[767px]:text-sm">
              {formatBrText(content.description, "max-[1199px]:hidden")}
            </p>
          )}
        </div>

        <div className="migration-process-main">
          <div className="migration-process-inner">
            <div className="migration-list border-t-[1.5px] border-[#efefef] pt-8 max-[767px]:pt-5">
              {content.sections.map((sec, idx) => (
                <div className="mb-8 last:mb-0" key={idx}>
                  <h4 className="mb-2.5 font-sans text-[20px] font-bold leading-[28px] text-ink max-[767px]:text-lg">
                    {sec.title}
                  </h4>
                  {sec.description && (
                    <p className="mb-4 text-base font-medium leading-[27.2px] tracking-[0.02em] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
                      {sec.description}
                    </p>
                  )}
                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="mb-8 space-y-4">
                      {sec.bullets.map((bullet, bulletIdx) => (
                        <li
                          className="relative pl-[34px] text-base font-medium leading-[27.2px] tracking-[0.02em] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6"
                          key={bulletIdx}
                        >
                          <Image
                            alt=""
                            aria-hidden="true"
                            className="absolute top-[3px] left-0 size-[22px] object-contain"
                            height={22}
                            src="/assets/icons/bullets-icon.svg"
                            width={22}
                          />
                          {bullet.label && (
                            <strong className="font-bold text-ink">
                              {bullet.label}{" "}
                            </strong>
                          )}
                          <span>{bullet.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
