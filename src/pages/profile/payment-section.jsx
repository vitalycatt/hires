// import { AttachPayment } from "../../components";

import CrossIcon from "../../assets/icons/cross.svg";
import TBankImage from "../../assets/images/t-bank.png";
import PlusBlueIcon from "../../assets/icons/plus-blue.svg";
import MirGrayImage from "../../assets/images/mir-gray.png";
import AlfaBankImage from "../../assets/images/alfa-bank.png";
import SberBankImage from "../../assets/images/sber-bank.png";

export const PaymentSection = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mt-[15px] font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
        Платежные данные
      </h1>

      <ul className="mt-8 flex flex-col gap-[13px]">
        <PaymentItem url={TBankImage} />
        <PaymentItem url={SberBankImage} />
        <PaymentItem url={AlfaBankImage} />
        <PaymentItem url={SberBankImage} />
        <PaymentItem url={TBankImage} />
      </ul>

      {/* GO TO ATTACH PAYMENT WHEN NEED CLICKED */}
      {/* <AttachPayment/> */}

      <div className="mt-[13px] flex items-center cursor-pointer">
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
