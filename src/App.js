import "./App.css";
import Hero from "./Components/Hero";
import "./css/tokens.css";
import {  useRef } from "react";
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
    <div className="App" style={{ height: "100vh", display: "flex" }}>
      <NavigationRail theme={theme.current} toggle={toggleTheme} />
      <div
        className="Content-container"
        style={{
          height: "100vh",
          overflowY: "scroll",
          width: "100%"
         
        }}
      >
        <Hero />
      </div>
    </div>
  );
}
export default App;
