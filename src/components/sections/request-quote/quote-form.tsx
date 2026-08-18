"use client";

import { useActionState, useEffect, useRef } from "react";

import { type QuoteFormState, submitQuoteForm } from "@/app/request-quote/actions";
import { requestQuoteContent } from "@/content/request-quote";

const attributionFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const initialQuoteFormState: QuoteFormState = {
  status: "idle",
  message: "",
};

function FieldLabel({
  children,
  htmlFor,
  required = false,
}: {
  children: string;
  htmlFor: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-4 block text-lg leading-[26.19px] font-semibold text-[#090909] max-[1199px]:mb-2.5 max-[1199px]:text-sm max-[991px]:text-base"
    >
      {children}
      {required ? <em className="ml-1 not-italic text-[#d92128]">*</em> : null}
    </label>
  );
}

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitQuoteForm,
    initialQuoteFormState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    for (const name of attributionFields) {
      const field = formRef.current?.elements.namedItem(name);

      if (field instanceof HTMLInputElement) {
        field.value = searchParams.get(name) ?? "";
      }
    }
  }, []);

  return (
    <div className="right-col w-1/2 py-[150px] pl-[46px] pb-[110px] max-[1199px]:pl-[30px] max-[991px]:w-full max-[991px]:pt-[150px] max-[991px]:pl-0 max-[991px]:pb-[50px] max-[767px]:pt-[120px]">
      <h2 className="mb-7 font-montserrat text-[35px] leading-[43.925px] font-bold text-black max-[1199px]:text-[29px] max-[991px]:mb-10 max-[359px]:text-2xl">
        {requestQuoteContent.form.title}
      </h2>

      <form ref={formRef} action={formAction} aria-label="Request a quote form">
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          aria-hidden="true"
        />
        {attributionFields.map((name) => (
          <input key={name} type="hidden" name={name} />
        ))}

        <div className="-mx-[7px] flex flex-wrap max-[767px]:mx-0">
          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-name" required>
              Full Name
            </FieldLabel>
            <input
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#e4e4e4] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
              id="quote-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter Your Name"
              maxLength={400}
              required
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-email" required>
              Email
            </FieldLabel>
            <input
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#e4e4e4] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
              id="quote-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter Your Email"
              maxLength={400}
              required
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-phone">Mobile Phone</FieldLabel>
            <input
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#e4e4e4] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
              id="quote-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter Your Phone Number"
              maxLength={400}
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-company">Company name</FieldLabel>
            <input
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#e4e4e4] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
              id="quote-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Enter Your Company Name"
              maxLength={400}
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-website">Website URL</FieldLabel>
            <input
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#e4e4e4] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
              id="quote-website"
              name="websiteUrl"
              type="text"
              autoComplete="url"
              placeholder="Enter Your Website Url"
              maxLength={400}
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-budget">Estimated Budget (in US $)</FieldLabel>
            <select
              className="h-[49px] w-full cursor-pointer appearance-none rounded-[5px] border-[1.5px] border-[#e4e4e4] bg-white bg-[url('/assets/request-quote/icons/select-arrow.svg')] bg-[position:calc(100%-16px)_center] bg-no-repeat px-4 pr-9 text-base font-medium text-[#090909] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
              id="quote-budget"
              name="budget"
              defaultValue=""
            >
              <option value="">Select your budget</option>
              {requestQuoteContent.form.budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-7 w-full px-[7px] max-[1199px]:mb-5 max-[767px]:px-0">
            <FieldLabel htmlFor="quote-project">Brief about the project</FieldLabel>
            <textarea
              className="h-[136px] w-full resize-none rounded-[5px] border-[1.5px] border-[#e4e4e4] px-4 py-3 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
              id="quote-project"
              name="project"
              placeholder="Share your questions or comments here"
              maxLength={2000}
            />
          </div>
        </div>

        <div className="min-h-6" aria-live="polite">
          {state.status !== "idle" ? (
            <p
              className={
                state.status === "error"
                  ? "text-sm font-medium text-[#b42318]"
                  : "text-sm font-medium text-brand-green"
              }
            >
              {state.message}
            </p>
          ) : null}
        </div>

        <div className="mt-1 max-[767px]:mt-0">
          <button
            className="group/quote-submit relative inline-flex min-h-[49px] cursor-pointer items-center justify-center overflow-hidden rounded-[30px] border-2 border-brand-red px-8 py-[15px] text-center text-base leading-none font-bold text-white uppercase transition-colors duration-600 hover:border-[#4f4f4f] hover:text-[#4f4f4f] disabled:cursor-wait disabled:opacity-70 max-[767px]:w-full"
            type="submit"
            disabled={isPending}
          >
            <span
              className="absolute inset-0 bg-brand-red transition-transform duration-600 group-hover/quote-submit:translate-x-full"
              aria-hidden="true"
            />
            <span className="relative z-1">
              {isPending ? "sending inquiry" : "submit inquiry"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
