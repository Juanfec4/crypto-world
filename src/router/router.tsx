import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DefaultLayout from "./layouts/default";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default router;
