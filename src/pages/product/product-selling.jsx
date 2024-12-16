import classnames from "classnames";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Button } from "../../components";
import { CheckIcon } from "@radix-ui/react-icons";

import UserImage from "../../assets/images/avatar.png";
import PlayerImage from "../../assets/images/player.png";
import HeartBlackIcon from "../../assets/icons/heart-black.svg";
import ShareBlackIcon from "../../assets/icons/share-black.svg";
import UploadBlackIcon from "../../assets/icons/upload-black.svg";
import QuestionMarkIcon from "../../assets/icons/question-mark.svg";
import BookmarkBlackIcon from "../../assets/icons/bookmark-black.svg";

export const ProductSelling = () => {
  return (
    <div className="w-[428px] flex flex-col mt-[10px] sm:mt-4 sm:order-1 sm:w-full">
      <h1 className="font-medium text-2xl text-[#1C2024] sm:text-xl">
        View of a wildcat in DMZ (Demilitarized zone, A strip of land running
        across the Korean Peninsula), South Korea — HD stock video
      </h1>

      <div className="mt-2 flex items-center text-[#80838D] text-sm">
        <img src={UserImage} alt="user-image" />

        <div className="flex items-center ml-1">
          <div>Автор:</div>

          <div className="ml-[2px] underline text-[#3E63DD]">Constantine</div>
        </div>

        <span className="mx-1">&bull;</span>

        <div className="">ID 2564875</div>
      </div>

      <img
        src={PlayerImage}
        alt="player-image"
        className="hidden w-full mt-4 sm:block"
      />

      <div className="mt-6 w-[290px] h-9 px-[11.5px] flex justify-center items-center rounded-md bg-[#E8E8EC] sm:w-full sm:mt-4">
        <p className="text-base text-[#1F2D5C] font-medium">
          Коммерческое использование
        </p>

        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="ml-[10px] size-4 flex items-center justify-center rounded-full bg-white">
                <img src={QuestionMarkIcon} alt="lightning-bolt-icon" />
              </div>
            </Tooltip.Trigger>

            <Tooltip.Portal>
              <Tooltip.Content
                className="absolute top-5 left-2 w-[143px] h-[49px] rounded-md bg-[#F9F9FB] transition-opacity duration-300 p-1.5 border border-solid border-[#D9D9E0] text-[10px] leading-[10px] text-[#1C2024]"
                sideOffset={5}
              >
                Описание сюда
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <ul className="h-[172px] mt-10 pr-3 flex flex-col gap-4 overflow-auto sm:mt-6">
        <ProductItem label="HD" />
        <ProductItem label="SD" />
        <ProductItem label="1K" />
        <ProductItem label="2K" />
        <ProductItem label="3K" />
        <ProductItem label="4K" />
      </ul>

      <hr className="w-full mt-4 border-solid -border border-[#F0F0F3] sm:hidden" />

      <div className="mt-4 flex justify-between items-center gap-3 sm:mt-6">
        <ProductControls buttonUrl={UploadBlackIcon} title="Скачать превью" />
        <ProductControls buttonUrl={BookmarkBlackIcon} />
        <ProductControls buttonUrl={HeartBlackIcon} />
        <ProductControls buttonUrl={ShareBlackIcon} />
      </div>

      <Button
        title="В корзину"
        className="h-[64px] w-full mt-4 px-6 bg-[#1F2D5C] rounded-lg font-medium text-lg text-white"
      />
    </div>
  );
};

const ProductItem = ({ label }) => (
  <li className="h-[28px] flex items-center justify-between">
    <form>
      <div className="flex items-center">
        <Checkbox.Root
          className="flex size-5 appearance-none items-center justify-center rounded border border-solid border-[#000932]/10 bg-white outline-none data-[state=checked]:bg-[#1F2D5C]"
          id={label}
        >
          <Checkbox.Indicator className="text-violet11 checked:bg-[#1F2D5C]">
            <CheckIcon className="w-6 h-6 text-white" />
          </Checkbox.Indicator>
        </Checkbox.Root>

        <label
          className="pl-4 font-medium text-xl leading-none text-[#1C2024] sm:text-base"
          htmlFor={label}
        >
          {label}
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
);

const ProductControls = ({ buttonUrl, title }) => {
  return (
    <div
      className={classnames(
        "h-12 w-12 flex justify-center items-center rounded-lg border-[1.5px] border-solid border-[#E0E1E6] cursor-pointer",
        { "flex-1": title }
      )}
    >
      {title && (
        <div className="mr-1.5 font-medium text-[#1C2024] sm:mr-1">{title}</div>
      )}

      <img src={buttonUrl} alt="shoping-cart" />
    </div>
  );
};
