import classnames from "classnames";
import { sidebarSections } from "../../data";

import PowerIcon from "../../assets/icons/power.svg";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export const ProfileSidebar = () => {
  return (
    <div className="min-w-[310px] h-[456px] p-[10px] flex flex-col rounded-xl bg-white">
      <div className="flex flex-col gap-3">
        {sidebarSections.map((item, index) => (
          <SidebarItem url={item.url} label={item.label} key={index} />
        ))}
      </div>

      <SidebarItem url={PowerIcon} label="Выйти" className="mt-auto" />
    </div>
  );
};

const SidebarItem = ({ url, label, className }) => {
  return (
    <div
      className={classnames(
        "group h-10 flex justify-between items-center pl-[10px] pr-3 rounded-md cursor-pointer hover:bg-[#EDF2FE]",
        className
      )}
    >
      <div className="flex gap-2">
        <img src={url} alt="windows-icon" />

        <div className="text-[#1C2024] text-sm leading-5 group-hover:font-medium group-hover:text-[#1F2D5C]">
          {label}
        </div>
      </div>

      <img src={ChevronRightIcon} alt="chevron-right" className="size-4" />
    </div>
  );
};
