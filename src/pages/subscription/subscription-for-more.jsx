import classnames from "classnames";
import { Button } from "../../components";

import CheckedIcon from "../../assets/icons/checked-blue.svg";

export const SubscriptionForMore = () => {
  return (
    <div className="my-[64px] px-[98px] py-[64px] w-full flex flex-col items-center bg-[#FDFDFE] border border-solid border-[#F0F0F3] rounded-2xl">
      <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
        Нужно больше материалов в подписке?
      </h1>

      <div className="mt-3 text-center text-xl leading-7 text-[#000714]/60">
        Свяжитесь с нами для индивидуального предложения.
      </div>

      <div className="mt-12 w-full flex gap-[64px]">
        <div className="flex flex-col gap-2 flex-1">
          <Option optionText="Любое количество материалов от 10-ти под ваши задачи" />
          <Option optionText="Варианты лицензий под любое использование" />
          <Option optionText="Подходящие вам по срокам подписки" />
          <Option optionText="Персональный менеджер 24/7" />
          <Option optionText="Лояльное ценообразование с учетом вашего бюджета" />
          <Option optionText="Оперативная бесплатная помощь с подбором контента" />
          <Option optionText="Гибкость в запросах по любому вопросу и задаче" />
        </div>

        <div className="flex flex-col flex-1">
          <form className="w-full flex flex-col gap-2">
            <Input placeholder="Ваше имя" />

            <Input placeholder="Ваш e-mail" />

            <Textarea placeholder="Ваш запрос" />

            <Button
              title="Отправить"
              className="w-full py-[19px] bg-[#1F2D5C] border-[#EDF2FE] rounded-lg font-medium text-base leading-[26px] text-[#FFFFFF]"
            />
          </form>

          <div className="mt-3 text-center text-xs text-[#8B8D98] leading-4">
            Нажимая на кнопку, вы принимаете нашу Политику конфиденциальности
            <br /> и Условия обслуживания.
          </div>
        </div>
      </div>
    </div>
  );
};

const Option = ({ optionText }) => {
  return (
    <div className="flex items-start">
      <img src={CheckedIcon} alt="checked-blue-icon" className="mt-2" />

      <div className="ml-[11px] font-medium text-lg text-[#1F2D5C] leading-[26px]">
        {optionText}
      </div>
    </div>
  );
};

const Input = ({ className, placeholder }) => {
  return (
    <div
      className={classnames(
        "w-full h-12 px-4 flex items-center justify-between border border-solid border-[#000932]/10 bg-white/90 rounded-md",
        className
      )}
    >
      <input
        type="text"
        className="w-full text-[#000509]/90 font-madium text-sm leading-5 placeholder:text-[#00051D]/40"
        placeholder={placeholder}
      />
    </div>
  );
};

const Textarea = ({ className, placeholder }) => {
  return (
    <div
      className={classnames(
        "w-full h-[135px] px-4 py-3 flex items-center justify-between border border-solid border-[#000932]/10 bg-white/90 rounded-md",
        className
      )}
    >
      <textarea
        type="text"
        className="w-full h-full text-[#000509]/90 font-madium text-sm leading-5 placeholder:text-[#00051D]/40 resize-none"
        placeholder={placeholder}
      />
    </div>
  );
};
