import * as Tooltip from "@radix-ui/react-tooltip";
import { FormInput } from "./form-input";
import { Button, FormSwitch } from "../../components";

import TickIcon from "../../assets/icons/tick.svg";
import TrashIcon from "../../assets/icons/trash-red.svg";
import PencilIcon from "../../assets/icons/pencil.svg";
import UploadIcon from "../../assets/icons/upload-black.svg";
import CheckCircledIcon from "../../assets/icons/check-circled.svg";

export const ProfileSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center cursor-pointer">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="size-[128px] flex justify-center items-center rounded-full leading-10 bg-[#FFEE00]/30 font-medium text-[35px] text-[#9E6C00]">
                A
              </div>
            </Tooltip.Trigger>

            <Tooltip.Portal>
              <Tooltip.Content
                className="absolute w-[146px] top-[100px] -left-1.5 rounded-md bg-[#FFF] border border-solid border-[#000932]/10 text-[8px] leading-[10px] text-[#1C2024]"
                sideOffset={5}
              >
                <div className="p-[10px] flex items-center gap-2 text-xs text-[#1C2024] leading-4 cursor-pointer hover:bg-[#F9F9FB] hover:font-medium">
                  <img
                    src={UploadIcon}
                    alt="upload-icon"
                    className="size-[14px]"
                  />

                  <div>Обновить фото</div>
                </div>

                <div className="p-[10px] flex items-center gap-2 text-xs text-[#1C2024] leading-4 cursor-pointer hover:bg-[#F9F9FB] hover:font-medium">
                  <img
                    src={TrashIcon}
                    alt="upload-icon"
                    className="size-[14px]"
                  />

                  <div>Удалить фото</div>
                </div>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <div className="ml-5 flex flex-col">
          <div className="flex items-center gap-[9px]">
            <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
              Анна Бадзыма
            </h1>

            <img src={TickIcon} alt="tick" className="size-6" />
          </div>

          <div className="mt-[3px] text-lg leading-[26px] text-[#000714]/60">
            @annabadzyma
          </div>

          <div className="mt-[9px] flex items-center gap-1 text-[#80838D] text-sm">
            81653537939 &#8226; Физическое лицо
          </div>
        </div>
      </div>

      <form className="w-[543px] flex flex-col mt-10 gap-6">
        <FormInput label="Имя" url={PencilIcon} />
        <FormInput label="Фамилия" url={PencilIcon} />
        <FormInput label="Отчество" url={PencilIcon} />
        <FormInput label="Почта" url={CheckCircledIcon} />
        <FormInput label="Телефон" url={CheckCircledIcon} />
        <FormInput label="Страна" />

        <FormSwitch label="Скрыть редакционный контент" />

        <Button
          title="Сохранить изменения"
          className="w-[266px] h-[48px] px-6 bg-[#1F2D5C] rounded-lg text-[#FFF] font-medium sm:hidden"
        />
      </form>
    </div>
  );
};