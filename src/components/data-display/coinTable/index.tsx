import { FC } from "react";
import { IconEye } from "@tabler/icons-react";
import { CoinData } from "../../../types/global";
import Loader from "../../ui-elements/loader";
import PercentTag from "../percentTag";
import { IconArrowsDownUp } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

interface CoinTableProps {
  coins?: CoinData[];
  sortingBy: string;
  searchTerm: string;
  sortCoinsByName: (type: string) => void;
  sortCoinsByPrice: (type: string) => void;
  sortCoinsByMarketCap: (type: string) => void;
  sortCoinsBy1hChange: (type: string) => void;
  sortCoinsBy24hChange: (type: string) => void;
  sortCoinsBy7dChange: (type: string) => void;
  setSortBy: (criteria: string) => void;
}

const CoinTable: FC<CoinTableProps> = ({
  coins,
  searchTerm,
  sortCoinsByName,
  sortCoinsByPrice,
  sortCoinsBy1hChange,
  sortCoinsBy7dChange,
  sortCoinsByMarketCap,
  sortCoinsBy24hChange,
  sortingBy,
  setSortBy,
}) => {
  const navigator = useNavigate();

  return coins ? (
    <div className="hidden md:block mx-auto bg-white border-2 border-black rounded-md max-w-min overflow-hidden">
      <table className="md:max-w-[1000px] lg:max-w-none lg:w-[1050px] align-middle table-auto text-center ">
        <thead className="border-b border-black">
          <tr className=" font-darker-grotesque text-lg">
            <th className="p-4">
              <span className="flex mx-auto max-w-max gap-1">
                <span>Coin</span>
                <IconArrowsDownUp
                  className={
                    sortingBy !== "name-desc" && sortingBy !== "name-asc"
                      ? "w-4 cursor-pointer"
                      : "w-4 text-purple-mimosa cursor-pointer"
                  }
                  onClick={() => {
                    if (sortingBy === "name-asc") {
                      setSortBy("name-desc");
                      sortCoinsByName("desc");
                    } else {
                      setSortBy("name-asc");
                      sortCoinsByName("asc");
                    }
                  }}
                />
              </span>
            </th>
            <th className="p-4">
              <span className="flex mx-auto max-w-max gap-1">
                <span>Price</span>
                <IconArrowsDownUp
                  className={
                    sortingBy !== "price-desc" && sortingBy !== "price-asc"
                      ? "w-4 cursor-pointer"
                      : " w-4 text-purple-mimosa cursor-pointer"
                  }
                  onClick={() => {
                    if (sortingBy === "price-asc") {
                      setSortBy("price-desc");
                      sortCoinsByPrice("desc");
                    } else {
                      setSortBy("price-asc");
                      sortCoinsByPrice("asc");
                    }
                  }}
                />
              </span>
            </th>
            <th className="p-4">
              <span className="flex mx-auto max-w-max gap-1">
                <span>1h</span>
                <IconArrowsDownUp
                  className={
                    sortingBy !== "1h-desc" && sortingBy !== "1h-asc"
                      ? "w-4 cursor-pointer"
                      : " w-4  text-purple-mimosa cursor-pointer"
                  }
                  onClick={() => {
                    if (sortingBy === "1h-asc") {
                      setSortBy("1h-desc");
                      sortCoinsBy1hChange("desc");
                    } else {
                      setSortBy("1h-asc");
                      sortCoinsBy1hChange("asc");
                    }
                  }}
                />
              </span>
            </th>
            <th className="p-4 hidden lg:table-cell">
              <span className="flex mx-auto max-w-max gap-1">
                <span>24h</span>
                <IconArrowsDownUp
                  className={
                    sortingBy !== "24h-desc" && sortingBy !== "24h-asc"
                      ? "w-4  cursor-pointer"
                      : "w-4 text-purple-mimosa cursor-pointer"
                  }
                  onClick={() => {
                    if (sortingBy === "24h-asc") {
                      setSortBy("24h-desc");
                      sortCoinsBy24hChange("desc");
                    } else {
                      setSortBy("24h-asc");
                      sortCoinsBy24hChange("asc");
                    }
                  }}
                />
              </span>
            </th>
            <th className="p-4 hidden lg:table-cell">
              <span className="flex mx-auto max-w-max gap-1">
                <span>7d</span>
                <IconArrowsDownUp
                  className={
                    sortingBy !== "7d-desc" && sortingBy !== "7d-asc"
                      ? "w-4  cursor-pointer "
                      : "w-4  text-purple-mimosa cursor-pointer"
                  }
                  onClick={() => {
                    if (sortingBy === "7d-asc") {
                      setSortBy("7d-desc");
                      sortCoinsBy7dChange("desc");
                    } else {
                      setSortBy("7d-asc");
                      sortCoinsBy7dChange("asc");
                    }
                  }}
                />
              </span>
            </th>
            <th className="p-4">
              <span className="flex mx-auto max-w-max gap-1">
                <span>Market Cap.</span>
                <IconArrowsDownUp
                  className={
                    sortingBy !== "marketCap-desc" &&
                    sortingBy !== "marketCap-asc"
                      ? "w-4  cursor-pointer"
                      : "w-4  text-purple-mimosa cursor-pointer"
                  }
                  onClick={() => {
                    if (sortingBy === "marketCap-asc") {
                      setSortBy("marketCap-desc");
                      sortCoinsByMarketCap("desc");
                    } else {
                      setSortBy("marketCap-asc");
                      sortCoinsByMarketCap("asc");
                    }
                  }}
                />
              </span>
            </th>
            <th className="p-4">Watched</th>
          </tr>
        </thead>
        <tbody className=" font-darker-grotesque font-semibold">
          {coins.map((coin) => {
            return coin.name
              .toUpperCase()
              .startsWith(searchTerm.toUpperCase()) ? (
              <tr
                key={coin.id}
                className="border-b border-black last:border-transparent cursor-pointer hover:bg-floral-white"
                onClick={() => navigator(`/coins/${coin.id}`)}
              >
                <td className="flex items-bottom space-x-2 p-6 justify-start items-center">
                  <img src={coin.image} className="h-8 w-8 aspect-square" />
                  <h2 className=" text-lg lg:text-2xl font-bold truncate">
                    {coin.name}
                  </h2>
                  <p className="text-md font-normal text-shuttle-gray/75 font-fira -mb-1 lg:-mb-2">
                    {coin.symbol.toUpperCase()}
                  </p>
                </td>
                <td>
                  <p className="text-lg max-w-min lg:px-8">
                    $
                    {coin.current_price.toLocaleString(undefined, {
                      minimumFractionDigits:
                        coin.current_price <= 0.005 ? 8 : 0,
                    })}
                  </p>
                </td>
                <td>
                  <PercentTag
                    coinPriceChange={
                      coin.price_change_percentage_1h_in_currency
                    }
                  />
                </td>
                <td className="hidden lg:table-cell">
                  <PercentTag
                    coinPriceChange={
                      coin.price_change_percentage_24h_in_currency
                    }
                  />
                </td>
                <td className="hidden lg:table-cell">
                  <PercentTag
                    coinPriceChange={
                      coin.price_change_percentage_7d_in_currency
                    }
                  />
                </td>
                <td>
                  <p className="text-lg px-8">
                    ${coin.market_cap.toLocaleString()}
                  </p>
                </td>
                <td>
                  <IconEye className="max-w-max mx-auto cursor-pointer" />
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <span className="hidden md:block">
      <Loader />
    </span>
  );
};
export default CoinTable;
