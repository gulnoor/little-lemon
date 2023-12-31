import { Link, useNavigate } from "react-router-dom";
import styles from "./TopNav.module.css";

const TopNav = ({ names }) => {

  const navigate = useNavigate();

  const buttonStyle = {
    
    padding: "1rem 3.5rem",
    fontSize: "1.5rem",
    minHeight: window.screen.width > 600 ? "70px" : "52px",
    flex: "1",
    whiteSpace: "nowrap",
  };
  return (
    <div className={styles.TopNav}>
      {names.map((name) => {
        return (
          <Link className={styles.navbtn} to={`/menu/${name}`}  key={name} style={buttonStyle}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};
export default TopNav;
