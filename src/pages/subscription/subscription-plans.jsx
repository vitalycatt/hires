import classnames from "classnames";
import { Button } from "../../components";
import { useState } from "react";
import { LoginDialog } from "./login-dialog";
import { LOGIN_ACTIVE_TAB } from "../../constants";

import CrossIcon from "../../assets/icons/cross.svg";
import MusicIcon from "../../assets/icons/music-pink.svg";
import CameraIcon from "../../assets/icons/camera-green.svg";
import DisplayIcon from "../../assets/icons/display-blue.svg";
import PictureIcon from "../../assets/icons/picture-green.svg";
import CheckedBlueIcon from "../../assets/icons/checked-blue-active.svg";

const PLAN_TYPE = {
  VIDEO: "Видео",
  MUSIC: "Звуки и музыка",
  PICTURE: "Фото и иллюстрации",
  MULTI: "Мульти",
};

export const SubscriptionPlans = ({ toggle }) => {
  return (
    <ul className="mt-[64px] grid grid-cols-4">
      {toggle ? (
        <>
          <YearPlan
            url={CameraIcon}
            title="Видео"
            price="90 000 ₽"
            materialPrice="1 500 ₽"
            saleMaterialPrice="750 ₽"
          />
          <YearPlan
            url={MusicIcon}
            title="Звуки и музыка"
            price="150 000 ₽"
            materialPrice="2 500 ₽"
            saleMaterialPrice="1 250 ₽"
          />
          <YearPlan
            url={PictureIcon}
            title="Фото и иллюстрации"
            price="75 000 ₽"
            materialPrice="1 200 ₽"
            saleMaterialPrice="625 ₽"
          />
          <YearPlan
            url={DisplayIcon}
            title="Мульти"
            price="180 000 ₽"
            materialPrice="3 000 ₽"
            saleMaterialPrice="1 500 ₽"
          />
        </>
      ) : (
        <>
          <MonthPlan
            url={CameraIcon}
            title="Видео"
            price="15 000 ₽"
            materialPrice="1 500 ₽"
          />
          <MonthPlan
            url={MusicIcon}
            title="Звуки и музыка"
            price="25 000 ₽"
            materialPrice="2 500 ₽"
          />
          <MonthPlan
            url={PictureIcon}
            title="Фото и иллюстрации"
            price="12 000 ₽"
            materialPrice="1 200 ₽"
          />
          <MonthPlan
            url={DisplayIcon}
            title="Мульти"
            price="30 000 ₽"
            materialPrice="3 000 ₽"
          />
        </>
      )}
    </ul>
  );
};

const MonthPlan = ({ url, title, materialPrice, price }) => {
  const [loginActiveTab, setLoginActiveTab] = useState(LOGIN_ACTIVE_TAB.LOGIN);

  return (
    <li className="max-w-[310px] p-6 flex flex-col bg-[#FDFDFE] border border-solid border-[#F0F0F3] rounded-2xl hover:border-[#ABBDF9]">
      <div
        className={classnames(
          "flex justify-center items-center size-12 bg-white rounded-lg",
          {
            "bg-[#EEF6D6] border-[#E2F0BD]": PLAN_TYPE.VIDEO === title,
            "bg-[#FEE9F5] border-[#FBDCEF]": PLAN_TYPE.MUSIC === title,
            "bg-[#E0F8F3] border-[#CCF3EA]": PLAN_TYPE.PICTURE === title,
            "bg-[#E1E9FF] border-[#C1D0FF]": PLAN_TYPE.MULTI === title,
          }
        )}
      >
        <img src={url} alt="camera-icon" />
      </div>

      <div className="mt-8 flex flex-col">
        <h3 className="font-bold text-2xl leading-[30px] text-[#1C2024]">
          {title}
        </h3>

        <div className="mt-2 text-lg text-[#000000]/60 leading-[26px]">
          {materialPrice} / материал
        </div>
      </div>

      <div className="mt-[16px] flex flex-col gap-2">
        <IncludedOption optionText="Веб и внутрикорпоративное использование" />
        <IncludedOption optionText="Заморозка на 1 месяц" />
        <IncludedOption optionText="Простое продление подписки" />

        <ExcludedOption optionText="Перенос остатка на следующий месяц подписки" />
        <ExcludedOption optionText="Возможность апгрейда" />
        <ExcludedOption optionText="Простая отмена" />
      </div>

      <hr className="w-full mt-4 border border-solid border-[#F0F0F3]" />

      <div className="mt-4 flex items-end text-lg text-[#000000]/60 leading-[26px]">
        <div className="font-bold text-[35px] text-[#1C2024] leading-10">
          {price}
        </div>
        / месяц
      </div>

      <LoginDialog
        loginActiveTab={loginActiveTab}
        setLoginActiveTab={setLoginActiveTab}
      >
        <Button
          title="Оформить подписку"
          className="w-full mt-4 py-[11px] bg-[#EDF2FE] border-[#EDF2FE] rounded-lg font-medium text-base leading-6 text-[#1F2D5C]"
        />
      </LoginDialog>
    </li>
  );
};

const YearPlan = ({ url, title, materialPrice, saleMaterialPrice, price }) => {
  const [loginActiveTab, setLoginActiveTab] = useState(LOGIN_ACTIVE_TAB.LOGIN);

  return (
    <li className="relative max-w-[310px] p-6 flex flex-col bg-[#FDFDFE] border border-solid border-[#F0F0F3] rounded-2xl hover:border-[#ABBDF9]">
      <div
        className={classnames(
          "flex justify-center items-center size-12 bg-white rounded-lg",
          {
            "bg-[#EEF6D6] border-[#E2F0BD]": PLAN_TYPE.VIDEO === title,
            "bg-[#FEE9F5] border-[#FBDCEF]": PLAN_TYPE.MUSIC === title,
            "bg-[#E0F8F3] border-[#CCF3EA]": PLAN_TYPE.PICTURE === title,
            "bg-[#E1E9FF] border-[#C1D0FF]": PLAN_TYPE.MULTI === title,
          }
        )}
      >
        <img src={url} alt="camera-icon" />
      </div>

      <div className="mt-8 flex flex-col">
        <h3 className="font-bold text-2xl leading-[30px] text-[#1C2024]">
          {title}
        </h3>

        <div className="mt-2 flex items-start gap-2 font-medium text-lg text-[#30A46C] leading-[26px]">
          <div className="text-sm text-[#000000]/25 leading-5 line-through">
            {materialPrice}
          </div>{" "}
          {saleMaterialPrice} / материал
        </div>
      </div>

      <div className="mt-[16px] flex flex-col gap-2">
        <IncludedOption optionText="Веб и внутрикорпоративное использование" />
        <IncludedOption optionText="Заморозка на 1 месяц" />
        <IncludedOption optionText="Простое продление подписки" />

        <IncludedOption optionText="Перенос остатка на следующий месяц подписки" />
        <IncludedOption optionText="Возможность апгрейда" />
        <IncludedOption optionText="Простая отмена" />
      </div>

      <hr className="w-full mt-4 border border-solid border-[#F0F0F3]" />

      <div className="mt-4 flex items-end text-lg text-[#000000]/60 leading-[26px]">
        <div className="font-bold text-[35px] text-[#1C2024] leading-10">
          {price}
        </div>
        / год
      </div>

      <LoginDialog
        loginActiveTab={loginActiveTab}
        setLoginActiveTab={setLoginActiveTab}
      >
        <Button
          title="Оформить подписку"
          className="w-full mt-4 py-[11px] bg-[#EDF2FE] border-[#EDF2FE] rounded-lg font-medium text-base leading-6 text-[#1F2D5C]"
        />
      </LoginDialog>

      <div className="absolute top-6 right-6 py-1.5 px-[8.5px] font-medium text-sm leading-5 text-[#000714]/60 border border-solid border-[#E8E8EC] bg-[#FFFFFF] rounded-lg">
        -50%
      </div>
    </li>
  );
};

const IncludedOption = ({ optionText }) => {
  return (
    <div className="flex items-start">
      <img
        src={CheckedBlueIcon}
        alt="checked-blue-icon"
        className="mt-2 size-[10px]"
      />

      <div className="ml-[13px] font-medium text-sm text-[#3E63DD] leading-5">
        {optionText}
      </div>
    </div>
  );
};

const ExcludedOption = ({ optionText }) => {
  return (
    <div className="flex items-start">
      <img src={CrossIcon} alt="cross-icon" className="mt-2 size-3" />

      <div className="ml-[11px] font-medium text-sm text-[#00051D]/45 leading-5 line-through">
        {optionText}
      </div>
    </div>
  );
};
