import { FC, ReactNode } from "react";

interface FeatureCardProps {
  cardTitle: string;
  cardDescription: string;
  cardIcon: ReactNode;
}
const FeatureCard: FC<FeatureCardProps> = ({
  cardTitle,
  cardDescription,
  cardIcon,
}) => {
  return (
    <div className="w-96 h-64 md:h-96 lg:h-80 border-2 p-4 rounded-sm relative bg-floral-white border-black">
      <span className="text-2xl lg:text-2xl font-darker-grotesque font-semibold text-center border-dashed border-b-2 pb-2 border-b-shuttle-gray flex flex-col items-center group group-hover">
        {cardIcon}
        <h3>{cardTitle}</h3>
      </span>
      <p className="font-fira text-center font-light mt-2 text-md">
        {cardDescription}
      </p>
      <div className="absolute bg-purple-mimosa top-0 left-0 -right-2 -bottom-2 -z-10 rounded-sm "></div>
    </div>
  );
};
export default FeatureCard;
