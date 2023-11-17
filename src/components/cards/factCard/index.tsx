import { FC } from "react";
import { CoinInformation } from "../../../types/global";
import PercentTag from "../../data-display/percentTag";

import { IconTag } from "@tabler/icons-react";
import { IconAnchor } from "@tabler/icons-react";
import { IconBolt } from "@tabler/icons-react";
import { IconRecycle } from "@tabler/icons-react";

interface FactCardProps {
  coin: CoinInformation;
}

const FactCard: FC<FactCardProps> = ({ coin }) => {
  console.log(coin);
  const sanitizedHtml = { __html: coin.description.en };
  return (
    <div className="p-6 flex flex-col gap-8 mx-auto max-w-7xl">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 flex-wrap md:flex-row ">
          <span className="flex items-center md:items-end gap-2 bg-floral-white p-4 border-[1px] border-black relative rounded-sm justify-center md:justify-start">
            <p className="absolute left-0 -top-6 font-fira font-semi-bold text-black/50">
              Price
            </p>
            <IconTag />
            <h3 className=" text-lg md:text-2xl font-light">
              $
              {coin.market_data.current_price.usd.toLocaleString(undefined, {
                minimumFractionDigits:
                  coin.market_data.current_price.usd <= 0.005 ? 8 : 0,
              })}
            </h3>
            <span className="hidden md:block">
              <PercentTag
                coinPriceChange={
                  coin.market_data.price_change_percentage_24h_in_currency.usd
                }
              />
            </span>
          </span>
          <span className="flex items-center md:items-end gap-2 bg-floral-white p-4 border-[1px] border-black relative rounded-sm justify-center md:justify-start">
            <p className="absolute left-0 -top-6 font-fira font-semi-bold text-black/50">
              Market Cap
            </p>
            <IconAnchor />
            <h3 className=" text-lg md:text-2xl font-light">
              ${coin.market_data.market_cap.usd.toLocaleString()}
            </h3>
            <span className="hidden md:block">
              <PercentTag
                coinPriceChange={
                  coin.market_data.market_cap_change_percentage_24h_in_currency
                    .usd
                }
              />
            </span>
          </span>
          <span className="flex items-center md:items-end gap-2 bg-floral-white p-4 border-[1px] border-black relative rounded-sm justify-center md:justify-start">
            <p className="absolute left-0 -top-6 font-fira font-semi-bold text-black/50">
              Volume (24h)
            </p>
            <IconBolt />
            <h3 className="text-lg md:text-2xl font-light ">
              ${coin.market_data.total_volume.usd.toLocaleString()}
            </h3>
          </span>
          <span className="flex items-center gap-2 bg-floral-white p-4 border-[1px] border-black relative rounded-sm justify-center md:justify-start">
            <p className="absolute left-0 -top-6 font-fira font-semi-bold text-black/50">
              Circulating / Total supply
            </p>
            <IconRecycle />
            <h3 className=" text-m md:text-2xl font-light">
              {coin.market_data.circulating_supply.toLocaleString()}
            </h3>
            <h3 className="text-md md:text-2xl font-light">/</h3>
            <h3 className="text-md md:text-2xl font-light">
              {coin.market_data.total_supply.toLocaleString()}
            </h3>
          </span>
        </div>
      </div>
      <div className="p-8 bg-floral-white border-[1px] border-black max-w-7xl">
        <h2 className="mb-8 text-2xl max-w-max bg-chinook pr-8">Description</h2>
        <span
          dangerouslySetInnerHTML={sanitizedHtml}
          className="[&>a]:bg-lavender-mist [&>a]:underline"
        ></span>
      </div>
    </div>
  );
};

export default FactCard;
