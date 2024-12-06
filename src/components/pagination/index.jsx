import classnames from "classnames";
import { useState } from "react";
import { SortedSelect } from "../filters/sorted-select";

import ChevronLeftIcon from "../../assets/icons/chevron-left.svg";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

const itemsAmountOptions = [48, 64, 96, 120];

export const Pagination = ({ pages, className }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div
      className={classnames(
        "relative mt-10 mb-16 w-full h-12 flex justify-center items-center sm:my-12",
        className
      )}
    >
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
            value={page}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
      </div>

      <button
        onClick={() => console.log("Page +1")}
        className="ml-4 cursor-pointer"
      >
        <img src={ChevronRightIcon} alt="chevron-icon" />
      </button>

      <div className="absolute right-0 top-[50%] -translate-y-1/2 flex items-center font-medium text-sm sm:hidden">
        <p>Количество на странице:</p>

        <SortedSelect options={itemsAmountOptions} />
      </div>
    </div>
  );
};

const PaginationButton = ({ value, currentPage, setCurrentPage }) => (
  <button
    onClick={() => setCurrentPage(value)}
    className={classnames(
      "h-12 min-w-12 px-[11px] rounded-lg font-medium text-base transition-all duration-300 hover:bg-opacity-70 active:bg-white active:text-[#1F2D5C]",
      {
        "bg-[#1F2D5C] text-white": currentPage === value,
        "border-solid border-[#B9BBC6] border-[1px] text-[#1F2D5C]":
          currentPage !== value,
      }
    )}
  >
    {value}
  </button>
);
