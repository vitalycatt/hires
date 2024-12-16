import classnames from "classnames";
import { sidebarSections } from "../../data";
import { PROFILE_NAVIGATION } from "../../constants";

import PowerIcon from "../../assets/icons/power.svg";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export const ProfileSidebar = ({
  className,
  profileNavigation,
  setProfileNavigation,
}) => {
  return (
    <div
      className={classnames(
        "min-w-[310px] h-[456px] p-[10px] flex flex-col rounded-xl bg-white md:w-full md:h-[514px] md:p-0 md:border md:border-solid md:border-[#F0F0F3]",
        className,
        { "md:hidden": profileNavigation }
      )}
    >
      <div className="flex flex-col gap-3 md:gap-0">
        {sidebarSections.map((item, index) => (
          <SidebarItem
            key={index}
            url={item.url}
            label={item.label}
            onClick={() => setProfileNavigation(item.label)}
            profileNavigation={profileNavigation}
            setProfileNavigation={setProfileNavigation}
          />
        ))}
      </div>

      <SidebarItem url={PowerIcon} label="Выйти" className="mt-auto" />
    </div>
  );
};

export const SidebarItem = ({
  url,
  label,
  onClick,
  className,
  iconClassName,
  profileNavigation,
  setProfileNavigation,
}) => {
  return (
    <div
      className={classnames(
        "group h-10 flex justify-between items-center pl-[10px] pr-3 rounded-md cursor-pointer md:h-[72px] md:pl-5 md:pr-[10px] md:border-b md:border-solid md:border-[#F0F0F3] md:last:border-none",
        className,
        {
          "bg-[#EDF2FE] md:bg-transparent":
            profileNavigation === label ||
            (!profileNavigation && label === PROFILE_NAVIGATION.PROFILE),
        }
      )}
      onClick={onClick}
    >
      <div className="flex gap-2">
        <img src={url} alt="windows-icon" />

        <div
          className={classnames(
            "text-[#1C2024] text-sm leading-5 md:text-base md:leading-6",
            {
              "font-medium text-[#1F2D5C] md:font-normal md:text-[#1C2024]":
                profileNavigation === label ||
                (!profileNavigation && label === PROFILE_NAVIGATION.PROFILE),
            }
          )}
        >
          {label}
        </div>
      </div>

      {label !== "Выйти" && (
        <img
          src={ChevronRightIcon}
          alt="chevron-right"
          className={classnames("size-4 md:size-6", iconClassName)}
        />
      )}
    </div>
  );
};
