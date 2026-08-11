import { headerMenus } from "@/constants";
import { Link } from "react-router";

const MenusLinks = () => {
  return (
    <div className="md:flex gap-4 items-center hidden">
      {headerMenus.map((it) => {
        return (
          <Link
            key={it.id}
            to={it.path}
            className="flex gap-2 items-center justify-start text-xs "
          >
            <span>{it.name}</span>
          </Link>
        );
      })}
    </div>
  );
};
export default MenusLinks;
