import { FC } from "react";
import PercentTag from "../../data-display/percentTag";

interface CoinCardProps {
  coinImg: string;
  coinName: string;
  coinPriceChange: number;
  coinPrice: number;
}

const CoinCard: FC<CoinCardProps> = ({
  coinImg,
  coinName,
  coinPriceChange,
  coinPrice,
}) => {
  return (
    <div className="flex flex-col space-y-2 p-6 w-48 h-64 border rounded-md items-center md:hover:scale-105 cursor-pointer bg-floral-white  flex-shrink-0 border-black">
      <img src={coinImg} alt={coinName} className="w-16 h-16 m-2" />
      <span className="flex flex-col space-y-2 items-center">
        <h4 className=" font-darker-grotesque font-bold text-center text-xl md:text-2xl">
          {coinName}
        </h4>
        <PercentTag coinPriceChange={coinPriceChange} />
      </span>
      <h4 className="font-darker-grotesque text-xl text-medium-purple font-semibold text-center">
        ${coinPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </h4>
    </div>
  );
};
export default CoinCard;
