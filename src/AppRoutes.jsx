import React from "react";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Homepage, ProductDescription, Results, SearchResults } from "./pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/product-description" element={<ProductDescription />} />

      <Route path="/" element={<Layout />}>
        <Route path="results/" element={<Results />} />
      </Route>

      <Route path="*" element={<p style={{ fontSize: 50 }}>Not page</p>} />
    </Routes>
  );
}

export default AppRoutes;
