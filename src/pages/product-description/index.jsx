import classnames from "classnames";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Header } from "./header";
import { Button } from "../search-results/button";
import { Content } from "./content";
import { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";

import UserImage from "../../assets/images/avatar.png";
import PlayerImage from "../../assets/images/player.png";
import HeartBlackIcon from "../../assets/icons/heart-black.svg";
import ShareBlackIcon from "../../assets/icons/share-black.svg";
import UploadBlackIcon from "../../assets/icons/upload-black.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import ChevronLeftIcon from "../../assets/icons/chevron-left.svg";
import QuestionMarkIcon from "../../assets/icons/question-mark.svg";
import BookmarkBlackIcon from "../../assets/icons/bookmark-black.svg";
import ReelImage1 from "../../assets/images/video-content/Reel-1.png";
import ReelImage2 from "../../assets/images/video-content/Reel-2.png";
import ReelImage3 from "../../assets/images/video-content/Reel-3.png";
import ReelImage4 from "../../assets/images/video-content/Reel-4.png";
import ReelImage5 from "../../assets/images/video-content/Reel-5.png";
import ReelImage6 from "../../assets/images/video-content/Reel-6.png";
import VideoImage1 from "../../assets/images/video-content/Video-1.png";
import VideoImage2 from "../../assets/images/video-content/Video-2.png";
import VideoImage3 from "../../assets/images/video-content/Video-3.png";
import VideoImage4 from "../../assets/images/video-content/Video-4.png";
import VideoImage5 from "../../assets/images/video-content/Video-5.png";
import VideoImage6 from "../../assets/images/video-content/Video-6.png";

export const CONTENT_TYPE = {
  VIDEO: "video",
  AUDIO: "audio",
};

const reelData = [
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
const videoData = [
  {
    title: "The Wave bla bla",
    url: `${VideoImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage6}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage6}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage6}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage6}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage6}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage6}`,
    duration: "1:20",
  },

  {
    title: "The Wave bla bla",
    url: `${VideoImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage6}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage6}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage1}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage2}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage3}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage4}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage5}`,
    duration: "1:20",
  },
  {
    title: "The Wave bla bla",
    url: `${VideoImage6}`,
    duration: "1:20",
  },
];
const tags = ["название тега", "покороче", "более длинный текст тега"];
const descriptionDetails = [
  { label: "Продолжительность", value: "00:00:37.333" },
  { label: "Лицензия", value: "Персональная лицензия ?" },
  { label: "Average Bitrate", value: "220 Mbps" },
  { label: "Frame Rate", value: "30.00 fps" },
  { label: "Использование", value: "Коммерческий" },

  { label: "Bit Depth", value: "24" },
  { label: "Место съемки", value: "N/A" },
  { label: "Релиз модели", value: "Нет" },
  { label: "Зацикливание", value: "Нет" },

  { label: "Релиз собственности", value: "Нет" },
  { label: "Маска Alpha Matte", value: "Да" },

  { label: "Альфа-канал", value: "Нет" },
];

export const ProductDescription = () => {
  const [checked, setChecked] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

  if (!videoData) return null;

  return (
    <>
      <Header />

      <div className="px-10 flex flex-col gap-[9px] mt-[42px] sm:px-5">
        <div className="flex items-center cursor-pointer">
          <img src={ChevronLeftIcon} alt="chevron-left" className="size-5" />

          <div className="ml-1.5 font-semibold text-[#1F2D5C]">
            Вернуться к поиску
          </div>
        </div>

        <div className="mt-6 flex gap-12 sm:mt-0">
          <div className="flex-1 flex flex-col sm:hidden">
            <img
              src={PlayerImage}
              alt="player-image"
              className="w-min-[884px]"
            />

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
                  className="size-4"
                />
              </div>

              {!openDescription && <Tags tags={tags} />}
            </div>
          </div>

          <div className="w-[428px] flex flex-col mt-[10px] sm:mt-4 sm:order-1 sm:w-full">
            <h1 className="font-medium text-2xl text-[#1C2024] sm:text-xl">
              View of a wildcat in DMZ (Demilitarized zone, A strip of land
              running across the Korean Peninsula), South Korea — HD stock video
            </h1>

            <div className="flex items-center text-[#80838D] text-sm">
              <img src={UserImage} alt="user-image" />

              <div className="flex items-center ml-1">
                <div>Автор:</div>

                <div className="ml-[2px] underline text-[#3E63DD]">
                  Constantine
                </div>
              </div>

              <span className="mx-1">&bull;</span>

              <div className="">ID 2564875</div>
            </div>

            <img
              src={PlayerImage}
              alt="player-image"
              className="hidden w-full mt-4 sm:block"
            />

            <div className="mt-3 w-[290px] h-9 px-[11.5px] flex justify-center items-center rounded-md bg-[#E8E8EC] sm:w-full sm:mt-4">
              <p className="text-base text-[#1F2D5C] font-medium">
                Коммерческое использование
              </p>

              <div className="ml-[10px] size-4 flex items-center justify-center rounded-full bg-white">
                <img src={QuestionMarkIcon} alt="lightning-bolt-icon" />
              </div>
            </div>

            <ul className="mt-10 sm:mt-6">
              <li className="h-[172px] flex items-center justify-between">
                <form>
                  <div className="flex items-center">
                    <Checkbox.Root
                      className="flex size-5 appearance-none items-center justify-center rounded border border-solid border-[#000932]/10 bg-white outline-none data-[state=checked]:bg-[#1F2D5C]"
                      checked={checked}
                      onCheckedChange={() => setChecked((checked) => !checked)}
                      id="4K"
                    >
                      <Checkbox.Indicator className="text-violet11 checked:bg-[#1F2D5C]">
                        <CheckIcon className="w-6 h-6 text-white" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>

                    <label
                      className="pl-4 font-medium text-xl leading-none text-[#1C2024] sm:text-base"
                      htmlFor="4K"
                    >
                      4K
                    </label>
                  </div>
                </form>

                <div className="ml-[14px] flex items-center text-[#80838D] text-sm">
                  <div className="">3840 × 2160 пикс.</div>

                  <span className="mx-1">&bull;</span>

                  <div className="">MOV</div>
                </div>

                <div className="font-medium text-xl text-[#1C2024] sm:text-base">
                  3 330₽
                </div>
              </li>
            </ul>

            <hr className="w-full mt-4 border-solid border border-[#F0F0F3] sm:hidden" />

            <div className="mt-4 flex justify-between items-center gap-3 sm:mt-6">
              <OverlayButton
                buttonUrl={UploadBlackIcon}
                title="Скачать превью"
              />
              <OverlayButton buttonUrl={BookmarkBlackIcon} />
              <OverlayButton buttonUrl={HeartBlackIcon} />
              <OverlayButton buttonUrl={ShareBlackIcon} />
            </div>

            <Button
              title="В корзину"
              className="h-[64px] w-full mt-4 px-6 bg-[#1F2D5C] rounded-lg font-medium text-lg text-white"
            />
          </div>
        </div>

        <hr className="w-full mt-6 border-solid border border-[#F0F0F3] sm:hidden" />

        <Tags tags={tags} className="hiden mt-8 sm:flex" />

        <div
          className="h-[32px] items-center cursor-pointer hidden sm:flex sm:mt-8"
          onClick={() => setOpenDescription((open) => !open)}
        >
          <div className="mr-3 font-medium text-sm text-[#1C2024]">
            Описание и данные
          </div>

          <img src={ChevronDownIcon} alt="chevron-down" className="size-4" />
        </div>

        <hr className="w-full mt-4 border-solid border border-[#F0F0F3] hidden sm:block" />

        {openDescription && (
          <div className="flex flex-col">
            <div className="mt-4">
              <h3 className="font-medium">Описание</h3>

              <div className="mt-4 max-w-[660px]">
                Зеленый лес. Сказочный лес «Сосны». Нетронутая ель. Лесной узор.
                Движение камеры в лесу. Коричневая трава на земле. Дрон,
                перемещающийся между деревьями прекрасным солнечным утром.
              </div>
            </div>

            <hr className="w-full mt-6 border-solid border border-[#F0F0F3] sm:hidden" />

            <ul className="grid grid-cols-3 sm:grid-cols-1 sm:mt-6">
              {descriptionDetails.map((detail) => (
                <li key={detail.label} className="flex items-center text-sm">
                  <div className="mr-[2px] font-medium">{detail.label}:</div>
                  <div>{detail.value}</div>
                </li>
              ))}
            </ul>

            <Tags tags={tags} className="mt-8 sm:hidden" />
          </div>
        )}

        <Content data={videoData} contentType={CONTENT_TYPE.VIDEO} />
      </div>
    </>
  );
};

const OverlayButton = ({ buttonUrl, title }) => {
  return (
    <div
      className={classnames(
        "h-12 w-12 flex justify-center items-center rounded-lg border-[1.5px] border-solid border-[#E0E1E6] cursor-pointer",
        { "flex-1": title }
      )}
    >
      {title && (
        <div className="mr-1.5 font-medium text-[#1C2024]">{title}</div>
      )}

      <img src={buttonUrl} alt="shoping-cart" />
    </div>
  );
};

const Tags = ({ tags, className }) => (
  <div className={classnames("flex items-center", className)}>
    <div className="font-medium text-sm text-[#1C2024]">Теги:</div>

    <ul className="ml-3 flex gap-2 flex-wrap">
      {tags.map((item) => (
        <li
          key={item}
          className="h-[36px] pl-[10px] pr-3 flex items-center gap-1 rounded-[6px] bg-[#F0F0F3] font-medium leading-5 text-sm text-[#1F2D5C] sm:h-[28px]"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
