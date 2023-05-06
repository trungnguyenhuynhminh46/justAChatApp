import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";
// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ThemeSettings from "./components/settings";

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        {" "}
        <Router />{" "}
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
