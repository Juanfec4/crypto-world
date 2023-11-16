import { FC, useEffect, useState } from "react";
import CoinList from "../../../components/data-display/coinList";
import { CoinData } from "../../../types/global";
import { fetchPageCoins } from "../../../utils/api";

const CoinListPage: FC = () => {
  const [coins, setCoins] = useState<CoinData[] | undefined>(undefined);
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  useEffect(() => {
    fetchPageCoins({
      price_change_percentage: "24h",
      vs_currency: "usd",
      locale: "en",
      page: page,
      per_page: 25,
    })
      .then((result) => {
        setCoins(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(coins);
  return (
    <main>
      <CoinList coins={coins} />
    </main>
  );
};
export default CoinListPage;
