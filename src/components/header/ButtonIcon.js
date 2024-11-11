import React from "react";
import Sprite from "../../UI/sprite/Sprite";

function ButtonIcon() {
  return (
    <button className="header__button-icon">
      <span>Для компаний</span>

      <Sprite icon="lightning" width={16} height={16} />
    </button>
  );
}

export default ButtonIcon;
