import classnames from "classnames";
import { Button } from "..";
import { PaymentInput } from "../attach-payment/payment-input";
import { SidebarCheckbox } from "../filters-sidebar/sidebar-checkbox";

import MirImage from "../../assets/images/mir.png";
import CheckedCircleIcon from "../../assets/icons/check-circled.svg";

export const CardInput = ({ className }) => {
  return (
    <div
      className={classnames(
        "max-w-[389px] w-full p-5 flex flex-col bg-white rounded-xl",
        className
      )}
    >
      <h2 className="font-bold text-[#1C2024] text-xl leading-7 -tracking-[0.1px]">
        Банковская карта
      </h2>

      <form className="w-full">
        <PaymentInput
          url={MirImage}
          label="Номер карты"
          placeholder="0000 0000 0000 0000"
          className="mt-5"
          imgClassName="w-8"
          defaultValue="2200"
        />

        <div className="mt-5 flex justify-between">
          <PaymentInput
            label="Срок действия"
            placeholder="00/00"
            className="max-w-[132px]"
          />
          <PaymentInput
            label="Код безопасности"
            placeholder="CVV"
            className="max-w-[132px]"
            url={CheckedCircleIcon}
          />
        </div>

        <SidebarCheckbox
          label="Не сохранять данные банковской карты"
          className="mt-3"
          checkedClassName="!size-4"
          checkboxClassName="!size-4"
          labelClassName="pl-3 !text-sm !text-[#1C2024] !leading-5"
        />
      </form>

      <Button
        title="Назад"
        className="mt-auto w-[120px] py-3 bg-transparent rounded-lg border-[#CDCED6] font-medium text-base leading-6"
      />
    </div>
  );
};
