import { IconEye } from "@tabler/icons-react";
import { FC } from "react";
import { CoinData } from "../../../types/global";
import PercentTag from "../../data-display/percentTag";
import { useNavigate } from "react-router-dom";
import { isOnWatchList } from "../../../utils/helpers";

interface ListCardProps {
  coin: CoinData;
}

const ListCard: FC<ListCardProps> = ({ coin }) => {
  const navigator = useNavigate();

  const handleNavigate = () => {
    navigator(`/coins/${coin.id}`);
  };

  const isWatchlisted = isOnWatchList(coin.id);

  return (
    <li
      className=" bg-white h-36 border-b-[1px] border-shuttle-gray flex items-center relative last:border-transparent cursor-pointer hover:bg-floral-white transition duration-200"
      onClick={handleNavigate}
    >
      {isWatchlisted ? (
        <IconEye className="h-6 w-6 my-auto absolute top-1/2 right-4 -translate-y-1/2" />
      ) : null}
      <div className="w-full p-4 flex gap-4 items-center">
        <img src={coin.image} className="h-12 w-12 mx-4 hidden sm:block" />
        <div className="flex flex-col my-auto">
          <span className="flex gap-2 items-center">
            <h4 className=" font-darker-grotesque font-light text-3xl">
              {coin.symbol.toUpperCase()}
            </h4>
            <PercentTag
              coinPriceChange={coin.price_change_percentage_24h_in_currency}
            />
          </span>
          <h5 className="font-darker-grotesque text-3xl font-bold">
            $
            {coin.current_price.toLocaleString(undefined, {
              minimumFractionDigits: coin.current_price <= 0.005 ? 8 : 0,
            })}
          </h5>
          <span className="font-darker-grotesque text-black  mt-2 max-w-max  p-2 text-lg flex gap-1 items-center">
            <h1>Market Cap. ${coin.market_cap.toLocaleString()}</h1>
          </span>
        </div>
      </div>
    </li>
  );
};
export default ListCard;
