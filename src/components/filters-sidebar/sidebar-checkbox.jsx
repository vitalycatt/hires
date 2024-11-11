import { useState } from "react";
import classnames from "classnames";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export const SidebarCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <form>
      <div className="flex items-center">
        <Checkbox.Root
          className="flex size-5 appearance-none items-center justify-center rounded border border-solid border-[#000932]/10 bg-white outline-none data-[state=checked]:bg-[#1F2D5C]"
          checked={checked}
          onCheckedChange={() => setChecked((checked) => !checked)}
          id={label}
        >
          <Checkbox.Indicator className="text-violet11 checked:bg-[#1F2D5C]">
            <CheckIcon className="w-6 h-6 text-white" />
          </Checkbox.Indicator>
        </Checkbox.Root>

        <label
          className={classnames("pl-[10px] text-sm leading-none", {
            "text-[#1C2024]": checked,
            "text-[#60646C]": !checked,
          })}
          htmlFor={label}
        >
          {label}
        </label>
      </div>
    </form>
  );
};
