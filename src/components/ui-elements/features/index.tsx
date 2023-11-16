import {
  IconCoinBitcoinFilled,
  IconEyeDollar,
  IconTimeline,
} from "@tabler/icons-react";
import { FC } from "react";
import FeatureCard from "../../cards/featureCard";

const Features: FC = () => {
  return (
    <section className=" mt-24 md:mt-48">
      <h2 className=" ml-6 font-darker-grotesque  text-5xl md:text-[7rem] text-center">
        What we offer
      </h2>
      <div className="flex flex-col md:flex-row items-center max-w-sm md:max-w-min mx-auto space-y-24 md:space-y-0 md:space-x-16 mt-16">
        <FeatureCard
          cardTitle="Track all your coins in one place"
          cardDescription="Experience the simplicity of centralized tracking - take control,
        stay informed, and navigate the world of cryptocurrencies with
        confidence."
          cardIcon={
            <IconCoinBitcoinFilled className="h-12 w-12 text-shuttle-gray" />
          }
        />
        <FeatureCard
          cardTitle="Build your own watchlist"
          cardDescription="With our platform, you have the power to curate a personalized
      watchlist, featuring your favorite cryptocurrencies and tokens."
          cardIcon={<IconEyeDollar className="h-12 w-12 text-shuttle-gray" />}
        />
        <FeatureCard
          cardTitle="Dynamic crypto charts"
          cardDescription="Uncover opportunities, analyze patterns, and chart your course to
      success with the precision of live charts at your fingertips."
          cardIcon={<IconTimeline className="h-12 w-12 text-shuttle-gray" />}
        />
      </div>
    </section>
  );
};
export default Features;
