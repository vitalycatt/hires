import React from "react";
import Button from "../../../UI/button/Button";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Selects from "./Selects";
import Item from "./Item";

import "./filter.css";

function ResultsFilter({ title, filterItems = [], setOpenFilter }) {
  const location = useLocation();

  const queryParams = queryString.parse(location.search);
  const key = Object.keys(queryParams)[0];

  return (
    <div className="results-filter">
      <div className="container results-filter__inner">
        <Button
          className="results-filter__button"
          count={filterItems.length}
          setting={true}
          func={() => setOpenFilter((b) => !b)}
        >
          Фильтры
        </Button>
        <div className="results-filter__wrapper">
          <h4 className="results-filter__title">
            {title} по запросу «{queryParams[key]}»{" "}
          </h4>
          <p className="results-filter__count">25.856.471 материала</p>
        </div>
        <Selects />
        <div className="results-filter__items">
          {filterItems.map((item) => (
            <Item>{item}</Item>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultsFilter;
