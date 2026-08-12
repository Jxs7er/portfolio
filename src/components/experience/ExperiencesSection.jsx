import { useTranslation } from "react-i18next";

import { EXPERIENCES } from "@/mocks";

const ExperiencesSection = ({ experiences = EXPERIENCES }) => {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="experience"
        className="relative min-h-screen px-4 md:px-8 bg-gradient-to-b 
      from-amber-300/10 to-stone-800/20 via-20%"
      >
        {/* Header */}
        <div className="flex justify-center items-center py-12">
          <span
            className="
              rounded-full border border-amber-400/30
              bg-amber-400/10 px-4 py-1
              text-xs font-bold uppercase
              tracking-[0.3em] text-amber-400
              backdrop-blur-3xl
            "
          >
            {t("experience-section.title")}
          </span>
        </div>

        {/* Intro */}
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mx-auto max-w-3xl text-sm font-semibold leading-relaxed text-stone-500 md:text-lg">
              {t("experience-section.intro")}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-amber-500 
              via-stone-600 to-transparent md:left-1/2"
            />

            {experiences.map((experience, index) => (
              <div className="flex">
                <article
                  key={experience.title}
                  className={`
                  relative mb-20 pl-12
                  md:w-1/2 md:pl-0
                  md:pr-12
                `}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[9px] h-3 w-3 rounded-full 
                      bg-amber-300 md:left-auto md:right-[-6px] md:translate-x-0
                    `}
                  />

                  {/* Card */}
                  <div
                    className="group relative bg-stone-100/50 p-5 
                    backdrop-blur-sm transition-all duration-500
                    hover:-translate-y-1 shadow-md"
                  >
                    {/* Top */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                          {t(experience.category)}
                        </span>

                        <span className="text-xs text-stone-500 font-semibold border-b">
                          {t(experience.period)}
                        </span>
                      </div>

                      {/* Company */}
                      <h3
                        className="mt-4 text-4xl font-normal text-stone-800/50 leading-tight"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        <span className="font-bold uppercase">
                          {t(experience.title)}
                        </span>
                      </h3>
                    </div>

                    {/* Status */}
                    <div className="mt-4 flex items-center gap-2">
                      <span
                        className={`
                        h-2 w-2 rounded-full
                        ${
                          experience.status === "CURRENT"
                            ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                            : "bg-stone-500"
                        }
                      `}
                      />

                      <span className="font-mono text-[10px] uppercase text-stone-500">
                        {t(experience.status)}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="md:hidden mt-5 text-sm leading-relaxed text-stone-400">
                      {t(experience.description)}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-stone-600">
                        {t("experience-section.responsibilities")}
                      </span>

                      <ul className="mt-3 space-y-2">
                        {experience.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="
                              flex gap-2
                              text-xs leading-relaxed
                              text-stone-500
                            "
                          >
                            <span className="text-amber-500">→</span>
                            {t(highlight)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.stack.map((technology) => (
                        <span
                          key={technology}
                          className="
                          border border-stone-700/20
                          px-2 py-1 bg-stone-800/20
                          font-mono text-xs
                          text-stone-800
                          transition-colors
                          group-hover:border-stone-600/50
                          group-hover:text-stone-900 
                        "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Career progression */}
                    {experience.progression && (
                      <div className="mt-8 border-t border-stone-800 pt-5">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-stone-600">
                          {t("experience-section.career-progression")}
                        </span>

                        <div className="mt-4 space-y-3">
                          {experience.progression.map((item) => (
                            <div
                              key={item.role}
                              className="flex items-center justify-between gap-4"
                            >
                              <span className="text-xs font-semibold text-stone-400">
                                {t(item.role)}
                              </span>

                              <span className="font-mono text-[10px] text-stone-600">
                                {t(item.period)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>

                <div
                  className={`
                  hidden md:flex relative mb-20 pl-12
                  md:w-1/2 md:ml-auto md:pl-12 md:justify-center 
                  md:items-start
                  `}
                >
                  {/* Description */}
                  <p
                    className="hidden md:flex sticky top-32 font-normal animate-pulse 
                  mt-5 text-2xl leading-relaxed uppercase text-stone-800/60"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                  >
                    {t(experience.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ExperiencesSection;
