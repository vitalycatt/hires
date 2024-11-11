import React, { useState } from "react";
import ResultsFilter from "../filter/ResultsFilter";
import Vertical from "./Vertical";
import Horizontal from "./Horizontal";
import BottomPaginate from "../../paginate/BottomPaginate";
import Select from "../../../UI/select/Select";
import Filter from "../filter/Filter";
import Slider from "rc-slider";

import "./videos.css";

const filterItems = [
  "Вертикальные",
  "mp4",
  "Редакционный",
  "Исключить созданные ИИ",
  "Поштучный выкуп",
  "4k",
];

function Videos() {
  const type = "horizontal";
  const [range, setRange] = useState([20, 50]);
  const [openFilter, setOpenFilter] = useState(false);
  const handleSliderChange = (value) => {
    setRange(value);
  };

  const data = [
    { price: 11, count: 3 },
    { price: 12, count: 3 },
    { price: 13, count: 3 },
    { price: 14, count: 3 },
    { price: 10, count: 3 },
    { price: 10, count: 3 },
    { price: 20, count: 15 },
    { price: 30, count: 2 },
    { price: 40, count: 8 },
    { price: 50, count: 6 },
  ];
  return (
    <>
      <section className="videos">
        <ResultsFilter
          title={"Видео"}
          filterItems={filterItems}
          setOpenFilter={setOpenFilter}
        />
        <div className="container videos__inner">
          <div className="videos__content">
            {openFilter && (
              <Filter>
                <div
                  style={{
                    width: "300px",
                    margin: "50px auto",
                    position: "relative",
                  }}
                >
                  {" "}
                  <Slider
                    range
                    min={0}
                    max={100}
                    defaultValue={range}
                    onChange={handleSliderChange}
                  />{" "}
                  <div className="range-indicators">
                    {" "}
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className="range-indicator"
                        style={{
                          height: `${item.count * 5}px`,
                          left: `${index * 1.2}px`,
                        }}
                      />
                    ))}
                  </div>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    <span>Min: {range[0]}</span> <span>Max: {range[1]}</span>{" "}
                  </div>{" "}
                </div>
              </Filter>
            )}
            {type === "horizontal" ? (
              <Horizontal
                className={openFilter ? "videos__filter-active" : ""}
              />
            ) : (
              <Vertical className={openFilter ? "videos__filter-active" : ""} />
            )}
          </div>
          <div className="bottom">
            <BottomPaginate pageCount={1089} />
            <Select list={[48, 64, 96, 120]}>Количество на странице:</Select>
          </div>
        </div>
      </section>
    </>
  );
}

export default Videos;
