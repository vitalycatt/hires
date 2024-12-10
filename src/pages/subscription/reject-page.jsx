import CrossIcon from "../../assets/icons/cross-white.svg";
import SupportIcon from "../../assets/icons/chat-tooltip.svg";

export const RejectPage = () => {
  return (
    <div className="w-full my-[120px] flex-1 flex flex-col justify-center items-center sm:my-[80px]">
      <div className="size-[120px] flex justify-center items-center border border-solid border-[#FDBDBE] bg-[#FFDBDC] rounded-full sm:size-[80px]">
        <div className="size-[65px] flex flex-col justify-center items-center bg-[#E5484D] rounded-full sm:size-[34.3px]">
          <img
            src={CrossIcon}
            alt="cross-icon"
            className="size-[19px] sm:size-3"
          />
        </div>
      </div>

      <h1 className="mt-8 font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px] sm:mt-6 sm:text-2xl sm:leading-[30px]">
        Ошибка!
      </h1>

      <div className="max-w-[560px] mt-6 text-center text-xl leading-7 text-[#000714]/60 sm:text-base sm:leading-[26px]">
        Попробуйте снова. Возможно, вы ввели неверные данные или способ оплаты
        недействителен.
      </div>

      <div className="mt-4 flex items-center sm:flex-col">
        <div className="text-xl leading-7 text-[#3E63DD] underline cursor-pointer sm:text-base sm:leading-[28px]">
          Вернуться в корзину
        </div>

        <div className="ml-6 flex items-center text-xl leading-7 text-[#1C2024] underline cursor-pointer sm:text-base sm:leading-[28px] sm:ml-0">
          <img
            src={SupportIcon}
            alt="support-icon"
            className="size-6 mr-[9px]"
          />{" "}
          Обратиться в поддержку
        </div>
      </div>
    </div>
  );
};
