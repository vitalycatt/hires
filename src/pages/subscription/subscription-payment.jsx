import { InvoicePayment } from "./invoice-payment";
import { PAYMENT_RADIO_GROUP } from "../../constants";
import {
  CardInput,
  PaymentRadioGroup,
  ShoppingCartPayment,
} from "../../components";

export const SubscriptionPayment = ({ radioGroup, setRadioGroup }) => {
  return (
    <div className="mt-10 w-full flex flex-col">
      <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
        Оплата подписки
      </h1>

      <div className="mt-10 mb-[64px] w-full flex justify-between gap-4">
        <PaymentRadioGroup
          radioGroup={radioGroup}
          setRadioGroup={setRadioGroup}
        />
        {/* <Login
          title='Корзина'
          loginActiveTab={loginActiveTab}
          setLoginActiveTab={setLoginActiveTab}
        /> */}

        {radioGroup === PAYMENT_RADIO_GROUP.CARD && <CardInput />}
        {/* <Cards /> */}
        {radioGroup === PAYMENT_RADIO_GROUP.PAY && <InvoicePayment />}
        {/* <AttachPayment /> */}

        <ShoppingCartPayment shoppingButton={false} />
      </div>
    </div>
  );
};
