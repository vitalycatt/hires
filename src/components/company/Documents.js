import { useInView } from "@react-spring/web";
import React, { useEffect, useState } from "react";

function Documents() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);

      return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    } else setShow(false);
  }, [inView]);
  return (
    <div
      className={`company__documents ${
        show ? "company__documents--active" : ""
      }`}
      ref={inViewRef}
    >
      <div className="company__document company__document-first">
        <img
          className="company__document-image"
          src="./images/doc3.svg"
          alt="doc-image"
        />
      </div>
      <div className="company__document company__document-second">
        <img
          className="company__document-image"
          src="./images/doc2.svg"
          alt="doc-image"
        />
      </div>
      <div className="company__document company__document-last">
        <img
          className="company__document-image"
          src="./images/doc.svg"
          alt="doc-image"
        />
      </div>
    </div>
  );
}

export default Documents;
