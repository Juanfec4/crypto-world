import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DefaultLayout from "./layouts/default";
import CoinListPage from "./pages/coinList";
import CoinPage from "./pages/coin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/coins", element: <CoinListPage /> },
      { path: "/coins/:id", element: <CoinPage /> },
    ],
  },
]);

export default router;
