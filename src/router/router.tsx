import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import CoinPage from "./pages/coin";
import CoinListPage from "./pages/coinList";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import WatchlistPage from "./pages/watchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/coins", element: <CoinListPage /> },
      { path: "/coins/:id", element: <CoinPage /> },
      { path: "/watch-list", element: <WatchlistPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
