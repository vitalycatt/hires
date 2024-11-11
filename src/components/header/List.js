import React from "react";
import Sprite from "../../UI/sprite/Sprite";
import { Link } from "react-router-dom";
import { navigation } from "../../utils/constants";

function List() {
  return (
    <ul className="header__list">
      {Object.keys(navigation).map((key) => {
        const item = navigation[key];
        return (
          <li className="header__item" key={key}>
            <Sprite icon={item.icon} width={20} height={20} />
            <Link className="header__link" to={item.to}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
