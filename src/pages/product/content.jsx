import classnames from "classnames";
import { useState } from "react";
import { CONTENT_TYPE } from ".";
import {
  ReelContentList,
  VideoContentList,
  AudioContentList,
} from "../../components";

const ACTIVE_TAB = {
  VISUALLY_SIMILAR: "visually similar",
  OTHER_WORKS: "other works",
};

export const Content = ({ audioData, reelData, videoData, contentType }) => {
  const [activeTab, setActiveTab] = useState(ACTIVE_TAB.OTHER_WORKS);

  const windowWidth = window.innerWidth;

  return (
    <div className="mt-12 mb-16 flex flex-col sm:mt-8 sm:mb-0">
      <div className="flex justify-between">
        <div className="max-w-[880px] flex flex-1 items-center sm:w-full">
          <div
            className={classnames(
              "w-max-[440px] h-[72px] flex-1 flex justify-center items-center border-solid border-b-[2px] border-[#00002F]/20 font-medium text-xl text-[#000714]/60 cursor-pointer sm:h-10 sm:w-full sm:text-base",
              {
                "!text-[#1C2024] !border-[#1F2D5C]":
                  activeTab === ACTIVE_TAB.OTHER_WORKS,
              }
            )}
            onClick={() => setActiveTab(ACTIVE_TAB.OTHER_WORKS)}
          >
            {windowWidth > 639 ? "Другие работы автора" : "Работы автора"}
          </div>

          <div
            className={classnames(
              "w-max-[440px] h-[72px] flex-1 flex justify-center items-center border-solid border-b-[2px] border-[#00002F]/20 font-medium text-xl text-[#000714]/60 cursor-pointer sm:h-10 sm:w-full sm:text-base",
              {
                "!text-[#1C2024] !border-[#1F2D5C]":
                  activeTab === ACTIVE_TAB.VISUALLY_SIMILAR,
              }
            )}
            onClick={() => setActiveTab(ACTIVE_TAB.VISUALLY_SIMILAR)}
          >
            Визуально похожие
          </div>
        </div>

        <div className="w-[150px] h-12 border-solid border-[#CDCED6] border rounded-lg flex items-center justify-center font-medium cursor-pointer sm:hidden">
          Показать все
        </div>
      </div>

      {contentType === CONTENT_TYPE.AUDIO && (
        <AudioContentList data={audioData} className="mt-10" />
      )}

      {contentType === CONTENT_TYPE.VIDEO && (
        <VideoContentList data={videoData} className="mt-10" />
      )}

      {contentType === CONTENT_TYPE.REEL && (
        <ReelContentList data={reelData} className="mt-10" />
      )}

      <div className="hidden w-[150px] h-12 border-solid border-[#CDCED6] border rounded-lg items-center justify-center font-medium cursor-pointer sm:flex sm:mx-auto sm:mb-8 sm:mt-4">
        Показать все
      </div>
    </div>
  );
};
