import { useState } from "react";
import { SubscriptionPlans } from "./subscription-plans";
import { SubscriptionForMore } from "./subscription-for-more";
import { SubscriptionToggler } from "./subscription-toggler";
// import { PAYMENT_RADIO_GROUP } from "../../constants";
// import { SubscriptionPayment } from "./subscription-payment";

import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export const Subscription = () => {
  const [toggle, setToggle] = useState(false);
  // const [radioGroup, setRadioGroup] = useState(PAYMENT_RADIO_GROUP.PAY);

  return (
    <div className="container flex-1 mx-auto px-10 flex flex-col sm:px-5">
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
