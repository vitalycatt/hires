import * as Accordion from "@radix-ui/react-accordion";
import { SidebarLabel } from "./sidebar-label";
import { SidebarSlider } from "./sidebar-slider";
import { SidebarCheckbox } from "./sidebar-checkbox";

import PriceImage from "../../assets/images/price.png";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";

export const SidebarAccordion = () => (
  <Accordion.Root className="w-full" type="multiple">
    <Accordion.Item value="item-1" className="mt-8">
      <Accordion.Trigger className="w-full h-5 flex items-center justify-between">
        <div className="text-sm font-medium text-[#1C2024]">Цена</div>

        <img src={ChevronDownIcon} alt="chevron-down-icon" />
      </Accordion.Trigger>

      <Accordion.Content className="mt-5">
        <div className="relative">
          <img src={PriceImage} alt="price-image" className="w-full" />

          <SidebarSlider />
        </div>

        <div className="mt-5 flex justify-between items-center">
          <SidebarLabel placeholder="От" type="number" />
          <SidebarLabel placeholder="До" type="number" />
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-2" className="mt-8">
      <Accordion.Trigger className="w-full h-5 flex items-center justify-between">
        <div className="text-sm font-medium text-[#1C2024]">Дата покупки</div>

        <img src={ChevronDownIcon} alt="chevron-down-icon" />
      </Accordion.Trigger>

      <Accordion.Content className="mt-5">
        <div className="mt-5 flex justify-between items-center">
          <div className="flex justify-between items-center gap-[5px]">
            <div className="text-sm text-[#000509]/90">с</div>
            <SidebarLabel placeholder="дд.мм.гг" type="date" className="px-3" />
          </div>

          <div className="flex justify-between items-center gap-[5px]">
            <div className="text-sm text-[#000509]/90">по</div>
            <SidebarLabel placeholder="дд.мм.гг" type="date" className="px-3" />
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-3" className="mt-8">
      <Accordion.Trigger className="w-full h-5 flex items-center justify-between">
        <div className="text-sm font-medium text-[#1C2024]">Дата покупки</div>

        <img src={ChevronDownIcon} alt="chevron-down-icon" />
      </Accordion.Trigger>

      <Accordion.Content className="mt-5">
        <div className="mt-5 flex flex-col gap-[10px]">
          <SidebarCheckbox label="По подписке" />
          <SidebarCheckbox label="Поштучный выкуп" />
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-4" className="mt-8">
      <Accordion.Trigger className="w-full h-5 flex items-center justify-between">
        <div className="text-sm font-medium text-[#1C2024]">Тип лицензии</div>

        <img src={ChevronDownIcon} alt="chevron-down-icon" />
      </Accordion.Trigger>

      <Accordion.Content className="mt-5">
        <div className="mt-5 flex flex-col gap-[10px]">
          <SidebarCheckbox label="Коммерческий" />
          <SidebarCheckbox label="Редакционный" />
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-6" className="mt-8">
      <Accordion.Trigger className="w-full h-5 flex items-center justify-between">
        <div className="text-sm font-medium text-[#1C2024]">ИИ контент</div>

        <img src={ChevronDownIcon} alt="chevron-down-icon" />
      </Accordion.Trigger>

      <Accordion.Content className="mt-5">
        <div className="mt-5 flex flex-col gap-[10px]">
          <SidebarCheckbox label="Исключить созданные ИИ" />
          <SidebarCheckbox label="Только созданные ИИ" />
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);
