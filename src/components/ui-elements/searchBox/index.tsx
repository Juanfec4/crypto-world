import { ChangeEvent, FC } from "react";
import { IconSearch } from "@tabler/icons-react";

interface SearchBoxProps {
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ value, setValue }) => {
  return (
    <div className="flex flex-grow  md:max-w-sm lg:mx-0  p-4 bg-transparent border-2 border-black rounded-md items-center justify-start gap-2">
      <IconSearch />
      <input
        type="text"
        className="bg-transparent placeholder:text-black font-fira outline-none"
        placeholder="Search"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
export default SearchBox;
