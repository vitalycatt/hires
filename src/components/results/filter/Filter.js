import React from "react";

function Filter({children}) {
  return (
    <div className="filter">
      <div className="filter__content">
        <form className="filter__form">
            {children}
        </form>
      </div>
    </div>
  );
}

export default Filter;
