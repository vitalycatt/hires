import classnames from "classnames";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Button } from "../button";
import { PAYMENT_RADIO_GROUP } from "../../constants";

import SpbImage from "../../assets/images/spb.png";
import YandexImage from "../../assets/images/yandex.png";
import MirBankImage from "../../assets/images/mir.png";

export const PaymentRadioGroup = ({ className, radioGroup, setRadioGroup }) => {
  return (
    <div
      className={classnames(
        "max-w-[628px] w-full min-h-[373px] p-5 flex flex-col rounded-xl bg-white sm:p-5 sm:pr-3",
        className
      )}
    >
      <h1 className="font-medium text-[#1C2024] text-[20px] leading-7 -tracking-[0.16px]">
        Выберите способ оплаты
      </h1>

      <form className="mt-4">
        <RadioGroup.Root
          className="flex flex-col gap-2"
          defaultValue={radioGroup}
          onValueChange={(value) => setRadioGroup(value)}
          aria-label="View density"
        >
          <div className="h-[60px] pl-5 pr-4 flex items-center border border-solid border-[#F0F0F3] rounded-xl hover:bg-[#F9F9FB] cursor-pointer">
            <RadioGroup.Item
              className={classnames(
                "size-[14px] cursor-default rounded-full bg-[#1f2d5c]",
                {
                  "size-[14px] border border-solid border-[cdced7] bg-transparent":
                    PAYMENT_RADIO_GROUP.CARD !== radioGroup,
                }
              )}
              value="card"
              id="r1"
            >
              <RadioGroup.Indicator
                className={classnames(
                  "relative flex size-full items-center justify-center after:block after:size-[6px] after:rounded-full after:bg-white",
                  {
                    "after:bg-transparent":
                      PAYMENT_RADIO_GROUP.CARD !== radioGroup,
                  }
                )}
              />
            </RadioGroup.Item>

            <label
              className="ml-3 font-medium text-sm leading-5 text-[#1C2024]"
              htmlFor="r1"
            >
              Банковская карта
            </label>

            <img src={MirBankImage} alt="bank-card" className="ml-auto w-12" />
          </div>

          <div className="h-[60px] pl-5 pr-4 flex items-center border border-solid border-[#F0F0F3] rounded-xl hover:bg-[#F9F9FB]">
            <RadioGroup.Item
              className={classnames(
                "size-[14px] cursor-default rounded-full bg-[#1f2d5c]",
                {
                  "size-[14px] border border-solid border-[cdced7] bg-transparent":
                    PAYMENT_RADIO_GROUP.PAY !== radioGroup,
                }
              )}
              value="pay"
              id="r2"
            >
              <RadioGroup.Indicator
                className={classnames(
                  "relative flex size-full items-center justify-center after:block after:size-[6px] after:rounded-full after:bg-white",
                  {
                    "after:bg-transparent":
                      PAYMENT_RADIO_GROUP.PAY !== radioGroup,
                  }
                )}
              />
            </RadioGroup.Item>

            <label
              className="ml-3 font-medium text-sm leading-5 text-[#1C2024]"
              htmlFor="r2"
            >
              Яндекс Пэй
            </label>

            <img
              src={YandexImage}
              alt="bank-card"
              className="ml-auto w-[60px]"
            />
          </div>

          <div className="h-[60px] pl-5 pr-4 flex items-center border border-solid border-[#F0F0F3] rounded-xl hover:bg-[#F9F9FB]">
            <RadioGroup.Item
              className={classnames(
                "size-[14px] cursor-default rounded-full bg-[#1f2d5c]",
                {
                  "size-[14px] border border-solid border-[cdced7] bg-transparent":
                    PAYMENT_RADIO_GROUP.QUICK !== radioGroup,
                }
              )}
              value="quick"
              id="r3"
            >
              <RadioGroup.Indicator
                className={classnames(
                  "relative flex size-full items-center justify-center after:block after:size-[6px] after:rounded-full after:bg-white",
                  {
                    "after:bg-transparent":
                      PAYMENT_RADIO_GROUP.QUICK !== radioGroup,
                  }
                )}
              />
            </RadioGroup.Item>

            <label
              className="ml-3 font-medium text-sm leading-5 text-[#1C2024]"
              htmlFor="r3"
            >
              Система Быстрых Платежей (СБП)
            </label>

            <img src={SpbImage} alt="bank-card" className="ml-auto w-[65px]" />
          </div>
        </RadioGroup.Root>
      </form>

      <Button
        title="Назад"
        className="mt-auto w-[120px] py-3 bg-transparent rounded-lg border-[#CDCED6] font-medium text-base leading-6"
      />
    </div>
  );
};
