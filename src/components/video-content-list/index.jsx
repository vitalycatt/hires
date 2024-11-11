import classnames from "classnames";
import HeartIcon from "../../assets/icons/heart.svg";
import ShareIcon from "../../assets/icons/share.svg";
import DisplayIcon from "../../assets/icons/display.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import ShopingCartIcon from "../../assets/icons/shoping-cart.svg";

export const VideoContentList = ({ data, className }) => {
  return (
    <ul
      className={classnames("flex-1 grid grid-cols-5 gap-1.5", className)}
      // VERTICAL REEL RES
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
      // HORIZONTAL VIDEO RES
      // style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}
    >
      {data.map((item, index) => (
        <ContentItem item={item} key={index} />
      ))}
    </ul>
  );
};

const ContentItem = ({ item }) => {
  return (
    <li className="relative group w-full h-full rounded-xl transform transition-transform duration-200 ease-in-out">
      {/* IMAGE */}
      <img src={item.url} alt="item-content" className="w-full" />

      {/* GRADIENT */}
      <div className="absolute top-0 left-0 invisible group-hover:visible h-full w-full flex flex-col justify-center items-stretch rounded-xl">
        <div className="h-[70px] w-full mb-auto rounded-t-xl bg-gradient-to-b from-[#272727]/90 from-10"></div>

        <div className="h-[70px] w-full rounded-b-xl bg-gradient-to-t from-[#272727]/90 from-10%"></div>
      </div>

      {/* OVERLAY */}
      <div className="absolute left-[10px] top-[10px] invisible group-hover:visible w-[calc(100%-20px)] flex justify-between items-center gap-2 bg-gradient-to-b from-[#fff]to-[#272727]">
        <div>
          <h5 className="text-sm text-white">{item.title}</h5>

          <p className="text-xs text-[#FCFCFD]">{item.duration}</p>
        </div>

        <OverlayButton buttonUrl={ShopingCartIcon} overlayPlacement="top" />
      </div>

      <div className="absolute left-[10px] bottom-[10px] invisible group-hover:visible w-[calc(100%-20px)] flex justify-between items-center gap-2">
        <OverlayButton buttonUrl={DisplayIcon} overlayPlacement="down" />

        <div className="flex items-center gap-2">
          <OverlayButton buttonUrl={BookmarkIcon} overlayPlacement="down" />
          <OverlayButton buttonUrl={HeartIcon} overlayPlacement="down" />
          <OverlayButton buttonUrl={ShareIcon} overlayPlacement="down" />
        </div>
      </div>
    </li>
  );
};

const OverlayButton = ({ buttonUrl, className, overlayPlacement }) => {
  return (
    <div
      className={classnames(
        "h-8 w-8 flex justify-center items-center rounded-md cursor-pointer",
        {
          "bg-[#D2DEFF]": overlayPlacement === "top",
          "bg-[#1F2D5C]/70 border-solid border-[#1F2D5C] border-[1px]":
            overlayPlacement === "down",
          className,
        }
      )}
    >
      <img src={buttonUrl} alt="shoping-cart" />
    </div>
  );
};
