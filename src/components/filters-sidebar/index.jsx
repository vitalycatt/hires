import { SidebarAccordion } from "./sidebar-accordion";
import UploadIcon from "../../assets/icons/upload.svg";

export const FiltersSidebar = () => {
  return (
    <div className="w-[332px] h-[989px] p-5 pr-8 flex flex-col items-center rounded-2xl border-solid border-[1px] border-[#E0E1E6] sm:p-0 sm:mt-6 sm:w-full sm:border-none sm:h-full">
      {/* DRAG N DROP */}
      <div className="w-full h-[88px] flex justify-center items-center rounded-lg border-dashed border-[1px] border-[#60646C] cursor-pointer">
        <div className="flex gap-[5px]">
          <p className="text-sm text-[#60646C]">Найти похожие</p>

          <img src={UploadIcon} alt="upload-icon" />
        </div>
      </div>

      <SidebarAccordion />
    </div>
  );
};
