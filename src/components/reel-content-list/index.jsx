import classnames from "classnames";
import { ReelItem } from "./reel-item";

export const ReelContentList = ({ data, className }) => (
  <ul
    className={classnames(
      `flex-1 grid grid-cols-7 gap-1.5 sm:grid-cols-2`,
      className
    )}
  >
    {data.map((item, index) => (
      <ReelItem item={item} key={index} />
    ))}
  </ul>
);
