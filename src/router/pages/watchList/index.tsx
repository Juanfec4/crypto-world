import { FC, useEffect, useState } from "react";
import { getAllWatchListed } from "../../../utils/helpers";
import { fetchPageCoins } from "../../../utils/api";
import { CoinData } from "../../../types/global";
import CoinList from "../../../components/data-display/coinList";

const WatchlistPage: FC = () => {
  const [watchlistedCoinIds, setWatchlistedCoinIds] = useState<
    string[] | undefined
  >(undefined);

  const [coins, setCoins] = useState<CoinData[] | undefined>(undefined);

  useEffect(() => {
    setWatchlistedCoinIds(getAllWatchListed());
  }, []);

  useEffect(() => {
    if (watchlistedCoinIds) {
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

  return <main>{coins ? <CoinList searchTerm="" coins={coins} /> : null}</main>;
};

export default WatchlistPage;
