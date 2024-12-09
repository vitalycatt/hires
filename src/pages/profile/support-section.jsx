import classnames from "classnames";
import { Button } from "../../components";
import { useState } from "react";
import { SidebarItem } from "./profile-sidebar";
import { CHAT_STATUS, SUPPORT_ACTIVE_TAB } from "../../constants";

import SendIcon from "../../assets/icons/send.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import SearchIcon from "../../assets/icons/search.svg";
import FileAttachIcon from "../../assets/icons/file-attach.svg";
import UserAvatarImage from "../../assets/images/avatar.png";
import ChatTooltipIcon from "../../assets/icons/chat-tooltip.svg";

export const SupportSection = () => {
  const [activeTab, setActiveTab] = useState(SUPPORT_ACTIVE_TAB.ALL);

  return (
    <div className="w-full flex flex-col">
      <SidebarItem
        url={ChatTooltipIcon}
        label="Поддержка"
        className="border rounded-xl hidden md:flex"
        iconClassName="rotate-90"
      />

      <div className="mt-[11px] flex items-center justify-between sm:flex-col sm:items-start md:mt-8">
        <h1 className="font-bold text-[#1C2024] text-[35px] leading-10 -tracking-[0.16px] md:text-[28px] md:leading-9">
          Чат поддержки
        </h1>

        <div className="flex items-center sm:w-full">
          <div className="flex justify-between lg:hidden">
            <div className="flex flex-1 items-center sm:w-full">
              <div
                className={classnames(
                  "h-10 px-6 flex justify-center items-center border-solid border-b-[2px] text-[#000714]/60 border-[#00002F]/20 font-medium text-base leading-6 cursor-pointer sm:h-10 sm:w-full sm:text-base",
                  {
                    "border-[#1F2D5C] text-[#1C2024]":
                      activeTab === SUPPORT_ACTIVE_TAB.ALL,
                  }
                )}
                onClick={() => setActiveTab(SUPPORT_ACTIVE_TAB.ALL)}
              >
                Все
              </div>

              <div
                className={classnames(
                  "h-10 px-6 flex justify-center items-center border-solid border-b-[2px] text-[#000714]/60 border-[#00002F]/20 font-medium text-base leading-6 cursor-pointer sm:h-10 sm:w-full sm:text-base",
                  {
                    "border-[#1F2D5C] text-[#1C2024]":
                      activeTab === SUPPORT_ACTIVE_TAB.OPEN,
                  }
                )}
                onClick={() => setActiveTab(SUPPORT_ACTIVE_TAB.OPEN)}
              >
                Открыто
              </div>

              <div
                className={classnames(
                  "h-10 px-6 flex justify-center items-center border-solid border-b-[2px] text-[#000714]/60 border-[#00002F]/20 font-medium text-base leading-6 cursor-pointer sm:h-10 sm:w-full sm:text-base",
                  {
                    "border-[#1F2D5C] text-[#1C2024]":
                      activeTab === SUPPORT_ACTIVE_TAB.PENDING,
                  }
                )}
                onClick={() => setActiveTab(SUPPORT_ACTIVE_TAB.PENDING)}
              >
                На рассмотрении
              </div>

              <div
                className={classnames(
                  "h-10 px-6 flex justify-center items-center border-solid border-b-[2px] text-[#000714]/60 border-[#00002F]/20 font-medium text-base leading-6 cursor-pointer sm:h-10 sm:w-full sm:text-base",
                  {
                    "border-[#1F2D5C] text-[#1C2024]":
                      activeTab === SUPPORT_ACTIVE_TAB.CLOSED,
                  }
                )}
                onClick={() => setActiveTab(SUPPORT_ACTIVE_TAB.CLOSED)}
              >
                Закрыто
              </div>
            </div>
          </div>

          <Button
            title="Создать обращение"
            rightIcon={PlusIcon}
            className="ml-5 h-[48px] px-5 bg-[#1F2D5C] rounded-lg text-[#FFF] font-medium sm:ml-0 sm:mt-8 sm:w-full"
          />
        </div>
      </div>

      <div className="mt-7 flex gap-10 sm:flex-col sm:mt-3">
        <Chat />

        <div className="max-w-[257px] w-full flex flex-col sm:order-1 sm:max-w-full">
          <div className="h-12 w-full px-[15px] flex items-center bg-white rounded-lg">
            {/* Поле ввода */}
            <input
              type="text"
              placeholder="Поиск"
              className="flex-grow text-sm placeholder-[#60646C] text-[#1C2024]"
            />

            {/* Кнопка поиска */}
            <button className="ml-2 hover:bg-gray-50">
              <img src={SearchIcon} alt="search-icon" />
            </button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:overflow-scroll sm:mt-6 sm:gap-6">
            {[
              {
                status: "На рассмотрении",
                date: "26.09.2024",
                id: "73542",
              },
              {
                status: "Открыто",
                date: "26.09.2024",
                id: "73542",
              },
              {
                status: "Закрыто",
                date: "26.09.2024",
                id: "73542",
              },
              {
                status: "Открыто",
                date: "26.09.2024",
                id: "73542",
              },
              {
                status: "Открыто",
                date: "26.09.2024",
                id: "73542",
              },
              {
                status: "Закрыто",
                date: "26.09.2024",
                id: "73542",
              },
            ].map((item, index) => (
              <ChatItem
                key={index}
                id={item.id}
                status={item.status}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Chat = () => {
  return (
    <div className="h-[630px] flex flex-col flex-1 rounded-xl bg-white border border-solid border-[#E1E9FF] sm:order-2">
      <div className="p-8 pb-5 font-medium text-[#1C2024] text-xl leading-7">
        Обращение № 73542
      </div>

      <div className="p-8 flex flex-col items-center flex-1 overflow-scroll">
        <GuestChatUser message="Добрый день! Меня зовут Иван, чем я могу вам помочь?" />
        <ChatUser
          message="Здравствуйте! У меня возникла проблема с покупкой лицензии."
          className="mt-6"
          url={UserAvatarImage}
        />

        <div className="mt-10 text-[#202020] leading-6">26 сентября 2024</div>

        <GuestChatUser
          message="Подождите 10 минут, пожалуйста."
          className="mt-6"
        />
        <ChatUser message="Кул." className="mt-6" url={UserAvatarImage} />

        <GuestChatUser
          message="Добрый день! Меня зовут Иван, чем я могу вам помочь?"
          className="mt-6"
        />
        <ChatUser message="Спасибо" className="mt-6" url={UserAvatarImage} />
      </div>

      <div className="w-full px-8 py-5 flex items-center bg-[#E9EEFF] border-t border-solid border-[#E1E9FF] rounded-b-xl">
        <input
          type="text"
          placeholder="Введите ваше обращение... |"
          className="flex-grow text-base placeholder-[#60646C] bg-[#E9EEFF] text-[#00071B]/50 leading-6"
        />

        <button className="ml-2">
          <img src={FileAttachIcon} alt="attach-icon" />
        </button>

        <button className="ml-3">
          <img src={SendIcon} alt="send-icon" />
        </button>
      </div>
    </div>
  );
};

const GuestChatUser = ({ message, className }) => {
  return (
    <div
      className={classnames("mr-auto flex items-start gap-[10px]", className)}
    >
      <div className="size-8 rounded-full flex items-center justify-center font-medium bg-[#8E00F1]/10 text-sm text-[#8145B5] leading-5">
        И
      </div>

      <div className="max-w-[274px] py-[7px] px-3 rounded-xl bg-[#F0F0F3] font-normal text-[#1C2024] leading-6">
        {message}
      </div>
    </div>
  );
};

const ChatUser = ({ message, className, url }) => {
  return (
    <div
      className={classnames("ml-auto flex items-start gap-[10px]", className)}
    >
      <div className="relative max-w-[274px] py-[7px] px-3 rounded-xl bg-[#3A5BC7] font-normal text-white leading-6">
        {message}

        <div className="absolute -bottom-5 right-0 text-xs text-[#8D8D8D] leading-4">
          Просмотрено
        </div>
      </div>

      {url ? (
        <img src={url} alt="avatar-image" className="size-8" />
      ) : (
        <div className="size-8 rounded-full flex items-center justify-center font-medium bg-[#8E00F1]/10 text-sm text-[#8145B5] leading-5">
          И
        </div>
      )}
    </div>
  );
};

const ChatItem = ({ status, date, id }) => {
  return (
    <div className="group mt-4 flex flex-col items-start gap-[2px] first:mt-0 opacity-60 cursor-pointer sm:min-w-[191px] sm:mt-0">
      <div className="font-medium text-[#1C2024] text-base leading-6">
        Обращение № {id}
      </div>

      <div className="text-[#80838D] text-base leading-6">Дата: {date}</div>

      <div className="text-[#80838D] text-base leading-6">
        Статус:{" "}
        <span
          className={classnames("text-[#1C2024]", {
            "text-[#3E63DD]": status === CHAT_STATUS.OPEN,
            "text-[#9E6C00]": status === CHAT_STATUS.PENDING,
          })}
        >
          {status}
        </span>
      </div>

      <hr className="mt-4 w-full border border-solid border-[#F0F0F3] group-last:invisible sm:hidden" />
    </div>
  );
};
