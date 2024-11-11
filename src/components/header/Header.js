import React, { useState } from "react";
import Sprite from "../../UI/sprite/Sprite";
import List from "./List";
import Logo from "./Logo";
import ButtonIcon from "./ButtonIcon";
import { Link } from "react-router-dom";

import User from "./User";
import "./header.css";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <header
      className={`header header-absolute${active ? "header--active" : ""}`}
    >
      <div className="container header__inner">
        <button
          className="header__menu-button"
          onClick={() => setActive((b) => !b)}
        >
          <Sprite icon="hamburger" width={24} height={24} />
        </button>
        <Logo />
        <nav className="header__nav">
          <div className="header__menu">
            <List />
            <ul className="header__list header__ml">
              <li className="header__item">
                <Link className="header__link" to="#">
                  Блог
                </Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="#">
                  Планы подписки
                </Link>
              </li>
            </ul>
            <ButtonIcon />
          </div>
          <User />
        </nav>
      </div>
    </header>
  );
}

export default Header;
