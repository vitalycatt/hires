import { useState } from "react";
import { ShoppingCartSection } from "./shopping-cart-section";
// import { contentNavigationData } from "../../data";
import {
  PAYMENT_RADIO_GROUP,
  // SHOPPING_CART_BREAD_CRUMBS,
} from "../../constants";

import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export const ShoppingCart = () => {
  const [radioGroup, setRadioGroup] = useState(PAYMENT_RADIO_GROUP.PAY);
  // const [breadCrumbs, setBreadCrumbs] = useState(
  //   SHOPPING_CART_BREAD_CRUMBS.SHOPPING_CART
  // );

  return (
    <div className="container flex-1 mx-auto px-10 flex flex-col sm:px-5">
      <div className="mt-8 flex items-center gap-4 sm:gap-3 lg:mt-0">
        <div className="text-[#60646C] text-sm">Главная</div>

        <img
          src={ChevronRightIcon}
          alt="chevron-right"
          className="size-4 sm:size-3"
        />

        <div className="font-medium text-[#202020] text-sm">Корзина</div>
      </div>

      <ShoppingCartSection
        radioGroup={radioGroup}
        setRadioGroup={setRadioGroup}
      />

      {/* SUCCESS PAGE */}
      {/* <SuccessPage /> */}

      {/* REJECT PAGE */}
      {/* <RejectPage /> */}
    </div>
  );
};
