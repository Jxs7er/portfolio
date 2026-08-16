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
              md:grid-cols-[280px_1fr]
              "
          >
            {/* Year */}
            <div className="font-mono text-sm text-stone-400 w-full">
              <div>
                <span className="text-amber-600">/</span> {item.period}
              </div>
              <div className="my-4 w-[300px] group">
                {/* Card */}
                <div
                  className="
                    relative
                    overflow-hidden
                    h-[340px]
                    rounded-2xl
                    border border-stone-800/20
                    bg-stone-100/50
                    shadow-xl
                    transition-all duration-500 ease-out
                    group-hover:-translate-y-2
                    group-hover:shadow-2xl
                  "
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={t(item.title)}
                    className="
                      absolute
                      top-0 left-0
                      w-full
                      h-auto
                      object-cover
                      transition-transform duration-700 ease-out
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* Bottom fade */}
                  <div
                    className="
                      absolute inset-x-0 top-0
                      h-full bg-stone-800/10
                      ease-in-out duration-700 transition-all
                      group-hover:backdrop-blur-sm
                    "
                  />
                  <div
                    className="
                      absolute inset-x-0 bottom-0
                      h-32
                      bg-gradient-to-t
                      from-stone-100
                      via-stone-100/80
                      to-transparent
                    "
                  />

                  {/* Explore */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-stone-500 font-semibold">
                      {t("certificate-section.certificates.seminar.type")}
                    </span>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-stone-800/20
                        bg-stone-100/80
                        px-4 py-2
                        font-mono text-[9px]
                        uppercase tracking-[0.2em]
                        text-stone-700
                        backdrop-blur-md
                        transition-all duration-300
                        hover:border-amber-600/40
                        hover:bg-amber-600
                        hover:text-stone-100
                      "
                    >
                      {t("projects-section.action.explore")}
                      <span className="text-amber-600 transition-colors group-hover:text-stone-100">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
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
