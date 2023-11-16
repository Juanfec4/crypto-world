import { FC, useEffect, useState } from "react";
import { fetchTrendingCoins } from "../../../utils/api";
import CoinCard from "../../cards/coinCard";
import { CoinData } from "../../../types/global";

const FeaturedGallery: FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<null | CoinData[]>(null);
  useEffect(() => {
    fetchTrendingCoins({
      price_change_percentage: "24h",
      vs_currency: "usd",
      ids: "bitcoin,ethereum,cosmos,tether,matic-network,uniswap,solana",
      locale: "en",
    })
      .then((response) => {
        setTrendingCoins(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" overflow-hidden  max-w-md md:max-w-xl lg:max-w-3xl mx-auto relative">
      <div className="max-w-full inline-flex flex-nowrap my-6 gap-2">
        <div className=" flex gap-2 animate-infinite-scroll items-center max-w-max md:items-start">
          {trendingCoins
            ? trendingCoins.map((coin: CoinData) => {
                return (
                  <CoinCard
                    key={coin.id}
                    coinName={coin.name}
                    coinPrice={coin.current_price}
                    coinPriceChange={coin.price_change_percentage_24h}
                    coinImg={coin.image}
                  />
                );
              })
            : null}
        </div>
        <div className=" flex gap-2 animate-infinite-scroll items-center max-w-max md:items-start">
          {trendingCoins
            ? trendingCoins.map((coin: CoinData) => {
                return (
                  <CoinCard
                    key={coin.id}
                    coinName={coin.name}
                    coinPrice={coin.current_price}
                    coinPriceChange={coin.price_change_percentage_24h}
                    coinImg={coin.image}
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-fantasy to-transparent"></div>
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-fantasy to-transparent"></div>
    </div>
  );
};

export default FeaturedGallery;
