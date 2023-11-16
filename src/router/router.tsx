import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DefaultLayout from "./layouts/default";
import CoinListPage from "./pages/coinList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/coins", element: <CoinListPage /> },
    ],
  },
]);

export default router;
