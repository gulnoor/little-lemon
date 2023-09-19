// import '@material/web/textfield/outlined-text-field'

import NavigationRail from "./Components/NavigationRail";
import { createContext, useEffect, useState } from "react";

import BookingPage from "./Components/BookingPage";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SubmissionDialogue from "./Components/SubmissionDialogue";

export const themeContext = createContext();

function App() {
  if (!window.localStorage.getItem("theme")) {
    window.localStorage.setItem("theme", "light");
  }
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));
  const toggleTheme = () => {
    theme === "light" ? setTheme(() => "dark") : setTheme(() => "light");
  };

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`App ${theme}`}
        style={{
          height: "100vh",
          display: "flex",
          background: "var(--md-sys-color-surface)",
        }}
      >
        <NavigationRail /* theme={activeTheme} toggle={toggleActiveTheme} */ />
        <main
          className="Content-container"
          style={{
            height: "100vh",
            overflowY: "scroll",
            width: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<BookingPage />} />
            <Route
              path="/successful"
              element={
                <SubmissionDialogue
                  heading="Submission Successful"
                  message="Thank You for reserving your table. Looking forward to see you"
                />
              }
            />
          </Routes>
          <footer></footer>
        </main>
      </div>
    </themeContext.Provider>
  );
}
export default App;
