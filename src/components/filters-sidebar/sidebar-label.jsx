import classnames from "classnames";
import * as Label from "@radix-ui/react-label";

export const SidebarLabel = ({ label, placeholder, type, className }) => (
  <div className="flex flex-wrap items-center">
    {label && (
      <Label.Root
        className="text-[15px] font-medium leading-[35px] text-white"
        htmlFor={label}
      >
        {label}
      </Label.Root>
    )}

    <input
      className={classnames(
        "inline-flex h-[48px] w-[116px] px-4 appearance-none items-center justify-center rounded-lg border-solid border border-[#000932]/10 text-sm text-[#000509]/90 placeholder:text-sm placeholder:text-[#000509]/90",
        className
      )}
      type={type}
      id={label}
      placeholder={placeholder}
    />
  </div>
);
