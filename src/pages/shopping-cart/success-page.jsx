import CheckedIcon from "../../assets/icons/checked.svg";

export const SuccessPage = () => {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center">
      <div className="size-[120px] flex justify-center items-center border border-solid border-[#ADDDC0] bg-[#D6F1DF] rounded-full">
        <div className="size-[65px] flex flex-col justify-center items-center bg-[#30A46C] rounded-full">
          <img src={CheckedIcon} alt="checked-icon" />
        </div>
      </div>

      <h1 className="mt-8 font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
        Спасибо за покупку!
      </h1>

      <div className="mt-6 text-xl leading-7 text-[#000714]/60">
        Все материалы и лицензия к ним отправлены вам на почту.
      </div>

      <div className="mt-4 text-xl leading-7 text-[#3E63DD] underline cursor-pointer">
        Перейти в историю покупок
      </div>
    </div>
  );
};
