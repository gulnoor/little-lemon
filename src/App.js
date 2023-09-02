import "./App.css";
import "./css/tokens.css";
import { useState, useRef } from "react";
import NavigationRail from "./Components/NavigationRail";
function App() {
  const theme = useRef("light");

  const toggleTheme = () => {
    if (theme.current === "light") {
      document.querySelector("html").className = "dark";
      theme.current = "dark";
    } else {
      document.querySelector("html").className = "light";
      theme.current = "light";
    }
  };

  return (
    <div className="App">
      <NavigationRail theme={theme.current} toggle={toggleTheme} />
    </div>
  );
}
export default App;
