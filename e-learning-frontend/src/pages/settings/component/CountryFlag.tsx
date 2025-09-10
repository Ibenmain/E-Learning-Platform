import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

type Country = { code: string; name: string };

interface CountryFlagSelectProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    countries?: Country[];
    dropdownClassName?: string;
}

export default function CountryFlagSelect({
    value,
    onChange,
    placeholder = "flag name",
    className = "",
    dropdownClassName = "",
    countries = [
        { code: "MA", name: "Morocco" },
        { code: "DZ", name: "Algeria" },
        { code: "TN", name: "Tunisia" },
        { code: "EG", name: "Egypt" },
        { code: "SA", name: "Saudi Arabia" },
        { code: "AE", name: "United Arab Emirates" },
        { code: "QA", name: "Qatar" },
        { code: "KW", name: "Kuwait" },
        { code: "BH", name: "Bahrain" },
        { code: "OM", name: "Oman" },
        { code: "JO", name: "Jordan" },
        { code: "LB", name: "Lebanon" },
        { code: "TR", name: "Türkiye" },
        { code: "US", name: "United States" },
        { code: "CA", name: "Canada" },
        { code: "GB", name: "United Kingdom" },
        { code: "FR", name: "France" },
        { code: "ES", name: "Spain" },
        { code: "DE", name: "Germany" },
        { code: "IT", name: "Italy" },
        { code: "NL", name: "Netherlands" },
        { code: "SE", name: "Sweden" },
        { code: "NO", name: "Norway" },
        { code: "FI", name: "Finland" },
        { code: "DK", name: "Denmark" },
        { code: "IE", name: "Ireland" },
        { code: "PT", name: "Portugal" },
        { code: "PL", name: "Poland" },
        { code: "RU", name: "Russia" },
        { code: "CN", name: "China" },
        { code: "JP", name: "Japan" },
        { code: "KR", name: "South Korea" },
        { code: "IN", name: "India" },
        { code: "PK", name: "Pakistan" },
        { code: "ID", name: "Indonesia" },
        { code: "BR", name: "Brazil" },
        { code: "AR", name: "Argentina" },
        { code: "MX", name: "Mexico" },
        { code: "AU", name: "Australia" },
        { code: "NZ", name: "New Zealand" },
        { code: "ZA", name: "South Africa" },
        { code: "NG", name: "Nigeria" },
        { code: "KE", name: "Kenya" },
        { code: "GH", name: "Ghana" },
    ],
}: CountryFlagSelectProps) {
    const [open, setOpen] = useState(false);

    const selected = countries.find((c) => c.code === value);

    return (
        <div className={`relative  ${className}`}>
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between rounded-lg dark:bg-black bg-black px-4 py-2 text-white"
            >
                <div className="flex items-center gap-2">
                    {selected && (
                        <ReactCountryFlag
                            countryCode={selected.code}
                            svg
                            style={{ width: "2em", height: "2em", borderRadius: "6px" }}
                        />
                    )}
                    <span>{selected ? selected.name : placeholder}</span>
                </div>
                <svg
                    className={`w-7 h-7 transition-transform bg-gradient-to-tr from-[#AAED00] to-[#5CFD85] rounded-md ${open ? "rotate-180" : ""
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        color="black"
                    />
                </svg>
            </button>

            {/* Dropdown */}
            <ul
                className={`absolute left-0 right-0 mt-1 overflow-y-auto rounded-lg dark:bg-black bg-black text-white shadow-lg transition-all duration-300 origin-top transform ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    } ${dropdownClassName}`}
                style={{ transformOrigin: "top" }}
            >
                {countries.map((c) => (
                    <li
                        key={c.code}
                        onClick={() => {
                            onChange?.(c.code);
                            setOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 cursor-pointer hover:bg-gradient-to-tr from-[#AAED00] to-[#5CFD85] hover:text-black"
                        style={{ height: "30px" }}
                    >
                        <ReactCountryFlag
                            countryCode={c.code}
                            svg
                            style={{ width: "1.5em", height: "1.5em", borderRadius: "4px" }}
                        />
                        <span>{c.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
