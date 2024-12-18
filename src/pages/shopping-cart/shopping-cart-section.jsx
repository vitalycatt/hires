import classnames from "classnames";
import { useState } from "react";
// import { ShoppingCartList } from "./shopping-cart-list";
import {
  LOGIN_ACTIVE_TAB,
  PAYMENT_RADIO_GROUP,
  SIGNUP_USERS,
} from "../../constants";
import {
  Cards,
  Login,
  CardInput,
  MobileLogin,
  AttachPayment,
  PaymentRadioGroup,
  ShoppingCartPayment,
} from "../../components";

import ArrowRightIcon from "../../assets/icons/arrow-right.svg";
import CheckedGreenBgIcon from "../../assets/icons/checked-green-bg.svg";

export const ShoppingCartSection = ({ radioGroup, setRadioGroup }) => {
  const [auth, setAuth] = useState(false);
  const [loginActiveTab, setLoginActiveTab] = useState(LOGIN_ACTIVE_TAB.LOGIN);
  const [signUpRadioGroup, setSignUpRadioGroup] = useState(
    SIGNUP_USERS.INDIVIDUAL
  );

  return (
    <div className="mt-10 w-full flex flex-col">
      {/* <div className="flex items-center sm:flex-col sm:items-start">
        <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px] md:text-[28px] md:leading-9">
          Корзина
        </h1>

        <BreadCrumbs />
      </div>

      <div className="mt-10 mb-[64px] flex items-start gap-4 lg:flex-col md:mt-8">
        <ShoppingCartList />

        <ShoppingCartPayment className="lg:w-full" />
      </div> */}

      <div className="flex items-center md:flex-col md:items-start">
        <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px] md:text-[28px] md:leading-9">
          Оплата
        </h1>

        <BreadCrumbs className="md:ml-0 md:mt-5" />
      </div>

      {!auth ? (
        <div className="mt-10 mb-[64px] w-full flex justify-between gap-4">
          <Login
            setAuth={setAuth}
            loginActiveTab={loginActiveTab}
            setLoginActiveTab={setLoginActiveTab}
            onClick={() => setAuth(true)}
            className="md:hidden"
          />
          <MobileLogin
            auth={auth}
            setAuth={setAuth}
            loginActiveTab={loginActiveTab}
            signUpRadioGroup={signUpRadioGroup}
            setLoginActiveTab={setLoginActiveTab}
            setSignUpRadioGroup={setSignUpRadioGroup}
            onClick={() => setAuth(true)}
            className="hidden md:flex"
          />

          <ShoppingCartPayment className="md:hidden" />
        </div>
      ) : (
        <div className="mt-10 mb-[64px] w-full flex justify-between gap-4 sm:flex-col">
          <PaymentRadioGroup
            radioGroup={radioGroup}
            setRadioGroup={setRadioGroup}
          />

          {radioGroup === PAYMENT_RADIO_GROUP.PAY && (
            <Cards className="sm:max-w-full" />
          )}
          {radioGroup === PAYMENT_RADIO_GROUP.CARD && (
            <CardInput className="sm:max-w-full" />
          )}
          {radioGroup === PAYMENT_RADIO_GROUP.QUICK && (
            <AttachPayment className="sm:max-w-full" />
          )}

          <ShoppingCartPayment />
        </div>
      )}
    </div>
  );
};

const BreadCrumbs = ({ className }) => {
  return (
    <div
      className={classnames(
        "ml-[110px] flex items-center gap-3 md:gap-2 sm:mt-5 sm:ml-0",
        className
      )}
    >
      <div className="py-1.5 px-[7px] flex items-center bg-[#009700]/10 rounded-full">
        <img src={CheckedGreenBgIcon} alt="checked-icon" />

        <div className="ml-2 mr-[7px] font-medium text-xs text-[#1C2024] leading-4 md:hidden">
          Шаг 1: Корзина
        </div>

        <div className="hidden ml-2 mr-[7px] font-medium text-xs text-[#1C2024] leading-4 md:block">
          Корзина
        </div>
      </div>

      <img src={ArrowRightIcon} alt="arrow-right-icon" />

      <div className="py-1.5 px-[7px] flex items-center bg-[#009700]/10 rounded-full">
        <img src={CheckedGreenBgIcon} alt="checked-icon" />

        <div className="ml-2 mr-[7px] font-medium text-xs text-[#1C2024] leading-4 md:hidden">
          Шаг 2: Оплата
        </div>

        <div className="hidden ml-2 mr-[7px] font-medium text-xs text-[#1C2024] leading-4 md:block">
          Оплата
        </div>
      </div>

      <img src={ArrowRightIcon} alt="arrow-right-icon" />

      <div className="py-1.5 px-[7px] flex items-center bg-[#f3f3f7] rounded-full">
        <div className="size-5 border border-solid border-[#B9BBC6] bg-transparent rounded-full"></div>

        <div className="ml-2 mr-[7px] font-medium text-xs text-[#1C2024] leading-4 md:hidden">
          Шаг 3: Скачать
        </div>

        <div className="hidden ml-2 mr-[7px] font-medium text-xs text-[#1C2024] leading-4 md:block">
          Скачать
        </div>
      </div>
    </div>
  );
};
