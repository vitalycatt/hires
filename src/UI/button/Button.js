import React from "react";

import "./button.css";
import Sprite from "../sprite/Sprite";

function Button({
  className,
  count,
  children,
  setting = false,
  func = () => null,
}) {
  return (
    <button
    onClick={func}
      className={`button${className ? " " + className : ""}${
        setting ? " button-setting" : ""
      }`}
    >
      <span> {children}</span>
      {count && <div className="button__count">{count}</div>}
      {setting && (
        <Sprite
          classIcon={"button__setting-icon"}
          icon="setting"
          width={24}
          height={24}
        />
      )}
    </button>
  );
}

export default Button;
