import { Link } from "react-router-dom";
import "./NavigationRail.css";
const NavigationRail = ({ toggle, theme }) => {
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
    textDecoration: "none"

  }
  return (
    <>
      <nav className="Nav">
        <ul>
          <li>
            <Link
              style={linkStyle}
              to="/">
              <span className="material-symbols-outlined">home</span>
              Home
            </Link>
          </li>
          <li>
            <Link style={linkStyle}>
              <span className="material-symbols-outlined">restaurant_menu</span>
              Menu
            </Link>
          </li>
          <li>
            <Link
              style={linkStyle}
              to="/reservation">
              <span className="material-symbols-outlined">table_restaurant</span>
              Reservation
            </Link>
          </li>
          <li>
            <Link
              style={linkStyle}
              to="#about-us">
              <span className="material-symbols-outlined">table_restaurant</span>
              About Us
            </Link>
          </li>
          <li >
            <Link
              style={linkStyle}
              onClick={toggle}>
              {theme === "light"
                ? <span className="material-symbols-outlined">dark_mode</span>
                : <span className="material-symbols-outlined">light_mode</span>
              }
              Toggle
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavigationRail;
