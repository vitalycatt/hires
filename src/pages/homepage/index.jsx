import Top from "../../components/top/Top";
import Line from "../../components/line/Line";
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Company from "../../components/company/Company";
import { Footer } from "../../components/footer/Footer";

export const Homepage = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Line />
        <Top />
        <About />
        <Company />
      </main>

      <Footer />
    </>
  );
};
