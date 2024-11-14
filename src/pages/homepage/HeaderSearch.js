import React, { useState } from "react";
import Sprite from "../../UI/sprite/Sprite";
import Search from "../search/Search";
import Logo from "../../components/header/Logo";
import ButtonIcon from "./ButtonIcon";
import { Link, useLocation } from "react-router-dom";
import User from "../../components/header/User";
import List from "../../components/header/List";

function HeaderSearch() {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  const resultsPage = pathname === "/results";

  return (
    <header className={`header${active ? " header--active" : ""}`}>
      <div className="container header__inner header__inner-search">
        <button
          className="header__menu-button"
          onClick={() => setActive((b) => !b)}
        >
          <Sprite icon="hamburger" width={24} height={24} />
        </button>
        <Logo />
        <Search maxWidth={720} placeholder="Запрос..." />
        <nav className="header__nav">
          <div className="header__menu">
            <List />
            <div className="header__item header__ml">
              <Link className="header__link" to="#">
                Планы подписки
              </Link>
            </div>
            <ButtonIcon />
          </div>
          <User authorization={true} />
        </nav>
      </div>
      {!resultsPage && <div> bottom</div>}
    </header>
  );
}

export default HeaderSearch;
