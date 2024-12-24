import classnames from "classnames";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { FiltersSidebar } from "../filters-sidebar";

import SettingsIcon from "../../assets/icons/settings.svg";

export const SidebarDialog = ({ className }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button
        className={classnames(
          "h-12 min-w-12 items-center justify-center bg-[#1F2D5C] rounded-lg text-white hidden sm:flex",
          className
        )}
      >
        <img src={SettingsIcon} alt="settings-icon" />
      </Button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="fixed z-20 inset-0 bg-[#1C2024]/50 data-[state=open]:animate-overlayShow" />

      <Dialog.Content className="fixed z-20 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[394px] p-5 pt-10 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#F9F9FB] focus:outline-none data-[state=open]:animate-contentShow">
        <Dialog.Title className="text-xl font-medium text-[#1C2024]">
          Фильтры
        </Dialog.Title>

        <FiltersSidebar />

        <Dialog.Close asChild>
          <button
            className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
