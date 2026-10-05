"use client";

import { useEffect, useRef, useState } from "react";

type Country = {
  name: string;
  iso2: string;
  dialCode: string;
  flag: string;
};

const countries: Country[] = [
  { name: "India", iso2: "in", dialCode: "91", flag: "🇮🇳" },
  { name: "United States", iso2: "us", dialCode: "1", flag: "🇺🇸" },
  { name: "United Kingdom", iso2: "gb", dialCode: "44", flag: "🇬🇧" },
  { name: "Canada", iso2: "ca", dialCode: "1", flag: "🇨🇦" },
  { name: "Australia", iso2: "au", dialCode: "61", flag: "🇦🇺" },
  { name: "Germany", iso2: "de", dialCode: "49", flag: "🇩🇪" },
  { name: "France", iso2: "fr", dialCode: "33", flag: "🇫🇷" },
  { name: "United Arab Emirates", iso2: "ae", dialCode: "971", flag: "🇦🇪" },
  { name: "Singapore", iso2: "sg", dialCode: "65", flag: "🇸🇬" },
  { name: "Japan", iso2: "jp", dialCode: "81", flag: "🇯🇵" },
];

type PhoneInputProps = {
  id: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
  className?: string;
};

export function PhoneInput({
  id,
  name,
  placeholder,
  maxLength = 400,
  className = "",
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-white transition-colors focus-within:border-[#090909] ${className}`}
    >
      <div className="relative flex h-full items-center">
        <button
          type="button"
          className="flex h-full cursor-pointer items-center gap-1.5 border-r border-[#dfdfdf] bg-transparent px-3 text-base font-medium text-[#090909] focus:outline-none shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={`Selected country: ${selectedCountry.name}, dial code +${selectedCountry.dialCode}`}
          aria-expanded={isOpen}
        >
          <span className="text-lg leading-none" aria-hidden="true">
            {selectedCountry.flag}
          </span>
          <span className="text-sm font-medium">+{selectedCountry.dialCode}</span>
          <svg
            className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute left-0 top-full z-50 mt-1 max-h-60 w-64 overflow-y-auto rounded-[5px] border border-[#dfdfdf] bg-white shadow-lg">
            {countries.map((country) => (
              <button
                key={country.iso2}
                type="button"
                className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left text-sm hover:bg-[#f5f5f5]"
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                }}
              >
                <span className="text-lg" aria-hidden="true">
                  {country.flag}
                </span>
                <span className="flex-1">{country.name}</span>
                <span className="text-[#9a9a9a]">+{country.dialCode}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <input
        className="h-full w-full flex-1 border-0 bg-transparent px-3.5 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:outline-none max-[1199px]:text-sm"
        id={id}
        name={name}
        type="tel"
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete="tel"
      />
    </div>
  );
}
