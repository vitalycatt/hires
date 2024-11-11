import React, { useEffect, useRef, useState } from "react";
import Sprite from "../../UI/sprite/Sprite";
import SearchSelect from "./SearchSelect";
import ResultsLink from "./ResultsLink";
import queryString from "query-string";
import { Formik, Form, Field } from "formik";
import { useNavigate, useLocation } from "react-router-dom";

import "./search.css";

function Search({ select, placeholder = "Введите ваш запрос |", ...styles }) {
  const formikRef = useRef();
  const [selected, setSelected] = useState(select ? select : "images");
  const navigate = useNavigate();
  const { pathname, ...location } = useLocation();
  const resultsPage = pathname === "/results";

  const handleSubmit = (e) => {
    navigate(`/results?${selected}=${e.value}`);
  };

  useEffect(() => {
    if (resultsPage) {
      const queryParams = queryString.parse(location.search);
      const key = Object.keys(queryParams)[0];
      setSelected(key);
      formikRef.current.setValues({ value: queryParams[key] });
    }
  }, [location.search, resultsPage]);

  return (
    <div className="search" style={styles}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ value: "" }}
        innerRef={formikRef}
      >
        <Form className="search__form">
          <SearchSelect selected={selected} setSelected={setSelected} />

          <Field
            className="search__input"
            type="text"
            name="value"
            placeholder={placeholder}
          />

          {resultsPage && <ResultsLink className="search__link-m" />}
          <button className="search__button" type="submit">
            <Sprite width={18} height={18} icon="search" />
          </button>
        </Form>
      </Formik>

      {resultsPage && <ResultsLink />}
    </div>
  );
}

export default Search;
