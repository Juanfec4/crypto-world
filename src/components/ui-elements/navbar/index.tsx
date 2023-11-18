import { FC } from "react";
import SiteLogo from "../../../assets/logos/logo.png";
import { NavbarLink } from "../../structure/navMenu/types";
import NavMenu from "../../structure/navMenu";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  NavbarLinks?: NavbarLink[];
}
const Navbar: FC<NavbarProps> = ({ NavbarLinks }) => {
  const navigator = useNavigate();
  return (
    <nav className=" bg-floral-white border-b-2 border-black pb-1">
      <div className="flex lg:px-16  items-center md:gap-4 lg:gap-36 md:max-w-max md:mx-auto justify-between md:justify-center">
        <img
          src={SiteLogo}
          alt=""
          className="p-6 h-20 md:h-24 self-center"
          onClick={() => navigator("/")}
        />
        <NavMenu NavLinks={NavbarLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
