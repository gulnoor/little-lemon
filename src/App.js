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
import CartProvider from "./context/CartContext";
import Checkout from "./Components/Checkout";
import MUIThemeProvider from "./context/MUITheme";

export const themeContext = createContext();

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <MUIThemeProvider>
      <UserProvider>
        <MenuProvider>
          <CartProvider>
            <div
              className={`App ${theme}`}
              style={{
                display: "flex",
                background: "var(--md-sys-color-background)",
                width: "100%",
              }}
            >
              <NavigationRail />

              <main
                className="Content-container"
                style={{
                  width: "100%",
                  flex: "1",
                  // overflowX:"hidden"
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
                  <Route
                    path="/checkout"
                    element={<Checkout></Checkout>}
                  ></Route>
                </Routes>
                <Footer />
              </main>
            </div>
          </CartProvider>
        </MenuProvider>
      </UserProvider>
    </MUIThemeProvider>
  );
}
export default App;
