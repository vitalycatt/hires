import { PaymentType, ShoppingCartPayment } from "../../components";
import { InvoicePayment } from "./invoice-payment";

export const SubscriptionPayment = () => {
  return (
    <div className="mt-10 w-full flex flex-col">
      <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
        Оплата подписки
      </h1>

      <div className="mt-10 mb-[64px] w-full flex justify-between gap-4">
        <PaymentType />
        {/* <Login
          title='Корзина'
          loginActiveTab={loginActiveTab}
          setLoginActiveTab={setLoginActiveTab}
        /> */}

        {/* <Cards /> */}
        {/* <CardInput /> */}
        {/* <AttachPayment /> */}
        <InvoicePayment />

        <ShoppingCartPayment shoppingButton={false} />
      </div>
    </div>
  );
};
