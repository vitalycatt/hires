import classnames from "classnames";
import * as Switch from "@radix-ui/react-switch";

export const FormSwitch = ({ label, className, toggle, setToggle }) => {
  return (
    <div className={classnames("flex items-center gap-3", className)}>
      <Switch.Root
        className={classnames(
          "relative h-[24px] w-[42px] cursor-default rounded-full bg-[#4364d6] outline-none data-[state=checked]:bg-[#4364d6]",
          { "opacity-50": !toggle }
        )}
        id="editable-content"
        style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
        checked={toggle}
        onCheckedChange={() => setToggle((toggle) => !toggle)}
      >
        <Switch.Thumb className="block size-[22px] border border-solid border-[#3954b0] translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>

      {label && (
        <label
          className="text-sm leading-5 text-[#1C2024]"
          htmlFor="editable-content"
        >
          {label}
        </label>
      )}
    </div>
  );
};
