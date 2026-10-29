import { HeaderTwo } from "@/components/sections/request-quote/header-two";
import { QuoteForm } from "@/components/sections/request-quote/quote-form";
import { CmsFormClient } from "@/components/forms/CmsFormClient";
import type { Form as PayloadForm } from "@/types/payload-types";
import { requestQuoteContent } from "@/content/request-quote";
import {
  QuoteBadgeItem,
  QuoteCounterItem,
  QuoteLeftColumn,
} from "@/components/sections/request-quote/quote-left-column";
import { QuoteTestimonialItem } from "@/components/sections/request-quote/quote-testimonials";
import { Container } from "@/components/ui/container";

export type RequestQuotePageProps = {
  hero?: {
    title: string;
    description: string;
  };
  counters?: readonly QuoteCounterItem[];
  badges?: readonly QuoteBadgeItem[];
  testimonials?: readonly QuoteTestimonialItem[];
  budgetOptions?: readonly string[];
  form?: PayloadForm | number | string | null;
};

export function RequestQuotePage({
  hero,
  counters,
  badges,
  testimonials,
  budgetOptions,
  form,
}: RequestQuotePageProps = {}) {
  return (
    <div className="overflow-x-clip">
      <HeaderTwo />
      <section className="request-quote-sec relative -mt-[111px] overflow-hidden p-0">
        <Container variant="form">
          <div className="request-quote-main">
            <div className="wrapper flex max-[992px]:flex-col-reverse">
              <div className="left-col-wrapper relative w-1/2 before:absolute before:top-0 before:right-0 before:-z-10 before:h-full before:w-[100vw] before:bg-[#fbf7ed] before:content-[''] max-[992px]:w-full max-[992px]:before:left-1/2 max-[992px]:before:right-1/2 max-[992px]:before:-ml-[50vw] max-[992px]:before:-mr-[50vw]">
                <QuoteLeftColumn
                  badges={badges}
                  counters={counters}
                  hero={hero}
                  testimonials={testimonials}
                />
              </div>
              {form ? (
                <div className="right-col w-1/2 py-[150px] pl-[46px] pb-[110px] max-[1199px]:pl-[30px] max-[992px]:w-full max-[992px]:pt-[150px] max-[992px]:pl-0 max-[992px]:pb-[50px] max-[767px]:pt-[145px] max-[767px]:pb-[50px]">
                  <h2 className="mb-6 font-display text-[35px] leading-[48.475px] font-medium tracking-[-0.7px] text-ink max-[1199px]:text-[29px] max-[767px]:leading-[33.24px] max-[767px]:tracking-[-.48px] max-[992px]:mb-10 max-[359px]:text-2xl">
                    {hero?.title || (typeof form === "object" && form !== null && "title" in form && form.title ? form.title : requestQuoteContent.form.title)}
                  </h2>
                  <CmsFormClient
                    form={form}
                  />
                </div>
              ) : (
                <QuoteForm budgetOptions={budgetOptions} />
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
