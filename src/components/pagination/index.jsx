import classnames from "classnames";
import { SortedSelect } from "../filters/sorted-select";

import ChevronLeftIcon from "../../assets/icons/chevron-left.svg";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

const BUTTON_COLOR = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const itemsAmountOptions = [48, 64, 96, 120];

export const Pagination = ({ pages }) => {
  return (
    <div className="relative mt-10 mb-16 w-full h-12 flex justify-center items-center sm:my-12">
      <button
        onClick={() => console.log("Page -1")}
        className="mr-4 cursor-pointer"
      >
        <img src={ChevronLeftIcon} alt="chevron-icon" />
      </button>

      <div className="flex justify-center items-center gap-3">
        {pages.map((page) => (
          <PaginationButton
            key={page}
            color={BUTTON_COLOR.PRIMARY}
            value={page}
          />
        ))}
      </div>

      <button
        onClick={() => console.log("Page +1")}
        className="ml-4 cursor-pointer"
      >
        <img src={ChevronRightIcon} alt="chevron-icon" />
      </button>

      <div className="absolute right-0 -top-[50%] flex items-center font-medium text-sm sm:hidden">
        <p>Количество на странице:</p>

        <SortedSelect options={itemsAmountOptions} />
      </div>
    </div>
  );
};

const PaginationButton = ({ color, value }) => {
  return (
    <button
      onClick={() => console.log("Go to page")}
      className={classnames(
        "h-12 min-w-12 px-[11px] rounded-lg font-medium text-base",
        {
          "bg-[#1F2D5C] text-white": color === BUTTON_COLOR.PRIMARY,
          "border-solid border-[#B9BBC6] border-[1px] text-[#1F2D5C]":
            color === BUTTON_COLOR.SECONDARY,
        }
      )}
    >
      {value}
    </button>
  );
};
