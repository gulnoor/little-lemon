import '@material/web/textfield/outlined-text-field'

import "./App.css";

import NavigationRail from "./Components/NavigationRail";
import { useEffect, useRef, useState } from "react";

import BookingPage from './Components/BookingPage';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import SubmissionDialogue from './Components/SubmissionDialogue';

function App() {

  if (!window.localStorage.getItem("theme")) {
    window.localStorage.setItem("theme", "light")
  }



  const [activeTheme, setActiveTheme] = useState(window.localStorage.getItem("theme"))
  const toggleActiveTheme = () => {
    activeTheme === "light"
      ? setActiveTheme(() => "dark")
      : setActiveTheme(() => "light")

  }
  const rootElement = useRef(document.querySelector("html"));


  useEffect(() => {
      window.localStorage.setItem("theme", activeTheme)
  })

  useEffect(() => {

    if (activeTheme === "light") {
      rootElement.current.className = "light";
    } else {
      rootElement.current.className = "dark";
    }

  },[activeTheme])









  // const theme = useRef("light");
  // const toggleTheme = () => {
  //   if (theme.current === "light") {
  //     document.querySelector("html").className = "dark";
  //     theme.current = "dark";
  //   } else {
  //     document.querySelector("html").className = "light";
  //     theme.current = "light";
  //   }
  // };

  return (
    <div className="App" style={{ height: "100vh", display: "flex", background: "var(--md-sys-color-surface)" }}>
      <NavigationRail theme={activeTheme} toggle={toggleActiveTheme} />
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
          <Route path='/successful' element={<SubmissionDialogue heading="Submission Successful" message="Thank You for reserving your table. Looking forward to see you" />} />
        </Routes>

      </main>
      <footer></footer>
    </div>
  );
}
export default App;
