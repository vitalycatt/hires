import React from "react";
import Search from "../search/Search";
import Nav from "./Nav";
import List from "./List";
import TopPosterImage from "../../assets/images/top-poster.png";

import "./top.css";

function Top() {
  return (
    <section className="top">
      <video className="top__video" poster={TopPosterImage} />

      <div className="container top__inner">
        <p className="top__above-title">Российская стоковая площадка</p>
        <h1 className="top__title">
          500+ млн материалов для реализации ваших идей{" "}
        </h1>
        <p className="top__text">
          Различные виды контента на одной платформе от авторов со всего мира с
          оплатой в рублях
        </p>
        <Search select={"music"} width={"100%"} maxWidth={768} />
        <Nav />
        <List />
      </div>
    </section>
  );
}

export default Top;
