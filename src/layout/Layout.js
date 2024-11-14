import React from "react";
import HeaderSearch from "../components/header/HeaderSearch";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";

function LayoutOld() {
  return (
    <>
      <HeaderSearch />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default LayoutOld;
