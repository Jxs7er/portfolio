import { StarIcon } from "@heroicons/react/24/solid";

const StarsRating = ({
  rating,
  rotate_level = 0,
  _class = "flex flex-row text-sm gap-0 text-yellow-400",
}) => {
  const stars = Math.trunc(rating);
  return (
    <div className={_class}>
      {(() => {
        const starComponents = [];
        for (let i = 0; i < stars; i++) {
          starComponents.push(
            <StarIcon rotate={rotate_level} key={`star-${i}`} className="w-5 rotate-3 opacity-70" />,
          );
        }
        return starComponents;
      })()}
      <br />
    </div>
  );
};

export default StarsRating;
