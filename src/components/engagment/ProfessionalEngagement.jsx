import { useLanguage } from "@/context/language/LanguageContext";
import { useTranslation } from "react-i18next";

const SubtitlesSelector = ({ ln }) => (
  <>
    <track
      src="/assets/resources/videos/subtitles/seminar-en.vtt"
      kind="subtitles"
      srcLang="en"
      label="English"
      default={ln === "en"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-es.vtt"
      kind="subtitles"
      srcLang="es"
      label="Español"
      default={ln === "es"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-am.vtt"
      kind="subtitles"
      srcLang="am"
      label="Հայերեն"
      default={ln === "am"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-fr.vtt"
      kind="subtitles"
      srcLang="fr"
      label="Français"
      default={ln === "fr"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-zh.vtt"
      kind="subtitles"
      srcLang="zh"
      label="中文"
      default={ln === "zh"}
    />

    <track
      src="/assets/resources/videos/subtitles/seminar-de.vtt"
      kind="subtitles"
      srcLang="de"
      label="Deutsch"
      default={ln === "de"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-jp.vtt"
      kind="subtitles"
      srcLang="jp"
      label="日本語"
      default={ln === "jp"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-pt.vtt"
      kind="subtitles"
      srcLang="pt"
      label="Português"
      default={ln === "pt"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-kr.vtt"
      kind="subtitles"
      srcLang="kr"
      label="한국어"
      default={ln === "kr"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-ru.vtt"
      kind="subtitles"
      srcLang="ru"
      label="Русский"
      default={ln === "ru"}
    />

    <track
      src="/assets/resources/videos/subtitles/seminar-sa.vtt"
      kind="subtitles"
      srcLang="sa"
      label="العربية"
      default={ln === "sa"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-it.vtt"
      kind="subtitles"
      srcLang="it"
      label="Italiano"
      default={ln === "it"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-id.vtt"
      kind="subtitles"
      srcLang="id"
      label="Bahasa Indonesia"
      default={ln === "id"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-in.vtt"
      kind="subtitles"
      srcLang="in"
      label="हिन्दी"
      default={ln === "in"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-th.vtt"
      kind="subtitles"
      srcLang="th"
      label="ไทย"
      default={ln === "th"}
    />
    <track
      src="/assets/resources/videos/subtitles/seminar-tr.vtt"
      kind="subtitles"
      srcLang="tr"
      label="Türkçe"
      default={ln === "tr"}
    />
  </>
);

const ProfessionalEngagement = () => {
  const { t } = useTranslation();

  const { language } = useLanguage();
  const value = language?.value || "en";

  return (
    <section
      id="professional-engagement"
      className="relative overflow-hidden bg-stone-950 px-6"
      style={{
        zIndex: 100,
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="px-4 py-12 flex justify-center items-center sticky top-1">
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-3xl 
          text-amber-400 bg-amber-400/10 border border-amber-400/30 px-4 py-1 rounded-full"
          >
            {t("professional-engagement-section.label")}
          </span>
        </div>
        <div className="mb-16">
          <h2
            className="mt-4 text-5xl font-semibold text-stone-200 md:text-7xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t("professional-engagement-section.title")}
            <span className="text-amber-600">.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base">
            {t("professional-engagement-section.description")}
          </p>
        </div>

        {/* SEMINAR */}
        <article className="border-y border-stone-800 py-10">
          <div className="grid gap-10 md:grid-cols-[120px_1fr]">
            {/* INDEX */}
            <div className="font-mono text-xs text-stone-500">07 / 2026</div>

            {/* CONTENT */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-500">
                {t("professional-engagement-section.title")}
              </div>

              <h3 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-stone-200 md:text-5xl">
                {t(
                  "professional-engagement-section.engagements.seminar.title1",
                )}
                <span className="text-stone-500">
                  {" "}
                  {t(
                    "professional-engagement-section.engagements.seminar.title2",
                  )}
                </span>
              </h3>

              <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs text-stone-500">
                <span>
                  {t(
                    "professional-engagement-section.engagements.seminar.location",
                  )}
                </span>
                <span>·</span>
                <span>
                  {t(
                    "professional-engagement-section.engagements.seminar.language",
                  )}
                </span>
                <span>·</span>
                <span>
                  {t(
                    "professional-engagement-section.engagements.seminar.recognition",
                  )}
                </span>
              </div>

              {/* VIDEO */}
              <div
                className="mt-10 overflow-hidden border border-stone-800 
              bg-stone-900 relative flex justify-center pt-3 overflow-visible"
              >
                <div
                  className="relative w-[85%] rounded-none border-b border-x 
                    shadow-[0_30px_80px_rgba(0,0,0,0.45)] border-stone-800
                    transition-all duration-700 -mb-5 z-50
                "
                >
                  {/* Browser / window header */}
                  <div className="flex h-8 items-center gap-2 border-b border-stone-800 bg-stone-900 px-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                    <div className="ml-3 h-3 flex-1 rounded bg-stone-800" />
                  </div>

                  <video
                    controls
                    controlsList="nodownload noremoteplayback"
                    preload="none"
                    playsInline
                    //   poster="/assets/resources/images/seminar-poster.webp"
                    className="aspect-video w-full object-cover [&::cue]:text-[28px]"
                  >
                    <source
                      src="/assets/resources/videos/seminar.webm"
                      type="video/webm"
                    />
                    <SubtitlesSelector ln={value} />
                  </video>

                  {/* Glass reflection */}
                </div>
                <div
                  className="pointer-events-none
                  inset-0 bg-gradient-to-br absolute top-0 left-0
                  from-amber-400/10 via-transparent 
                  to-transparent opacity-60 w-full h-full"
                />
                <div
                  className="pointer-events-none
                  inset-0 bg-gradient-to-tl absolute top-0 left-0
                  from-stone-100/20 via-transparent 
                  to-transparent opacity-60 w-full h-full"
                />
                <div
                  className="pointer-events-none absolute top-0 left-0
                  inset-0 bg-black/5 w-full h-full"
                />
              </div>

              {/* FOOTER */}
              <div className="mt-6 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-wider text-stone-500">
                <span>
                  {t(
                    "professional-engagement-section.engagements.seminar.institution",
                  )}
                </span>
                <span>
                  {t(
                    "professional-engagement-section.engagements.seminar.sponsor",
                  )}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProfessionalEngagement;
