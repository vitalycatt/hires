import CrossIcon from "../../assets/icons/cross.svg";

export const FiltersList = ({ filterItems, onDeleteFilterItem }) => {
  return (
    <ul className="flex gap-2 flex-wrap">
      {filterItems.map((item) => (
        <li
          key={item}
          className="h-[36px] pl-[10px] pr-3 flex items-center gap-1 rounded-[6px] bg-[#F0F0F3]"
        >
          <p className="font-medium leading-5 text-sm">{item}</p>

          <img
            src={CrossIcon}
            alt="cross-icon"
            onClick={onDeleteFilterItem}
            className="cursor-pointer"
          />
        </li>
      ))}
    </ul>
  );
};
