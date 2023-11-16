import { FC } from "react";
import ListCard from "../../cards/listCard";
import { CoinData } from "../../../types/global";
import Loader from "../../ui-elements/loader";

interface CoinListProps {
  coins?: CoinData[];
}

const CoinList: FC<CoinListProps> = ({ coins }) => {
  return coins ? (
    <ul className="m-6 border-2 border-black group rounded-md overflow-hidden md:hidden">
      {coins.map((coin) => {
        return <ListCard key={coin.id} coin={coin} />;
      })}
    </ul>
  ) : (
    <span className="md:hidden">
      <Loader />
    </span>
  );
};
export default CoinList;
