import { AuthorInfo } from "./author-info";
import { CONTENT_TYPE } from "../../constants";
import { AuthorFilters } from "./author-filters";

import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export const Author = () => {
  return (
    <div className="container flex-1 mx-auto px-10 flex flex-col sm:px-5">
      <div className="mt-8 flex items-center gap-4 sm:gap-3 md:hidden">
        <div className="text-[#60646C] text-sm">Видео</div>

        <img
          src={ChevronRightIcon}
          alt="chevron-right"
          className="size-4 sm:size-3"
        />

        <div className="font-medium text-[#202020] text-sm">Константин</div>
      </div>

      <AuthorInfo />

      <AuthorFilters contentType={CONTENT_TYPE.VIDEO} />
    </div>
  );
};
