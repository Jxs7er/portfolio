import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Profile from "@/assets/images/profile.png";
import { useTranslation } from "react-i18next";

const HeroBannerSection = () => {
  const [years, setYears] = useState(0);

  useEffect(() => {
    const birthday = new Date(1998, 8, 26); // 26 septiembre 1998
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();

    const hasBirthdayPassed =
      today.getMonth() > birthday.getMonth() ||
      (today.getMonth() === birthday.getMonth() &&
        today.getDate() >= birthday.getDate());

    if (!hasBirthdayPassed) {
      age--;
    }

    setYears(age);
  }, []);

  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="flex flex-col gap-x-1 md:gap-x-0
      items-center w-full"
    >
      {/* Gallery */}
      <div
        className="flex flex-col md:flex-row justify-center items-center h-100 
      bg-gradient-to-b from-white to-gray-100/25 from-80%
      "
      >
        <div className="w-full h-full flex justify-center items-center mt-8">
          <img
            src={Profile}
            alt=""
            className="h-64 rounded-full object-contain "
          />
        </div>
        <div className="h-full flex justify-center items-center w-full">
          <h1
            className="text-sm mt-6 md:mt-0 md:text-8xl font-semibold 
            text-gray-700 md:text-amber-400 
            opacity-80 md:opacity-40 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {t("hero-section.main-role")}
          </h1>
        </div>
      </div>

      <div className="w-full">
        <div className=" px-4 py-12">
          {/* Header */}
          <div className="text-center mb-10 relative">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400 bg-amber-400/10 border border-amber-400/30 px-4 py-1 rounded-full">
              {t("hero-section.portfolio")}
            </span>

            <div className="space-y-2 sticky top-1 flex flex-col justify-center items-center">
              <h1
                className="mt-4 text-xl font-normal text-stone-600 leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                <span className="font-bold uppercase">
                  {t("hero-section.last-name")}
                </span>{" "}
                / {t("hero-section.given-name")}
                <span className="text-sm text-amber-500 align-top ml-1 ">
                  ({years} {t("hero-section.age")})
                </span>
              </h1>

              <div className="h-1 w-full max-w-lg bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
            </div>

            <div className="flex flex-col gap-y-20 w-full px-8 mt-8">
              <p
                className=" text-stone-700 max-w-2xl 
              text-lg md:text-4xl font-semibold md:max-w-none mx-auto md:mx-0 text-start"
              >
                {t("hero-section.intro")}
              </p>

              <p
                className=" text-stone-600 max-w-2xl 
              text-md md:text-2xl font-semibold md:max-w-none mx-auto md:mx-0 text-end"
              >
                {t("hero-section.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroBannerSection;
