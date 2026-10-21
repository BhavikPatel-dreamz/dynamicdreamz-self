import React from "react";
import { Container } from "@/components/ui/container";
import { CmsFormClient } from "@/components/forms/CmsFormClient";
import type { Form as PayloadForm } from "@/types/payload-types";

export type FormBlockProps = {
  form: PayloadForm | number | string | null | undefined;
  enableIntro?: boolean;
  introContent?: any;
  eyebrow?: string;
  title?: string;
  description?: string;
  containerWidth?: "standard" | "narrow" | "wide";
};

export function FormBlock({
  form,
  eyebrow,
  title,
  description,
  containerWidth = "standard",
}: FormBlockProps) {
  const containerClass =
    containerWidth === "narrow"
      ? "max-w-[840px]"
      : containerWidth === "wide"
        ? "max-w-[1400px]"
        : undefined;

  const displayTitle =
    title || (typeof form === "object" && form !== null ? form.title : "");

  return (
    <section className="cms-form-section bg-white py-20 max-[991px]:py-14 max-[767px]:py-10">
      <Container className={containerClass}>
        {(eyebrow || displayTitle || description) && (
          <div className="mb-10 max-[767px]:mb-6">
            {eyebrow && (
              <div className="mb-3 flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-[30px] shrink-0 bg-brand-red max-[767px]:hidden"
                />
                <span className="text-sm font-medium uppercase tracking-wider text-[#66635f]">
                  {eyebrow}
                </span>
              </div>
            )}
            {displayTitle && (
              <h2 className="mb-3 font-display text-[35px] font-medium leading-[1.25] tracking-[-0.7px] text-[#090909] max-[1199px]:text-[30px] max-[767px]:text-[26px]">
                {displayTitle}
              </h2>
            )}
            {description && (
              <p className="max-w-[720px] text-base font-normal leading-relaxed text-[#535353] max-[767px]:text-sm">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="rounded-[10px] border border-[#e5e5e5] bg-white p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] max-[991px]:p-6 max-[767px]:p-5">
          <CmsFormClient form={form} />
        </div>
      </Container>
    </section>
  );
}
