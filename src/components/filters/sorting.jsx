import { SortedSelect } from "./sorted-select";

export const Sorting = ({ sortedByOptions, itemsAmountOptions }) => {
  return (
    <div className="flex gap-5 sm:hidden">
      <div className="flex items-center font-medium text-sm">
        <p>Сортировать по:</p>

        <SortedSelect options={sortedByOptions} />
      </div>

      <div className="flex items-center font-medium text-sm">
        <p>Количество на странице:</p>

        <SortedSelect options={itemsAmountOptions} />
      </div>
    </div>
  );
};
