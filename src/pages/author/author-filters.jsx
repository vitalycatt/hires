import { Sorting } from "../../components/filters/sorting";
import { useState } from "react";
import { FiltersList } from "../../components/filters/filters-list";
import { CONTENT_TYPE } from "../../constants";
import { SearchFilters } from "./search-filters";
import { pages, tags, videoData } from "../../data";
import {
  Button,
  Pagination,
  SidebarDialog,
  FiltersSidebar,
  AudioContentList,
} from "../../components";
import { VideoContent } from "./video-content";

const sortedByOptions = ["новизне", "качеству", "рейтингу"];
const itemsAmountOptions = [48, 64, 96, 120];

export const AuthorFilters = ({ contentType }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onDeleteFilterItem = () => console.log("Filter item delete");

  return (
    <div className="mt-6 flex flex-col items-start">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <Button
              title="Фильтры"
              className="group h-[48px] px-6 bg-[#1F2D5C] rounded-lg text-white sm:hidden"
              onClick={() => setSidebarOpen((open) => !open)}
            >
              <div className="ml-1 w-[21px] h-[21px] flex items-center justify-center bg-white rounded-full text-black text-[12px] leading-4 transition-all duration-300 font-medium group-hover:bg-[#1F2D5C] group-hover:text-white">
                {tags.length}
              </div>
            </Button>
          </div>

          <SearchFilters />
        </div>

        <Sorting
          className="ml-auto"
          sortedByOptions={sortedByOptions}
          itemsAmountOptions={itemsAmountOptions}
        />
      </div>

      <div className="mt-5 flex justify-between">
        <FiltersList
          filterItems={tags}
          onDeleteFilterItem={onDeleteFilterItem}
        />

        <SidebarDialog />
      </div>

      <div className="flex gap-[9px] mt-6">
        {sidebarOpen && <FiltersSidebar />}

        {CONTENT_TYPE.VIDEO === contentType && <VideoContent />}

        {CONTENT_TYPE.AUDIO === contentType && (
          <AudioContentList sidebarOpen={sidebarOpen} data={videoData} />
        )}
      </div>

      <Pagination pages={pages} />
    </div>
  );
};
