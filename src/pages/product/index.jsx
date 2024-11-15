import classnames from "classnames";
import { Tags } from "./tags";
import { Content } from "./content";
import { useState } from "react";
import { VideoPlayer } from "../../components";
import { ProductSelling } from "./product-selling";
import { ProductDescription } from "./product-description";
import { descriptionDetails, reelData, tags, videoData } from "../../data";

import PlayerVideo from "../../assets/horizontal-video.mp4";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import ChevronLeftIcon from "../../assets/icons/chevron-left.svg";

export const CONTENT_TYPE = {
  REEL: "reel",
  VIDEO: "video",
  AUDIO: "audio",
};

export const Product = () => {
  const [openDescription, setOpenDescription] = useState(false);

  if (!videoData) return null;

  return (
    <div className="px-10 flex flex-col gap-[9px] mt-[42px] sm:px-5">
      <div className="flex items-center cursor-pointer">
        <img src={ChevronLeftIcon} alt="chevron-left" className="size-5" />

        <div className="ml-1.5 font-semibold text-[#1F2D5C]">
          Вернуться к поиску
        </div>
      </div>

      <div className="mt-6 flex gap-12 sm:mt-0">
        <div className="flex-1 flex flex-col sm:hidden">
          <VideoPlayer url={PlayerVideo} />

          <div className="mt-12 flex justify-between">
            <div
              className="h-[32px] flex items-center cursor-pointer"
              onClick={() => setOpenDescription((open) => !open)}
            >
              <div className="mr-3 font-medium text-sm text-[#1C2024]">
                Описание и данные
              </div>

              <img
                src={ChevronDownIcon}
                alt="chevron-down"
                className={classnames("size-4", {
                  "rotate-180": openDescription,
                  "rotate-0": !openDescription,
                })}
              />
            </div>

            {!openDescription && <Tags tags={tags} />}
          </div>
        </div>

        <ProductSelling />
      </div>

      <hr className="w-full mt-6 border-solid border border-[#F0F0F3] sm:hidden" />

      <Tags tags={tags} className="hidden mt-8 sm:flex" />

      <ProductDescription
        tags={tags}
        openDescription={openDescription}
        setOpenDescription={setOpenDescription}
        descriptionDetails={descriptionDetails}
      />

      <Content
        videoData={videoData}
        reelData={reelData}
        audioData={videoData}
        contentType={CONTENT_TYPE.REEL}
      />
    </div>
  );
};
