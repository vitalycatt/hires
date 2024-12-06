import classnames from "classnames";
import { Button } from "../../components/button";
import { LOGIN_ACTIVE_TAB } from "../../constants";

import EyeIcon from "../../assets/icons/eye-open.svg";
import UserIcon from "../../assets/icons/user.svg";

export const Login = ({
  title,
  className,
  loginActiveTab,
  setLoginActiveTab,
}) => {
  return (
    <div
      className={classnames(
        "min-w-[400px] p-5 pr-6 pb-8 flex flex-col rounded-xl bg-white sm:p-5 sm:pr-3",
        className
      )}
    >
      <div className="flex justify-between">
        <div className="flex flex-1 items-center justify-center sm:w-full">
          <div
            className={classnames(
              "h-10 px-4 flex justify-center items-center border-solid border-b-[2px] text-[#000714]/60 border-[#00002F]/20 text-sm leading-5 cursor-pointer sm:h-10 sm:w-full sm:text-base",
              {
                "border-[#1F2D5C] text-[#1C2024]":
                  loginActiveTab === LOGIN_ACTIVE_TAB.LOGIN,
              }
            )}
            onClick={() => setLoginActiveTab(LOGIN_ACTIVE_TAB.LOGIN)}
          >
            Войти
          </div>

          <div
            className={classnames(
              "h-10 px-6 flex justify-center items-center border-solid border-b-[2px] text-[#000714]/60 border-[#00002F]/20 text-sm leading-5 cursor-pointer sm:h-10 sm:w-full sm:text-base",
              {
                "border-[#1F2D5C] text-[#1C2024]":
                  loginActiveTab === LOGIN_ACTIVE_TAB.SIGNIN,
              }
            )}
            onClick={() => setLoginActiveTab(LOGIN_ACTIVE_TAB.SIGNIN)}
          >
            Зарегистрироваться
          </div>
        </div>
      </div>

      <h1 className="mt-6 font-medium text-[#1C2024] text-[20px] leading-7 -tracking-[0.16px]">
        {title}
      </h1>

      <div className="w-full mt-6 flex flex-col gap-2">
        <LoginInput placeholder="Введите E-mail" url={UserIcon} />

        <LoginInput placeholder="Введите пароль" url={EyeIcon} />

        <div className="text-right text-[#1F2D5C] text-sm leading-5 cursor-pointer">
          Забыли пароль?
        </div>
      </div>

      <div className="w-full mt-6 flex flex-col">
        <Button
          title="Войти"
          className="w-full py-[19px] bg-[#1F2D5C] rounded-lg text-white text-base leading-6"
        />

        <div className="mt-4 text-center text-[#60646c] text-sm leading-5 cursor-pointer">
          Нет аккаунта?{" "}
          <span className="text-[#1F2D5C] underline cursor-pointer">
            Зарегистрируйтесь
          </span>
        </div>
      </div>
    </div>
  );
};

const LoginInput = ({ url, className, placeholder, imgClassName }) => {
  return (
    <div className={classnames("w-full flex flex-col", className)}>
      <div className="w-full h-12 px-4 flex items-center justify-between border border-solid border-[#000932]/10 bg-white/90 rounded-md">
        <input
          type="text"
          className="w-full text-[#000509]/90 font-madium text-sm leading-5 placeholder:text-[#00051D]/40"
          placeholder={placeholder}
        />

        {url && (
          <img
            src={url}
            alt="input-icon"
            className={classnames("cursor-pointer", imgClassName)}
          />
        )}
      </div>
    </div>
  );
};
