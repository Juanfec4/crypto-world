import { FC, ReactNode } from "react";

interface PrimaryButtonProps {
  btnText: string;
  btnIcon?: ReactNode;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ btnText, btnIcon }) => {
  return (
    <button className=" bg-purple-mimosa px-8 py-4 border-2 rounded-sm hover:bg-purple-mimosa/75 transition duration-200 flex items-center justify-center space-x-2">
      {btnIcon}
      <span className=" font-fira text-sm md:text-base font-bold">
        {btnText}
      </span>
    </button>
  );
};

export default PrimaryButton;
