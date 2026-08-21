"use client";

import { type FormEvent, useId, useState } from "react";
import { useRouter } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/class-names";

export type WebsiteQuoteFormProps = {
  buttonLabel?: string;
  className?: string;
  inputAriaLabel?: string;
  placeholder?: string;
};

const websitePattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;

export function WebsiteQuoteForm({
  buttonLabel = "GET QUOTATION",
  className,
  inputAriaLabel = "Your website URL",
  placeholder = "www.yourwebsite.com",
}: WebsiteQuoteFormProps) {
  const router = useRouter();
  const errorId = useId();
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const website = String(form.get("website") ?? "")
      .trim()
      .replace(/[<>"']/g, "")
      .replace(/javascript:/gi, "");

    if (!websitePattern.test(website)) {
      setError("Please enter a valid website URL.");
      return;
    }

    setError("");
    router.push(`/request-quote?URL=${encodeURIComponent(website)}`);
  }

  return (
    <form
      className={cn("relative w-full max-w-[550px]", className)}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="relative max-[575px]:flex max-[575px]:flex-col">
        <label className="sr-only" htmlFor={errorId}>
          {inputAriaLabel}
        </label>
        <input
          aria-describedby={error ? `${errorId}-message` : undefined}
          aria-invalid={Boolean(error)}
          className="h-[50px] w-full rounded-[50px] border border-transparent bg-white px-5 py-2.5 text-sm font-medium leading-[27px] text-[#535353b3] outline-none transition-shadow focus:border-[#ad5151] focus:shadow-[0_0_0_3px_rgba(173,81,81,0.12)]"
          id={errorId}
          inputMode="url"
          name="website"
          placeholder={placeholder}
          required
          type="text"
        />
        <ButtonLink
          aria-label={buttonLabel}
          className="!absolute top-0 right-0 h-[50px] min-h-[50px] max-h-[50px] px-6 py-2.5 text-base max-[575px]:!relative max-[575px]:mt-[15px] max-[575px]:w-full"
          type="submit"
          variant="primary"
        >
          {buttonLabel}
        </ButtonLink>
      </div>
      <p
        aria-live="polite"
        className={cn(
          "mt-2 px-5 text-sm font-semibold text-[#b42318]",
          error ? "block" : "hidden",
        )}
        id={`${errorId}-message`}
      >
        {error}
      </p>
    </form>
  );
}
