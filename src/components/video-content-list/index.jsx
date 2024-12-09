import classnames from "classnames";
import { VideoItem } from "./video-item";

export const VideoContentList = ({ data, className }) => (
  <ul
    className={classnames(
      `flex-1 w-full grid grid-cols-4 gap-1.5 sm:grid-cols-1`,
      className
    )}
  >
    {data.map((item, index) => (
      <VideoItem item={item} key={index} />
    ))}
  </ul>
);
