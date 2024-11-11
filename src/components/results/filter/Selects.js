import React from "react";
import Select from "../../../UI/select/Select";

const sortList = ["Новизне"];
const countList = [48, 64, 96, 120];
function Selects() {
  return (
    <div className="results-filter__selects">
      <Select list={sortList}>Сортировать по:</Select>
      <Select list={countList}>Количество на странице:</Select>
    </div>
  );
}

export default Selects;
