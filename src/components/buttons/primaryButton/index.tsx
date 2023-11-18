import { FC, ReactNode } from "react";

interface PrimaryButtonProps {
  btnText: string;
  btnIcon?: ReactNode;
  onClick?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  btnText,
  btnIcon,
  onClick,
}) => {
  return (
    <button
      className=" bg-purple-mimosa px-8 py-4 border-[1px] rounded-sm hover:bg-purple-mimosa/75 transition duration-200 flex items-center justify-center space-x-2 border-black"
      onClick={onClick}
    >
      {btnIcon}
      <span className=" font-fira text-sm md:text-base font-bold">
        {btnText}
      </span>
    </button>
  );
};

export default PrimaryButton;
