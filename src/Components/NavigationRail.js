import { Link } from "react-router-dom";
import "./NavigationRail.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import Cart from "./Cart";
import home from "../assets/home_FILL0_wght400_GRAD0_opsz24 (1).svg";
import menu from "../assets/restaurant_menu_FILL0_wght400_GRAD0_opsz24.svg";
import table from "../assets/table_restaurant_FILL0_wght400_GRAD0_opsz24.svg";
import accounticon from "../assets/account_circle_FILL0_wght400_GRAD0_opsz24.svg";
import cart from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";
import styled from "@emotion/styled";
import darkmode from "../assets/dark_mode_FILL0_wght400_GRAD0_opsz24.svg";
import lightmode from "../assets/light_mode_FILL0_wght400_GRAD0_opsz24.svg";

export const StyledIcon = styled.img`
  filter: ${(props) =>
    props.theme === "dark"
      ? "invert(80%) sepia(9%) saturate(214%) hue-rotate(0deg) brightness(103%) contrast(81%)"
      : "invert(9%) sepia(19%) saturate(404%) hue-rotate(5deg) brightness(97%) contrast(97%)"};
`;

const NavigationRail = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const [cartStyle, setCartStyle] = useState({ marginLeft: "-250px" });

  const handleCartClick = () => {
    setCartStyle((prev) => {
      return {
        ...prev,
        marginLeft: prev.marginLeft === "-250px" ? "100px" : "-250px",
      };
    });
    // document.querySelector("main").style.width = "calc(100% - 300px)"
  };

  const linkStyle = {
    display: "flex",
    // flex:"1",
    padding: "0.8rem",
    flexDirection: "column",
    borderRadius: "16px",
    margin: "8px 0",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "48px",
    minHeight: "48px",
    transition: "0.2s",
    cursor: "pointer",
    userSelect: "none",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "0.8rem",
  };
  return (
    <>
      <nav className="Nav">
        <ul>
          <li>
            <Link style={linkStyle} to="/">
              <StyledIcon theme={theme} src={home}></StyledIcon>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" style={linkStyle}>
              <StyledIcon theme={theme} src={menu}></StyledIcon>
              Menu
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/reservation">
              <StyledIcon theme={theme} src={table}></StyledIcon>
              Reservation
            </Link>
          </li>
          <li>
            <div onClick={handleCartClick} style={linkStyle} to="cart">
              <StyledIcon theme={theme} src={cart}></StyledIcon>
              Cart
            </div>
          </li>
          {user ? (
            <li className="signin-navrail">
              <Link
                onClick={handleCartClick}
                style={linkStyle}
                to="/userprofile"
              >
                <StyledIcon
                  theme={theme}
                  style={{
                    borderRadius: "100vh",
                    width: "90%",
                    marginBottom: "8px",
                  }}
                  alt="user profile"
                  src={user.photoURL}
                ></StyledIcon>
                {user.displayName}
              </Link>
            </li>
          ) : (
            <li className="user-navrail">
              <Link style={linkStyle} to="/sign-in">
                <StyledIcon theme={theme} src={accounticon}></StyledIcon>
                Sign In
              </Link>
            </li>
          )}

          <li className="theme-navrail">
            <Link style={linkStyle} onClick={toggleTheme}>
              {theme === "light" ? (
                <StyledIcon theme={theme} src={darkmode}></StyledIcon>
              ) : (
                <StyledIcon theme={theme} src={lightmode}></StyledIcon>
              )}
              {theme === "light" ? "Night Mode" : "Light Mode"}
            </Link>
          </li>
        </ul>
        <Cart style={cartStyle} />
      </nav>
    </>
  );
};
export default NavigationRail;
