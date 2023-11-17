import { FC } from "react";
import ListCard from "../../cards/listCard";
import { CoinData } from "../../../types/global";
import Loader from "../../ui-elements/loader";

interface CoinListProps {
  coins?: CoinData[];
  searchTerm: string;
}

const CoinList: FC<CoinListProps> = ({ coins, searchTerm }) => {
  return coins ? (
    <ul className="m-6 border-2 border-black group rounded-md overflow-hidden max-w-4xl mx-auto">
      {coins.map((coin) => {
        return coin.name.toUpperCase().startsWith(searchTerm.toUpperCase()) ? (
          <ListCard key={coin.id} coin={coin} />
        ) : null;
      })}
    </ul>
  ) : (
    <Loader />
  );
};
export default CoinList;
