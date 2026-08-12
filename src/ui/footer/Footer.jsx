import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

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
    {
      label: t("footer.navigation.skills"),
      href: "#skills",
    },
    {
      label: t("footer.navigation.projects"),
      href: "#project",
    },
    {
      label: t("footer.navigation.credentials"),
      href: "#credentials",
    },
    {
      label: t("footer.navigation.contact"),
      href: "#contact",
    },
  ];

  return (
    <footer className="flex flex-col mt-12 px-4 border-t">
      {/* Navigation */}
      <div className=" flex items-center justify-center">
        <nav
          className="
            flex justify-center items-center
            gap-x-2 flex-wrap
            px-4 py-2
            border-b border-stone-400/30
          "
        >
          {navigation.map((item, index) => (
            <div key={item.href} className="flex items-center justify-center">
              <a href={item.href}>
                <span
                  className="
                    font-mono text-[9px]
                    uppercase tracking-[0.25em]
                    text-stone-400
                    hover:text-amber-400
                    hover:font-semibold
                    hover:text-[12px]
                    duration-100
                    ease-in-out
                    transition-all
                  "
                >
                  {item.label}
                </span>
              </a>

              {index < navigation.length - 1 && (
                <span className="text-[9px] mt-1.5 text-stone-500 mx-2">/</span>
              )}
            </div>
          ))}
        </nav>
      </div>
      {/* Main footer */}
      <div className={styles.container}>
        <div className="flex justify-center items-center mb-2">
          <img
            src="/assets/logo.webp"
            alt="Jxs7er Dev"
            className="w-16 h-16 object-contain rounded-full grayscale 
          opacity-35"
          />
        </div>
        {/* Identity */}
        <div className="flex flex-col items-center gap-3 py-2">
          <span
            className="
              font-mono
              text-xs
              uppercase
              tracking-[0.35em]
              text-stone-400
            "
          >
            JXS7ER
          </span>

          <span
            className="
              text-sm
              text-stone-500
              text-center
            "
          >
            {t("footer.tagline")}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent" />

        {/* Bottom */}
        <div
          className="
            flex flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
            py-6
            text-[10px]
            font-mono
            uppercase
            tracking-wider
            text-stone-500
          "
        >
          <span>© {new Date().getFullYear()} Ariel Alejandro Marzo Gómez</span>

          <span>
            {t("footer.builtBy")} <span className="text-amber-600">Jxs7er</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
