"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface ComboboxProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

// Searchable but selection-only: typing filters the list, but the committed
// value always comes from a click — free text that matches nothing is discarded.
export default function Combobox({ options, value, onChange, placeholder, className }: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setQuery(value), [value]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery(value);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [value]);

  const filtered = options.filter((o) => o.toLowerCase().includes(query.toLowerCase()));

  const select = (opt: string) => {
    onChange(opt);
    setQuery(opt);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        autoComplete="off"
        className={`${className} pr-8`}
      />
      <ChevronDown size={14} className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-charcoal/30" />

      {open && filtered.length > 0 && (
        <div className="absolute z-20 mt-1 w-full max-h-56 overflow-y-auto bg-ivory border border-charcoal/15 shadow-lg">
          {filtered.map((opt) => (
            <button
              key={opt}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                select(opt);
              }}
              className="block w-full text-left px-4 py-2.5 text-sm text-charcoal hover:bg-linen transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
