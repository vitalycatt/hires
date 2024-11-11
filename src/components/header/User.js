import React from "react";
import Sprite from "../../UI/sprite/Sprite";
import { Link } from "react-router-dom";

function User({ authorization }) {
  return (
    <div className="header__wrapper sm:order-2 sm:ml-2">
      {authorization ? (
        <button className="header__user">
          <div
            className="header__photo"
            style={{ backgroundColor: "#f4008c17", color: "#F4008C" }}
          >
            <span>K</span>
          </div>
          <span className="header__user-name">Константин</span>
          <Sprite icon="arrow-bottom" width={16} height={16} />
        </button>
      ) : (
        <Link className="header__sign" to="#">
          <span>Войти</span>
          <Sprite icon="avatar" width={20} height={20} />
        </Link>
      )}
    </div>
  );
}

export default User;
