// import { useState } from "react";
// import { LOGIN_ACTIVE_TAB } from "../../constants";
import { PaymentType, ShoppingCartPayment } from "../../components";

import ArrowRightIcon from "../../assets/icons/arrow-right.svg";
import CheckedGreenBgIcon from "../../assets/icons/checked-green-bg.svg";

export const ShoppingCartSection = () => {
  // const [loginActiveTab, setLoginActiveTab] = useState(LOGIN_ACTIVE_TAB.LOGIN);

  return (
    <div className="mt-10 w-full flex flex-col">
      {/* <div className="flex items-center">
        <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
          Корзина
        </h1>

        <BreadCrumbs />
      </div>

      <div className="mt-10 mb-[64px] flex flex-col">
        <div></div>

        <div className="flex items-start gap-4">
          <ShoppingCartList />

          <ShoppingCartPayment />
        </div>
      </div> */}

      <div className="flex items-center">
        <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
          Оплата
        </h1>

        <BreadCrumbs />
      </div>

      <div className="mt-10 mb-[64px] w-full flex justify-between gap-4">
        <PaymentType />
        {/* <Login
          title='Корзина'
          loginActiveTab={loginActiveTab}
          setLoginActiveTab={setLoginActiveTab}
        /> */}

        {/* <AttachPayment /> */}
        {/* <Cards /> */}
        {/* <CardInput /> */}

        <ShoppingCartPayment />
      </div>
    </div>
  );
};

const BreadCrumbs = () => {
  return (
    <div className="ml-[110px] flex items-center gap-3">
      <div className="py-1.5 px-[7px] flex items-center bg-[#009700]/10 rounded-full">
        <img src={CheckedGreenBgIcon} alt="checked-icon" />

        <div className="ml-2 mr-[7px] font-medium text-xs text-[#1C2024] leading-4">
          Шаг 1: Корзина
        </div>
      </div>

      <img src={ArrowRightIcon} alt="arrow-right-icon" />

      <div className="py-1.5 px-[7px] flex items-center bg-[#009700]/10 rounded-full">
        <img src={CheckedGreenBgIcon} alt="checked-icon" />

        <div className="ml-2 mr-[7px] font-medium text-xs text-[#1C2024] leading-4">
          Шаг 2: Оплата
        </div>
      </div>

      <img src={ArrowRightIcon} alt="arrow-right-icon" />

      <div className="py-1.5 px-[7px] flex items-center bg-[#f3f3f7] rounded-full">
        <div className="size-5 border border-solid border-[#B9BBC6] bg-transparent rounded-full"></div>

        <div className="ml-2 mr-[7px] font-medium text-xs text-[#1C2024] leading-4">
          Шаг 3: Скачать
        </div>
      </div>
    </div>
  );
};
