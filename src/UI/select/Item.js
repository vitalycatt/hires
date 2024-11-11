import React from "react";

function Item({ item, setSelected }) {
  return (
    <li className="select__item">
      <button className="select__item-button" onClick={() =>setSelected(item)}>
        {item}
      </button>
    </li>
  );
}

export default Item;
