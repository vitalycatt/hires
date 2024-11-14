import classnames from "classnames";
import { Button } from "../button";

import PlayIcon from "../../assets/icons/play.svg";
import HeartBlackIcon from "../../assets/icons/heart-black.svg";
import ShareBlackIcon from "../../assets/icons/share-black.svg";
import SpeakerLoudIcon from "../../assets/icons/speaker-loud.svg";
import UploadBlackIcon from "../../assets/icons/upload-black.svg";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";
import BookmarkBlackIcon from "../../assets/icons/bookmark-black.svg";
import ShopingCartBlueIcon from "../../assets/icons/cart-blue.svg";
import EqualizerLargeImage from "../../assets/images/equalizer-large.png";
import EqualizerSmallImage from "../../assets/images/equalizer-small.png";
// import PauseIcon from "../../assets/icons/pause.svg";
// import SpeakerOffIcon from "../../assets/icons/speaker-off.svg";
// import SpeakerModerateIcon from "../../assets/icons/speaker-moderate.svg";

export const AudioContentList = ({ data, className, sidebarOpen }) => {
  return (
    <ul
      className={classnames(
        "flex-1 flex flex-col gap-1.5 sm:items-center sm:gap-4",
        className
      )}
    >
      {data.map((item, index) => (
        <ContentItem item={item} key={index} sidebarOpen={sidebarOpen} />
      ))}
    </ul>
  );
};

const ContentItem = ({ sidebarOpen }) => {
  return (
    <li className="w-full h-[112px] flex items-center px-8 rounded-xl bg-white sm:flex-col sm:p-5 sm:h-full sm:max-w-[360px] sm:items-start">
      <div className="flex">
        <div className="size-[64px] rounded-full flex justify-center items-center bg-[#1F2D5C] sm:size-12">
          <img
            src={PlayIcon}
            alt="audio-control"
            className="sm:size-4 cursor-pointer"
          />
        </div>

        <div className="ml-8 flex flex-col sm:ml-5">
          <div className="font-medium text-sm text-[#1C2024]">
            Название музыкального трека
          </div>

          <div className="flex items-center gap-1 mt-1 text-sm text-[#80838D]">
            <div>Музыка</div>

            <span>&#8226;</span>

            <div className="list-disc">Автор: constya_music</div>
          </div>

          <div className="mt-2 flex items-center font-medium text-sm text-[#1C2024] sm:hidden">
            Подробнее о треке
            <img
              src={ChevronRightIcon}
              alt="chevron-right-icon"
              className="size-4"
            />
          </div>
        </div>
      </div>

      <img
        src={sidebarOpen ? EqualizerSmallImage : EqualizerLargeImage}
        alt="equalizer-icon"
        className="hidden sm:block sm:mt-4"
      />

      <div className="ml-12 flex items-center sm:justify-between sm:w-full sm:ml-0 sm:mt-1.5">
        <img
          src={sidebarOpen ? EqualizerSmallImage : EqualizerLargeImage}
          alt="equalizer-icon"
          className={classnames("sm:hidden", {
            hidden: window.innerWidth < 1500,
          })}
        />

        <div className="ml-4 text-sm text-[#1C2024] sm:ml-0">01:14</div>

        <img src={SpeakerLoudIcon} className="ml-3" alt="speaker-loud-icon" />
      </div>

      <div className="mx-auto font-bold text-lg text-[#1C2024] sm:text-2xl sm:mt-[10px] sm:mx-0">
        10 500 ₽
      </div>

      <div className="hidden mt-2 items-center font-medium text-sm text-[#1C2024] sm:flex">
        Подробнее о треке
        <img
          src={ChevronRightIcon}
          alt="chevron-right-icon"
          className="size-4"
        />
      </div>

      <div className="flex justify-between items-center gap-3 sm:mt-4 sm:items-start">
        <OverlayButton buttonUrl={UploadBlackIcon} />
        <OverlayButton buttonUrl={BookmarkBlackIcon} />
        <OverlayButton buttonUrl={HeartBlackIcon} />
        <OverlayButton buttonUrl={ShareBlackIcon} />
        <OverlayButton buttonUrl={ShopingCartBlueIcon} className="sm:hidden" />
      </div>

      <Button
        title="В корзину"
        className="hidden h-12 w-full mt-4 px-6 bg-[#1F2D5C] rounded-lg font-medium text-lg text-white sm:flex"
      />
    </li>
  );
};

const OverlayButton = ({ buttonUrl, className }) => {
  return (
    <div
      className={classnames(
        "h-12 w-12 flex justify-center items-center rounded-lg border-[1.5px] border-solid border-[#E0E1E6] cursor-pointer last:bg-[#D2DEFF] last:border-none",
        className
      )}
    >
      <img src={buttonUrl} alt="shoping-cart" />
    </div>
  );
};
