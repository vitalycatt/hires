import React, { useState } from "react";
import Sprite from "../sprite/Sprite";
import Dropdown from "rc-dropdown";
import Item from "./Item";

import "./select.css";

function Select({ children, list }) {
  const [selected, setSelected] = useState(list[0]);
  const dropdownList = (
    <ul className="select__list">
      {list
        .filter((item) => item !== selected)
        .map((item) => (
          <Item item={item} setSelected={setSelected} />
        ))}
    </ul>
  );
  return (
    <div className="select">
      <p className="select__title">{children}</p>
      <div className="select__wrapper">
        <Dropdown overlay={dropdownList} trigger={['click']}>
          <button className="select__button" type="button">
            <span>{selected}</span>
            <Sprite icon="arrow-bottom" width={16} height={16} />
          </button>
        </Dropdown>
      </div>
    </div>
  );
}

export default Select;
