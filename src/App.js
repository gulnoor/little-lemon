import '@material/web/textfield/outlined-text-field'

import "./App.css";
import Hero from "./Components/Hero";
import NavigationRail from "./Components/NavigationRail";
import { useRef } from "react";
import TopNav from "./Components/TopNav";
import AboutUs from "./Components/AboutUs";
import BookingPage from './Components/BookingPage';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

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
    <div className="App" style={{ height: "100vh", display: "flex", background: "var(--md-sys-color-surface)" }}>
      <NavigationRail theme={theme.current} toggle={toggleTheme} />
      <main
        className="Content-container"
        style={{
          height: "100vh",
          overflowY: "scroll",
          width: "100%"
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservation' element={<BookingPage />} />
        </Routes>
        <AboutUs></AboutUs>
      </main>
      <footer></footer>
    </div>
  );
}
export default App;
