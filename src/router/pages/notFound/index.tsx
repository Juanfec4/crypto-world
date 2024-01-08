import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <main>
      <div className="min-h-screen min-w-full flex items-center justify-center flex-col">
        <div className="relative flex flex-col items-center">
          <div className="md:h-[100px]">
            <h2 className=" text-3xl md:text-[200px] font-extrabold md:text-medium-purple ">404</h2>
            <h2 className=" text-3xl md:text-[200px] font-extrabold absolute -top-2 text-purple-mimosa  hidden md:block">
              404
            </h2>
          </div>
          <h4 className="text-center text-slate-900 p-6 z-50">
            The page you are looking for does not exist.{" "}
            <Link to={"./"} className="cursor-pointer text-purple-mimosa underline">
              Go back
            </Link>
          </h4>
        </div>
      </div>
    </main>
  );
};
export default NotFoundPage;
