import React from "react";
import HeaderSearch from "../components/header/HeaderSearch";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <HeaderSearch />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
