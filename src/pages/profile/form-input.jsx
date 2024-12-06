import classnames from "classnames";

export const FormInput = ({ label, url, className }) => {
  return (
    <div className={classnames("w-full flex flex-col gap-2", className)}>
      <label htmlFor={label} className=" text-[#1C2024] text-xs leading-4">
        {label}
      </label>

      <div className="w-full h-12 px-4 flex items-center justify-between border border-solid border-[#000932]/10 bg-white/90 rounded-lg">
        <input
          id={label}
          type="text"
          className="w-full text-[#000509]/90 text-sm leading-5"
          placeholder={label}
        />

        {url && <img src={url} alt="input-icon" className="cursor-pointer" />}
      </div>
    </div>
  );
};
