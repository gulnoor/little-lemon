import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./NavigationRail.css"
const NavigationRail = ({toggle}) => {
  const colors = useContext(ThemeContext)


  return (
    <>
      <nav style={{background:colors.secondary}}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
          <li>
            <button onClick={toggle}>Toggle Theme</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavigationRail;
