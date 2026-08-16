import { useLanguage } from "@/context/language/LanguageContext";
import { RESUME_LINKS } from "@/mocks";
import { useTranslation } from "react-i18next";

const ResumeSection = () => {
  const { t } = useTranslation();

  const { language } = useLanguage();
  const selected_lng = language?.value || "en";

  const resume_link = RESUME_LINKS[selected_lng];

  return (
    <section
      id="resume"
      className="relative overflow-hidden px-6 bg-gradient-to-b pt-16
      from-stone-950 via-stone-800 to-stone-700 via-55% overflow-y-visible"
      style={{
        zIndex: 100,
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="flex items-center justify-center px-4 py-12">
          <span
            className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1
            text-xs font-bold uppercase tracking-[0.3em] text-amber-400 backdrop-blur-3xl"
          >
            {t("resume-section.label")}
          </span>
        </div>

        {/* CONTENT */}
        <div className="py-16">
          <div className="flex flex-col ">
            {/* MAIN */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-500">
                {t("resume-section.category")}
              </div>

              <h2
                className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-stone-200 md:text-7xl"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {t("resume-section.title")}
                <span className="text-amber-600">.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base">
                {t("resume-section.description")}
              </p>

              <div className="flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-wider text-stone-500 my-4">
                <span>{t("resume-section.meta.format")}</span>
                <span>·</span>
                <span>{t("resume-section.meta.updated")}</span>
                <span>·</span>
                <span
                  className=" border border-stone-400/20 
                px-4 py-0.5 rounded-md"
                >
                  {t("resume-section.meta.localized")}
                </span>
              </div>

              {/* DOCUMENT PREVIEW */}
              <div className="relative mt-6 overflow-hidden border border-stone-800 bg-stone-900 ">
                {/* Browser Header */}
                <div className="flex h-9 items-center gap-2 border-b border-stone-800 bg-stone-950 px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

                  <div
                    className="
                      ml-3 flex h-5 min-w-0 flex-1 items-center
                      overflow-hidden rounded bg-stone-800 px-4
                    "
                  >
                    <span className="block min-w-0 truncate whitespace-nowrap text-[10px] font-normal text-stone-100/35">
                      {resume_link}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-widest text-stone-600">
                    resume.pdf
                  </span>
                </div>

                {/* Fake Document */}
                <div
                  className="relative mx-auto min-h-[420px] max-w-4xl bg-stone-100 p-8 
                text-stone-900 md:p-12 "
                >
                  <div className="max-w-2xl">
                    <div className="font-serif text-3xl font-bold md:text-4xl">
                      {t("resume-section.document.name")}
                    </div>

                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500">
                      {t("resume-section.document.role")}
                    </div>

                    <div className="mt-8 h-px bg-stone-300" />

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-stone-400">
                          {t("resume-section.document.experience")}
                        </div>

                        <div className="mt-3 space-y-2">
                          <div className="h-2 w-full bg-stone-300" />
                          <div className="h-2 w-5/6 bg-stone-300" />
                          <div className="h-2 w-4/6 bg-stone-300" />
                        </div>
                      </div>

                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-stone-400">
                          {t("resume-section.document.education")}
                        </div>

                        <div className="mt-3 space-y-2">
                          <div className="h-2 w-full bg-stone-300" />
                          <div className="h-2 w-4/5 bg-stone-300" />
                          <div className="h-2 w-3/5 bg-stone-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent" />
                </div>

                {/* Glass reflection */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent opacity-60" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-stone-100/10 via-transparent to-transparent opacity-40" />
              </div>
              {/* FOOTER */}
              <div
                className="my-4 flex flex-col gap-4 md:flex-row 
                items-center justify-end"
              >
                {/* GOOGLE DRIVE LINK */}
                <a
                  href={resume_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 self-start border border-amber-400/40
                  bg-amber-400/5 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em]
                  text-amber-400 transition-all duration-300 hover:border-amber-400
                  hover:bg-amber-400 hover:text-stone-950"
                >
                  <span>{t("resume-section.cta")}</span>

                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
