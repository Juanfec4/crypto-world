import { FC } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
