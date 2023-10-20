import NavigationRail from "./Components/NavigationRail";
import { createContext, useContext, useMemo } from "react";
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
import { ThemeProvider, createTheme } from "@mui/material";
import NavBarTop from "./Components/NavBarTop";
import { Provider } from "react-redux";
import store from "./reduxStore/store"

export const themeContext = createContext();

function App() {
  const { theme } = useContext(ThemeContext);
  const MUItheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: {
            main: theme === "light" ? "#705d00" : "#e9c400",
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            main: theme === "light" ? "#675e40" : "#d2c6a1",
          },
          error: {
            main: theme === "light" ? "#ba1a1a" : "#ffb4ab",
          },
        },
        components: {
          MuiButton: {
            variants: [
              {
                props: {
                  variant: "contained",
                },
                style: {
                  borderRadius: "100vh",
                  minHeight: "48px",
                },
              },
              {
                props: {
                  variant: "outlined",
                },
                style: {
                  borderRadius: "100vh",
                  minHeight: "48px",
                },
              },
            ],
          },
        },
      }),
    [theme]
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={MUItheme}>
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
                    overflow: "clip",
                  }}
                >
                  <NavBarTop></NavBarTop>
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
      </ThemeProvider>
    </Provider>
  );
}
export default App;
