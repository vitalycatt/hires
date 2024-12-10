import CheckedIcon from "../../assets/icons/checked.svg";

export const SuccessPage = () => {
  return (
    <div className="w-full my-[120px] flex-1 flex flex-col justify-center items-center text-center sm:my-[80px]">
      <div className="size-[120px] flex justify-center items-center border border-solid border-[#ADDDC0] bg-[#D6F1DF] rounded-full sm:size-[80px]">
        <div className="size-[65px] flex flex-col justify-center items-center bg-[#30A46C] rounded-full sm:size-[34.3px]">
          <img
            src={CheckedIcon}
            alt="checked-icon"
            className="size-[19px] sm:size-3"
          />
        </div>
      </div>

      <h1 className="mt-8 font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px] sm:mt-6 sm:text-2xl sm:leading-[30px]">
        Спасибо за покупку!
      </h1>

      <div className="mt-6 text-xl leading-7 text-[#000714]/60 sm:text-base sm:leading-[26px]">
        Все материалы и лицензия к ним отправлены вам на почту.
      </div>

      <div className="mt-4 text-xl leading-7 text-[#3E63DD] underline cursor-pointer sm:text-base sm:leading-[28px]">
        Перейти в историю покупок
      </div>
    </div>
  );
};
