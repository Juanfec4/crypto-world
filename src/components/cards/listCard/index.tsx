import { IconStar } from "@tabler/icons-react";
import { FC } from "react";
import { CoinData } from "../../../types/global";

interface ListCardProps {
  coin: CoinData;
}

const ListCard: FC<ListCardProps> = ({ coin }) => {
  const isNegativeChange: boolean = coin.price_change_percentage_24h > 0;
  return (
    <li className=" bg-floral-white h-36 border-b-[1px] border-shuttle-gray flex items-center relative">
      <IconStar className="h-6 w-6 my-auto absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer" />
      <div className="w-full p-4 flex gap-4 items-center">
        <img src={coin.image} className="h-12 w-12 mx-4 hidden sm:block" />
        <div className="flex flex-col my-auto">
          <span className="flex gap-2 items-center">
            <h4 className=" font-darker-grotesque font-light text-3xl">
              {coin.symbol.toUpperCase()}
            </h4>
            {isNegativeChange ? (
              <p className="font-darker-grotesque bg-chinook text-lg font-semibold px-2">
                +{coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className="font-darker-grotesque bg-sea-pink text-lg font-semibold px-2">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
          </span>
          <h5 className="font-darker-grotesque text-3xl font-bold">
            $30,170.22
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
