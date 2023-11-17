import { FC } from "react";
import { CoinInformation } from "../../../types/global";

interface CoinTitleProps {
  coin: CoinInformation;
}

const CoinTitle: FC<CoinTitleProps> = ({ coin }) => {
  return (
    <div className="flex items-end gap-2 p-8 mx-auto">
      <img src={coin.image.small} alt={coin.symbol} />
      <span className="flex">
        <h2 className="text-3xl md:text-5xl">{coin.name}</h2>
        <h3 className="text-xl text-shuttle-gray/75">
          ({coin.symbol.toUpperCase()})
        </h3>
      </span>
    </div>
  );
};

export default CoinTitle;
