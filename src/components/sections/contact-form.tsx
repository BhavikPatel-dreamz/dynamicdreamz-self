"use client";

import { useActionState, useEffect, useRef } from "react";

import {
  type ContactFormState,
  submitContactForm,
} from "@/app/contact-us/actions";

const attributionFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

function FieldLabel({ children, htmlFor, required = false }: { children: string; htmlFor: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-4 block text-lg leading-[26.19px] font-semibold text-[#090909] max-[991px]:mb-2.5 max-[991px]:text-base max-[991px]:leading-normal">
      {children}
      {required ? <em className="ml-0.5 not-italic text-[#d92128]">*</em> : null}
    </label>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState,
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
    <form ref={formRef} action={formAction} aria-label="Contact form">
      <input name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      {attributionFields.map((name) => (
        <input key={name} type="hidden" name={name} />
      ))}

      <div className="grid grid-cols-2 gap-x-3.5 max-[767px]:grid-cols-1 max-[767px]:gap-x-0">
        <div className="mb-7 max-[991px]:mb-5">
          <FieldLabel htmlFor="contact-name" required>Name</FieldLabel>
          <input
            className="h-[49px] w-full rounded-[5px] border-[1.5px] border-soft-line px-4 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-0"
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter Your Name"
            maxLength={400}
            required
          />
        </div>
        <div className="mb-7 max-[991px]:mb-5">
          <FieldLabel htmlFor="contact-email" required>Email</FieldLabel>
          <input
            className="h-[49px] w-full rounded-[5px] border-[1.5px] border-soft-line px-4 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-0"
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter Your Email Here"
            maxLength={400}
            required
          />
        </div>
        <div className="mb-7 max-[991px]:mb-5">
          <FieldLabel htmlFor="contact-phone">Mobile phone</FieldLabel>
          <div className="flex h-[49px] w-full items-center rounded-[5px] border-[1.5px] border-soft-line px-4 text-base leading-[23px] font-medium text-[#090909] focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-[#090909]">
            <span className="mr-2.5 flex shrink-0 items-center gap-1.5 border-r border-soft-line pr-2.5 text-sm" aria-label="India country code +91">
              <span aria-hidden="true">🇮🇳</span>
              +91
            </span>
            <input
              className="min-w-0 flex-1 border-0 p-0 text-base leading-[23px] font-medium outline-none placeholder:text-[#9a9a9a]"
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="81234 56789"
              maxLength={400}
            />
          </div>
        </div>
        <div className="mb-7 max-[991px]:mb-5">
          <FieldLabel htmlFor="contact-company">Company name</FieldLabel>
          <input
            className="h-[49px] w-full rounded-[5px] border-[1.5px] border-soft-line px-4 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-0"
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Enter Your Company name"
            maxLength={400}
          />
        </div>
        <div className="col-span-2 mb-7 max-[991px]:mb-5 max-[767px]:col-span-1">
          <FieldLabel htmlFor="contact-project">Brief about the project</FieldLabel>
          <textarea
            className="h-[136px] w-full resize-none rounded-[5px] border-[1.5px] border-soft-line px-4 py-3 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-0"
            id="contact-project"
            name="project"
            placeholder="Share your questions or comments here"
            maxLength={2000}
          />
        </div>
      </div>

      <div className="min-h-6" aria-live="polite">
        {state.status !== "idle" ? (
          <p className={state.status === "error" ? "text-sm font-medium text-[#b42318]" : "text-sm font-medium text-brand-green"}>
            {state.message}
          </p>
        ) : null}
      </div>

      <button
        className="group/contact-submit relative mt-1 inline-flex min-h-[49px] overflow-hidden rounded-[30px] border-2 border-brand-red px-6 py-[15px] text-center text-base leading-none font-bold text-white uppercase transition-colors duration-600 hover:border-[#4f4f4f] hover:text-[#4f4f4f] disabled:cursor-wait disabled:opacity-70 max-[767px]:mt-0 max-[767px]:w-full max-[767px]:justify-center cursor-pointer"
        type="submit"
        disabled={isPending}
      >
        <span className="absolute inset-0 bg-brand-red transition-transform duration-600 group-hover/contact-submit:translate-x-full" aria-hidden="true" />
        <span className="relative">{isPending ? "sending inquiry" : "submit inquiry"}</span>
      </button>
    </form>
  );
}
