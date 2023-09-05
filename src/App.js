import'@material/web/textfield/outlined-text-field'

import "./App.css";
import Hero from "./Components/Hero";
import NavigationRail from "./Components/NavigationRail";
import {  useRef } from "react";
import TopNav from "./Components/TopNav";
import AboutUs from "./Components/AboutUs";
import ReservationForm from "./Components/ReservationForm";

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
          <br />
          <form action="">

          <label htmlFor="email">Email</label>
          <md-outlined-text-field id={"email"}label="Email"  type="date" ></md-outlined-text-field>
          </form>
          
        <ReservationForm />
        <Hero />
        <TopNav></TopNav>
        <AboutUs></AboutUs>
      </main>
      <footer></footer>
    </div>
  );
}
export default App;
