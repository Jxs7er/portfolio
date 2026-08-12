import { useEffect, useMemo, useState } from "react";
import StarsRating from "./StarsRating";

import { SKILLS } from "@/mocks";
import { useTranslation } from "react-i18next";

const SLOT_STEP = 54; // separacion vertical (px) entre cada peldano del abanico
const ANGLE_STEP = 17; // grados de inclinacion por peldano de distancia al centro
const VISIBLE_RADIUS = 2; // cuantos peldanos arriba/abajo del centro se ven con opacidad
const MOUNT_RADIUS = 3; // radio en el que un item ya esta montado (invisible) listo para entrar

// distancia circular mas corta entre el indice i y el indice activo, en un arreglo de n items
function shortestDelta(i, active, n) {
  let raw = i - active;
  if (raw > n / 2) raw -= n;
  if (raw < -n / 2) raw += n;
  return raw;
}

function slotStyle(delta) {
  const abs = Math.abs(delta);
  const angle = delta * ANGLE_STEP;
  const translateY = delta * SLOT_STEP;
  const scale = Math.max(0.6, 1.55 - abs * 0.3);
  const opacity = abs <= VISIBLE_RADIUS ? 1 - abs * 0.32 : 0;
  const shade =
    abs === 0
      ? "text-amber-100" // stone-800, el centro: mas oscuro
      : abs === 1
        ? "text-stone-800/80" // stone-600
        : abs === 2
          ? "text-stone-800" // stone-400
          : "text-stone-800"; // stone-300
  return { angle, translateY, scale, opacity, shade };
}

const SkillsSection = ({
  items = SKILLS,
  secondsPerWord = 3.3, // cuanto dura cada palabra en el centro antes de rotar
}) => {
  const n = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (paused ? prev : (prev + 1) % n));
    }, secondsPerWord * 1000);
    return () => clearInterval(id);
  }, [n, secondsPerWord, paused]);

  const visible = useMemo(() => {
    return items
      .map(({ value }, i) => ({
        word: value,
        i,
        delta: shortestDelta(i, activeIndex, n),
      }))
      .filter(({ delta }) => Math.abs(delta) <= MOUNT_RADIUS);
  }, [items, activeIndex, n]);

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen 
      bg-gradient-to-r from-amber-100 to-black overflow-hidden pl-2 md:pl-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header */}
      <div
        className="relative px-12 my-4 md:absolute md:top-10 md:right-32"
        style={{
          zIndex: 100,
        }}
      >
        <div className="flex justify-center items-center w-full p-2">
          <span
            className="text-xs font-bold 
        tracking-[0.3em] uppercase 
        text-amber-400 bg-amber-400/10 
        border border-amber-400/30 px-4 py-1 rounded-full"
          >
            {t("skills-section.label")}
          </span>
        </div>

        <div className="space-y-2 flex flex-col justify-center items-center">
          <h1
            className="mt-4 text-xl font-normal text-stone-400 leading-tight 
            flex gap-x-2 justify-center items-center w-full space-y-2"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            <span className="font-bold uppercase">
              {t(items[activeIndex].type)}
            </span>
            /
            <div className="min-w-8">
              <StarsRating rating={items[activeIndex].exp} />
            </div>
          </h1>

          <div className="h-1 w-full max-w-lg bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
          <span className="text-xs text-stone-100/80 font-medium align-top w-full text-end">
            + {items[activeIndex].years} {t("skills-section.yearsExperience")}
          </span>
          <span className="text-xs text-stone-100/80 font-medium align-top w-full text-end">
            {t(items[activeIndex].description)}
          </span>
        </div>
      </div>

      <div
        className="relative w-full min-h-[400px] 
      md:min-h-screen flex items-center"
      >
        {visible.map(({ word, i, delta }) => {
          const { angle, translateY, scale, opacity, shade } = slotStyle(delta);
          return (
            <div
              key={`${word}-${i}`}
              className="absolute left-0 origin-left w-full md:w-min "
              style={{
                top: "50%",
                transform: `translateY(calc(-50% + ${translateY}px)) rotate(${angle}deg) scale(${scale})`,
                opacity,
                zIndex: 100 - Math.abs(delta),
                transition:
                  "transform 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, color 500ms ease",
              }}
            >
              <div
                className={
                  angle === 0 &&
                  ` backdrop-blur-sm bg-stone-800 py-2
                ease-in-out transition-all w-full pl-8 md:pr-32 shadow-2xl shadow-amber-100/50 `
                }
              >
                <span
                  className={`block whitespace-nowrap text-2xl md:text-8xl 
                    leading-none ${shade}`}
                  style={{
                    fontFamily: "'Pixelify Sans', monospace",
                  }}
                >
                  {word}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm "
        style={{
          zIndex: 99,
        }}
      />
    </section>
  );
};

export default SkillsSection;
