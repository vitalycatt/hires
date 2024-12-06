import { FormSwitch } from "../../components";

export const SubscriptionToggler = ({ toggle, setToggle }) => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px]">
        Планы подписки
      </h1>

      <div className="max-w-[560px] mt-3 text-center text-xl leading-7 text-[#000714]/60">
        Вы можете покупать лицензии на материалы поштучно, или приобрести
        ежемесячную или годовую подписку.
      </div>

      <div className="mt-[26px] flex items-center">
        <div className="font-medium text-[#1C2024] text-xl leading-7">
          Ежемесячная
        </div>

        <FormSwitch className="ml-3" toggle={toggle} setToggle={setToggle} />

        <div className="ml-3 font-normal text-xl leading-7 text-[#000714]/60">
          Годовая *
        </div>

        <div className="py-1.5 px-[8.5px] font-medium text-sm leading-5 text-[#000714]/60 border border-solid border-[#E8E8EC] bg-[#FFFFFF] rounded-lg">
          -50%
        </div>
      </div>

      <div className="max-w-[500px] mt-3 text-center text-sm leading-5 text-[#000714]/60">
        * В годовой подписке предоставляется скидка 50%, а также возможность
        скачивать материалы, не входящих в подписку, со скидкой 10%.
      </div>
    </div>
  );
};
