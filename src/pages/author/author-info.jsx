import { Button } from "../../components";
import { useState } from "react";

import TickIcon from "../../assets/icons/tick.svg";
import UserImage from "../../assets/images/user.png";
import ShareIcon from "../../assets/icons/share-black.svg";
import ChevronDownBlueIcon from "../../assets/icons/chevron-down-blue.svg";

export const AuthorInfo = () => {
  const [desc, setDesc] = useState(false);

  return (
    <>
      <div className="p-5 pr-8 mt-8 flex rounded-xl bg-white">
        <img src={UserImage} alt="user-image" className="size-[128px]" />

        <div className="ml-5 flex flex-col">
          <div className="flex items-center gap-[9px]">
            <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
              Константин
            </h1>

            <img src={TickIcon} alt="tick" className="size-6" />
          </div>

          <div className="mt-[3px] text-lg leading-[26px] text-[#000714]/60">
            @constantine
          </div>

          <div className="mt-[9px] flex items-center gap-1 text-[#80838D] text-sm">
            938479 материала &#8226; Нижний Новгород
          </div>
        </div>

        {!desc ? (
          <div className="ml-20 max-w-[550px] leading-6 mt-5 text-[#000714]/60">
            Зеленый лес. Сказочный лес «Сосны». Нетронутая ель. Лесной узор.
            Движение камеры в лесу. Коричневая трава на земле. Дрон,
            перемещающийся между деревьями прекрасным...
            <div
              className="ml-2 inline-block cursor-pointer"
              onClick={() => setDesc((open) => !open)}
            >
              <div className="flex items-center gap-1">
                <p className="text-[#3358D4]">Подробнее</p>

                <img
                  src={ChevronDownBlueIcon}
                  alt="chevron-down"
                  className="size-4"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-20 max-w-[550px] leading-6 mt-5 text-[#000714]/60">
            Зеленый лес. Сказочный лес «Сосны». Нетронутая ель. Лесной узор.
            Движение камеры в лесу. Коричневая трава на земле. Дрон,
            перемещающийся между деревьями прекрасным, плавным полетом.
            Солнечные лучи пробиваются сквозь густую листву, создавая игру света
            и тени. Тишина леса нарушается лишь пением птиц, создавая
            умиротворяющую атмосферу.
            <div
              className="ml-2 inline-block cursor-pointer"
              onClick={() => setDesc((open) => !open)}
            >
              <div className="flex items-center gap-1">
                <p className="text-[#3358D4]">Скрыть</p>

                <img
                  src={ChevronDownBlueIcon}
                  alt="chevron-down"
                  className="size-4 rotate-180"
                />
              </div>
            </div>
          </div>
        )}

        <div className="ml-[110px] w-[180px] flex items-center flex-col gap-3">
          <Button
            title="Поделиться"
            rightIcon={ShareIcon}
            className="w-full h-[48px] px-6 bg-white border border-solid border-[#CDCED6] rounded-lg text-[#1C2024] font-medium sm:hidden"
          />

          <Button
            title="Сотрудничать"
            className="w-full h-[48px] px-6 bg-[#1F2D5C] rounded-lg font-medium text-white sm:hidden"
          />
        </div>
      </div>
    </>
  );
};
