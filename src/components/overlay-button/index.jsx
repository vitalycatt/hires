import classnames from "classnames";

export const OverlayButton = ({
  buttonUrl,
  hoverIconUrl,
  className,
  overlayPlacement,
}) => {
  return (
    <div
      className={classnames(
        "h-8 w-8 flex justify-center items-center rounded-md cursor-pointer group/button transition-all duration-300 hover:bg-white hover:border-none",
        {
          "bg-[#D2DEFF]": overlayPlacement === "top",
          "bg-[#1F2D5C]/70 border-solid border-[#1F2D5C] border-[1px]":
            overlayPlacement === "down",
          className,
        }
      )}
    >
      <img
        src={buttonUrl}
        alt="shoping-cart"
        className="group-hover/button:hidden"
      />
      {hoverIconUrl && (
        <img
          src={hoverIconUrl}
          alt="shoping-cart"
          className="group-hover/button:block hidden size-4"
        />
      )}
    </div>
  );
};
