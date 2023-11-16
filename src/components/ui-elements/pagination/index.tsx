import { FC } from "react";
import { IconChevronLeft } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";

interface PaginationProps {
  current: number;
  max: number;
  next: () => void;
  prev: () => void;
}

const Pagination: FC<PaginationProps> = ({ current, max, next, prev }) => {
  return (
    <div className="flex items-center gap-2 max-w-max font-fira">
      <button
        className="border-2 border-black py-4  rounded-md flex w-12 md:w-24 items-center justify-center hover:bg-cream-burlee/25 transition duration-200"
        onClick={prev}
      >
        <IconChevronLeft />
        <span className="hidden md:block">Prev</span>
      </button>
      <p className="text-sm">
        Page {current} of {max}
      </p>
      <button
        className="border-2 border-black py-4 rounded-md flex w-12 md:w-24 items-center justify-center hover:bg-cream-burlee/25 transition duration-200"
        onClick={next}
      >
        <span className="hidden md:block">Next</span>
        <IconChevronRight />
      </button>
    </div>
  );
};
export default Pagination;
