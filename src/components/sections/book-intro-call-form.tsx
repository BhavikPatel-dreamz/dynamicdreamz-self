"use client";

import { useActionState, useEffect, useRef, useState } from "react";

import {
  type ContactFormState,
  submitContactForm,
} from "@/lib/actions/contact";
import { bookIntroCallFormCopy } from "@/content/forms";
import { ATTRIBUTION_FIELDS, populateAttributionInputs } from "@/lib/attribution";

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
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [clearedFields, setClearedFields] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      populateAttributionInputs(formRef.current);
    }
  }, [state.status]);

  function clearFieldError(fieldName: string) {
    setClearedFields((prev) => ({ ...prev, [fieldName]: true }));
    setClientErrors((prev) => {
      if (!prev[fieldName]) return prev;
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setClearedFields({});
    const form = event.currentTarget;
    populateAttributionInputs(form);
    const formData = new FormData(form);
    const name = ((formData.get("name") as string) || "").trim();
    const company = ((formData.get("company") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim();

    const errors: Record<string, string> = {};
    if (!name) {
      errors.name = bookIntroCallFormCopy.validation.required;
    }
    if (!company) {
      errors.company = bookIntroCallFormCopy.validation.required;
    }
    if (!email) {
      errors.email = bookIntroCallFormCopy.validation.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = bookIntroCallFormCopy.validation.invalidEmail;
    }

    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setClientErrors(errors);
      return;
    }

    setClientErrors({});
  }

  const activeErrors: Record<string, string> = {
    ...(state.status === "error" ? state.fieldErrors : {}),
    ...clientErrors,
  };
  Object.keys(clearedFields).forEach((key) => {
    if (clearedFields[key]) {
      delete activeErrors[key];
    }
  });

  const hasClientErrors = Object.keys(clientErrors).some((k) => !clearedFields[k]);
  const responseMessage =
    state.status === "success"
      ? state.message
      : hasClientErrors
        ? bookIntroCallFormCopy.validation.validationError
        : state.status === "error" && Object.keys(activeErrors).length > 0
          ? state.message
          : null;

  useEffect(() => {
    populateAttributionInputs(formRef.current);
  }, []);

  return (
    <form
      action={formAction}
      aria-label={bookIntroCallFormCopy.ariaLabel}
      className="intro-call-form space-y-5"
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
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
          aria-required="true"
          aria-invalid={Boolean(activeErrors.name)}
          onChange={() => clearFieldError("name")}
          type="text"
        />
        {activeErrors.name && (
          <span className="wpcf7-not-valid-tip mt-[7px] block font-montserrat text-[14px] leading-[14px] font-medium text-[#dc3232]" aria-hidden="true">
            {activeErrors.name}
          </span>
        )}
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
          aria-required="true"
          aria-invalid={Boolean(activeErrors.company)}
          onChange={() => clearFieldError("company")}
          type="text"
        />
        {activeErrors.company && (
          <span className="wpcf7-not-valid-tip mt-[7px] block font-montserrat text-[14px] leading-[14px] font-medium text-[#dc3232]" aria-hidden="true">
            {activeErrors.company}
          </span>
        )}
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
          aria-required="true"
          aria-invalid={Boolean(activeErrors.email)}
          onChange={() => clearFieldError("email")}
          type="email"
        />
        {activeErrors.email && (
          <span className="wpcf7-not-valid-tip mt-[7px] block font-montserrat text-[14px] leading-[14px] font-medium text-[#dc3232]" aria-hidden="true">
            {activeErrors.email}
          </span>
        )}
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

      <div className="pt-2">
        <button
          className="group/contact-submit relative inline-flex min-h-[49px] cursor-pointer overflow-hidden rounded-[30px] border-2 border-brand-red px-8 py-[15px] text-center text-sm font-bold uppercase tracking-wider text-white transition-colors duration-500 hover:border-[#4f4f4f] hover:text-[#4f4f4f] disabled:cursor-wait disabled:opacity-70 max-[768px]:w-full max-[768px]:justify-center"
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

      {responseMessage && (
        <div
          className={
            state.status === "success"
              ? "wpcf7-response-output mt-7 mb-3.5 block border-2 border-[#46b450] px-[14px] py-[2.8px] font-montserrat text-[14px] leading-normal font-normal text-[#535353]"
              : "wpcf7-response-output mt-7 mb-3.5 block border-2 border-[#dc3232] px-[14px] py-[2.8px] font-montserrat text-[14px] leading-normal font-medium text-[#535353] text-center"
          }
          aria-hidden="true"
        >
          {responseMessage}
        </div>
      )}

      {ATTRIBUTION_FIELDS.map((field) => (
        <input key={field} name={field} type="hidden" />
      ))}
    </form>
  );
}
