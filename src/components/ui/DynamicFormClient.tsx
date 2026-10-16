"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { PhoneInputClient } from "@/components/ui/PhoneInputClient";
import { Button } from "@/components/ui/Button";

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "hidden";
  required?: boolean;
  placeholder?: string;
  options?: readonly { label: string; value: string }[];
  defaultValue?: string;
  colSpan?: 1 | 2;
};

export type DynamicFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export type DynamicFormProps = {
  action: (state: DynamicFormState, formData: FormData) => Promise<DynamicFormState>;
  fields: readonly FormField[];
  submitLabel: string;
  submittingLabel?: string;
  successMessage?: string;
  ariaLabel: string;
  className?: string;
  initialState?: DynamicFormState;
  onSuccess?: () => void;
};

const defaultInitialState: DynamicFormState = {
  status: "idle",
  message: "",
};

export function DynamicFormClient({
  action,
  fields,
  submitLabel,
  submittingLabel = "Submitting...",
  successMessage,
  ariaLabel,
  className = "",
  initialState = defaultInitialState,
  onSuccess,
}: DynamicFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(action, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      onSuccess?.();
    }
  }, [state.status, onSuccess]);

  return (
    <form ref={formRef} action={formAction} aria-label={ariaLabel} className={className}>
      {/* Honeypot field for anti-spam */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 max-[767px]:grid-cols-1 max-[767px]:gap-x-0">
        {fields.map((field) => {
          const isFullWidth = field.colSpan === 2 || field.type === "textarea";

          if (field.type === "hidden") {
            return (
              <input
                key={field.name}
                type="hidden"
                name={field.name}
                defaultValue={field.defaultValue}
              />
            );
          }

          if (field.type === "tel") {
            return (
              <div
                key={field.name}
                className={isFullWidth ? "col-span-2 max-[767px]:col-span-1" : ""}
              >
                <label
                  htmlFor={field.name}
                  className="mb-2 block text-sm font-semibold text-[#090909]"
                >
                  {field.label}
                  {field.required && <span className="ml-1 text-[#d92128]">*</span>}
                </label>
                <PhoneInputClient
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </div>
            );
          }

          if (field.type === "textarea") {
            return (
              <div key={field.name} className="col-span-2 max-[767px]:col-span-1">
                <label
                  htmlFor={field.name}
                  className="mb-2 block text-sm font-semibold text-[#090909]"
                >
                  {field.label}
                  {field.required && <span className="ml-1 text-[#d92128]">*</span>}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full rounded-[10px] border border-[#e0e0e0] px-4 py-3 text-sm text-[#090909] outline-none transition focus:border-[#ad5151]"
                />
              </div>
            );
          }

          if (field.type === "select") {
            return (
              <div
                key={field.name}
                className={isFullWidth ? "col-span-2 max-[767px]:col-span-1" : ""}
              >
                <label
                  htmlFor={field.name}
                  className="mb-2 block text-sm font-semibold text-[#090909]"
                >
                  {field.label}
                  {field.required && <span className="ml-1 text-[#d92128]">*</span>}
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  className="w-full rounded-[10px] border border-[#e0e0e0] px-4 py-3 text-sm text-[#090909] outline-none transition focus:border-[#ad5151]"
                >
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          return (
            <div
              key={field.name}
              className={isFullWidth ? "col-span-2 max-[767px]:col-span-1" : ""}
            >
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-semibold text-[#090909]"
              >
                {field.label}
                {field.required && <span className="ml-1 text-[#d92128]">*</span>}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full rounded-[10px] border border-[#e0e0e0] px-4 py-3 text-sm text-[#090909] outline-none transition focus:border-[#ad5151]"
              />
            </div>
          );
        })}
      </div>

      {state.status === "error" && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      {state.status === "success" && (
        <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">
          {successMessage || state.message || "Thank you! Your message has been sent."}
        </div>
      )}

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          disabled={isPending}
          className="w-full sm:w-auto"
        >
          {isPending ? submittingLabel : submitLabel}
        </Button>
      </div>
    </form>
  );
}
