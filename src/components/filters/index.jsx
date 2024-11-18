import { Button } from "../button";
import { Sorting } from "./sorting";
import { FiltersList } from "./filters-list";
import { SidebarDialog } from "../sidebar-dialog";

const filterItems = ["mp4", "Вертикальные", "Редакционный", "Поштучный выкуп"];
const sortedByOptions = ["новизне", "качеству", "рейтингу"];
const itemsAmountOptions = [48, 64, 96, 120];

export const Filters = ({ setSidebarOpen }) => {
  const onDeleteFilterItem = () => console.log("Filter item delete");

  return (
    <div className="mt-[5px] flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button
            title="Фильтры"
            className="group h-[48px] px-6 bg-[#1F2D5C] rounded-lg text-white mr-[23px] sm:hidden"
            onClick={() => setSidebarOpen((open) => !open)}
          >
            <div className="ml-1 w-[21px] h-[21px] flex items-center justify-center bg-white rounded-full text-black text-[12px] leading-4 transition-all duration-300 font-medium group-hover:bg-[#1F2D5C] group-hover:text-white">
              {filterItems.length}
            </div>
          </Button>

          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-2xl">Видео по запросу «Природа»</h3>

            <p className="text-sm text-[#60646C]">25.856.471 материала</p>
          </div>
        </div>

        <Sorting
          sortedByOptions={sortedByOptions}
          itemsAmountOptions={itemsAmountOptions}
        />
      </div>

      <div className="mt-5 flex justify-between">
        <FiltersList
          filterItems={filterItems}
          onDeleteFilterItem={onDeleteFilterItem}
        />

        <SidebarDialog />
      </div>
    </div>
  );
};
