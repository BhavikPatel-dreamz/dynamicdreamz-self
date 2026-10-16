"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { countries, type Country, defaultCountry } from "@/data/countries";

export type PhoneInputProps = {
  id: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
  className?: string;
  defaultIso2?: string;
  searchPlaceholder?: string;
  selectAriaLabel?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PhoneInput({
  id,
  name,
  placeholder,
  maxLength = 400,
  className = "",
  defaultIso2 = "in",
  searchPlaceholder,
  selectAriaLabel,
  required,
  value,
  onChange,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(() => {
    return (
      countries.find(
        (c) => c.iso2.toLowerCase() === defaultIso2.toLowerCase(),
      ) ?? defaultCountry
    );
  });
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        setSearchQuery("");
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      searchInputRef.current?.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.iso2.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const selectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery("");
    phoneInputRef.current?.focus();
  };

  const dialCodeText = `+${selectedCountry.dialCode}`;
  const accessibleLabel = selectAriaLabel
    ? `${selectAriaLabel}: ${selectedCountry.name} (${dialCodeText})`
    : `${selectedCountry.name} (${dialCodeText})`;

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-white transition-colors focus-within:border-[#090909] ${className}`}
    >
      <div className="relative flex h-full items-center shrink-0">
        <button
          type="button"
          className="flex h-full cursor-pointer items-center gap-1.5 border-r border-[#dfdfdf] bg-transparent px-3 text-sm font-medium text-[#090909] focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={accessibleLabel}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={listboxId}
        >
          <span className="text-base leading-none select-none" aria-hidden="true">
            {selectedCountry.flag}
          </span>
          <span className="text-sm font-medium">{dialCodeText}</span>
          <svg
            className={`h-2.5 w-2.5 opacity-60 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 10 6"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M1 1L5 5L9 1"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            id={listboxId}
            role="listbox"
            aria-label={accessibleLabel}
            className="absolute left-0 top-[calc(100%+4px)] z-50 flex max-h-64 w-72 flex-col overflow-hidden rounded-[5px] border border-[#dfdfdf] bg-white shadow-xl"
          >
            <div className="border-b border-[#dfdfdf] p-2 bg-[#fafafa]">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded border border-[#dfdfdf] bg-white px-2.5 py-1.5 text-xs text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none"
              />
            </div>
            <div className="flex-1 overflow-y-auto">
              {filteredCountries.map((country) => {
                const isSelected = country.iso2 === selectedCountry.iso2;
                return (
                  <button
                    key={country.iso2}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={`flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-[#f7f4e9] ${
                      isSelected ? "bg-[#f7f4e9] font-semibold" : "font-normal"
                    }`}
                    onClick={() => selectCountry(country)}
                  >
                    <span className="text-base select-none shrink-0" aria-hidden="true">
                      {country.flag}
                    </span>
                    <span className="flex-1 truncate text-xs text-[#282828]">
                      {country.name}
                    </span>
                    <span className="text-xs font-medium text-[#737373] shrink-0">
                      +{country.dialCode}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <input
        ref={phoneInputRef}
        className="h-full w-full flex-1 border-0 bg-transparent px-3.5 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:outline-none max-[991px]:text-sm"
        id={id}
        name={name}
        type="tel"
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete="tel"
        inputMode="tel"
        required={required}
        value={value}
        onChange={onChange}
      />

      <input
        type="hidden"
        name={`${name}_dial_code`}
        value={dialCodeText}
      />
      <input
        type="hidden"
        name={`${name}_country`}
        value={selectedCountry.iso2.toUpperCase()}
      />
    </div>
  );
}
