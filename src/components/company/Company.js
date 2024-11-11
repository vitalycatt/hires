import React from "react";
import Descr from "./Descr";
import Slider from "./Slider";
import Payment from "./Payment";
import Documents from "./Documents";
import Sprite from "../../UI/sprite/Sprite";
import { Link } from "react-router-dom";

import "./company.css";

function Company() {
  return (
    <section className="company">
      <div className="container-m">
        <h3 className="company__title">Для компаний</h3>
        <div className="company__content">
          <div className="company__item company__item--first">
            <Descr
              icon={"crown"}
              color={"yellow"}
              top="Постоянная поддержка"
              title="Сопровождение"
              list={[
                "Индивидуальный менеджер на связи 24/7",
                "Создание аккаунтов с персональной настройкой",
                "Бесплатный доступ к материалам в высоком разрешении для макетирования",
              ]}
              link="#"
            />

            <div className="company__block company__slider-block">
              <Slider />
            </div>
            <Link className="button company__button" to="#">
              <span>Присоединиться</span>
              <Sprite icon="button-icon" width={20} height={20} />
            </Link>
          </div>
          <div className="company__item">
            <div className="company__block company__block-payment">
              <Payment />
            </div>

            <Descr
              icon={"star"}
              color={"green"}
              top="Удобство оплаты"
              title="Взаиморасчеты"
              list={[
                <>Согласованные фиксированные  стоимости <br /> на материалы</>,
                "Различные формы оплаты, включая постоплатус отсрочкой платежа",
              ]}
              link="#"
            />
            <Link className="button company__button" to="#">
              <span>Присоединиться</span>
              <Sprite icon="button-icon" width={20} height={20} />
            </Link>
          </div>
          <div className="company__item company__item--last">
            <div className="company__block company__documents-block">
              <Documents />
            </div>
            <Descr
              icon="document"
              color={"purple"}
              top="Документация"
              title="Юридическая поддержка"
              list={[
                "Полный пакет финансовых и юридических документов согласно законодательству РФ",
                <>Оформление лицензии с детализацией материалов <span> по каждому проекту</span></>,
              ]}
              link="#"
            />
            <Link className="button company__button" to="#">
              <span>Присоединиться</span>
              <Sprite icon="button-icon" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
