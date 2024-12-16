import React from "react";
import classnames from "classnames";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";

export const SortedSelect = ({ options }) => (
  <Select.Root>
    <Select.Trigger
      className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded px-[15px] text-[13px] leading-none font-normal outline-none"
      aria-label="Food"
    >
      <Select.Value
        placeholder={options[0]}
        className="font-['Roboto'] text-[#60646C] text-sm font-medium"
      />

      <Select.Icon className="text-violet11">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="overflow-hidden rounded-md bg-white">
        <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
          <ChevronUpIcon />
        </Select.ScrollUpButton>

        <Select.Viewport>
          <Select.Group className="font-['Roboto'] rounded-xl">
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] text-[#60646C]/60 capitalize leading-none hover:bg-[#F9F9FB] data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
