import { useState, useRef } from "react";
import classnames from "classnames";
import ReactPlayer from "react-player";
import { OverlayButton } from "../overlay-button";

import HeartIcon from "../../assets/icons/heart.svg";
import HeartBlackIcon from "../../assets/icons/heart-black.svg";
import ShareIcon from "../../assets/icons/share.svg";
import ShareBlackIcon from "../../assets/icons/share-black.svg";
import DisplayIcon from "../../assets/icons/display.svg";
import DisplayBlackIcon from "../../assets/icons/display-black.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import BookmarkBlackIcon from "../../assets/icons/bookmark-black.svg";
import ShopingCartIcon from "../../assets/icons/shoping-cart.svg";
import VerticalVideo from "../../assets/vertical-video.mp4";

export const ReelContentList = ({ data, className }) => (
  <ul
    className={classnames(
      `flex-1 grid grid-cols-7 gap-1.5 sm:grid-cols-2`,
      className
    )}
  >
    {data.map((item, index) => (
      <ContentItem item={item} key={index} />
    ))}
  </ul>
);

const ContentItem = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
    setIsPlaying(false);
  };

  return (
    <li
      className="relative group w-full h-full rounded-xl transform transition-transform duration-200 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* VIDEO */}
      <div className="w-full">
        <ReactPlayer
          ref={playerRef}
          url={VerticalVideo}
          muted={true}
          className="react-player"
          seekTo={0}
          loop={true}
          width="100%"
          height="100%"
          playing={isPlaying}
        />
      </div>

      {/* GRADIENT */}
      <div className="absolute top-0 left-0 invisible opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 h-full w-full flex flex-col justify-center items-stretch rounded-xl sm:visible sm:opacity-100">
        <div className="h-[70px] w-full mb-auto rounded-t-xl bg-gradient-to-b from-[#272727]/90 from-10"></div>

        <div className="h-[70px] w-full rounded-b-xl bg-gradient-to-t from-[#272727]/90 from-10%"></div>
      </div>

      {/* OVERLAY */}
      <div className="absolute left-[10px] top-[10px] invisible opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 w-[calc(100%-20px)] flex justify-between items-center gap-2 bg-gradient-to-b from-[#fff]to-[#272727] sm:visible sm:opacity-100">
        <div>
          <h5 className="text-sm text-white">{item.title}</h5>

          <p className="text-xs text-[#FCFCFD]">{item.duration}</p>
        </div>

        <OverlayButton
          buttonUrl={ShopingCartIcon}
          hoverIconUrl={ShopingCartIcon}
          overlayPlacement="top"
        />
      </div>

      <div className="absolute left-[10px] bottom-[10px] invisible opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 w-[calc(100%-20px)] flex justify-between items-center gap-2 sm:visible sm:opacity-100">
        <OverlayButton
          buttonUrl={DisplayIcon}
          hoverIconUrl={DisplayBlackIcon}
          overlayPlacement="down"
        />

        <div className="flex items-center gap-2">
          <OverlayButton
            buttonUrl={BookmarkIcon}
            hoverIconUrl={BookmarkBlackIcon}
            overlayPlacement="down"
          />
          <OverlayButton
            buttonUrl={HeartIcon}
            overlayPlacement="down"
            hoverIconUrl={HeartBlackIcon}
          />
          <OverlayButton
            buttonUrl={ShareIcon}
            hoverIconUrl={ShareBlackIcon}
            overlayPlacement="down"
          />
        </div>
      </div>
    </li>
  );
};
