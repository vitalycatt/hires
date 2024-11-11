import React, { useRef } from "react";

function List() {
  const ref = useRef();
  return (
    <ul className="top__list">
      <li className="top__item">
        <img
          className="top__item-icon"
          src="./images/top/icon-1.svg"
          alt="icon"
        />
        <h5 className="top__item-title">Поддержка 24/7 </h5>
        <p className="top__item-text">
          <span>Максимально гибкие</span>
          <span>и выгодные условия</span>
          сотрудничества
        </p>
      </li>
      <li className="top__item">
        <img
          className="top__item-icon"
          src="./images/top/icon-2.svg"
          alt="icon"
        />
        <h5 className="top__item-title">Оплата в рублях </h5>
        <p className="top__item-text">
          <span>Кредитной картой РФ</span>
          или по безналичному расчету
        </p>
      </li>
      <li className="top__item" ref={ref}>
        <img
          className="top__item-icon"
          src="./images/top/icon-3.svg"
          alt="icon"
        />
        <h5 className="top__item-title">Коллекция </h5>
        <p className="top__item-text">
          <span>500 млн + материалов</span>
          <span>от ведущих мировых стоковых</span>
          площадок
        </p>
      </li>
      <li className="top__item">
        <img
          className="top__item-icon"
          src="./images/top/icon-4.svg"
          alt="icon"
        />
        <h5 className="top__item-title">Умный поиск </h5>
        <p className="top__item-text">
          <span>Эксклюзивные алгоритмы ИИ</span>
          <span>для быстрого и точного</span>
          поиска материалов
        </p>
      </li>
    </ul>
  );
}

export default List;
