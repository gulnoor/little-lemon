import NavigationRail from "./Components/NavigationRail";
import { createContext, useContext } from "react";
import BookingPage from "./Components/BookingPage";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SubmissionDialogue from "./Components/SubmissionDialogue";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
import MenuProvider from "./context/MenuContext";
import "./App.css";
import UserProvider from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

export const themeContext = createContext();

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <UserProvider>
      <MenuProvider>
        <div
          className={`App ${theme}`}
          style={{
            // height: "100vh",
            display: "flex",
            background: "var(--md-sys-color-background)",
          }}
        >
          <NavigationRail />
          <main
            className="Content-container"
            style={{
              // position: "relative",
              // height: "100vh",
              // overflow: "hidden",
              // overflowY: "scroll",
              width: "100%",
              // willChange: "transform",
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
              <Route path="/menu/*" element={<Menu />}></Route>
            </Routes>
            <Footer />
          </main>
        </div>
      </MenuProvider>
    </UserProvider>
  );
}
export default App;
