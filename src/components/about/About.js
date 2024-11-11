import React from "react";
import Slider from "./Slider";

import "./about.css";

function About() {
  return (
    <section className="about">
      <div className="container-m about__inner">
        <div className="about__wrapper">
          <Slider />
        </div>
        <div className="about__descr">
          <h3 className="about__title">О нас</h3>
          <p className="about__text">
            <span>Наша команда имеет огромный опыт сотрудничества</span>{" "}
            <span> мировыми стоковыми платформами. Благодаря</span>
            <span> с накопленным знаниям появился Hi-Res — маркетплейс</span>
            <span>
              {" "}
              для покупки и продажи качественного мультимедийного{" "}
            </span>{" "}
            <span> контента.</span>
            <span className="about__text-mt">
              Мы тщательно продумали и разработали{" "}
              <span>нашу площадку с учетом всех потребностей</span> {' '}
              <span>российских клиентов.</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
