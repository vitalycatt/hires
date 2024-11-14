import * as Tooltip from "@radix-ui/react-tooltip";

import FullScreenIcon from "../../assets/icons/enter-full-screen.svg";
import CartProductImage from "../../assets/images/cart-product.png";

export const CartList = ({ data }) => {
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
