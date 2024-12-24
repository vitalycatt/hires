import * as Dialog from "@radix-ui/react-dialog";
import classnames from "classnames";
import { Button } from "../../components";

import CrossIcon from "../../assets/icons/cross.svg";

export const InvoicePayment = ({ className }) => {
  return (
    <div
      className={classnames(
        "max-w-[390px] min-w-[200px] w-full max-h-[164px] p-5 flex flex-1 flex-col rounded-xl bg-white",
        className
      )}
    >
      <h1 className="font-bold text-[#1C2024] text-xl leading-7 -tracking-[0.16px]">
        Оплата по счету
      </h1>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button
            title="Запросить счет"
            className="mt-12 w-full py-3 bg-transparent border-[2px] border-[#3A5BC7] rounded-lg text-base text-[#3A5BC7]"
          />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed z-20 inset-0 bg-black/40 data-[state=open]:animate-overlayShow" />

          <Dialog.Content className="fixed z-20 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[400px] -translate-x-1/2 -translate-y-1/2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <div className="min-w-[400px] p-5 pt-10 flex flex-col rounded-xl bg-white">
              <h1 className="font-medium text-[#1C2024] text-[20px] leading-7 -tracking-[0.16px]">
                Оплата по счету
              </h1>

              <div className="mt-3 text-sm text-[#000714]/60 leading-5">
                Счет успешно запрошен, ожидайте уведомления на электронную почту
                в течение 24 часов.
              </div>

              <Button
                title="Вернуться на страницу"
                className="w-full mt-6 py-[19px] bg-[#1F2D5C] rounded-lg text-white text-base leading-6"
              />
            </div>

            <Dialog.Close asChild>
              <button
                className="absolute right-[14px] top-[14px] inline-flex appearance-none items-center justify-center rounded-full"
                aria-label="Close"
              >
                <img src={CrossIcon} alt="close-icon" className="size-4" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
