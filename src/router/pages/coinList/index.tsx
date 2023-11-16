import { FC, useEffect, useState } from "react";
import CoinList from "../../../components/data-display/coinList";
import { CoinData } from "../../../types/global";
import { fetchPageCoins } from "../../../utils/api";
import CoinTable from "../../../components/data-display/coinTable";
import SearchBox from "../../../components/ui-elements/searchBox";
import Pagination from "../../../components/ui-elements/pagination";

const CoinListPage: FC = () => {
  const [coins, setCoins] = useState<CoinData[] | undefined>(undefined);
  const [sortingBy, setSortingBy] = useState("marketCap-desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);

  const handleNextPage = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSortCoinsByName = (type: string) => {
    if (coins) {
      let sortedCoins;
      if (type === "desc") {
        sortedCoins = [...coins].sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sortedCoins = [...coins].sort((a, b) => b.name.localeCompare(a.name));
      }
      setCoins(sortedCoins);
    }
  };

  const handleSortCoinsByPrice = (type: string) => {
    if (coins) {
      let sortedCoins;
      if (type === "desc") {
        sortedCoins = [...coins].sort(
          (a, b) => b.current_price - a.current_price
        );
      } else {
        sortedCoins = [...coins].sort(
          (a, b) => a.current_price - b.current_price
        );
      }
      setCoins(sortedCoins);
    }
  };

  const handleSortCoinsByMarketCap = (type: string) => {
    if (coins) {
      let sortedCoins;
      if (type === "desc") {
        sortedCoins = [...coins].sort((a, b) => b.market_cap - a.market_cap);
      } else {
        sortedCoins = [...coins].sort((a, b) => a.market_cap - b.market_cap);
      }
      setCoins(sortedCoins);
    }
  };

  const handleSortCoinsBy1hChange = (type: string) => {
    if (coins) {
      let sortedCoins;
      if (type === "desc") {
        sortedCoins = [...coins].sort(
          (a, b) =>
            b.price_change_percentage_1h_in_currency -
            a.price_change_percentage_1h_in_currency
        );
      } else {
        sortedCoins = [...coins].sort(
          (a, b) =>
            a.price_change_percentage_1h_in_currency -
            b.price_change_percentage_1h_in_currency
        );
      }
      setCoins(sortedCoins);
    }
  };

  const handleSortCoinsBy24hChange = (type: string) => {
    if (coins) {
      let sortedCoins;
      if (type === "desc") {
        sortedCoins = [...coins].sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        );
      } else {
        sortedCoins = [...coins].sort(
          (a, b) =>
            a.price_change_percentage_24h - b.price_change_percentage_24h
        );
      }
      setCoins(sortedCoins);
    }
  };

  const handleSortCoinsBy7dChange = (type: string) => {
    if (coins) {
      let sortedCoins;
      if (type == "desc") {
        sortedCoins = [...coins].sort(
          (a, b) =>
            b.price_change_percentage_7d_in_currency -
            a.price_change_percentage_7d_in_currency
        );
      } else {
        sortedCoins = [...coins].sort(
          (a, b) =>
            a.price_change_percentage_7d_in_currency -
            b.price_change_percentage_7d_in_currency
        );
      }
      setCoins(sortedCoins);
    }
  };

  useEffect(() => {
    fetchPageCoins({
      price_change_percentage: "1h,24h,7d",
      vs_currency: "usd",
      locale: "en",
      page: page,
      per_page: 10,
    })
      .then((result) => {
        setCoins(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  return (
    <main>
      <section className="flex justify-center md:justify-between  max-w-[850px] lg:max-w-[1050px] my-8  mx-6 md:px-12 md:mx-auto items-center gap-4 lg:px-0">
        {coins ? (
          <>
            <SearchBox
              value={searchTerm}
              setValue={(e) => setSearchTerm(e.target.value)}
            />
          </>
        ) : null}
      </section>
      <CoinList coins={coins} searchTerm={searchTerm} />
      <CoinTable
        coins={coins}
        sortCoinsByName={handleSortCoinsByName}
        sortCoinsBy1hChange={handleSortCoinsBy1hChange}
        sortCoinsByPrice={handleSortCoinsByPrice}
        sortCoinsBy24hChange={handleSortCoinsBy24hChange}
        sortCoinsBy7dChange={handleSortCoinsBy7dChange}
        sortCoinsByMarketCap={handleSortCoinsByMarketCap}
        sortingBy={sortingBy}
        searchTerm={searchTerm}
        setSortBy={(criteria) => setSortingBy(criteria)}
      />
      <section className="flex w-full items-center justify-center md:p-12">
        {coins && !searchTerm ? (
          <Pagination
            current={page}
            max={maxPage}
            next={handleNextPage}
            prev={handlePrevPage}
          />
        ) : null}
      </section>
    </main>
  );
};
export default CoinListPage;
