import * as Select from "@radix-ui/react-select";
import * as Tooltip from "@radix-ui/react-tooltip";
import classnames from "classnames";

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

export const ShoppingCartList = () => (
  <ul className="w-full flex flex-col items-stretch gap-2 rounded-xl sm:gap-4">
    {cartData.map((product, index) => (
      <ListItem key={index} product={product} />
    ))}
  </ul>
);

const ListItem = ({ product }) => {
  return (
    <li className="relative flex rounded-xl bg-white md:p-5 md:flex-col">
      <div className="w-full flex">
        <ProductImage product={product} />

        <div className="w-full flex py-5 pl-8 pr-[38px] items-start md:p-0 md:ml-4">
          <ProductDescription product={product} />

          <ProductControls className="md:hidden" />
        </div>
      </div>

      <MobileProductControls className="" />

      <img
        src={CrossIcon}
        alt="cross-icon"
        className="absolute top-7 right-7 size-4 cursor-pointer md:ml-0 md:hidden"
      />
    </li>
  );
};

const ProductImage = ({ className, product }) => {
  return (
    <div className={classnames("relative", className)}>
      <img
        src={product.url}
        alt="cart-product"
        className="max-w-[222px] h-full rounded-l-xl md:rounded-md md:w-[117px] md:h-[83px]"
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
    </div>
  );
};

const ProductDescription = ({ className, product }) => {
  return (
    <div className={classnames("w-full flex flex-col", className)}>
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

      <div className="hidden mt-1 w-[96px] font-bold text-2xl text-[#1C2024] leading-[30px] md:block">
        10 500 ₽
      </div>
    </div>
  );
};

const ProductControls = ({ className }) => {
  return (
    <div
      className={classnames(
        "w-full h-8 flex justify-between items-center gap-10 xl:gap-2",
        className
      )}
    >
      <div className="md:w-full">
        <ProductSelect
          placeholder="HD"
          value="HD"
          className="md:w-full md:justify-between"
        />
      </div>

      <div className="md:w-full">
        <ProductSelect
          placeholder="Персональная"
          value="Персональная"
          className="md:w-full md:justify-between"
        />
      </div>

      <div className="w-[96px] font-bold text-lg text-[#1C2024] leding-[26px] md:hidden">
        10 500 ₽
      </div>
    </div>
  );
};

const MobileProductControls = ({ className }) => {
  return (
    <div
      className={classnames(
        "hidden w-full mt-5 h-fit flex-col justify-between gap-6 md:flex",
        className
      )}
    >
      <div className="w-full flex flex-col gap-3">
        <label
          htmlFor="Персональная"
          className="text-sm text-[#1C2024] leading-5"
        >
          Лицензия
        </label>

        <ProductSelect
          placeholder="HD"
          value="HD"
          className="md:w-full md:justify-between"
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label
          htmlFor="Персональная"
          className="text-sm text-[#1C2024] leading-5"
        >
          Лицензия
        </label>

        <ProductSelect
          placeholder="Персональная"
          value="Персональная"
          className="md:w-full md:justify-between"
        />
      </div>

      <div className="flex items-center cursor-pointer">
        <img src={CrossIcon} alt="cross-icon" />

        <div className="ml-[5px] text-sm text-[#1C2024] leading-5 underline">
          Удалить
        </div>
      </div>
    </div>
  );
};

const ProductSelect = ({ placeholder, value, className }) => {
  return (
    <Select.Root>
      <Select.Trigger
        className={classnames(
          "h-8 flex items-center pl-3 pr-[10px] bg-[#f3f3f7] rounded-[4px] text-xs leading-4 text-[#1C2024]",
          className
        )}
      >
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
