import { CareerApplyNowForm } from "@/components/sections/career-apply-now/career-apply-now-form";
import { CareerApplyNowLeftColumn } from "@/components/sections/career-apply-now/career-apply-now-left-column";
import { HeaderTwo } from "@/components/sections/request-quote/header-two";
import { Container } from "@/components/ui/container";
import { CmsFormClient } from "@/components/forms/CmsFormClient";
import type { Form as PayloadForm } from "@/types/payload-types";

export type CareerApplyNowPageProps = {
  heading?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  phoneHref?: string;
  emailLabel?: string;
  emailAddress?: string;
  emailHref?: string;
  note?: string;
  form?: PayloadForm | number | string | null;
};

export function CareerApplyNowPage({
  heading,
  phoneLabel,
  phoneNumber,
  phoneHref,
  emailLabel,
  emailAddress,
  emailHref,
  form,
}: CareerApplyNowPageProps = {}) {
  return (
    <div className="overflow-x-clip">
      <HeaderTwo />
      <section className="apply-interivew-sec p-[40px_0_10px_0]">
        <Container variant="form">
          <div className="apply-interivew-main rounded-[30px] p-[2px] bg-[linear-gradient(178.87deg,#15c064_11.23%,rgba(0,209,255,0.66)_33.98%,rgba(0,209,255,0)_78.28%)]">
            <div className="wrapper flex flex-wrap justify-between rounded-[30px] bg-white p-[78px] max-[1299px]:p-[78px_60px] max-[1199px]:p-[60px_40px] max-[991px]:flex-col max-[991px]:p-10 max-[767px]:p-[40px_20px] max-[320px]:p-[40px_10px]">
              <CareerApplyNowLeftColumn
                heading={heading}
                phoneLabel={phoneLabel}
                phoneNumber={phoneNumber}
                phoneHref={phoneHref}
                emailLabel={emailLabel}
                emailAddress={emailAddress}
                emailHref={emailHref}
              />
              {form ? (
                <div className="right-col w-[61%] max-[1199px]:w-[55%] max-[991px]:w-full">
                  <CmsFormClient
                    form={form}
                    submitButtonClassName="group/career-submit relative inline-flex min-h-[49px] cursor-pointer items-center justify-center overflow-hidden rounded-[30px] border-2 border-brand-red bg-brand-red px-8 py-[15px] text-center text-base leading-none font-bold text-white uppercase transition-colors duration-300 hover:bg-black hover:border-black disabled:cursor-wait disabled:opacity-70 max-[767px]:w-full"
                  />
                </div>
              ) : (
                <CareerApplyNowForm />
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
