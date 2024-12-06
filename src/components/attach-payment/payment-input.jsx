import classnames from "classnames";

export const PaymentInput = ({
  url,
  label,
  className,
  placeholder,
  defaultValue,
  imgClassName,
}) => {
  return (
    <div className={classnames("w-full flex flex-col", className)}>
      <label
        htmlFor={label}
        className="font-medium text-[#1C2024] text-sm leading-4"
      >
        {label}
      </label>

      <div className="w-full mt-3 h-8 px-3 flex items-center justify-between border border-solid border-[#000932]/10 bg-white/90 rounded-md">
        <input
          id={label}
          type="text"
          className="w-full text-[#000509]/90 font-madium text-sm leading-5 placeholder:text-[#00051D]/40"
          placeholder={placeholder}
          defaultValue={defaultValue}
        />

        {url && (
          <img
            src={url}
            alt="input-icon"
            className={classnames("cursor-pointer", imgClassName)}
          />
        )}
      </div>
    </div>
  );
};
