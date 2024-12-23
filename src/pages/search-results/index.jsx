import { useState } from "react";
import { pages, reelData, videoData } from "../../data";
import {
  Filters,
  Pagination,
  FiltersSidebar,
  // VideoContentList,
  ReelContentList,
  // AudioContentList,
} from "../../components";

export const SearchResults = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!videoData) return null;

  return (
    <div className="container mx-auto px-10 flex flex-col text-[#1c2024]">
      <Filters setSidebarOpen={setSidebarOpen} />

      <div className="flex gap-[9px] mt-6">
        {sidebarOpen && <FiltersSidebar />}

        {/* <VideoContentList data={videoData} /> */}
        <ReelContentList data={reelData} />
        {/* <AudioContentList sidebarOpen={sidebarOpen} data={videoData} /> */}
      </div>

      <Pagination pages={pages} />
    </div>
  );
};
