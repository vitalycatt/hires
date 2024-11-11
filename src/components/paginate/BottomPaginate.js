import React from "react";
import ReactPaginate from "react-paginate";

import "./paginate.css";
import Sprite from "../../UI/sprite/Sprite";

function BottomPaginate({ pageCount = 1, onPageChange = () => null }) {
  return (
    <>
      <ReactPaginate
        previousLabel={<Sprite icon="arrow-left" width={26} height={26} />}
        nextLabel={<Sprite icon="arrow-right" width={26} height={26} />}
        breakLabel={"...|"}
        pageClassName="pagination__button"
        breakClassName={"pagination__button"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        activeClassName={"pagination__button--active"}
        previousClassName={"pagination__prev"}
        nextClassName={"pagination__next"}
        renderOnZeroPageCount={null}
       
      />
    </>
  );
}

export default BottomPaginate;
