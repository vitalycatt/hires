import { useState } from "react";
import { ShoppingCartSection } from "./shopping-cart-section";
import { contentNavigationData } from "../../data";
import {
  PAYMENT_RADIO_GROUP,
  SHOPPING_CART_BREAD_CRUMBS,
} from "../../constants";

import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export const ShoppingCart = () => {
  const [radioGroup, setRadioGroup] = useState(PAYMENT_RADIO_GROUP.PAY);
  const [breadCrumbs, setBreadCrumbs] = useState(
    SHOPPING_CART_BREAD_CRUMBS.SHOPPING_CART
  );

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

      <div className="mt-8 flex items-center gap-4">
        <div className="text-[#60646C] text-sm">Главная</div>

        <img src={ChevronRightIcon} alt="chevron-right" className="size-4" />

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
