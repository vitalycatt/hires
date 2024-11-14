import { Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import { Homepage, NoneFound, Product, Results, SearchResults } from "./pages";

import LayoutOld from "./layout/Layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/" element={<Layout />}>
        <Route path="none-found" element={<NoneFound />} />
        <Route path="search-results" element={<SearchResults />} />
        <Route path="product-description" element={<Product />} />
      </Route>

      <Route path="/" element={<LayoutOld />}>
        <Route path="results/" element={<Results />} />
      </Route>

      <Route path="*" element={<p style={{ fontSize: 50 }}>Not page</p>} />
    </Routes>
  );
};
