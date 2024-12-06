import { Button } from "../../components";
import { PaymentInput } from "./payment-input";

import MirImage from "../../assets/images/mir.png";
import CheckedCircleIcon from "../../assets/icons/check-circled.svg";

export const AttachPayment = () => {
  return (
    <div className="p-5 flex flex-col bg-white rounded-xl">
      <h2 className="font-bold text-[#1C2024] text-xl leading-7 -tracking-[0.1px]">
        Привязать новую карту
      </h2>

      <form className="w-[349px]">
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

        <div className="mt-10 flex flex-col gap-2">
          <Button
            title="Сохранить"
            className="w-full h-[48px] bg-transparent rounded-lg text-[#3A5BC7] border-[2px] border-solid border-[#3A5BC7] text-base leading-6 font-medium sm:hidden"
          />
          <Button
            title="Назад"
            className="w-full h-[48px] bg-transparent rounded-lg text-[#1C2024] border border-solid border-[#CDCED6] font-medium sm:hidden"
          />
        </div>
      </form>
    </div>
  );
};
