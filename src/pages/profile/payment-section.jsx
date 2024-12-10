import { SidebarItem } from "./profile-sidebar";

import CrossIcon from "../../assets/icons/cross.svg";
import WindowsIcon from "../../assets/icons/windows.svg";
import TBankImage from "../../assets/images/t-bank.png";
import PlusBlueIcon from "../../assets/icons/plus-blue.svg";
import MirGrayImage from "../../assets/images/mir-gray.png";
import AlfaBankImage from "../../assets/images/alfa-bank.png";
import SberBankImage from "../../assets/images/sber-bank.png";

export const PaymentSection = () => {
  return (
    <div className="max-w-[547px] w-full flex flex-col md:max-w-full">
      <SidebarItem
        url={WindowsIcon}
        label="Платежные данные"
        className="border rounded-xl hidden md:flex"
        iconClassName="rotate-90"
      />

      <h1 className="mt-[15px] font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px] md:text-[28px] md:leading-9 md:mt-8">
        Платежные данные
      </h1>

      <ul className="w-full flex-1 mt-8 flex flex-col gap-[13px] sm:hidden">
        <PaymentItem url={TBankImage} />
        <PaymentItem url={SberBankImage} />
        <PaymentItem url={AlfaBankImage} />
        <PaymentItem url={SberBankImage} />
        <PaymentItem url={TBankImage} />
      </ul>

      <div className="hidden w-full p-5 mt-8 flex-col bg-white rounded-xl sm:flex">
        <ul className="flex flex-col gap-2">
          <MobilePaymentItem url={TBankImage} />
          <MobilePaymentItem url={SberBankImage} />
          <MobilePaymentItem url={AlfaBankImage} />
        </ul>

        <div className="mt-[13px] flex items-center cursor-pointer">
          <img src={PlusBlueIcon} alt="plus-icon" className="size-[11px]" />

          <div className="ml-1 font-bold text-[#1F2D5C] text-sm leading-5">
            Привязать новую карту
          </div>
        </div>
      </div>

      {/* GO TO ATTACH PAYMENT WHEN NEED CLICKED */}
      {/* <AttachPayment className="mt-8" /> */}

      <div className="mt-[13px] flex items-center cursor-pointer sm:hidden">
        <img src={PlusBlueIcon} alt="plus-icon" className="size-[11px]" />

        <div className="ml-1 font-bold text-[#1F2D5C] text-sm leading-5">
          Привязать новую карту
        </div>
      </div>
    </div>
  );
};

const PaymentItem = ({ url }) => {
  return (
    <li className="relative w-full p-2 flex flex-col bg-white rounded-xl">
      <div className="flex items-center gap-2">
        <div className="h-[43px] w-[68px] flex items-center justify-center border border-solid border-[#F0F0F3] rounded-lg">
          <img src={url} alt="bank-image" className="w-12" />
        </div>

        <div className="flex items-top">
          <div className="mt-[5px] flex gap-1">
            <span className="size-[3.8px] bg-[#80838D] rounded-full"></span>
            <span className="size-[3.8px] bg-[#80838D] rounded-full"></span>
            <span className="size-[3.8px] bg-[#80838D] rounded-full"></span>
          </div>

          <div className="ml-1.5 text-sm text-[#1C2024] leading-5">9345</div>
        </div>

        <div className="h-4 px-[7px] rounded-[3px] border border-solid border-[#C4E8D1] bg-[#D6F1DF] font-medium text-[8px] text-[#218358] leading-4">
          По умолчанию
        </div>
      </div>

      <div className="mt-5 flex items-center">
        <div className="flex items-center cursor-pointer">
          <img src={CrossIcon} alt="cross-icon" />

          <div className="ml-[5px] text-xs text-[#80838D] leading-5 underline">
            Удалить
          </div>
        </div>

        <div className="ml-[15px] text-[#1C2024] text-xs leading-5 underline cursor-pointer">
          Сделать картой по умолчанию
        </div>
      </div>

      <img
        src={MirGrayImage}
        alt="mir-image"
        className="absolute top-[10px] right-[10px] w-[25px]"
      />
    </li>
  );
};

const MobilePaymentItem = ({ url }) => {
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

        <div className="h-4 px-[7px] rounded-[3px] border border-solid border-[#C4E8D1] bg-[#D6F1DF] font-medium text-[8px] text-[#218358] leading-4">
          По умолчанию
        </div>
      </div>

      <img
        src={MirGrayImage}
        alt="mir-image"
        className="absolute top-[10px] right-[10px] w-[25px]"
      />
    </li>
  );
};
