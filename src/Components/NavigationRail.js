import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./NavigationRail.css";
const NavigationRail = ({ toggle }) => {
  const colors = useContext(ThemeContext);

  return (
    <>
      <nav style={{ background: colors.secondary }}>
        <ul>
          <li>
            <span class="material-symbols-outlined">home</span>
            <a href="">Home</a>
          </li>
          <li>
            <span class="material-symbols-outlined">restaurant_menu</span>
            <a href="">Menu</a>
          </li>
          <li>
            <span class="material-symbols-outlined">table_restaurant</span>
            <a href="">Reservation</a>
          </li>
          <li>
            <span class="material-symbols-outlined">dark_mode</span>
            <button onClick={toggle}>Toggle Theme</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavigationRail;
