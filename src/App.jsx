import { Theme } from "@radix-ui/themes";
import AppRoutes from "./AppRoutes";
import Footer from "./components/footer/Footer";
import "rc-dropdown/assets/index.css";
import "rc-slider/assets/index.css";
import "./styles/index.css";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <Theme>
      <div className="App">
        <AppRoutes />

        <Footer />
      </div>
    </Theme>
  );
}

export default App;
