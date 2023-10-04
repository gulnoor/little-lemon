import { Link } from "react-router-dom";
import "./NavigationRail.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
const NavigationRail = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const linkStyle = {
    display: "flex",
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
              <span className="material-symbols-outlined">home</span>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" style={linkStyle}>
              <span className="material-symbols-outlined">restaurant_menu</span>
              Menu
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/reservation">
              <span className="material-symbols-outlined">
                table_restaurant
              </span>
              Reservation
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="cart">
              <span className="material-symbols-outlined">shopping_cart</span>
              Cart
            </Link>
          </li>
          {user ? (
            <li>
              <Link style={linkStyle} to="/userprofile">
                <img style={{
                  borderRadius:"100vh",
                  width:"90%",
                  marginBottom:"8px"
                }} alt="user profile" src={user.photoURL}></img>
                {user.displayName}
              </Link>
            </li>
          ) : (
            <li>
              <Link style={linkStyle} to="/sign-in">
                <span className="material-symbols-outlined">person</span>
                Sign In
              </Link>
            </li>
          )}

          <li>
            <Link style={linkStyle} onClick={toggleTheme}>
              {theme === "light" ? (
                <span className="material-symbols-outlined">dark_mode</span>
              ) : (
                <span className="material-symbols-outlined">light_mode</span>
              )}
              {theme === "light" ? "Night Mode" : "Light Mode"}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavigationRail;
