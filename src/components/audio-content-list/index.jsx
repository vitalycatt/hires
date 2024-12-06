import classnames from "classnames";
import { ContentItem } from "./audio-item";

export const AudioContentList = ({ data, className, sidebarOpen }) => {
  return (
    <ul
      className={classnames(
        "flex-1 flex flex-col gap-1.5 sm:items-center sm:gap-4",
        className
      )}
    >
      {data.map((item, index) => (
        <ContentItem item={item} key={index} sidebarOpen={sidebarOpen} />
      ))}
    </ul>
  );
};
