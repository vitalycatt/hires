import * as RadioGroup from "@radix-ui/react-radio-group";
import classnames from "classnames";
import { Button } from "../../components/button";
import { useState } from "react";
import { SIGNUP_USERS, LOGIN_ACTIVE_TAB } from "../../constants";

import EyeIcon from "../../assets/icons/eye-open.svg";
import UserIcon from "../../assets/icons/user.svg";

export const Login = ({
  onClick,
  className,
  loginActiveTab,
  setLoginActiveTab,
}) => {
  const [signUpRadioGroup, setSignUpRadioGroup] = useState(
    SIGNUP_USERS.INDIVIDUAL
  );

  return (
    <div
      className={classnames(
        "max-w-[397px] w-full p-5 pr-6 pb-8 flex flex-col rounded-xl bg-white sm:p-5 sm:pr-3",
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

      {loginActiveTab === LOGIN_ACTIVE_TAB.LOGIN && (
        <>
          <h1 className="mt-6 font-medium text-[#1C2024] text-[20px] leading-7 -tracking-[0.16px]">
            Вход
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
              onClick={onClick}
            />

            <div className="mt-4 text-center text-[#60646c] text-sm leading-5 cursor-pointer">
              Нет аккаунта?{" "}
              <span className="text-[#1F2D5C] underline cursor-pointer">
                Зарегистрируйтесь
              </span>
            </div>
          </div>
        </>
      )}

      {loginActiveTab === LOGIN_ACTIVE_TAB.SIGNIN && (
        <>
          <h1 className="mt-6 font-medium text-[#1C2024] text-[20px] leading-7 -tracking-[0.16px]">
            Регистрация
          </h1>

          <div className="w-full mt-6 flex flex-col gap-2">
            <LoginInput placeholder="Введите E-mail" url={UserIcon} />

            <LoginInput placeholder="Введите пароль" url={EyeIcon} />

            <LoginInput placeholder="Повторите пароль" url={EyeIcon} />
          </div>

          <div className="flex flex-col mt-4">
            <div className="font-medium text-base text-[#1C2024] leading-6">
              Выберите тип профиля
            </div>

            <form className="mt-4">
              <RadioGroup.Root
                className="flex items-center gap-6"
                defaultValue={signUpRadioGroup}
                onValueChange={(value) => setSignUpRadioGroup(value)}
                aria-label="View density"
              >
                <div className="flex items-center cursor-pointer">
                  <RadioGroup.Item
                    className={classnames(
                      "size-[14px] cursor-default rounded-full bg-[#1f2d5c]",
                      {
                        "size-[14px] border border-solid border-[cdced7] bg-transparent":
                          SIGNUP_USERS.INDIVIDUAL !== signUpRadioGroup,
                      }
                    )}
                    value={SIGNUP_USERS.INDIVIDUAL}
                    id="r1"
                  >
                    <RadioGroup.Indicator
                      className={classnames(
                        "relative flex size-full items-center justify-center after:block after:size-[6px] after:rounded-full after:bg-white",
                        {
                          "after:bg-transparent":
                            SIGNUP_USERS.INDIVIDUAL !== signUpRadioGroup,
                        }
                      )}
                    />
                  </RadioGroup.Item>

                  <label
                    className="ml-1 text-sm leading-5 text-[#00051D]/50"
                    htmlFor="r1"
                  >
                    Физическое лицо
                  </label>
                </div>

                <div className="flex items-center cursor-pointer">
                  <RadioGroup.Item
                    className={classnames(
                      "size-[14px] cursor-default rounded-full bg-[#1f2d5c]",
                      {
                        "size-[14px] border border-solid border-[cdced7] bg-transparent":
                          SIGNUP_USERS.LEGAL_ENTITY !== signUpRadioGroup,
                      }
                    )}
                    value={SIGNUP_USERS.LEGAL_ENTITY}
                    id="r2"
                  >
                    <RadioGroup.Indicator
                      className={classnames(
                        "relative flex size-full items-center justify-center after:block after:size-[6px] after:rounded-full after:bg-white",
                        {
                          "after:bg-transparent":
                            SIGNUP_USERS.LEGAL_ENTITY !== signUpRadioGroup,
                        }
                      )}
                    />
                  </RadioGroup.Item>

                  <label
                    className="ml-1 text-sm leading-5 text-[#00051D]/50"
                    htmlFor="r2"
                  >
                    Юридическое лицо
                  </label>
                </div>
              </RadioGroup.Root>
            </form>
          </div>

          <div className="w-full mt-[30px] flex flex-col">
            <Button
              title="Войти"
              className="w-full py-[12px] bg-[#1F2D5C] rounded-lg text-white text-base leading-6"
              onClick={onClick}
            />

            <div className="mt-6 text-center text-sm leading-5 text-[#001046]/90 underline cursor-pointer">
              У меня уже есть аккаунт
            </div>

            <div className="mt-6 text-sm text-[#8B8D98] leading-5 text-center">
              Создавая учетную запись, вы принимаете нашу Политику
              конфиденциальности и Условия обслуживания.
            </div>
          </div>
        </>
      )}
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

export const MobileLogin = ({
  onClick,
  className,
  loginActiveTab,
  signUpRadioGroup,
  setLoginActiveTab,
  setSignUpRadioGroup,
}) => {
  return (
    <div className={classnames("w-full flex flex-col", className)}>
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

      {loginActiveTab === LOGIN_ACTIVE_TAB.LOGIN && (
        <>
          <h1 className="mt-6 font-medium text-[#1C2024] text-[20px] leading-7 -tracking-[0.16px]">
            Войти
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
              onClick={onClick}
            />

            <div className="mt-4 text-center text-[#60646c] text-sm leading-5 cursor-pointer">
              Нет аккаунта?{" "}
              <span className="text-[#1F2D5C] underline cursor-pointer">
                Зарегистрируйтесь
              </span>
            </div>
          </div>
        </>
      )}

      {loginActiveTab === LOGIN_ACTIVE_TAB.SIGNIN && (
        <>
          <h1 className="mt-6 font-medium text-[#1C2024] text-[20px] leading-7 -tracking-[0.16px]">
            Регистрация
          </h1>

          <div className="w-full mt-6 flex flex-col gap-2">
            <LoginInput placeholder="Введите E-mail" url={UserIcon} />

            <LoginInput placeholder="Введите пароль" url={EyeIcon} />

            <LoginInput placeholder="Повторите пароль" url={EyeIcon} />
          </div>

          <div className="flex flex-col mt-4">
            <div className="font-medium text-base text-[#1C2024] leading-6">
              Выберите тип профиля
            </div>

            <form className="mt-4">
              <RadioGroup.Root
                className="flex items-center gap-6"
                defaultValue={signUpRadioGroup}
                onValueChange={(value) => setSignUpRadioGroup(value)}
                aria-label="View density"
              >
                <div className="flex items-center cursor-pointer">
                  <RadioGroup.Item
                    className={classnames(
                      "size-[14px] cursor-default rounded-full bg-[#1f2d5c]",
                      {
                        "size-[14px] border border-solid border-[cdced7] bg-transparent":
                          SIGNUP_USERS.INDIVIDUAL !== signUpRadioGroup,
                      }
                    )}
                    value={SIGNUP_USERS.INDIVIDUAL}
                    id="r1"
                  >
                    <RadioGroup.Indicator
                      className={classnames(
                        "relative flex size-full items-center justify-center after:block after:size-[6px] after:rounded-full after:bg-white",
                        {
                          "after:bg-transparent":
                            SIGNUP_USERS.INDIVIDUAL !== signUpRadioGroup,
                        }
                      )}
                    />
                  </RadioGroup.Item>

                  <label
                    className="ml-1 text-sm leading-5 text-[#00051D]/50"
                    htmlFor="r1"
                  >
                    Физическое лицо
                  </label>
                </div>

                <div className="flex items-center cursor-pointer">
                  <RadioGroup.Item
                    className={classnames(
                      "size-[14px] cursor-default rounded-full bg-[#1f2d5c]",
                      {
                        "size-[14px] border border-solid border-[cdced7] bg-transparent":
                          SIGNUP_USERS.LEGAL_ENTITY !== signUpRadioGroup,
                      }
                    )}
                    value={SIGNUP_USERS.LEGAL_ENTITY}
                    id="r2"
                  >
                    <RadioGroup.Indicator
                      className={classnames(
                        "relative flex size-full items-center justify-center after:block after:size-[6px] after:rounded-full after:bg-white",
                        {
                          "after:bg-transparent":
                            SIGNUP_USERS.LEGAL_ENTITY !== signUpRadioGroup,
                        }
                      )}
                    />
                  </RadioGroup.Item>

                  <label
                    className="ml-1 text-sm leading-5 text-[#00051D]/50"
                    htmlFor="r2"
                  >
                    Юридическое лицо
                  </label>
                </div>
              </RadioGroup.Root>
            </form>
          </div>

          <div className="w-full mt-[30px] flex flex-col">
            <Button
              title="Войти"
              className="w-full py-[12px] bg-[#1F2D5C] rounded-lg text-white text-base leading-6"
              onClick={onClick}
            />

            <div className="mt-6 text-center text-sm leading-5 text-[#001046]/90 underline cursor-pointer">
              У меня уже есть аккаунт
            </div>

            <div className="mt-6 text-sm text-[#8B8D98] leading-5 text-center">
              Создавая учетную запись, вы принимаете нашу Политику
              конфиденциальности и Условия обслуживания.
            </div>
          </div>
        </>
      )}
    </div>
  );
};
