import { useState } from "react";
import { SubscriptionPlans } from "./subscription-plans";
import { SubscriptionForMore } from "./subscription-for-more";
import { SubscriptionToggler } from "./subscription-toggler";
import { PAYMENT_RADIO_GROUP } from "../../constants";
import { SubscriptionPayment } from "./subscription-payment";
import { contentNavigationData } from "../../data";

import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export const Subscription = () => {
  const [toggle, setToggle] = useState(false);
  const [radioGroup, setRadioGroup] = useState(PAYMENT_RADIO_GROUP.PAY);

  return (
    <div className="container flex-1 mx-auto px-10 flex flex-col sm:px-5">
      <ul className="relative left-1/2 -translate-x-1/2 w-screen h-10 flex justify-center items-center gap-[58px] bg-[#F0F0F3] lg:hidden">
        {contentNavigationData.map((item, index) => (
          <li
            className="flex gap-[10.5px] font-medium text-[#1C2024] first:text-[#008647]/80 cursor-pointer"
            key={index}
          >
            <img src={item.url} alt="content-icon" />

            <div>{item.label}</div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-4 sm:gap-3 lg:mt-0">
        <div className="text-[#60646C] text-sm">Главная</div>

        <img
          src={ChevronRightIcon}
          alt="chevron-right"
          className="size-4 sm:size-3"
        />

        <div className="font-medium text-[#202020] text-sm">Планы подписки</div>
      </div>

      {/* FIRST VIEW OF SUBSCRIPTION PAGE */}
      <SubscriptionToggler toggle={toggle} setToggle={setToggle} />
      <SubscriptionPlans toggle={toggle} />
      <SubscriptionForMore />

      {/* SECOND VIEW OF SUBSCRIPTION PAGE */}
      {/* <SubscriptionPayment
        radioGroup={radioGroup}
        setRadioGroup={setRadioGroup}
      /> */}

      {/* SUCCESS AND REJECT PAGES */}
      {/* <SuccessPage /> */}
      {/* <RejectPage /> */}
    </div>
  );
};
