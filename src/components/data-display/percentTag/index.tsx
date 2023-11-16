import { FC } from "react";

interface PercentTagProps {
  coinPriceChange: number | undefined;
}
const PercentTag: FC<PercentTagProps> = ({ coinPriceChange }) => {
  return coinPriceChange ? (
    coinPriceChange < 0 ? (
      <p className=" bg-sea-pink max-w-min px-2 font-darker-grotesque font-semibold md:font-lg">
        {coinPriceChange?.toFixed(2)}%
      </p>
    ) : (
      <p className=" bg-chinook max-w-min px-2 font-darker-grotesque font-semibold md:font-lg">
        +{coinPriceChange?.toFixed(2)}%
      </p>
    )
  ) : null;
};

export default PercentTag;
