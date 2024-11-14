import classnames from "classnames";

export const Tags = ({ tags, className }) => (
  <div className={classnames("flex items-center", className)}>
    <div className="font-medium text-sm text-[#1C2024]">Теги:</div>

    <ul className="ml-3 flex gap-2 flex-wrap">
      {tags.map((item) => (
        <li
          key={item}
          className="h-[36px] pl-[10px] pr-3 flex items-center gap-1 rounded-[6px] bg-[#F0F0F3] font-medium leading-5 text-sm text-[#1F2D5C] sm:h-[28px]"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
