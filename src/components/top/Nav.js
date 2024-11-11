import React from "react";
import Sprite from "../../UI/sprite/Sprite";
import { Link } from "react-router-dom";
import { navigation } from "../../utils/constants";

function Nav() {
  return (
    <nav className="top__nav">
      <ul className="top__nav-list">
        {Object.keys(navigation).map((key) => {
          const item = navigation[key];
          return (
            <li className="top__nav-item" key={key}>
              <Link className="top__link" to={item.to}>
                <Sprite icon={item.icon} width={24} height={24} />
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
