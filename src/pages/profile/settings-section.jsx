import { Button } from "../../components";
import { FormInput } from "./form-input";
import { SidebarItem } from "./profile-sidebar";
import { SidebarCheckbox } from "../../components/filters-sidebar/sidebar-checkbox";

import GearIcon from "../../assets/icons/gear.svg";
import PencilIcon from "../../assets/icons/pencil.svg";

export const SettingsSection = () => {
  return (
    <div className="w-full flex flex-col">
      <SidebarItem
        url={GearIcon}
        label="Настройки"
        className="border rounded-xl hidden md:flex"
        iconClassName="rotate-90"
      />

      <h1 className="mt-[15px] font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px] md:text-[28px] md:leading-9 md:mt-8">
        Настройки
      </h1>

      <form className="max-w-[543px] w-full flex flex-col mt-8 gap-6 md:max-w-full">
        <FormInput label="Телефон" url={PencilIcon} />
        <FormInput label="Почта" url={PencilIcon} />
      </form>

      <hr className="w-full mt-8 border border-solid border-[#D9D9E0]" />

      <div className="mt-8 flex flex-col">
        <h2 className="font-bold text-[#1C2024] text-[28px] leading-9 -tracking-[0.12px]">
          Уведомления на электронную почту
        </h2>

        <div className="mt-4 text-[#1C2024] text-base leading-6">
          Выберите сообщения, которые вы бы хотели получать от Hi-Res
        </div>

        <form className="mt-8 flex flex-col gap-3">
          <SidebarCheckbox
            label="Специальные предложения и выгодные акции"
            checkedClassName="!size-4"
            checkboxClassName="!size-4"
            labelClassName="pl-3 !text-sm !text-[#1C2024] !leading-5"
          />
          <SidebarCheckbox
            label="Информация о продуктах и обновления"
            checkedClassName="!size-4"
            checkboxClassName="!size-4"
            labelClassName="pl-3 !text-sm !text-[#1C2024] !leading-5"
          />
          <SidebarCheckbox
            label="Подтверждение заказа"
            checkedClassName="!size-4"
            checkboxClassName="!size-4"
            labelClassName="pl-3 !text-sm !text-[#1C2024] !leading-5"
          />
        </form>
      </div>

      <hr className="w-full mt-8 border border-solid border-[#D9D9E0]" />

      <div className="mt-8 flex flex-col">
        <h2 className="font-bold text-[#1C2024] text-[28px] leading-9 -tracking-[0.12px]">
          Изменение пароля
        </h2>

        <form className="mt-6 max-w-[543px] w-full flex flex-col gap-6 md:max-w-full">
          <div className="w-full flex justify-between items-center sm:flex-col sm:items-start sm:gap-2">
            <label
              htmlFor="Текущий пароль"
              className=" text-[#1C2024] text-xs leading-4"
            >
              Текущий пароль
            </label>

            <div className="w-[426px] h-12 px-4 flex items-center justify-between border border-solid border-[#000932]/10 bg-white/90 rounded-lg md:w-full">
              <input
                id="Текущий пароль"
                type="text"
                className="w-full text-[#000509]/90 text-sm leading-5"
                placeholder="Текущий пароль"
              />

              <img
                src={PencilIcon}
                alt="input-icon"
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full flex justify-between items-center sm:flex-col sm:items-start sm:gap-2">
            <label
              htmlFor="Новый пароль"
              className=" text-[#1C2024] text-xs leading-4"
            >
              Новый пароль
            </label>

            <div className="w-[426px] h-12 px-4 flex items-center justify-between border border-solid border-[#000932]/10 bg-white/90 rounded-lg md:w-full">
              <input
                id="Новый пароль"
                type="text"
                className="w-full text-[#000509]/90 text-sm leading-5"
                placeholder="Новый пароль"
              />

              <img
                src={PencilIcon}
                alt="input-icon"
                className="cursor-pointer"
              />
            </div>
          </div>

          <Button
            title="Изменить пароль"
            className="mt-2 w-full h-[48px] px-6 bg-[#1F2D5C] rounded-lg text-[#FFF] font-medium"
          />
        </form>
      </div>

      <hr className="w-full mt-8 border border-solid border-[#D9D9E0]" />

      <div className="mt-8 flex flex-col">
        <h2 className="font-bold text-[#1C2024] text-[28px] leading-9 -tracking-[0.12px]">
          Удаление аккаунта
        </h2>

        <div className="mt-4 text-[#1C2024] text-base leading-6">
          Важно! Все ваши персональные данные будут удалены без возможности
          восстановления.
        </div>

        <Button
          title="Удалить аккаунт"
          className="mt-6 max-w-[314px] h-[64px] px-[85px] bg-transparent rounded-lg border-[#CDCED6] text-[#E5484D] font-medium sm:max-w-full"
        />
      </div>
    </div>
  );
};
