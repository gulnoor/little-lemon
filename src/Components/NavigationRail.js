import "./NavigationRail.css";
const NavigationRail = ({ toggle, theme }) => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <span className="material-symbols-outlined">home</span>
            Home
          </li>
          <li>
            <span className="material-symbols-outlined">restaurant_menu</span>
            Menu
          </li>
          <li>
            <span className="material-symbols-outlined">table_restaurant</span>
            Reservation
          </li>
          <li onClick={toggle}>
            {theme === "light" ? (
              <span className="material-symbols-outlined">dark_mode</span>
            ) : (
              <span className="material-symbols-outlined">light_mode</span>
            )}
            Toggle
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavigationRail;
