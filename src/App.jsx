import { AppRoutes } from "./AppRoutes";

import "rc-dropdown/assets/index.css";
import "rc-slider/assets/index.css";
import "./styles/index.css";
import "@radix-ui/themes/styles.css";

export const App = () => (
  <div className="App">
    <AppRoutes />
  </div>
);
