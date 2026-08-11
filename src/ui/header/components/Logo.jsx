import { Link } from "react-router";
import Profile from "@/assets/images/profile.jpeg";

const Logo = () => {
  return (
    <div className="self-center relative">
      <div className="flex justify-start items-center gap-x-6">
        <div className="">
          <img src={Profile} alt="" 
          className="w-12 h-12 rounded-full object-container" />
        </div>
        <Link to={`/`}>
          <span
            className="font-semibold text-gray-800/80
            text-2xl tracking-wide"
          >
            Ariel
          </span>
        </Link>
        {/* <hr className="border-2 mt-0.5 border-gray-100/80"/> */}
      </div>

      <div
        className="absolute rounded-full left-0
        top-0 h-6 w-6 bg-white/30 -ml-4 backdrop-blur-sm"
      />
    </div>
  );
};
export default Logo;
