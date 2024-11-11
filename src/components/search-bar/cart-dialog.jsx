import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Button } from "../../pages/search-results/button";
import { Cross2Icon } from "@radix-ui/react-icons";

import CartIcon from "../../assets/icons/shoping-cart.svg";
import CartWhiteIcon from "../../assets/icons/cart-white.svg";
import FullScreenIcon from "../../assets/icons/enter-full-screen.svg";
import CartProductImage from "../../assets/images/cart-product.png";
import LightningBoltGreenIcon from "../../assets/icons/lightning-bolt-green.svg";

const cartData = [
  {
    id: 2564875,
    title:
      "Top Down View Of Crop Field On A Hill Slow Wind Colorful Still Life Symmetry",
    type: "Редакционный",
    resolution: "854 х 480",
    format: "mp4",
    url: `${CartProductImage}`,
  },
  {
    id: 2564875,
    title:
      "Top Down View Of Crop Field On A Hill Slow Wind Colorful Still Life Symmetry",
    type: "Редакционный",
    resolution: "854 х 480",
    format: "mp4",
    url: `${CartProductImage}`,
  },
];

export const CartDialog = ({ cartProducts }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="relative h-[35px] p-[10px] flex items-center justify-center rounded-s-full bg-white">
        <img src={CartIcon} alt="cart-icon" />

        <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 flex justify-center items-center rounded-full bg-[#DC3E42] font-medium text-[8px] text-white">
          {cartProducts.length || 0}
        </div>
      </button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-[#1C2024]/50" />

      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[594px] p-5 pt-[33px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#F9F9FB] focus:outline-none data-[state=open]:animate-contentShow">
        <Dialog.Title className="flex justify-between items-center">
          <h3 className="font-medium text-xl text-[#1C2024]">
            Добавлено в корзину
          </h3>

          <div className="h-10 px-[12.5px] flex items-center gap-1 rounded-lg bg-[#D6F1DF] border-solid border border-[#C4E8D1] sm:hidden">
            <p className="text-base text-[#218358] font-medium">
              Выбрать план подписки
            </p>

            <img src={LightningBoltGreenIcon} alt="lightning-bolt-icon" />
          </div>
        </Dialog.Title>

        <CartList data={cartData} />

        <div className="mt-[21px] flex flex-col items-end">
          <div className="h-10 px-[12.5px] hidden items-center justify-center gap-1 rounded-lg bg-[#D6F1DF] border-solid border border-[#C4E8D1] sm:flex sm:w-full sm:h-12">
            <p className="text-base text-[#218358] font-medium">
              Выбрать план подписки
            </p>

            <img src={LightningBoltGreenIcon} alt="lightning-bolt-icon" />
          </div>

          <Button
            title="Продолжить выбор материалов"
            className="h-[64px] w-full px-6 bg-transparent border-[2px] border-solid border-[#3A5BC7] rounded-lg text-base text-[#3A5BC7] sm:mt-2"
          />

          <Button
            title="Открыть корзину"
            className="h-[64px] w-full mt-1.5 px-6 bg-[#1F2D5C] rounded-lg text-base text-white"
            leftIcon={CartWhiteIcon}
          />
        </div>

        <Dialog.Close asChild>
          <button
            className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const CartList = ({ data }) => {
  return (
    <ul className="flex flex-col items-stretch gap-2 rounded-xl mt-6">
      {data.map((product, index) => (
        <li
          key={index}
          className="relative flex rounded-xl bg-white sm:p-5 sm:pr-3"
        >
          <img
            src={CartProductImage}
            alt="cart-product"
            className="rounded-l-xl sm:w-[84px] sm:h-[60px] md:rounded-md"
          />

          <div className="absolute left-[7px] top-[3px] sm:hidden">
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button className="inline-flex size-4 items-center justify-center rounded-full bg-white/30">
                    <img src={FullScreenIcon} alt="full-screen-icon" />
                  </button>
                </Tooltip.Trigger>

                <Tooltip.Portal>
                  <Tooltip.Content
                    className="absolute top-5 left-2 rounded-[3px] bg-[#FCFCFD] px-[5px] py-[3px] text-[8px] leading-[10px] text-[#1C2024]"
                    sideOffset={5}
                  >
                    Превью
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>

          <div className="pt-5 pr-[18px] pb-[18px] pl-8 flex flex-col md:ml-4 sm:p-0">
            <h5 className="text-sm font-medium text-[#1C2024]">
              {product.title}
            </h5>

            <div className="flex items-center gap-1 mt-1 text-sm text-[#80838D]">
              <div>Видео</div>

              <span>&#8226;</span>

              <div className="list-disc">ID {product.id}</div>
            </div>

            <div className="flex mt-3 text-sm text-[#80838D]">
              {product.type}
            </div>

            <div className="flex items-center gap-1 mt-1 text-sm text-[#80838D]">
              <div>{product.resolution}</div>

              <span>&#8226;</span>

              <div className="list-disc">{product.format}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
