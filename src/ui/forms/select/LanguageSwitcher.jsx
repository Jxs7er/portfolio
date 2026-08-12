import { useLanguage } from "@/context/language/LanguageContext";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const allowedCountries = [
    {
      value: "en",
      locale: "en-US",
      label: "English",
      emoji: "https://flagcdn.com/us.svg",
    },
    {
      value: "es",
      locale: "es-ES",
      label: "Español",
      emoji: "https://flagcdn.com/es.svg",
    },
    {
      value: "fr",
      locale: "fr-FR",
      label: "Français",
      emoji: "https://flagcdn.com/fr.svg",
    },
    {
      value: "am",
      locale: "am-AR",
      label: "Հայերեն",
      emoji: "https://flagcdn.com/am.svg",
    },
    {
      value: "zh",
      locale: "zh-CN",
      label: "中文",
      emoji: "https://flagcdn.com/cn.svg",
    },
  ];

  const { t } = useTranslation();
  const { language, handleChangeLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cierra dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-16 md:w-24 xs:w-28 lg:w-40" ref={dropdownRef}>
      <div
        className="border-b w-full rounded-none 
            flex flex-col items-center justify-between p-1 md:px-3 my-1 gap-1"
      >
        <span className="hidden md:flex text-[0.65rem] font-semibold whitespace-nowrap">
          {/* {t("common.language.change")} */}
          Change Language
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full gap-2 flex items-center justify-between"
        >
          <img
            src={allowedCountries.find((c) => c.value === language.value).emoji}
            className="w-5 h-5 rounded-full object-cover object-center"
          />
          <span className="hidden md:flex text-[0.7rem] font-semibold truncate">
            {allowedCountries.find((c) => c.value === language.value).label}
          </span>
          <span className="text-sm">
            {isOpen ? (
              <ChevronUpIcon className="w-4" />
            ) : (
              <ChevronDownIcon className="w-4" />
            )}
          </span>
        </button>
      </div>

      {/* Dropdown animado */}
      <ul
        className={`absolute w-full backdrop-blur-2xl bg-white/90 mt-1 
          rounded-none shadow-lg z-10 flex flex-col
          transition-all duration-200 ease-in-out transform origin-top
          ${
            isOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
      >
        {allowedCountries.map((country) => (
          <li
            key={country.value}
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer justify-between w-full"
            onClick={() => {
              handleChangeLanguage(country);
              setIsOpen(!isOpen);
            }}
          >
            <img
              src={country.emoji}
              className="w-5 h-5 rounded-full object-cover object-center"
            />
            <span className="hidden md:flex text-[0.7rem] font-semibold truncate">
              {country.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
