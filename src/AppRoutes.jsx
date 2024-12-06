import { Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  Author,
  Product,
  Results,
  Profile,
  Homepage,
  NoneFound,
  ShoppingCart,
  Subscription,
  SearchResults,
} from "./pages";

import LayoutOld from "./layout/Layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/" element={<Layout />}>
        <Route path="author" element={<Author />} />
        <Route path="profile" element={<Profile />} />
        <Route path="product" element={<Product />} />
        <Route path="none-found" element={<NoneFound />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="search-results" element={<SearchResults />} />
      </Route>

      <Route path="/" element={<LayoutOld />}>
        <Route path="results/" element={<Results />} />
      </Route>

      <Route path="*" element={<p style={{ fontSize: 50 }}>Not page</p>} />
    </Routes>
  );
};
