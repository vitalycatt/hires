import React from "react";
import Videos from "../../components/results/videos/Videos";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

export const Results = () => {
  const { search } = useLocation();
  const queryParams = queryString.parse(search);
  const key = Object.keys(queryParams)[0];

  return <>{key === "videos" && <Videos />}</>;
};
