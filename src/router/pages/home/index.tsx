import { FC } from "react";
import Hero from "../../../components/ui-elements/hero";
import Features from "../../../components/ui-elements/features";
import CallToAction from "../../../components/structure/callToAction";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <CallToAction />
    </>
  );
};
export default HomePage;
