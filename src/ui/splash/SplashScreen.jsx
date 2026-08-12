import { useEffect, useState } from "react";
import { LoadingDots } from "@/components/common/loadings";

const SplashScreen = () => {
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullName(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="
            self-center relative
            flex flex-col justify-center items-center
            gap-y-4
          "
        >
          <div>
            <img
              src="/assets/logo.webp"
              alt="Jxs7er Dev"
              className="
                w-64 h-64 object-contain
                rounded-full grayscale
                animate-pulse
              "
            />
          </div>

          <div className="flex justify-center items-center h-10">
            <span
              className={`
                font-semibold
                text-gray-800/80
                tracking-wide
                transition-all duration-700 ease-out
                ${
                  showFullName
                    ? "text-sm md:text-lg opacity-100 translate-y-0"
                    : "text-2xl opacity-100 translate-y-0"
                }
              `}
              style={{
                fontFamily: "'Press Start 2P', serif",
              }}
            >
              {showFullName ? "ARIEL ALEJANDRO MARZO GOMEZ" : "JXS7ER_"}
            </span>
          </div>

          <div
            className="
              absolute rounded-full left-0
              animate-ping
              top-0 h-6 w-6
              bg-white/30
              -ml-4
              backdrop-blur-sm
            "
          />
        </div>

        <LoadingDots loading={true} color="bg-black/50" />
        <span
          className={`
                font-normal
                text-gray-800/40
                tracking-wide
                text-xs font-semibold
              `}
        >
          Loading Portfolio... Please wait
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;
