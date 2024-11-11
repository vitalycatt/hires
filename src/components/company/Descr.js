import React from "react";
import Sprite from "../../UI/sprite/Sprite";

function Descr({ icon, color, top, title, list }) {
  return (
    <div className="company__descr">
      <div className={`company__descr-top company__descr-top--${color}`}>
        <Sprite icon={icon} width={16} height={16} />
        <span>{top}</span>
      </div>
      <h5 className="company__descr-title">{title}</h5>
      <ul className="company__list">
        {list.map((text, index) => (
          <li className="company__list-item" key={index}>
            <Sprite icon="check" width={20} height={24} />
            <p className="company__item-text">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Descr;
