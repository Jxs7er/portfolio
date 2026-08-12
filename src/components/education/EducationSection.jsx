import { useTranslation } from "react-i18next";

import { EDUCATION } from "@/mocks";

const EducationSection = ({ education = EDUCATION }) => {
  const { t } = useTranslation();
  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 bg-gradient-to-b 
    from-stone-800/20 to-green-300/10 from-40% via-10% min-h-screen"
    >
      {/* Header */}
      <div className="flex justify-center items-center py-12">
        <span
          className="
              rounded-full border border-stone-400/30
              bg-stone-400/10 px-4 py-1
              text-xs font-bold uppercase
              tracking-[0.3em] text-stone-800
              backdrop-blur-3xl
            "
        >
          {t("education-section.label")}
        </span>
      </div>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-end justify-between border-stone-800">
          <span className="hidden font-mono text-sm text-stone-500 md:block">
            {t("education-section.record")}
          </span>
        </div>

        {/* Education */}
        {education.map((item) => (
          <article
            key={item.institution}
            className="
              relative mt-16
              grid gap-12
              md:grid-cols-[180px_1fr]
            "
          >
            {/* Year */}
            <div className="font-mono text-sm text-stone-400">
              <span className="text-amber-600">/</span> {item.period}
            </div>

            {/* Main */}
            <div>
              {/* Degree */}
              <div>
                <span
                  className="
                    font-mono text-xs font-semibold
                    uppercase tracking-[0.3em]
                    text-stone-400
                  "
                >
                  {t("education-section.degree")}
                </span>

                <h3
                  className="mt-3 text-2xl md:text-4xl font-semibold leading-tight text-stone-700 md:text-6xl"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                  }}
                >
                  {t(item.degree)}
                  <span className="text-amber-600">_</span>

                  {/* <span
                    className="ml-2 inline-block h-[0.9em] 
                    w-[0.14em] translate-y-[0.12em] bg-stone-600 animate-cursor-blink"
                  /> */}
                  <span className="ml-2 inline-block h-[0.9em] w-[0.14em] bg-stone-600 animate-cursor-blink" />
                </h3>
              </div>

              {/* Institution */}
              <div className="mt-8 flex flex-col gap-1">
                <span className="text-sm font-bold uppercase tracking-wide text-stone-600">
                  {t(item.institution)}
                </span>

                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                  {t(item.shortName)} · {t(item.location)}
                </span>
              </div>

              {/* Thesis */}
              <div className="mt-16 border-t border-stone-800 pt-8">
                <span
                  className="
                    font-mono text-[9px]
                    uppercase tracking-[0.3em]
                    text-amber-600
                  "
                >
                  {t(item.thesis.category)}
                </span>

                <div className="mt-5 grid gap-6 md:grid-cols-[80px_1fr]">
                  <span className="font-mono text-xs text-stone-400">
                    {t("education-section.thesis")}
                  </span>

                  <p
                    className="
                      max-w-3xl
                      text-xl
                      font-medium
                      leading-relaxed
                      text-stone-600
                      md:text-2xl
                    "
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    “{t(item.thesis.title)}”
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
