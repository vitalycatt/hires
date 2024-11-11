import React, { useEffect, useState } from "react";
import Basket from "../../UI/basket/Basket";
import Sprite from "../../UI/sprite/Sprite";

import "./card.css";

function Card({ item, className, ...styles }) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setShouldPlay(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShouldPlay(false);
    }
  }, [isHovered]);

  return (
    <div
      style={styles}
      className={`card${className ? " " + className : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {shouldPlay && (
        <video
          className="card__video"
          src="./media/video-1.mp4"
          autoPlay={true}
          loop
          muted
        />
      )}
      <img className="card__image" src={item.src} alt="card-image" />

      <div className="card__hover-content">
        <Basket className="card__basket" />
        <div className="card__top-info">
          <p className="card__name">{item.name}</p>
          <span className="card__time">{item.time}</span>
        </div>
        <div className="card__bottom">
          <button className="card__button">
            <Sprite icon="more" width={13} height={12} />
            <span className="card__button-value">Похожее</span>
          </button>
          <button className="card__button">
            <Sprite icon="bookmark" width={16} height={16} />
          </button>
          <button className="card__button">
            <Sprite icon="heart" width={16} height={16} />
          </button>
          <button className="card__button">
            <Sprite icon="share-1" width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
