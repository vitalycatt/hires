import Top from "../../components/top/Top";
import Line from "../../components/line/Line";
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Company from "../../components/company/Company";

export const Homepage = () => (
  <>
    <Header />

    <main className="main">
      <Line />
      <Top />
      <About />
      <Company />
    </main>
  </>
);
