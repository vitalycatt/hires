import classnames from "classnames";
import { Button } from "../../components";
import { useState } from "react";
import { ACTIVE_TAB } from "../../constants";

import ClocksIcon from "../../assets/icons/clocks.svg";
import CameraIcon from "../../assets/icons/camera-green.svg";

export const SubscriptionSection = () => {
  const [activeTab, setActiveTab] = useState(ACTIVE_TAB.OTHER_WORKS);

  return (
    <div className="w-[543px] flex flex-col">
      <h1 className="mt-[15px] font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
        Мои подписки
      </h1>

      <div className="mt-8 flex flex-col sm:mt-8 sm:mb-0">
        <div className="flex justify-between">
          <div className="max-w-[880px] flex flex-1 items-center sm:w-full">
            <div
              className={classnames(
                "w-full h-10 flex justify-center items-center border-solid border-b-[2px] text-[#000714]/60 border-[#00002F]/20 font-medium text-base leading-6 cursor-pointer sm:h-10 sm:w-full sm:text-base",
                {
                  "border-[#1F2D5C] text-[#1C2024]":
                    activeTab === ACTIVE_TAB.OTHER_WORKS,
                }
              )}
              onClick={() => setActiveTab(ACTIVE_TAB.OTHER_WORKS)}
            >
              Активные подписки
            </div>

            <div
              className={classnames(
                "w-full h-10 flex justify-center items-center border-solid border-b-[2px] text-[#000714]/60 border-[#00002F]/20 font-medium text-base leading-6 cursor-pointer sm:h-10 sm:w-full sm:text-base",
                {
                  "border-[#1F2D5C] text-[#1C2024]":
                    activeTab === ACTIVE_TAB.VISUALLY_SIMILAR,
                }
              )}
              onClick={() => setActiveTab(ACTIVE_TAB.VISUALLY_SIMILAR)}
            >
              Архивные подписки
            </div>
          </div>
        </div>

        {activeTab === ACTIVE_TAB.VISUALLY_SIMILAR ? (
          <div className="mt-8 p-6 flex flex-col border border-solid border-[#F0F0F3] bg-white rounded-2xl">
            <div className="flex justify-center items-center size-12 bg-[#E2F0BD] rounded-lg opacity-60">
              <img src={CameraIcon} alt="camera-icon" />
            </div>

            <h2 className="mt-8 font-bold text-[#1C2024] text-2xl leading-[30px] -tracking-[0.1px] opacity-60">
              Видео (ежемесячная)
            </h2>

            <div className="mt-2 text-lg leading-[26px] text-[#000000]/60 opacity-60">
              Осталось скачиваний:
            </div>

            <div className="flex items-center text-base leading-6 text-[#000714]/60 opacity-60">
              <div className="mr-1.5 font-medium underline">0</div> из 1000
            </div>

            <hr className="w-full mt-4 border border-solid border-[#F0F0F3] opacity-60" />

            <div className="mt-4 flex items-end opacity-60">
              <div className="font-bold text-[35px] text-[#1C2024] leading-10">
                15 000 ₽
              </div>

              <div className="text-[#000000]/60 text-base leading-[26px]">
                / месяц
              </div>
            </div>

            <Button
              title="Возобновить подписку"
              className="mt-4 w-full h-[48px] px-6 bg-[#1F2D5C] rounded-lg text-[#FFF] font-medium sm:hidden"
            />
          </div>
        ) : (
          <div className="mt-8 p-6 flex flex-col border border-solid border-[#F0F0F3] bg-white rounded-2xl">
            <div className="flex justify-center items-center size-12 bg-[#E2F0BD] rounded-lg">
              <img src={CameraIcon} alt="camera-icon" />
            </div>

            <h2 className="mt-8 font-bold text-[#1C2024] text-2xl leading-[30px] -tracking-[0.1px]">
              Видео (ежемесячная)
            </h2>

            <div className="mt-2 text-lg leading-[26px] text-[#000000]/60">
              Осталось скачиваний:
            </div>

            <div className="flex items-center text-base leading-6 text-[#000714]/60">
              <div className="mr-1.5 font-medium underline">200</div> из 1000
            </div>

            <hr className="w-full mt-4 border border-solid border-[#F0F0F3]" />

            <div className="mt-4 flex items-end">
              <div className="font-bold text-[35px] text-[#1C2024] leading-10">
                15 000 ₽
              </div>

              <div className="text-[#000000]/60 text-base leading-[26px]">
                / месяц
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1">
              <img src={ClocksIcon} alt="clocks-icon" />

              <div className="text-sm text-[#1C2024] leading-5">
                Следующее списание: 25.04.2025
              </div>
            </div>

            <div className="font-medium text-sm text-[#3E63DD] leading-5 underline">
              Отключить автосписание
            </div>

            <div className="mt-4 w-full flex justify-between gap-4">
              <Button
                title="Отменить подписку"
                className="w-full h-[48px] px-6 bg-[#EDF2FE] rounded-lg text-[#1F2D5C] border-none font-medium sm:hidden"
              />

              <Button
                title="Продлить подписку"
                className="w-full h-[48px] px-6 bg-[#1F2D5C] rounded-lg text-[#FFF] font-medium sm:hidden"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
