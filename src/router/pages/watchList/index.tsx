import { FC, useEffect, useState } from "react";
import { getAllWatchListed } from "../../../utils/helpers";
import { fetchPageCoins } from "../../../utils/api";
import { CoinData } from "../../../types/global";
import CoinList from "../../../components/data-display/coinList";
import { useNavigate } from "react-router-dom";

const WatchlistPage: FC = () => {
  const [watchlistedCoinIds, setWatchlistedCoinIds] = useState<
    string[] | undefined
  >(undefined);

  const [coins, setCoins] = useState<CoinData[] | undefined>(undefined);

  const navigator = useNavigate();

  useEffect(() => {
    setWatchlistedCoinIds(getAllWatchListed());
  }, []);

  useEffect(() => {
    if (watchlistedCoinIds && watchlistedCoinIds.length > 0) {
      const idString = watchlistedCoinIds.toString();
      fetchPageCoins({
        ids: idString,
        locale: "en",
        vs_currency: "usd",
        price_change_percentage: "1h,24h,7d",
      })
        .then((response) => {
          setCoins(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [watchlistedCoinIds]);

  return (
    <main className="px-6">
      {coins ? (
        <CoinList searchTerm="" coins={coins} />
      ) : (
        <p className="mx-auto max-w-md lg:max-w-xl text-center mt-16 font-darker-grotesque  text-xl md:text-2xl lg:text-3xl px-6">
          You do not have any watchlisted coins at the moment. Please select
          some from the{" "}
          <a
            className="underline text-medium-purple cursor-pointer"
            onClick={() => navigator("/coins")}
          >
            coin list.
          </a>
        </p>
      )}
    </main>
  );
};

export default WatchlistPage;
