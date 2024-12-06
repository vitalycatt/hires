import { Button } from "../button";

export const ShoppingCartPayment = ({ shoppingButton = true }) => {
  return (
    <div className="min-w-[310px] h-fit p-5 flex flex-col rounded-xl bg-white sm:p-5 sm:pr-3">
      <h1 className="font-bold text-[#1C2024] text-xl leading-7 -tracking-[0.16px]">
        Корзина
      </h1>

      <div className="mt-8 flex flex-col">
        <div className="font-medium text-sm leading-5 text-[#1C2024]">
          Количество материалов: 7
        </div>

        <div className="mt-5 flex flex-col gap-[3px]">
          <div className="flex justify-between items-center">
            <div className="text-[#000714]/60 text-sm leading-5">
              HD-клипов: 6
            </div>

            <div className="font-medium text-[#1C2024] text-sm leading-5">
              63 000 ₽
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-[#000714]/60 text-sm leading-5">
              Звуковые спецэффекты: 1
            </div>

            <div className="font-medium text-[#1C2024] text-sm leading-5">
              10 500 ₽
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-between items-end">
          <div className="text-lg text-[#1C2024] leading-[26px]">Итого:</div>

          <div className="font-bold text-xl text-[#1C2024] leading-7">
            73 500 ₽
          </div>
        </div>
      </div>

      <div className="w-full mt-5 flex flex-col">
        <Button
          title="Перейти к оплате"
          className="w-full py-3 bg-[#1F2D5C] rounded-lg text-white text-base leading-6"
        />

        {shoppingButton && (
          <Button
            title="Продолжить покупки"
            className="w-full mt-2 py-3 bg-transparent border-[#CDCED6] rounded-lg text-base text-[#1C2024]"
          />
        )}
      </div>
    </div>
  );
};
