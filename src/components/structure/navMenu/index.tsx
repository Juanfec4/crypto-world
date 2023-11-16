import { FC, useState } from "react";
import { NavbarLink } from "./types";
import { NavLink } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import useDisableScroll from "../../../hooks/useDisableScroll";

interface NavMenuProps {
  NavLinks?: NavbarLink[];
}

const NavMenu: FC<NavMenuProps> = ({ NavLinks }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useDisableScroll([toggleMenu], () => toggleMenu);

  return (
    <>
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
      <IconMenu2
        className="m-6 h-6 w-6 md:hidden text-shuttle-gray cursor-pointer"
        onClick={() => {
          setToggleMenu(true);
        }}
      />
      {toggleMenu ? (
        <div className="md:hidden absolute top-0 left-0 bottom-0 right-0 z-50">
          <IconX
            className="absolute right-8 top-8 text-floral-white bg-black cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="flex flex-col items-center justify-center bg-purple-mimosa gap-2 min-h-full">
            {NavLinks
              ? NavLinks.map((link, index: number) => {
                  return (
                    <li key={index} onClick={() => setToggleMenu(false)}>
                      <NavLink
                        to={link.target}
                        className={({ isActive }) =>
                          isActive
                            ? " bg-black px-4 text-lg pb-1 text-floral-white"
                            : "px-4 hover:text-floral-white text-lg pb-1"
                        }
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      ) : null}
    </>
  );
};
export default NavMenu;
