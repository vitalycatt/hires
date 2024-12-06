import classnames from "classnames";

export const Button = ({
  type,
  title,
  onClick,
  disabled,
  leftIcon,
  children,
  rightIcon,
  className,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={classnames(
        "flex justify-center items-center border border-solid border-[#1F2D5C] transition-all duration-300 hover:bg-transparent hover:text-[#1F2D5C] hover:border hover:border-solid hover:border-[#8B8D98] disabled:bg-[#C1D0FF] disabled:text-white/80",
        className
      )}
      disabled={disabled}
    >
      <div className="flex items-center gap-1">
        {leftIcon && <img src={leftIcon} alt="left-icon" />}
        {title}
        {rightIcon && <img src={rightIcon} alt="right-icon" />}
      </div>

      {children}
    </button>
  );
};
