import { Header } from "./header";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <div className="max-w-[1360px] md:w-full">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
