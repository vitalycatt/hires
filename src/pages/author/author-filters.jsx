import { Sorting } from "../../components/filters/sorting";
import { useState } from "react";
import { FiltersList } from "../../components/filters/filters-list";
import { CONTENT_TYPE } from "../../constants";
import { SearchFilters } from "./search-filters";
import { AuthorVideoContent } from "./author-video-content";
import { pages, tags, videoData } from "../../data";
import {
  Button,
  Pagination,
  SidebarDialog,
  FiltersSidebar,
  AudioContentList,
  VideoContentList,
} from "../../components";

const sortedByOptions = ["новизне", "качеству", "рейтингу"];
const itemsAmountOptions = [48, 64, 96, 120];

export const AuthorFilters = ({ contentType }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onDeleteFilterItem = () => console.log("Filter item delete");

  return (
    <div className="mt-6 flex flex-col items-start">
      <div className="flex items-center justify-between w-full lg:hidden">
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

      <div className="w-full mt-5 flex justify-between lg:flex-col lg:mt-0">
        <div className="hidden mb-[10px] items-center gap-1 text-[#80838D] text-sm leading-5 lg:flex lg:visible">
          938479 материала
        </div>

        <div className="flex justify-between">
          <FiltersList
            filterItems={tags}
            onDeleteFilterItem={onDeleteFilterItem}
          />

          <SidebarDialog className="lg:flex" />
        </div>
      </div>

      <VideoContentList
        data={videoData}
        className="hidden mt-10 md:visible md:grid md:grid-cols-1"
      />

      <div className="flex gap-[9px] mt-6 md:hidden">
        {sidebarOpen && <FiltersSidebar />}

        {CONTENT_TYPE.VIDEO === contentType && <AuthorVideoContent />}

        {CONTENT_TYPE.AUDIO === contentType && (
          <AudioContentList sidebarOpen={sidebarOpen} data={videoData} />
        )}
      </div>

      <Pagination pages={pages} />
    </div>
  );
};
