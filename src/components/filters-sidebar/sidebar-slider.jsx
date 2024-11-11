import React from "react";
import * as Slider from "@radix-ui/react-slider";

export const SidebarSlider = () => (
  <form className="absolute w-full -bottom-[7px]">
    <Slider.Root
      className="relative w-full flex h-5 touch-none select-none items-center"
      defaultValue={[25, 50]}
      max={100}
      step={1}
    >
      <Slider.Track className="relative h-[4px] grow rounded-full bg-blackA7">
        <Slider.Range className="absolute h-full rounded-full bg-[#1F2D5C]" />
      </Slider.Track>

      <Slider.Thumb
        className="block size-[14.5px] rounded-[10px] bg-[#1F2D5C]"
        aria-label="Volume"
      />
      <Slider.Thumb
        className="block size-[14.5px] rounded-[10px] bg-[#1F2D5C]"
        aria-label="Volume"
      />
    </Slider.Root>
  </form>
);
