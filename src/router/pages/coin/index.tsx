import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoin } from "../../../utils/api";
import FactCard from "../../../components/cards/factCard";
import { CoinInformation } from "../../../types/global";
import Loader from "../../../components/ui-elements/loader";
import CoinTitle from "../../../components/data-display/coinTitle";
import { AdvancedRealTimeChart, Timezone } from "react-ts-tradingview-widgets";

const CoinPage: FC = () => {
  const [coin, setCoin] = useState<CoinInformation | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchCoin(id)
        .then((response) => {
          setCoin(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);
  return (
    <div>
      {coin ? (
        <main className="flex flex-col">
          <CoinTitle coin={coin} />
          <div className=" flex max-w-7xl sm:mx-auto h-[500px]  w-screen md:h-[650px]">
            <div className="w-screen px-6" style={{ height: "900px" }}>
              <AdvancedRealTimeChart
                symbol={`${coin.symbol}usd`}
                theme="light"
                height={"100%"}
                width={"100%"}
                timezone={
                  Intl.DateTimeFormat().resolvedOptions().timeZone as Timezone
                }
                copyrightStyles={{ parent: { display: "none" } }}
              />
            </div>
          </div>
          <FactCard coin={coin} />
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CoinPage;
