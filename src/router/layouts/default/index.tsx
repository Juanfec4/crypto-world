import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/ui-elements/navbar";

const DefaultLayout: FC = () => {
  return (
    <>
      <Navbar
        NavbarLinks={[
          { text: "Home", target: "/" },
          { text: "Coin list", target: "/coins" },
          { text: "Watchlist", target: "/watch-list" },
        ]}
      />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
