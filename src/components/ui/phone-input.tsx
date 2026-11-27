"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  countries,
  COUNTRY_FLAG_SPRITE,
  DEFAULT_COUNTRY_ISO2,
  defaultCountry,
  preferredCountries,
  type Country,
} from "@/data/countries";

export type PhoneInputProps = {
  id: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
  className?: string;
  defaultIso2?: string;
  selectAriaLabel?: string;
  listAriaLabel?: string;
  required?: boolean;
  ariaInvalid?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ListOption = {
  country: Country;
  isPreferred: boolean;
  key: string;
};

const PREFERRED_OPTIONS: readonly ListOption[] = preferredCountries.map((country) => ({
  country,
  isPreferred: true,
  key: `${country.iso2}-preferred`,
}));

const STANDARD_OPTIONS: readonly ListOption[] = countries.map((country) => ({
  country,
  isPreferred: false,
  key: country.iso2,
}));

const SELECTABLE_OPTIONS: readonly ListOption[] = [
  ...PREFERRED_OPTIONS,
  ...STANDARD_OPTIONS,
];

const STANDARD_OFFSET = PREFERRED_OPTIONS.length;

// Lookup table mapping dial code prefixes (including North American / shared area codes)
// to priority-ordered ISO2 codes, matching intl-tel-input v17.0.13 behavior.
const { dialCodeMap, maxDialCodeLen } = (() => {
  const map: Record<string, string[]> = {};
  let maxLen = 0;

  const addCode = (iso2: string, code: string, priority?: number) => {
    if (code.length > maxLen) maxLen = code.length;
    if (!map[code]) map[code] = [];
    if (map[code].includes(iso2)) return;
    const index = priority !== undefined ? priority : map[code].length;
    map[code][index] = iso2;
  };

  for (const country of countries) {
    addCode(country.iso2, country.dialCode, country.priority);
  }
  for (const country of countries) {
    if (!country.areaCodes) continue;
    const primaryIso2 = map[country.dialCode]?.[0];
    for (const areaCode of country.areaCodes) {
      for (let len = 1; len < areaCode.length; len++) {
        const prefix = country.dialCode + areaCode.slice(0, len);
        if (primaryIso2) addCode(primaryIso2, prefix);
        addCode(country.iso2, prefix);
      }
      addCode(country.iso2, country.dialCode + areaCode);
    }
  }

  return { dialCodeMap: map, maxDialCodeLen: maxLen };
})();

const COUNTRIES_BY_ISO2 = new Map(countries.map((country) => [country.iso2, country]));

function detectCountryFromValue(rawValue: string): Country | null {
  if (!rawValue.startsWith("+")) return null;
  let digits = "";
  let matchedPrefix = "";
  for (let i = 0; i < rawValue.length; i++) {
    const ch = rawValue.charAt(i);
    if (ch >= "0" && ch <= "9") {
      digits += ch;
      if (dialCodeMap[digits]) {
        matchedPrefix = digits;
      }
      if (digits.length >= maxDialCodeLen) break;
    }
  }
  if (!matchedPrefix) return null;
  const isoList = dialCodeMap[matchedPrefix];
  const matchedIso = isoList?.find(Boolean);
  return matchedIso ? (COUNTRIES_BY_ISO2.get(matchedIso) ?? null) : null;
}

function getDefaultOptionIndex(country: Country): number {
  const preferredIdx = PREFERRED_OPTIONS.findIndex(
    (opt) => opt.country.iso2 === country.iso2,
  );
  if (preferredIdx !== -1) return preferredIdx;
  const standardIdx = STANDARD_OPTIONS.findIndex(
    (opt) => opt.country.iso2 === country.iso2,
  );
  return standardIdx !== -1 ? STANDARD_OFFSET + standardIdx : 0;
}

function FlagSprite({ country }: { country: Country }) {
  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 bg-no-repeat shadow-[0_0_1px_0_#888] ${
        country.iso2 === "np" ? "bg-transparent" : "bg-[#dbdbdb]"
      }`}
      style={{
        width: `${country.flagWidth}px`,
        height: `${country.flagHeight}px`,
        backgroundImage: `url("${COUNTRY_FLAG_SPRITE.src}")`,
        backgroundSize: `${COUNTRY_FLAG_SPRITE.width}px ${COUNTRY_FLAG_SPRITE.height}px`,
        backgroundPosition: `${country.flagOffsetX}px 0`,
      }}
    />
  );
}

export function PhoneInput({
  id,
  name,
  placeholder,
  maxLength = 400,
  className = "",
  defaultIso2 = DEFAULT_COUNTRY_ISO2,
  selectAriaLabel,
  listAriaLabel,
  required,
  ariaInvalid,
  value,
  onChange,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(() => {
    return (
      countries.find((c) => c.iso2.toLowerCase() === defaultIso2.toLowerCase()) ??
      defaultCountry
    );
  });
  const [isOpen, setIsOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(() =>
    getDefaultOptionIndex(selectedCountry),
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const flagButtonRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);
  const typeaheadRef = useRef<{ buffer: string; timer: ReturnType<typeof setTimeout> | null }>({
    buffer: "",
    timer: null,
  });

  const listboxId = useId();
  const baseOptionId = useId();

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    if (typeaheadRef.current.timer) {
      clearTimeout(typeaheadRef.current.timer);
      typeaheadRef.current.timer = null;
    }
    typeaheadRef.current.buffer = "";
  }, []);

  const openDropdown = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const dropdownMaxHeight = 200;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setDropUp(spaceBelow < dropdownMaxHeight && spaceAbove > dropdownMaxHeight);
    }
    setHighlightedIndex(getDefaultOptionIndex(selectedCountry));
    setIsOpen(true);
  }, [selectedCountry]);

  const scrollOptionIntoView = useCallback((index: number, center: boolean) => {
    const listEl = listboxRef.current;
    const itemEl = optionRefs.current[index];
    if (!listEl || !itemEl) return;

    const listHeight = listEl.clientHeight;
    const itemTop = itemEl.offsetTop;
    const itemHeight = itemEl.offsetHeight;

    if (center) {
      listEl.scrollTop = Math.max(0, itemTop - listHeight / 2 + itemHeight / 2);
      return;
    }

    const scrollTop = listEl.scrollTop;
    if (itemTop < scrollTop) {
      listEl.scrollTop = itemTop;
    } else if (itemTop + itemHeight > scrollTop + listHeight) {
      listEl.scrollTop = itemTop + itemHeight - listHeight;
    }
  }, []);

  const selectCountry = useCallback(
    (country: Country) => {
      setSelectedCountry(country);
      closeDropdown();
      phoneInputRef.current?.focus();
    },
    [closeDropdown],
  );

  // Center the active country when the dropdown opens.
  useEffect(() => {
    if (!isOpen) return;
    const activeIdx = getDefaultOptionIndex(selectedCountry);
    scrollOptionIntoView(activeIdx, true);
  }, [isOpen, selectedCountry, scrollOptionIntoView]);

  useEffect(() => {
    if (!isOpen) return;

    function handleMouseDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowDown" || event.key === "Down") {
        event.preventDefault();
        setHighlightedIndex((prev) => {
          const next = Math.min(SELECTABLE_OPTIONS.length - 1, prev + 1);
          scrollOptionIntoView(next, false);
          return next;
        });
      } else if (event.key === "ArrowUp" || event.key === "Up") {
        event.preventDefault();
        setHighlightedIndex((prev) => {
          const next = Math.max(0, prev - 1);
          scrollOptionIntoView(next, false);
          return next;
        });
      } else if (event.key === "Enter") {
        event.preventDefault();
        const option = SELECTABLE_OPTIONS[highlightedIndex];
        if (option) selectCountry(option.country);
      } else if (event.key === "Escape") {
        event.preventDefault();
        closeDropdown();
        flagButtonRef.current?.focus();
      } else if (event.key === "Tab") {
        closeDropdown();
      } else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(event.key)) {
        event.preventDefault();
        if (typeaheadRef.current.timer) {
          clearTimeout(typeaheadRef.current.timer);
        }
        typeaheadRef.current.buffer += event.key.toLowerCase();
        const query = typeaheadRef.current.buffer;
        const matchIdx = countries.findIndex((c) =>
          c.name.toLowerCase().startsWith(query),
        );
        if (matchIdx !== -1) {
          const targetIndex = STANDARD_OFFSET + matchIdx;
          setHighlightedIndex(targetIndex);
          scrollOptionIntoView(targetIndex, true);
        }
        typeaheadRef.current.timer = setTimeout(() => {
          typeaheadRef.current.buffer = "";
        }, 1000);
      }
    }

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, highlightedIndex, selectCountry, closeDropdown, scrollOptionIntoView]);

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (
      !isOpen &&
      ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].includes(event.key)
    ) {
      event.preventDefault();
      event.stopPropagation();
      openDropdown();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const detected = detectCountryFromValue(event.target.value);
    if (detected && detected.iso2 !== selectedCountry.iso2) {
      setSelectedCountry(detected);
    }
    onChange?.(event);
  };

  const dialCodeText = `+${selectedCountry.dialCode}`;
  const accessibleLabel = selectAriaLabel
    ? `${selectAriaLabel}: ${selectedCountry.name} (${dialCodeText})`
    : `${selectedCountry.name} (${dialCodeText})`;
  const resolvedPlaceholder =
    placeholder !== undefined && placeholder !== ""
      ? placeholder
      : selectedCountry.exampleNumber;
  const activeOptionId = `${baseOptionId}-${SELECTABLE_OPTIONS[highlightedIndex]?.key ?? selectedCountry.iso2}`;
  const selectedTopKey =
    PREFERRED_OPTIONS.find((opt) => opt.country.iso2 === selectedCountry.iso2)?.key ??
    selectedCountry.iso2;

  return (
    <div
      ref={containerRef}
      className={`relative flex h-[49px] w-full items-center rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-white transition-colors focus-within:border-[#090909] max-[992px]:h-[44px] ${className}`}
    >
      <div className="flex h-full shrink-0 items-center">
        <button
          ref={flagButtonRef}
          type="button"
          role="combobox"
          title={`${selectedCountry.name}: ${dialCodeText}`}
          className="relative flex h-full cursor-pointer items-center bg-transparent pr-[14px] pl-4 text-sm font-medium text-[#090909] focus:outline-none after:pointer-events-none after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:text-sm after:font-medium after:leading-none after:text-[#efefef] after:content-['|']"
          onClick={() => (isOpen ? closeDropdown() : openDropdown())}
          onKeyDown={handleButtonKeyDown}
          aria-label={accessibleLabel}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-activedescendant={isOpen ? activeOptionId : undefined}
        >
          <FlagSprite country={selectedCountry} />
          <span className="ml-[6px] mt-[2px] text-base leading-none font-medium text-[#090909] max-[992px]:mt-0 max-[992px]:text-sm">
            {dialCodeText}
          </span>
          <svg
            aria-hidden="true"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className={`ml-[10px] h-[6px] w-[10px] shrink-0 transition-transform duration-150 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.2 0L4.8 3.6L8.4 0L9.6 1.2L4.8 6L0 1.2L1.2 0Z"
              fill="#252C15"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul
          ref={listboxRef}
          id={listboxId}
          role="listbox"
          aria-label={listAriaLabel}
          className={`absolute left-[-1.5px] z-50 m-0 max-h-[200px] list-none overflow-y-scroll border border-[#cccccc] bg-white p-0 text-left shadow-[1px_1px_4px_rgba(0,0,0,0.2)] min-[501px]:w-max min-[501px]:max-w-[calc(100vw-32px)] min-[501px]:whitespace-nowrap max-[500px]:w-[calc(100%+3px)] max-[500px]:whitespace-normal ${
            dropUp ? "bottom-full -mb-[1px]" : "top-full -mt-[1px]"
          }`}
        >
          {PREFERRED_OPTIONS.map((option, idx) => {
            const isSelected = option.key === selectedTopKey;
            const isHighlighted = highlightedIndex === idx;
            return (
              <li
                key={option.key}
                ref={(el) => {
                  optionRefs.current[idx] = el;
                }}
                id={`${baseOptionId}-${option.key}`}
                role="option"
                tabIndex={-1}
                aria-selected={isSelected}
                onMouseEnter={() => setHighlightedIndex(idx)}
                onClick={() => selectCountry(option.country)}
                className={`cursor-pointer px-[10px] py-[5px] leading-normal outline-none ${
                  isHighlighted ? "bg-black/5" : ""
                }`}
              >
                <span className="mr-[6px] inline-flex w-[20px] items-center align-middle">
                  <FlagSprite country={option.country} />
                </span>
                <span className="mr-[6px] align-middle text-base font-medium text-[#090909]">
                  {option.country.name}
                </span>
                <span className="align-middle text-base font-medium text-[#999999]">
                  +{option.country.dialCode}
                </span>
              </li>
            );
          })}

          {PREFERRED_OPTIONS.length > 0 && (
            <li
              role="separator"
              aria-disabled="true"
              className="mb-[5px] border-b border-[#cccccc] pb-[5px]"
            />
          )}

          {STANDARD_OPTIONS.map((option, idx) => {
            const itemIndex = STANDARD_OFFSET + idx;
            const isSelected = option.key === selectedTopKey;
            const isHighlighted = highlightedIndex === itemIndex;
            return (
              <li
                key={option.key}
                ref={(el) => {
                  optionRefs.current[itemIndex] = el;
                }}
                id={`${baseOptionId}-${option.key}`}
                role="option"
                tabIndex={-1}
                aria-selected={isSelected}
                onMouseEnter={() => setHighlightedIndex(itemIndex)}
                onClick={() => selectCountry(option.country)}
                className={`cursor-pointer px-[10px] py-[5px] leading-normal outline-none ${
                  isHighlighted ? "bg-black/5" : ""
                }`}
              >
                <span className="mr-[6px] inline-flex w-[20px] items-center align-middle">
                  <FlagSprite country={option.country} />
                </span>
                <span className="mr-[6px] align-middle text-base font-medium text-[#090909]">
                  {option.country.name}
                </span>
                <span className="align-middle text-base font-medium text-[#999999]">
                  +{option.country.dialCode}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      <input
        ref={phoneInputRef}
        className="h-full min-w-0 flex-1 border-0 bg-transparent px-[6px] text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:outline-none max-[992px]:text-sm"
        id={id}
        name={name}
        type="tel"
        placeholder={resolvedPlaceholder}
        maxLength={maxLength}
        autoComplete="tel"
        inputMode="tel"
        required={required}
        aria-required={required ? "true" : undefined}
        aria-invalid={ariaInvalid || undefined}
        value={value}
        onChange={handleInputChange}
      />

      <input type="hidden" name={`${name}_dial_code`} value={dialCodeText} />
      <input
        type="hidden"
        name={`${name}_country`}
        value={selectedCountry.iso2.toUpperCase()}
      />
    </div>
  );
}
