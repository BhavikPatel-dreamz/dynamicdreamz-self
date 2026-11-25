"use client";

import { useActionState, useEffect, useRef, useState } from "react";

import {
  type ContactFormState,
  submitContactForm,
} from "@/lib/actions/contact";
import { PhoneInput } from "@/components/ui/phone-input";
import { contactFormCopy } from "@/content/forms";
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
      htmlFor={htmlFor}
      className="mb-2.5 block text-base leading-normal font-semibold text-[#090909] max-[992px]:text-sm"
    >
      {children}
      {required ? <em className="ml-1 not-italic text-[#d92128] text-lg font-semibold leading-none">*</em> : null}
    </label>
  );
}

export function ContactForm() {
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
    const email = ((formData.get("email") as string) || "").trim();

    const errors: Record<string, string> = {};
    if (!name) {
      errors.name = contactFormCopy.validation.required;
    }
    if (!email) {
      errors.email = contactFormCopy.validation.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = contactFormCopy.validation.invalidEmail;
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
        ? contactFormCopy.validation.validationError
        : state.status === "error" && Object.keys(activeErrors).length > 0
          ? state.message
          : null;

  useEffect(() => {
    populateAttributionInputs(formRef.current);
  }, []);

  return (
    <form ref={formRef} action={formAction} onSubmit={handleSubmit} noValidate aria-label={contactFormCopy.ariaLabel}>
      <input name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      {ATTRIBUTION_FIELDS.map((name) => (
        <input key={name} type="hidden" name={name} />
      ))}

      <div className="grid grid-cols-2 gap-x-[30px] max-[768px]:grid-cols-1 max-[768px]:gap-x-0">
        <div className="mb-5">
          <FieldLabel htmlFor="contact-name" required>
            {contactFormCopy.labels.name}
          </FieldLabel>
          <input
            className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-none focus:border-[#090909] max-[992px]:text-sm"
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={contactFormCopy.placeholders.name}
            maxLength={400}
            required
            aria-required="true"
            aria-invalid={Boolean(activeErrors.name)}
            onChange={() => clearFieldError("name")}
          />
          {activeErrors.name && (
            <span className="wpcf7-not-valid-tip mt-[7px] block font-montserrat text-[14px] leading-[14px] font-medium text-[#dc3232]" aria-hidden="true">
              {activeErrors.name}
            </span>
          )}
        </div>
        <div className="mb-5">
          <FieldLabel htmlFor="contact-email" required>
            {contactFormCopy.labels.email}
          </FieldLabel>
          <input
            className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-none focus:border-[#090909] max-[992px]:text-sm"
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={contactFormCopy.placeholders.email}
            maxLength={400}
            required
            aria-required="true"
            aria-invalid={Boolean(activeErrors.email)}
            onChange={() => clearFieldError("email")}
          />
          {activeErrors.email && (
            <span className="wpcf7-not-valid-tip mt-[7px] block font-montserrat text-[14px] leading-[14px] font-medium text-[#dc3232]" aria-hidden="true">
              {activeErrors.email}
            </span>
          )}
        </div>
        <div className="mb-5">
          <FieldLabel htmlFor="contact-phone">
            {contactFormCopy.labels.phone}
          </FieldLabel>
          <PhoneInput
            className="h-[49px]"
            id="contact-phone"
            name="phone"
            placeholder={contactFormCopy.placeholders.phone}
            searchPlaceholder={contactFormCopy.phoneSearchPlaceholder}
            selectAriaLabel={contactFormCopy.phoneCountrySelectAriaLabel}
            defaultIso2="in"
            maxLength={400}
          />
        </div>
        <div className="mb-5">
          <FieldLabel htmlFor="contact-company">
            {contactFormCopy.labels.company}
          </FieldLabel>
          <input
            className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-none focus:border-[#090909] max-[992px]:text-sm"
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={contactFormCopy.placeholders.company}
            maxLength={400}
          />
        </div>
        <div className="col-span-2 mb-5 max-[768px]:col-span-1">
          <FieldLabel htmlFor="contact-project">
            {contactFormCopy.labels.project}
          </FieldLabel>
          <textarea
            className="h-[136px] w-full resize-none rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 py-3 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-none focus:border-[#090909] max-[992px]:text-sm"
            id="contact-project"
            name="project"
            placeholder={contactFormCopy.placeholders.project}
            maxLength={2000}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 max-[768px]:flex-col-reverse max-[768px]:items-center">
        <div>
          <p className="text-xs font-normal text-[#090909]">{contactFormCopy.note}</p>
        </div>
        <button
          className="group/contact-submit relative inline-flex min-h-[49px] shrink-0 cursor-pointer overflow-hidden rounded-[30px] border-2 border-brand-red px-6 py-[15px] text-center text-base leading-none font-bold text-white uppercase transition-colors duration-600 hover:border-[#4f4f4f] hover:text-[#4f4f4f] disabled:cursor-wait disabled:opacity-70 max-[768px]:w-full max-[768px]:justify-center"
          type="submit"
          disabled={isPending}
        >
          <span
            className="absolute inset-0 bg-brand-red transition-transform duration-600 group-hover/contact-submit:translate-x-full"
            aria-hidden="true"
          />
          <span className="relative">
            {isPending ? contactFormCopy.sending : contactFormCopy.submit}
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
    </form>
  );
}
