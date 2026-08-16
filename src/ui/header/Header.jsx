import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import LanguageSwitcher from "../forms/select/LanguageSwitcher";
import {
  ArrowTurnRightDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { RESUME_LINKS } from "@/mocks";
import { useLanguage } from "@/context/language/LanguageContext";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {
      label: t("footer.navigation.about"),
      href: "#about",
    },
    {
      label: t("footer.navigation.experience"),
      href: "#experience",
    },
    {
      label: t("footer.navigation.education"),
      href: "#education",
    },
    // {
    //   label: t("footer.navigation.engineering-practice"),
    //   href: "#engineering-practice",
    // },
    // {
    //   label: t("footer.navigation.skills"),
    //   href: "#skills",
    // },
    {
      label: t("footer.navigation.projects"),
      href: "#project",
    },
    {
      label: t("footer.navigation.credentials"),
      href: "#credentials",
    },
    // {
    //   label: t("footer.navigation.professional-engagement"),
    //   href: "#professional-engagement",
    // },
    {
      label: t("footer.navigation.contact"),
      href: "#contact",
    },
  ];

  const { language } = useLanguage();
  const selected_lng = language?.value || "en";

  const resume_link = RESUME_LINKS[selected_lng];

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-[99] w-full">
      <nav
        className="
          relative
          border bg-stone-100/50 
          backdrop-blur-3xl
        "
      >
        {/* HEADER BAR */}
        <div className="flex h-14 items-center justify-between px-4 md:px-5">
          {/* LOGO */}
          <Link
            to="/"
            onClick={handleNavigation}
            className="
              group flex items-center gap-3
              font-mono text-xs uppercase
              tracking-[0.2em] text-stone-200
            "
          >
            <div>
              <img
                src="/assets/logo.webp"
                alt="Jxs7er Dev"
                className="
                w-8 h-8 object-contain
                rounded-full grayscale opacity-90
              "
              />
            </div>
            <span
              className="
                rounded-full text-stone-600
                transition-all duration-300
                group-hover:shadow-[0_0_12px_rgba(251,191,36,0.8)]
              "
              style={{
                fontFamily: "'Press Start 2P', serif",
              }}
            >
              Jxs7er_
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-x-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  font-mono text-[10px]
                  uppercase tracking-[0.15em]
                  text-stone-500
                  duration-300
                  hover:text-amber-400 hover:scale-110
                  transition-all ease-in-out flex 
                  justify-center items-center
                "
              >
                {item.label}
                <span className="ml-0.5">
                  <ArrowTurnRightDownIcon className="w-3" />
                </span>
              </a>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={resume_link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center gap-2
                bg-stone-800/40
                px-3 py-2
                text-[10px]
                uppercase tracking-[0.15em]
                text-stone-800
                transition-all duration-300
                hover:border-stone-400
                hover:scale-105
                hover:text-stone-950
              "
            >
              <span>{t("resume-section.cta")}</span>
              <span
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              >
                ↗
              </span>
            </a>

            <LanguageSwitcher />
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />

            {/* MENU BUTTON */}
            <button
              type="button"
              aria-label={
                isMenuOpen ? t("header.close-menu") : t("header.open-menu")
              }
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="
                flex h-9 w-9 items-center justify-center
                text-stone-400
                transition-colors duration-300
                hover:border-amber-400/50
                hover:text-amber-400
              "
            >
              <div className="flex w-4 flex-col gap-1.5">
                <Bars3Icon
                  className={`w-6 transition-all duration-200 ease-in-out ${isMenuOpen && "hidden"}`}
                />
                <XMarkIcon
                  className={`w-6 transition-all duration-200 ease-in-out ${!isMenuOpen && "hidden"}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden border-t border-stone-800
            transition-all duration-500 ease-out
            lg:hidden
            ${
              isMenuOpen
                ? "max-h-[80vh] opacity-100"
                : "max-h-0 border-t-transparent opacity-0"
            }
          `}
        >
          <div className="px-5 py-6">
            {/* LINKS */}
            <div className="flex flex-col">
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  className="
                    group flex items-center justify-between
                    border-t border-stone-900/5
                    py-4
                    font-mono text-xs
                    uppercase tracking-[0.15em]
                    text-stone-400
                    transition-colors duration-300
                    hover:text-stone-100
                  "
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] text-stone-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.label}</span>
                  </div>

                  <span
                    className="
                      text-stone-700
                      transition-all duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-amber-400
                    "
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* RESUME */}
            <a
              href={resume_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavigation}
              className="
                mt-6 flex items-center justify-between
                border border-amber-400/30
                bg-amber-400/10
                px-4 py-4
                font-mono text-[10px]
                uppercase tracking-[0.2em]
                text-amber-400
                transition-all duration-300
                hover:border-amber-400
                hover:bg-amber-400
                hover:text-stone-950
              "
            >
              <span>{t("resume-section.cta")}</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
