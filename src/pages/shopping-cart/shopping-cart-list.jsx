import * as Select from "@radix-ui/react-select";
import * as Tooltip from "@radix-ui/react-tooltip";

import CrossIcon from "../../assets/icons/cross.svg";
import FullScreenIcon from "../../assets/icons/enter-full-screen.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import CartProductImage from "../../assets/images/cart-product.png";
import CartProductImage1 from "../../assets/images/product-cart-item-image.png";

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
    url: `${CartProductImage1}`,
  },
];

export const ShoppingCartList = () => {
  return (
    <ul className="w-full flex flex-col items-stretch gap-2 rounded-xl">
      {cartData.map((product, index) => (
        <ListItem key={index} product={product} />
      ))}
    </ul>
  );
};

const ListItem = ({ product }) => {
  return (
    <li className="relative flex rounded-xl bg-white sm:p-5 sm:pr-3">
      <img
        src={product.url}
        alt="cart-product"
        className="max-w-[222px] rounded-l-xl sm:w-[84px] sm:h-[60px] md:rounded-md"
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

      <div className="w-full pt-5 pr-[30px] pb-[18px] pl-8 flex justify-between md:ml-4 sm:p-0">
        <div className="flex flex-col">
          <h5 className="max-w-[280px] text-sm font-medium text-[#1C2024]">
            {product.title}
          </h5>

          <div className="flex items-center gap-1 mt-1 text-sm text-[#80838D]">
            <div>Видео</div>

            <span>&#8226;</span>

            <div className="list-disc">ID {product.id}</div>
          </div>

          <div className="flex mt-3 text-sm text-[#80838D]">{product.type}</div>

          <div className="flex items-center gap-1 mt-1 text-sm text-[#80838D]">
            <div>{product.resolution}</div>

            <span>&#8226;</span>

            <div className="list-disc">{product.format}</div>
          </div>
        </div>

        <div className="h-8 flex items-center">
          <div className="">
            <ProductSelect placeholder="HD" value="HD" />
          </div>

          <div className="ml-10 ">
            <ProductSelect placeholder="Персональная" value="Персональная" />
          </div>

          <div className="ml-10 font-bold text-lg text-[#1C2024] leding-[26px]">
            10 500 ₽
          </div>

          <img
            src={CrossIcon}
            alt="cross-icon"
            className="ml-5 size-4 cursor-pointer"
          />
        </div>
      </div>
    </li>
  );
};

const ProductSelect = ({ placeholder, value }) => {
  return (
    <Select.Root>
      <Select.Trigger className="h-8 flex items-center pl-3 pr-[10px] bg-[#f3f3f7] rounded-[4px] text-xs leading-4 text-[#1C2024]">
        <Select.Value placeholder={placeholder} />

        <Select.Icon className="ml-6">
          <img src={ChevronDownIcon} alt="chevron-icon" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden transform transition duration-300 ease-in-out scale-95 opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100">
          <Select.ScrollUpButton className="flex items-center justify-center p-2 text-gray-500">
            <img
              src={ChevronDownIcon}
              alt="chevron-icon"
              className="rotate-180"
            />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-2">
            <Select.Item
              value={value}
              className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md"
            >
              <Select.ItemText>{value}</Select.ItemText>
            </Select.Item>
          </Select.Viewport>

          <Select.ScrollDownButton className="flex items-center justify-center p-2 text-gray-500">
            <ChevronDownIcon className="h-5 w-5" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
