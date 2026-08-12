import { useTranslation } from "react-i18next";
import { ENGINEERING_PRACTICES } from "@/mocks";

const EngineeringPracticeSection = ({ practices = ENGINEERING_PRACTICES }) => {
  const { t } = useTranslation();

  return (
    <section
      id="engineering-practice"
      className="relative overflow-hidden bg-gradient-to-b from-green-300/10 to-amber-100 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
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
            {t("engineering-practice-section.label")}
          </span>
        </div>

        {/* INTRO */}
        <div className="grid gap-10 border-stone-800 pb-16 md:grid-cols-2">
          <div>
            <h2
              className="
                text-5xl font-normal
                leading-tight text-stone-800
                md:text-9xl
              "
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {t("engineering-practice-section.title")}
              {/* <span className="text-amber-500"></span> */}
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-sm leading-relaxed text-stone-800/80 md:text-base">
              {t("engineering-practice-section.intro")}
            </p>
          </div>
        </div>

        {/* PRACTICES */}
        <div className="relative mt-16 flex flex-col justify-center items-center">
          <div
            className="flex flex-col lg:grid lg:grid-cols-4 
            gap-x-10 justify-center items-center 
          gap-y-32 z-20 py-4 my-12 "
          >
            {practices.map((practice) => (
              <article
                key={practice.id}
                className={`
                  group
                  overflow-hidden
                  bg-amber-50
                  border-b border-stone-600/10
                  transition-all duration-500
                  hover:border-stone-700
                  hover:bg-stone-900
                  relative flex flex-col 
                  justify-center items-center overflow-visible
                `}
              >
                <div
                  className="w-full p-0.5 m-4 h-full absolute rotate-6 
                  group-hover:rotate-0 transition-all duration-300
                  animate-pulse top-0 left-0 bg-stone-800/10 box-content "
                  style={{
                    zIndex: -12,
                  }}
                />

                <div className="flex flex-col justify-center items-center ">
                  <div className="w-3 h-3 bg-green-400 antialiased animate-ping absolute -top-24 md:-top-40 z-10 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 antialiased absolute -top-24 md:-top-40 z-10 rounded-full" />
                  <div
                    className="absolute -top-24 md:-top-40 w-[0.8px] h-full bg-gradient-to-b 
          from-green-400/90 via-amber-300 via-25% to-40% to-transparent z-0 opacity-70"
                  />
                </div>
                {/* VISUAL */}
                <div className="relative overflow-hidden border-b border-stone-800">
                  {/* Glow */}
                  <div
                    className=" pointer-events-none absolute inset-0 z-10 bg-amber-500/5 
                    opacity-0 transition-opacity duration-500 group-hover:opacity-100
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8">
                  {/* CATEGORY + NUMBER */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="
                        font-mono text-xs
                        uppercase tracking-[0.25em]
                        text-stone-500
                      "
                    >
                      {t(practice.category)}
                    </span>

                    <span className="font-mono text-[9px] text-stone-600">
                      <span className="text-stone-700">/</span>
                      {t(practice.number)}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className=" mt-4 text-2xl font-semibold leading-relaxed text-stone-800/80 
                    group-hover:text-white transition-transform duration-500 group-hover:translate-x-1 md:text-3xl
                    "
                    style={{
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {t(practice.title)}
                    <span className="text-amber-600">.</span>
                  </h3>

                  {/* DESCRIPTION */}
                  <p className=" mt-4 text-sm leading-relaxed text-stone-500">
                    {t(practice.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringPracticeSection;
