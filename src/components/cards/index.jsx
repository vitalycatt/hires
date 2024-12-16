import classnames from "classnames";
import { Button } from "../button";

import TBankImage from "../../assets/icons/t-bank.svg";
import PlusBlueIcon from "../../assets/icons/plus-blue.svg";
import MirGrayImage from "../../assets/icons/mir-gray.svg";
import AlfaBankImage from "../../assets/icons/alfa-bank.svg";
import SberBankImage from "../../assets/icons/sber-bank.svg";

export const Cards = ({ className }) => {
  return (
    <div
      className={classnames(
        "max-w-[389px] w-full p-5 flex flex-col bg-white rounded-xl",
        className
      )}
    >
      <h2 className="font-bold text-[#1C2024] text-xl leading-7 -tracking-[0.1px]">
        Мои карты
      </h2>

      <ul className="mt-4 flex flex-col gap-2">
        <PaymentItem url={TBankImage} isFirst={true} />
        <PaymentItem url={SberBankImage} />
        <PaymentItem url={AlfaBankImage} />
      </ul>

      <div className="mt-[13px] flex items-center cursor-pointer">
        <img src={PlusBlueIcon} alt="plus-icon" className="size-[11px]" />

        <div className="ml-1 font-bold text-[#1F2D5C] text-sm leading-5">
          Привязать новую карту
        </div>
      </div>

      <Button
        title="Назад"
        className="w-full mt-5 py-3 bg-transparent border-[#CDCED6] rounded-lg font-medium text-base leading-6"
      />
    </div>
  );
};

const PaymentItem = ({ url, isFirst }) => {
  return (
    <li className="relative w-full px-[9px] py-[7.5px] flex border border-solid border-[#F0F0F3] bg-white rounded-xl cursor-pointer hover:bg-[#F9F9FB]">
      <div className="h-[43px] w-[68px] flex items-center justify-center border border-solid border-[#F0F0F3] rounded-lg">
        <img src={url} alt="bank-image" className="w-12" />
      </div>

      <div className="mt-[7px] ml-2 flex items-top gap-2">
        <div className="flex items-top">
          <div className="mt-[5px] flex gap-1">
            <span className="size-[3.8px] bg-[#80838D] rounded-full"></span>
            <span className="size-[3.8px] bg-[#80838D] rounded-full"></span>
            <span className="size-[3.8px] bg-[#80838D] rounded-full"></span>
          </div>

          <div className="ml-1.5 text-sm text-[#1C2024] leading-5">9345</div>
        </div>

        {isFirst && (
          <div className="h-4 px-[7px] rounded-[3px] border border-solid border-[#C4E8D1] bg-[#D6F1DF] font-medium text-[8px] text-[#218358] leading-4">
            По умолчанию
          </div>
        )}
      </div>

      <img
        src={MirGrayImage}
        alt="mir-image"
        className="absolute top-[10px] right-[10px] w-[25px]"
      />
    </li>
  );
};
