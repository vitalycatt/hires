import React from "react";
import Sprite from "../../UI/sprite/Sprite";
import { navigation } from "../../utils/constants";
import Dropdown from "rc-dropdown";
import Item from "./Item";

function SearchSelect({ selected, setSelected }) {
  const item = navigation[selected];
  const list = (
    <ul className={`search__list`}>
      {Object.keys(navigation).map((key) => (
        <Item key={key} itemKey={key} setSelected={setSelected} />
      ))}
    </ul>
  );

  return (
    <div className="search__select">
      <Dropdown overlay={list} trigger={["click"]}>
        <button className="search__select-button" type="button">
          <span>{item.title}</span>
          <Sprite icon="arrow-bottom" width={16} height={16} />
        </button>
      </Dropdown>
    </div>
  );
}

export default SearchSelect;
