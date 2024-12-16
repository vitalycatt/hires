import * as Select from "@radix-ui/react-select";
import SearchIcon from "../../assets/icons/search.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";

export const SearchFilters = () => {
  return (
    <div className="flex items-center gap-3">
      <Select.Root className="outline-none">
        <Select.Trigger className="h-12 flex items-center px-4 bg-white rounded-lg font-medium text-sm text-[#1C2024] outline-none">
          <Select.Value placeholder="Видео: 8274" />

          <Select.Icon className="ml-6">
            <img src={ChevronDownIcon} alt="chevron-icon" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden transform transition duration-300 ease-in-out scale-95 opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100 outline-none">
            <Select.ScrollUpButton className="flex items-center justify-center p-2 text-gray-500">
              <img
                src={ChevronDownIcon}
                alt="chevron-icon"
                className="rotate-180"
              />
            </Select.ScrollUpButton>

            <Select.Viewport className="p-2">
              <Select.Item
                value="8274"
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md outline-none"
              >
                <Select.ItemText>Видео: 8274</Select.ItemText>
              </Select.Item>

              <Select.Item
                value="1234"
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md outline-none"
              >
                <Select.ItemText>Видео: 1234</Select.ItemText>
              </Select.Item>

              <Select.Item
                value="5678"
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md outline-none"
              >
                <Select.ItemText>Видео: 5678</Select.ItemText>
              </Select.Item>
            </Select.Viewport>

            <Select.ScrollDownButton className="flex items-center justify-center p-2 text-gray-500">
              <ChevronDownIcon className="h-5 w-5" />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <div className="h-12 w-[400px] px-[15px] flex items-center bg-white rounded-lg">
        {/* Поле ввода */}
        <input
          type="text"
          placeholder="Поиск по ключевым словам"
          className="flex-grow text-sm placeholder-[#60646C] text-[#1C2024]"
        />

        {/* Кнопка поиска */}
        <button className="ml-2 hover:bg-gray-50">
          <img src={SearchIcon} alt="search-icon" />
        </button>
      </div>
    </div>
  );
};
