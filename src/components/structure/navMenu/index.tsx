import { FC } from "react";
import { NavbarLink } from "./types";
import { NavLink } from "react-router-dom";

interface NavMenuProps {
  NavLinks?: NavbarLink[];
}

const NavMenu: FC<NavMenuProps> = ({ NavLinks }) => {
  return (
    <ul className="hidden md:flex font-darker-grotesque font-bold px-2 ">
      {NavLinks
        ? NavLinks.map((link, index: number) => {
            return (
              <li key={index}>
                <NavLink
                  to={link.target}
                  className={({ isActive }) =>
                    isActive
                      ? " bg-purple-mimosa px-4 text-lg pb-1"
                      : "px-4 hover:text-purple-mimosa text-lg pb-1"
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })
        : null}
    </ul>
  );
};
export default NavMenu;
