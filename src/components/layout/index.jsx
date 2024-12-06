import { Header } from "./header";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
