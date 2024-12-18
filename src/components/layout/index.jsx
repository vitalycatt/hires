import { Header } from "./header";
import { Footer } from "../footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { contentNavigationData } from "../../data";

export const Layout = () => {
  const location = useLocation();

  const isNavigationPages = [
    "/author",
    "/profile",
    "/subscription",
    "/shopping-cart",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {isNavigationPages.find((path) => path === location.pathname) && (
        <ul className="relative left-1/2 -translate-x-1/2 w-full h-10 flex justify-center items-center gap-[58px] bg-[#F0F0F3] md:hidden">
          {contentNavigationData.map((item, index) => (
            <li
              className="flex gap-[10.5px] font-medium text-[#1C2024] first:text-[#008647]/80 cursor-pointer"
              key={index}
            >
              <img src={item.url} alt="content-icon" />

              <div>{item.label}</div>
            </li>
          ))}
        </ul>
      )}
      <Outlet />

      <Footer />
    </div>
  );
};
