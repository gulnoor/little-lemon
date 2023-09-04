import "./App.css";
import Input from "./Components/Input";
import Hero from "./Components/Hero";
import NavigationRail from "./Components/NavigationRail";
import {  useRef } from "react";
import TopNav from "./Components/TopNav";
import AboutUs from "./Components/AboutUs";

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
    <div className="App" style={{ height: "100vh", display: "flex",background:"var(--md-sys-color-surface)" }}>
      <NavigationRail theme={theme.current} toggle={toggleTheme} />
      <main
        className="Content-container"
        style={{
          height: "100vh",
          overflowY: "scroll",
          width: "100%"
        }}
        >
        <Hero />
        <TopNav></TopNav>
        <Input label="Name"/>
        <AboutUs></AboutUs>
      </main>
      <footer></footer>
    </div>
  );
}
export default App;
