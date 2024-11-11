import React, { useEffect, useState } from "react";
import Sprite from "../../UI/sprite/Sprite";
import { useInView } from "@react-spring/web";

function Payment() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  const [effect, setEffect] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setEffect(true);
      }, 500);

      return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    } else setEffect(false);
  }, [inView]);

  return (
    <div className="company__payment">
      <div className="company__image-wrapper">
        <img
          className="company__image"
          src="./images/image.png"
          alt="company-image"
        />
        <button className="company__image-button">
          <Sprite icon="image-icon" width={21} height={21} />
        </button>
      </div>
      <div className="company__payment-content">
        <img className="company__text" src="./images/text.svg" alt="text" />
        <div
          ref={inViewRef}
          className={`company__price ${effect ? "company__price--active" : ""}`}
        >
          <span>1 500 ₽</span>
        </div>
      </div>
    </div>
  );
}

export default Payment;
