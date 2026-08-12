import { CONTACT_LINKS } from "@/mocks";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="contact"
        className="my-8 flex flex-col md:flex-row items-center gap-6"
      >
        {/* Decorative line */}
        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent via-amber-500 to-amber-600" />

        {/* Content */}
        <div className="flex flex-col items-center gap-4">
          <h2
            className="text-4xl font-semibold uppercase text-stone-600"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t("contact-section.title")}
            <span className="text-amber-600"> /</span>
          </h2>

          <div className="flex justify-around items-center gap-x-4">
            <a
              href="mailto:marzogomezaa@gmail.com"
              className="flex items-center gap-2 text-sm text-stone-500
                 transition-colors hover:text-amber-600 font-semibold"
            >
              marzogomezaa@gmail.com
            </a>
            <button
              className="rounded-full px-2 py-1 bg-gradient-to-r 
            from-amber-400/10 to-stone-100 flex justify-center 
            items-center gap-x-2 text-stone-800/80 hover:from-amber-300 
            duration-500 "
              onClick={() => {
                window.location.href = "mailto:marzogomezaa@gmail.com";
              }}
            >
              <EnvelopeIcon className="w-4 h-4" />
              {t("contact-section.connect")}
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {CONTACT_LINKS.slice(0, 2).map(({ name, href, icon: src }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex items-center gap-2 text-stone-500
                     transition-all duration-200
                     hover:-translate-y-0.5 hover:text-amber-600"
              >
                {/* <Icon size={18} strokeWidth={1.8} /> */}
                <img
                  src={src}
                  alt=""
                  className="w-12 h-12 object-contain object-center"
                />

                <span className="text-xs font-semibold uppercase tracking-wide">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div className="hidden md:block h-px flex-1 bg-gradient-to-l from-transparent via-amber-500 to-amber-600" />
      </section>
    </>
  );
};
export default ContactSection;
