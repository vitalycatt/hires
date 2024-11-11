import classnames from "classnames";

export const Button = ({
  type,
  title,
  onClick,
  leftIcon,
  children,
  rightIcon,
  className,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={classnames("flex justify-center items-center", className)}
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
