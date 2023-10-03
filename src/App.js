import NavigationRail from "./Components/NavigationRail";
import { createContext, useEffect, useState } from "react";
import BookingPage from "./Components/BookingPage";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SubmissionDialogue from "./Components/SubmissionDialogue";
import Menu, { MenuList } from "./Components/Menu";
import Footer from "./Components/Footer";
import useMenu from "./hooks/useMenu";
import SignIn from "./Components/SignIn";

export const themeContext = createContext();

function App() {
  if (!window.localStorage.getItem("theme")) {
    window.localStorage.setItem("theme", "dark");
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
          background: "var(--md-sys-color-background)",
        }}
      >
        <NavigationRail />
        <main
          className="Content-container"
          style={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
            overflowY: "scroll",
            width: "100%",
            willChange: "transform",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
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
            <Route path="/menu" element={<Menu />} >
              <Route path="" element={<MenuList menu={useMenu()} category={"All"}/>}></Route>
              <Route path="salads" element={<MenuList menu={useMenu()} category={"Salad"}/>}></Route>
              <Route path="appetizers" element={<MenuList menu={useMenu()} category={"Appetizer"}/>}></Route>
              <Route path="entree" element={<MenuList menu={useMenu()} category={"Entree"}/>}></Route>
              <Route path="desserts" element={<MenuList menu={useMenu()} category={"Dessert"}/>}></Route>
            </Route>
            
          </Routes>
          <Footer />
        </main>
      </div>
    </themeContext.Provider>
  );
}
export default App;
