import { FC } from "react";
import PrimaryButton from "../../../components/buttons/primaryButton";
import { IconChevronRight } from "@tabler/icons-react";
import FeaturedGallery from "../../../components/structure/featuredGallery";

const Hero: FC = () => {
  return (
    <section className="md:flex mt-40 mx-auto max-w-max">
      <div className="max-w-md md:max-w-sm lg:max-w-lg flex flex-col md:space-y-2 items-start mx-auto md:mx-0 shrink-0">
        <span>
          <p className="bg-chinook pr-8 font-darker-grotesque text-lg max-w-max italic">
            Real time crypto tracking
          </p>
        </span>
        <h1 className=" font-darker-grotesque text-4xl md:text-5xl font-bold mb-4">
          Crypto World
        </h1>
        <p className=" font-fira font-light pb-2">
          Whether you're a seasoned investor or just stepping into the crypto
          arena, our platform empowers you with real-time insights,
          comprehensive data, and powerful tools to optimize your investment
          strategy.
        </p>
        <PrimaryButton btnText={"Get started"} btnIcon={<IconChevronRight />} />
      </div>
      <div>
        <FeaturedGallery />
      </div>
    </section>
  );
};

export default Hero;
