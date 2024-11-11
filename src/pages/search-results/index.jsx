import { Header } from "./header";
import { Filters } from "../../components/filters";
import { useState } from "react";
import { Pagination } from "../../components/pagination";
import { FiltersSidebar } from "../../components/filters-sidebar";
import { VideoContentList } from "../../components/video-content-list";
// import { AudioContentList } from "../../components/audio-content-list";
// import { NoneFound } from "./none-found";

import ReelImage1 from "../../assets/images/video-content/Reel-1.png";
import ReelImage2 from "../../assets/images/video-content/Reel-2.png";
import ReelImage3 from "../../assets/images/video-content/Reel-3.png";
import ReelImage4 from "../../assets/images/video-content/Reel-4.png";
import ReelImage5 from "../../assets/images/video-content/Reel-5.png";
import ReelImage6 from "../../assets/images/video-content/Reel-6.png";

const videoData = [
  {
    title: "The Wave bla bla",
    url: `${ReelImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage6}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${ReelImage1}`,
    duration: "1:20",
  },
];
const pages = [1, 2, 3, 1293];

export const SearchResults = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!videoData) return null;

  return (
    <>
      <Header />

      <div className="px-10 flex flex-col">
        <Filters setSidebarOpen={setSidebarOpen} />

        <div className="flex gap-[9px] mt-6">
          {sidebarOpen && <FiltersSidebar />}

          {/* <AudioContentList sidebarOpen={sidebarOpen} data={videoData} /> */}
          <VideoContentList data={videoData} />
        </div>

        <Pagination pages={pages} />
      </div>

      {/* CAN BE LIKE A CHILDREN OF video-content PATH */}
      {/* <NoneFound /> */}
    </>
  );
};
