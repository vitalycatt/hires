import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../button";
import { CartList } from "./cart-list";
import { Cross2Icon } from "@radix-ui/react-icons";

import CartIcon from "../../assets/icons/shoping-cart.svg";
import CartWhiteIcon from "../../assets/icons/cart-white.svg";
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
      <button className="relative w-10 h-10 p-[10px] ml-3 flex items-center justify-center rounded-full bg-white">
        <img src={CartIcon} alt="cart-icon" className="size-5" />

        <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 flex justify-center items-center rounded-full bg-[#DC3E42] font-medium text-[8px] text-white">
          {cartProducts.length || 0}
        </div>
      </button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="fixed z-20 inset-0 bg-[#1C2024]/50" />

      <Dialog.Content className="fixed z-20 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[594px] p-5 pt-[33px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#F9F9FB] focus:outline-none data-[state=open]:animate-contentShow">
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
