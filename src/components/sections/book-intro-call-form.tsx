"use client";

import { useActionState, useEffect, useRef } from "react";

import {
  type ContactFormState,
  submitContactForm,
} from "@/app/contact-us/actions";
import { bookIntroCallFormCopy } from "@/content/forms";

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
      className="mb-2.5 block text-base font-semibold text-[#090909]"
      htmlFor={htmlFor}
    >
      {children}
      {required ? <em className="ml-1 not-italic text-[#d92128]">*</em> : null}
    </label>
  );
}

export function BookIntroCallForm() {
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
    <form
      action={formAction}
      aria-label={bookIntroCallFormCopy.ariaLabel}
      className="intro-call-form space-y-5"
      ref={formRef}
    >
      <input
        aria-hidden="true"
        autoComplete="off"
        className="sr-only"
        name="website"
        tabIndex={-1}
      />

      <div>
        <FieldLabel htmlFor="texas_full_name" required>
          {bookIntroCallFormCopy.labels.name}
        </FieldLabel>
        <input
          className="w-full rounded-[10px] border border-[#d6d6d6] bg-transparent px-4 py-3 text-base text-[#111] placeholder:text-[#999] focus:border-ink focus:outline-none"
          id="texas_full_name"
          maxLength={400}
          name="name"
          placeholder={bookIntroCallFormCopy.placeholders.name}
          required
          type="text"
        />
      </div>

      <div>
        <FieldLabel htmlFor="texas_company_name" required>
          {bookIntroCallFormCopy.labels.company}
        </FieldLabel>
        <input
          className="w-full rounded-[10px] border border-[#d6d6d6] bg-transparent px-4 py-3 text-base text-[#111] placeholder:text-[#999] focus:border-ink focus:outline-none"
          id="texas_company_name"
          maxLength={400}
          name="company"
          placeholder={bookIntroCallFormCopy.placeholders.company}
          required
          type="text"
        />
      </div>

      <div>
        <FieldLabel htmlFor="texas_email" required>
          {bookIntroCallFormCopy.labels.email}
        </FieldLabel>
        <input
          className="w-full rounded-[10px] border border-[#d6d6d6] bg-transparent px-4 py-3 text-base text-[#111] placeholder:text-[#999] focus:border-ink focus:outline-none"
          id="texas_email"
          maxLength={400}
          name="email"
          placeholder={bookIntroCallFormCopy.placeholders.email}
          required
          type="email"
        />
      </div>

      <div>
        <FieldLabel htmlFor="texas_website_url">
          {bookIntroCallFormCopy.labels.website}
        </FieldLabel>
        <input
          className="w-full rounded-[10px] border border-[#d6d6d6] bg-transparent px-4 py-3 text-base text-[#111] placeholder:text-[#999] focus:border-ink focus:outline-none"
          id="texas_website_url"
          maxLength={400}
          name="website_url"
          placeholder={bookIntroCallFormCopy.placeholders.website}
          type="text"
        />
      </div>

      <div>
        <FieldLabel htmlFor="texas_message">
          {bookIntroCallFormCopy.labels.message}
        </FieldLabel>
        <textarea
          className="h-[150px] w-full resize-y rounded-[10px] border border-[#d6d6d6] bg-transparent px-4 py-3 text-base text-[#111] placeholder:text-[#999] focus:border-ink focus:outline-none"
          id="texas_message"
          maxLength={2000}
          name="project"
          placeholder={bookIntroCallFormCopy.placeholders.message}
        />
      </div>

      {state.status === "error" ? (
        <p className="text-sm font-medium text-[#d92128]" role="alert">
          {state.message}
        </p>
      ) : null}

      {state.status === "success" ? (
        <p className="text-sm font-medium text-[#11a355]" role="status">
          {state.message}
        </p>
      ) : null}

      <div className="pt-2">
        <button
          className="group/contact-submit relative inline-flex min-h-[49px] cursor-pointer overflow-hidden rounded-[30px] border-2 border-brand-red px-8 py-[15px] text-center text-sm font-bold uppercase tracking-wider text-white transition-colors duration-500 hover:border-[#4f4f4f] hover:text-[#4f4f4f] disabled:cursor-wait disabled:opacity-70 max-[767px]:w-full max-[767px]:justify-center"
          disabled={isPending}
          type="submit"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-brand-red transition-transform duration-500 group-hover/contact-submit:translate-x-full"
          />
          <span className="relative">
            {isPending
              ? bookIntroCallFormCopy.sending
              : bookIntroCallFormCopy.submit}
          </span>
        </button>
      </div>

      {attributionFields.map((field) => (
        <input key={field} name={field} type="hidden" />
      ))}
    </form>
  );
}
