import React from "react";
import { Link } from "react-router-dom";
import Sprite from "../../UI/sprite/Sprite";

function ResultsLink({ className='' }) {
  return (
    <Link className={`search__link ${className}`}>
      <Sprite icon="search-icon" width={22} height={24} />
    </Link>
  );
}

export default ResultsLink;
