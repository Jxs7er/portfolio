import { useState } from "react";
import { useNavigate } from "react-router";

const HeroBannerSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // if (loading)
  //   return (
  //     <div className="h-[50vh] w-full flex justify-center items-center">
  //       <LoadingDots loading={loading} color="bg-gray-900/15" />
  //     </div>
  //   );

  return (
    <div
      className="flex flex-col gap-x-1 md:gap-x-0
      md:flex-row md:justify-between items-center w-full"
    >
      {/* Hero Banner */}
      <div
        className="relative overflow-hidden w-full
        py-24 h-[400px] flex justify-around items-center gap-10"
      >
        {/* Trailer */}
        <div className="relative w-full h-screen overflow-hidden bg-black">
          {/* <video
            ref={videoRef}
            onLoadedMetadata={() => {
              const duration = videoRef.current?.duration || 5;
              setVideoDuration(duration * 1000);
            }}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover blur-sm"
          >
            <source src={currentGame.video} />
          </video> */}

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </div>
  );
};
export default HeroBannerSection;
