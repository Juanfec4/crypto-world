import { FC } from "react";

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
  const isNegativeChange: boolean = coinPriceChange < 0;

  return (
    <div className="flex flex-col space-y-2 p-6 w-48 h-64 border rounded-md items-center md:hover:scale-105 cursor-pointer bg-floral-white  flex-shrink-0">
      <img src={coinImg} alt={coinName} className="w-16 h-16 m-2" />
      <span className="flex flex-col space-y-2 items-center">
        <h4 className=" font-darker-grotesque font-bold text-center text-xl md:text-2xl">
          {coinName}
        </h4>
        {isNegativeChange ? (
          <p className=" bg-sea-pink max-w-min px-2 font-darker-grotesque font-semibold md:font-lg">
            {coinPriceChange.toFixed(2)}%
          </p>
        ) : (
          <p className=" bg-chinook max-w-min px-2 font-darker-grotesque font-semibold md:font-lg">
            +{coinPriceChange.toFixed(2)}%
          </p>
        )}
      </span>
      <h4 className="font-darker-grotesque text-xl text-medium-purple font-semibold text-center">
        ${coinPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </h4>
    </div>
  );
};
export default CoinCard;
