import { useTranslation } from "react-i18next";

import { CERTIFICATES } from "@/mocks";

const CertificatesSection = ({ certificates = CERTIFICATES }) => {
  const { t } = useTranslation();

  return (
    <section id="credentials" className="relative overflow-hidden px-6 ">
      {/* Header */}
      <div className="relative mx-auto max-w-6xl">
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
            {t("certificate-section.label")}
          </span>
        </div>
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="
            absolute inset-0
            [background-image:linear-gradient(#57534e_1px,transparent_1px),
            linear-gradient(90deg,#57534e_1px,transparent_1px)]
            [background-size:40px_40px]
          "
          />
        </div>

        <div className="flex items-end justify-between border-b border-stone-800 pb-5">
          <div>
            <h2
              className="
                mt-3 text-5xl font-semibold
                text-stone-700 md:text-7xl
              "
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {t("certificate-section.title")}
              <span className="text-amber-600">.</span>
            </h2>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-16">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="
                group relative
                border-b border-stone-800/80
                py-8
                transition-all duration-500
                hover:bg-stone-100/50
                md:py-10
              "
            >
              <div className="grid gap-6 md:grid-cols-[80px_1fr_180px] md:items-center">
                {/* INDEX */}
                <div
                  className="
                    font-mono text-xs
                    text-stone-400 px-3
                    transition-colors
                    group-hover:text-amber-600
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* CONTENT */}
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4">
                    <span
                      className="
                        font-mono text-[9px]
                        uppercase tracking-[0.25em]
                        text-amber-600
                      "
                    >
                      {t(certificate.category)}
                    </span>

                    <span className="text-stone-300">/</span>

                    <span className="font-mono text-[10px] text-stone-500">
                      {certificate.year}
                    </span>
                  </div>

                  <div
                    className="w-full flex flex-col 
                  md:flex-row justify-center items-center"
                  >
                    {/* Image */}
                    {certificate.image && (
                      <div className="my-2 md:w-[800px]">
                        <img
                          src={certificate.image}
                          alt={t(certificate.title)}
                          className=" block p-10 object-center 
                        object-cover transition-transform 
                        duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="w-1/2 relative">
                      <h3
                        className="
                            mt-3 max-w-2xl
                            text-2xl font-semibold
                            leading-tight text-stone-700
                            transition-transform duration-500
                            group-hover:translate-x-2
                            md:text-3xl"
                      >
                        {t(certificate.title)}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 px-6">
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                          {t(certificate.issuer)}
                        </span>

                        <span className="text-amber-500">·</span>

                        <span className="font-mono text-[9px] uppercase text-stone-400">
                          {t(certificate.type)}
                        </span>
                      </div>
                      {t(certificate.featured) && (
                        <div className="absolute -top-6 left-2">
                          <span
                            className="px-2 py-1 bg-amber-200 text-xs 
                          text-stone-800/50 font-semibold"
                          >
                            {t(certificate.featured)}
                          </span>
                        </div>
                      )}

                      <p className="mt-4 px-7 w-full text-xs leading-relaxed text-stone-500">
                        {t(certificate.description)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ACTION */}
              </div>
              <div className="md:text-right px-4">
                {certificate.url ? (
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex items-center gap-3
                        font-mono text-[10px]
                        uppercase tracking-widest
                        text-stone-500
                        transition-colors
                        hover:text-amber-600
                      "
                  >
                    {t("certificate-section.action.view")}
                    <span
                      className="
                          transition-transform duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                    >
                      ↗
                    </span>
                  </a>
                ) : (
                  <span
                    className="
                        font-mono text-[10px]
                        uppercase tracking-widest
                        text-stone-300
                      "
                  >
                    {t("certificate-section.action.verified")}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
