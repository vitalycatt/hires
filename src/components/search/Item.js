import React from "react";
import { navigation } from "../../utils/constants";

function Item({ itemKey,setSelected }) {
  const item = navigation[itemKey];
  return (
    <li className="search__item">
      <button
        className="search__item-button"
        type="button"
        onClick={() => setSelected(itemKey)}
      >
        {item.title}
      </button>
    </li>
  );
}

export default Item;
